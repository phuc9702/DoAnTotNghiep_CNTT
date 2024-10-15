import { Children } from "react"
import { Homepage, News, PublicLayout, RentProperty, SoldProperty } from "./pages/publics"
import { pathnames } from "./lib/pathname"
import App from "./App"

const routes = [
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: pathnames.publics.layout,
                element:<PublicLayout/>,
                children: [
                    {
                        path: pathnames.publics.homepage,
                        element: <Homepage/>,
                    },
                    {
                        path: pathnames.publics.news,
                        element: <News/>,
                    },
                    {
                        path: pathnames.publics.rentProperty,
                        element: <RentProperty/>,
                    },
                    {
                        path: pathnames.publics.soldProperty,
                        element: <SoldProperty/>,
                    },
                ],
            },
        ],
    },
]

export default routes