const GITHUB_API = "https://api.github.com";

export async function getGitHubStats() {
  try {
    const username = process.env.GITHUB_USERNAME?.trim();
    const token = process.env.GITHUB_TOKEN?.trim();

    if (!username) {
      console.warn("GITHUB_USERNAME is missing from .env");
      return { public_repos: 0, followers: 0 };
    }

    const headers: HeadersInit = {
      "User-Agent": "nextjs-portfolio",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(
      `${GITHUB_API}/users/${username}`,
      {
        headers,
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API Error (Stats): ${res.status} ${res.statusText}`);
      // If unauthorized, maybe the token is wrong. Try to use it as a hint for the user.
      if (res.status === 401) console.error("Verify your GITHUB_TOKEN permissions and validity.");
      return { public_repos: 0, followers: 0 };
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { public_repos: 0, followers: 0 };
  }
}

export async function getGitHubRepos() {
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

    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100`,
      {
        headers,
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API Error (Repos): ${res.status} ${res.statusText}`);
      return [];
    }
    return res.json();
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
      return { totalContributions: 0, weeks: [] };
    }

    const query = `
      query ($login: String!) {
        user(login: $login) {
          contributionsCollection {
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
      return { totalContributions: 0, weeks: [] };
    }

    if (!json.data?.user) {
      console.warn("GitHub user data not found in GraphQL response.");
      return { totalContributions: 0, weeks: [] };
    }

    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return { totalContributions: 0, weeks: [] };
  }
}
