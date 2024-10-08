import {
  DeleteButton,
  TrashButton,
  Sidebar1,
  Sidebar2,
  Sidebar3,
  PasswordStrengthExample,
  ScrollReveal,
  ImageAccordionExample,
  Login1,
  Card1,
  Modal1,
  Parallax1,
  Dropdown1Example,
  Widget1Example,
  Carousel1,
  RcSlider,
  Modal2,
  Navbar1,
  AutoSuggestExample,
  Card2Example,
  Sidebar4,
  Carousel2,
  Table1Example,
  Sidebar5,
  Widget2,
  Navbar2,
  Dropdown2Example,
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
  {
    name: "ImageAccordion",
    path: "/accordions/image-accordion",
    element: <ImageAccordionExample />,
  },
  {
    name: "Login1",
    path: "/logins/login-1",
    element: <Login1 />,
  },
  {
    name: "Sidebar2",
    path: "/sidebars/sidebar-2",
    element: <Sidebar2 />,
  },
  {
    name: "Card1",
    path: "/cards/card-1",
    element: <Card1 />,
  },
  {
    name: "Modal1",
    path: "/modals/modal-1",
    element: <Modal1 />,
  },
  {
    name: "Parallax1",
    path: "/parallax/parallax-1",
    element: <Parallax1 />,
  },
  {
    name: "Dropdown1",
    path: "/dropdowns/dropdown-1",
    element: <Dropdown1Example />,
  },
  {
    name: "Widget1",
    path: "/widgets/widget-1",
    element: <Widget1Example />,
  },
  {
    name: "AutoSuggest",
    path: "/controls/auto-suggest",
    element: <AutoSuggestExample />,
  },
  {
    name: "Sidebar3",
    path: "/sidebars/sidebar-3",
    element: <Sidebar3 />,
  },
  {
    name: "Carousel1",
    path: "/carousels/carousel-1",
    element: <Carousel1 />,
  },
  {
    name: "RcSlider",
    path: "/libraries/rc-slider",
    element: <RcSlider />,
  },
  {
    name: "Modal2",
    path: "/modals/modal-2",
    element: <Modal2 />,
  },
  {
    name: "Navbar1",
    path: "/navbars/navbar-1",
    element: <Navbar1 />,
  },
  {
    name: "Card2",
    path: "/cards/card-2",
    element: <Card2Example />,
  },
  {
    name: "Sidebar4",
    path: "/sidebars/sidebar-4",
    element: <Sidebar4 />,
  },
  {
    name: "Carousel2",
    path: "/carousels/carousel-2",
    element: <Carousel2 />,
  },
  {
    name: "Table1",
    path: "/tables/table-1",
    element: <Table1Example />,
  },
  {
    name: "Sidebar5",
    path: "/sidebars/sidebar-5",
    element: <Sidebar5 />,
  },
  {
    name: "Widget2",
    path: "/widgets/widget-2",
    element: <Widget2 />,
  },
  {
    name: "Navbar2",
    path: "/navbars/navbar-2",
    element: <Navbar2 />,
  },
  {
    name: "Dropdown2",
    path: "/dropdowns/dropdown-2",
    element: <Dropdown2Example />,
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
