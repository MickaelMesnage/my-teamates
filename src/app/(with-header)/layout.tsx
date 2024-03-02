import { Shell } from "@/components/atoms/Shell";
import { Header } from "@/components/organisms/Header/Header";

export default function RootLayout({
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
