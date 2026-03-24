import ClientView from "./ClientView";

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return <ClientView />
}