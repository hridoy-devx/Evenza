import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./RootLayout";
import AboutUs from "./Components/AboutUs";
import EventSchedule from "./Components/EventSchedule";
import LatestBlog from "./Components/LatestBlog";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "schedule", Component: EventSchedule },
      { path: "blog", Component: LatestBlog },
      { path: "contact", Component: Contact },
    ],
  },
]);