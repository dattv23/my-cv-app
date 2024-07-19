import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "@/routes/root";
import routes from "@/config/routes";
import HomePage from "@/containers/HomePage";
import AboutPage from "@/containers/AboutPage";
import ResumePage from "@/containers/ResumePage";
import ProjectPage from "@/containers/ProjectPage";
import ContactPage from "@/containers/ContactPage";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Root />,
    
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.about,
        element: <AboutPage />,
      },
      {
        path: routes.resume,
        element: <ResumePage />,
      },
      {
        path: routes.projects,
        element: <ProjectPage />,
      },
      {
        path: routes.contact,
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
