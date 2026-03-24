/**
 * Cleans and formats conversation history for the LLM.
 */
export function getHistory(messages: any[], limit: number = 10): any[] {
  if (!messages || !Array.isArray(messages)) return [];

  // Map roles and take the last N messages
  return messages.slice(-limit).map((m) => ({
    role: m.role === "ai" ? "assistant" : m.role,
    content: m.content || "",
  }));
}
