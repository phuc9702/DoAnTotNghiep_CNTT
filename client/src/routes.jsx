import { Children } from "react";
import {
  Homepage,
  News,
  PublicLayout,
  RentProperty,
  SoldProperty,
} from "./pages/publics";
import { pathnames } from "./lib/pathname";
import App from "./App";
import {
  CreatePost,
  Deposit,
  General,
  ManagePost,
  ManagePostDraf,
  Personal,
  UserLayout,
} from "./pages/users";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: pathnames.publics.layout,
        element: <PublicLayout />,
        children: [
          {
            path: pathnames.publics.homepage,
            element: <Homepage />,
          },
          {
            path: pathnames.publics.news,
            element: <News />,
          },
          {
            path: pathnames.publics.rentProperty,
            element: <RentProperty />,
          },
          {
            path: pathnames.publics.soldProperty,
            element: <SoldProperty />,
          },
        ],
      },
      {
        path: pathnames.users.layout,
        element: <UserLayout />,
        children: [
          {
            path: pathnames.users.general,
            element: <General />,
          },
          {
            path: pathnames.users.createPost,
            element: <CreatePost />,
          },
          {
            path: pathnames.users.managePost,
            element: <ManagePost />,
          },
          {
            path: pathnames.users.manageDraft,
            element: <ManagePostDraf />,
          },
          {
            path: pathnames.users.personal,
            element: <Personal />,
          },
          {
            path: pathnames.users.manageBalance,
            element: <manageBalance />,
          },
          {
            path: pathnames.users.deposit,
            element: <Deposit />,
          },
        ],
      },
    ],
  },
];

export default routes;
