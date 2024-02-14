import {
  DeleteButton,
  TrashButton,
  Sidebar1,
  PasswordStrengthExample,
  ScrollReveal,
} from "./components";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";

const routes = [
  {
    name: "DeleteButton",
    path: "/buttons/delete-button",
    element: <DeleteButton />,
  },
  {
    name: "TrashButton",
    path: "/buttons/trash-button",
    element: <TrashButton />,
  },
  {
    name: "Sidebar1",
    path: "/sidebars/sidebar-1",
    element: <Sidebar1 />,
  },
  {
    name: "PasswordStrength",
    path: "/controls/password-strength",
    element: <PasswordStrengthExample />,
  },
  {
    name: "ScrollReveal",
    path: "/gsap/scroll-reveal",
    element: <ScrollReveal />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app">
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
