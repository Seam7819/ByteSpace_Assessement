import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { HomePage } from "../features/home/HomePage";

export default function App() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}
