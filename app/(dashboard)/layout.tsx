// app/(protected)/layout.tsx
import { AuthProvider } from "./authProvider";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
