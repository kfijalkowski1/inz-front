import {createBrowserRouter} from 'react-router-dom';
import Layout from "./componenets/layout/Layout.tsx";
import Posts from "./componenets/posts/Posts.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "",
				element: <Posts/>,
			}
		]
	}
]);

export default router;
