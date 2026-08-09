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
    // mengutamakan owned_private_repos (repo milik sendiri) sebelum total_private_repos
    return {
      public_repos: data.public_repos ?? 0,
      followers: data.followers ?? 0,
      total_repos: token 
        ? ((data.owned_private_repos ?? data.total_private_repos ?? 0) + (data.public_repos ?? 0)) 
        : (data.public_repos ?? 0),
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

    let repos: any[] = [];
    let page = 1;
    const perPage = 100;
    let hasNextPage = true;

    while (hasNextPage) {
      const endpoint = token
        ? `${GITHUB_API}/user/repos?per_page=${perPage}&page=${page}&visibility=all&affiliation=owner`
        : `${GITHUB_API}/users/${username}/repos?per_page=${perPage}&page=${page}`;

      const res = await fetch(endpoint, {
        headers,
        next: { revalidate: 300 },
      });

      if (!res.ok) {
        console.error(`GitHub API Error (Repos) Page ${page}: ${res.status} ${res.statusText}`);
        break;
      }

      const pageRepos = await res.json();
      if (!Array.isArray(pageRepos) || pageRepos.length === 0) {
        hasNextPage = false;
      } else {
        repos = repos.concat(pageRepos);
        if (pageRepos.length < perPage) {
          hasNextPage = false;
        } else {
          page++;
        }
      }
    }

    // Repo private disamarkan agar aman dikirim ke client tetapi datanya (bahasa & bintang) tetap masuk hitungan statistik.
    return repos.map((repo: any) => ({
      name: repo.private ? "Private Repository" : repo.name,
      html_url: repo.private ? "" : repo.html_url,
      description: repo.private ? null : repo.description,
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