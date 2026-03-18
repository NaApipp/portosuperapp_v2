import { projectData } from "@/app/lib/projectData";

/**
 * Searches for relevant project context based on the user query.
 */
export async function getContext(query: string): Promise<string> {
  if (!query) return "";

  const lowerQuery = query.toLowerCase();

  // Keyword-based filtering
  const relevantProjects = projectData.filter((p) => {
    return (
      p.project_name.toLowerCase().includes(lowerQuery) ||
      p.project_desc.toLowerCase().includes(lowerQuery) ||
      p.tech_stack?.toLowerCase().includes(lowerQuery) ||
      p.project_type.toLowerCase().includes(lowerQuery)
    );
  });

  if (relevantProjects.length === 0) {
    // If no specific project matches, return generic info
    return "Nabil Arif adalah seorang developer ala-ala dengan minat di bidang Website Development dan Wordpress. Dia juga seorang pelajar SMK kelas 12 Jurusan Teknik Komputer dan Informatika. Contact instagram: @n_apipppp, linkedin: nabilariftriyanto, github: NaApipp, email: nabilariftriyanto@gmail.com ";
  }

  // Format context for injection
  const context = relevantProjects
    .map((p) => {
      const links = p.links.map((l) => `${l.label}: ${l.href}`).join(", ");
      return `Project: ${p.project_name}\nDescription: ${p.project_desc}\nTech Stack: ${p.tech_stack}\nType: ${p.project_type}\nLinks: ${links}\n`;
    })
    .join("\n---\n\n");

  return `Berikut adalah beberapa project yang relevan:\n\n${context}`;
}
