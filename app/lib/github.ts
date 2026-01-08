const GITHUB_API = "https://api.github.com";

export async function getGitHubStats() {
  const res = await fetch(
    `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 300 },
    }
  );

  return res.json();
}

export async function getGitHubRepos() {
  const res = await fetch(
    `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 300 },
    }
  );

  return res.json();
}

export async function getGitHubContributions() {
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
  return json.data.user.contributionsCollection.contributionCalendar;
}
