import { lazy, Suspense } from "react";
import Authorization from "./Authorization";
import Layout from '../layout'
const modules = import.meta.glob("@/views/**/*.jsx")
export default [
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        index: true,
        element: LazyLoad("home"),
      },
      {
        path: "/about",
        element: <Authorization>{LazyLoad("about")}</Authorization>,
        children:[
          {
            index: true,
            element: LazyLoad("about/about1"),
          },
          {
            path: "about2",
            element: LazyLoad("about/about2"),
          },
        ]
      },
    ]
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
