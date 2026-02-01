// app/(protected)/layout.tsx
import { AuthProvider } from "./authProvider";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'SuperApps Dashboard',
  description: 'Access Dashboard SuperApps (Private)',
}


export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
