import { auth } from "@/lib/auth";
import { PAGES } from "@/pages";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user) {
    redirect(PAGES.home.url);
  }

  return <>{children}</>;
}
