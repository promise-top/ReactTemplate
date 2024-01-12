import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Authorization from "./Authorization";
const modules = import.meta.glob("@/views/**/*.jsx")
export default [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/home",
    element: LazyLoad("home"),
  },
  {
    path: "/about",
    element: <Authorization>{LazyLoad("about")}</Authorization>,
  },
  { path: "*", element: LazyLoad("notFound") },
];

function LazyLoad(path) {
  const Component = lazy(modules[`/src/views/${path}/index.jsx`]);
  return (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  );
}
