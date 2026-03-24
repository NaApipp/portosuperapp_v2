import AppsAiPage from "./ClientView";

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apps AI",
};

export default function page() {
  return <AppsAiPage />
}