import Feedback from "../pages/Feedback";
import HomeData from "../pages/HomeData";
import Project from "../pages/Project";
import Technology from "../pages/Technology";
import Contact from "../pages/Contact";
import ExistingProjects from "../pages/ExistingProjects";

export const PrivateRoutes = [
  {
    pathName: "/home",
    element: <HomeData />,
  },
  {
    pathName: "/projects",
    element: <Project />,
  },
  {
    pathName: "/feedback",
    element: <Feedback />,
  },

  {
    pathName: "/technology",
    element: <Technology />,
  },
  {
    pathName: "/contact",
    element: <Contact />,
  },
  {
    pathName: "/existProject/:projectID",
    element: <ExistingProjects />,
  },
];
