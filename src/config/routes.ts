type Routes = {
  [key: string]: string;
  home: string;
  about: string;
  resume: string;
  projects: string;
  contact: string;
};

const routes: Routes = {
  home: "/",
  about: "/about",
  resume: "/resume",
  projects: "/projects",
  contact: "/contact",
} as const;

export default routes;
