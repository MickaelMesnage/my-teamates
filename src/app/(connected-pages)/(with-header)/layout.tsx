import { Header } from "@/src/components/organisms/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header className="h-[4rem]" />
      <div className="w-full h-[calc(100%-4rem)]">{children}</div>
    </div>
  );
}
