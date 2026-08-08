const GITHUB_API = "https://api.github.com";

export async function getGitHubStats() {
  try {
    const username = process.env.GITHUB_USERNAME?.trim();
    const token = process.env.GITHUB_TOKEN?.trim();

    if (!username) {
      console.warn("GITHUB_USERNAME is missing from .env");
      return { public_repos: 0, followers: 0, total_repos: 0 };
    }

    const headers: HeadersInit = {
      "User-Agent": "nextjs-portfolio",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Pakai /user (bukan /users/{username}) kalau ada token,
    // supaya bisa lihat data diri sendiri termasuk private repo count.
    // Fallback ke /users/{username} kalau nggak ada token (data publik aja).
    const endpoint = token ? `${GITHUB_API}/user` : `${GITHUB_API}/users/${username}`;

    const res = await fetch(endpoint, {
      headers,
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error(`GitHub API Error (Stats): ${res.status} ${res.statusText}`);
      if (res.status === 401) console.error("Verify your GITHUB_TOKEN permissions and validity.");
      return { public_repos: 0, followers: 0, total_repos: 0 };
    }

    const data = await res.json();

    // total_repos: gabungan public + private (cuma keluar kalau pakai /user + token)
    // followers tetap publik (memang selalu publik di GitHub)
    return {
      public_repos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      total_repos: token ? (data.total_private_repos ?? 0) + (data.public_repos ?? 0) : (data.public_repos ?? 0),
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { public_repos: 0, followers: 0, total_repos: 0 };
  }
}

// Return type khusus buat data yang AMAN dikonsumsi di UI publik
// (nama & url repo private SENGAJA tidak diikutkan)
type SafeRepoSummary = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  private: boolean;
};

export async function getGitHubRepos(): Promise<SafeRepoSummary[]> {
  try {
    const username = process.env.GITHUB_USERNAME?.trim();
    const token = process.env.GITHUB_TOKEN?.trim();

    if (!username) return [];

    const headers: HeadersInit = {
      "User-Agent": "nextjs-portfolio",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // Kalau ada token, pakai /user/repos supaya ikut kehitung private repo-nya.
    // Tapi hasil private repo akan DIFILTER sebelum dikembalikan (lihat di bawah).
    const endpoint = token
      ? `${GITHUB_API}/user/repos?per_page=100&visibility=all&affiliation=owner`
      : `${GITHUB_API}/users/${username}/repos?per_page=100`;

    const res = await fetch(endpoint, {
      headers,
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error(`GitHub API Error (Repos): ${res.status} ${res.statusText}`);
      return [];
    }

    const repos = await res.json();

    // PENTING: jangan pernah kirim nama/url repo PRIVATE ke client.
    // Cuma tampilkan repo publik secara detail. Kalau mau tau JUMLAH repo
    // private, pakai angka dari getGitHubStats().total_repos, bukan dari sini.
    return repos
      .filter((repo: any) => repo.private === false)
      .map((repo: any) => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        private: repo.private,
      }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getGitHubContributions() {
  try {
    const username = process.env.GITHUB_USERNAME?.trim();
    const token = process.env.GITHUB_TOKEN?.trim();

    if (!username || !token) {
      console.warn("GITHUB_USERNAME or GITHUB_TOKEN is missing for GraphQL");
      return {
        totalContributions: 0,
        totalCommits: 0,
        privateContributions: 0,
        weeks: [],
      };
    }

    const query = `
      query ($login: String!) {
        user(login: $login) {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "nextjs-portfolio",
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
      next: { revalidate: 300 },
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GitHub GraphQL Errors:", json.errors);
      return {
        totalContributions: 0,
        totalCommits: 0,
        privateContributions: 0,
        weeks: [],
      };
    }

    if (!json.data?.user) {
      console.warn("GitHub user data not found in GraphQL response.");
      return {
        totalContributions: 0,
        totalCommits: 0,
        privateContributions: 0,
        weeks: [],
      };
    }

    const cc = json.data.user.contributionsCollection;

    return {
      totalContributions: cc.contributionCalendar.totalContributions,
      totalCommits: cc.totalCommitContributions,
      privateContributions: cc.restrictedContributionsCount,
      weeks: cc.contributionCalendar.weeks,
    };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return {
      totalContributions: 0,
      totalCommits: 0,
      privateContributions: 0,
      weeks: [],
    };
  }
}