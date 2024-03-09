import { auth } from "@/lib/auth";
import { PAGES } from "@/pages";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session || !session.user) {
    redirect(PAGES.auth.signin.url);
  }

  return <>{children}</>;
}
