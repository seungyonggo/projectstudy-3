import Layout from "layout";
import Upcoming from "page/upcoming";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <div>:)</div>,
			},
			{
				path: "upcoming",
				element: <Upcoming />,
			},
		],
	},
]);

export default router;
