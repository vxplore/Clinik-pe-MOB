import MainHeader from "./MainHeader";
import BackHeader from "./BackHeader";
interface HeaderProps {
  variant: "main" | "none" | "back";
  title?: string;
}
export default function Header({ variant, title }: HeaderProps) {
  if (variant === "none") {
    return null;
  }
  return (
    <header className="app-header px-4 py-2 border-b bg-white">
      {variant === "main" && <MainHeader title={title} />}
      {variant === "back" && title && <BackHeader title={title} />}
    </header>
  );
}
