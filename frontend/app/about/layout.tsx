import AppBar from "../../shared/appBar";
import Bottom from "../../shared/bottomBar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <AppBar />
      <div className="col-span-5 border-l p-3">{children}</div>
      <Bottom />
    </div>
  );
}
