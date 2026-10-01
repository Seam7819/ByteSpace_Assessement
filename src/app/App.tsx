import { Route, Routes } from "react-router";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AuthPage } from "../features/auth/AuthPage";
import { CourseDetailPage } from "../features/home/CourseDetailPage";
import { CreatorProfilePage } from "../features/home/CreatorProfilePage";
import { HomePage } from "../features/home/HomePage";
import { NotFoundPage } from "../features/not-found/NotFoundPage";
import { SearchPage } from "../features/search/SearchPage";

function HomeRoute() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}

function NotFoundRoute() {
  return (
    <>
      <SiteHeader />
      <NotFoundPage />
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route
        path="/search"
        element={
          <>
            <SiteHeader />
            <SearchPage />
            <SiteFooter />
          </>
        }
      />
      <Route path="/course/:slug" element={<CourseDetailPage />} />
      <Route path="/creator/:slug" element={<CreatorProfilePage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="*" element={<NotFoundRoute />} />
    </Routes>
  );
}
