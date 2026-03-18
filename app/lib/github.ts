const GITHUB_API = "https://api.github.com";

export async function getGitHubStats() {
  try {
    if (!process.env.GITHUB_USERNAME) {
      console.warn("GITHUB_USERNAME is not defined");
      return { public_repos: 0, followers: 0 };
    }

    const res = await fetch(
      `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) return { public_repos: 0, followers: 0 };
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { public_repos: 0, followers: 0 };
  }
}

export async function getGitHubRepos() {
  try {
    if (!process.env.GITHUB_USERNAME) return [];

    const res = await fetch(
      `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getGitHubContributions() {
  try {
    if (!process.env.GITHUB_USERNAME || !process.env.GITHUB_TOKEN) {
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
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: process.env.GITHUB_USERNAME },
      }),
      next: { revalidate: 300 },
    });

    const json = await res.json();
    
    if (json.errors) {
      console.error("GitHub GraphQL Errors:", json.errors);
      return { totalContributions: 0, weeks: [] };
    }

    if (!json.data?.user) {
      console.warn("GitHub user data not found in GraphQL response");
      return { totalContributions: 0, weeks: [] };
    }

    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return { totalContributions: 0, weeks: [] };
  }
}
