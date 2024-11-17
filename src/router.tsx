import {createBrowserRouter} from 'react-router-dom';
import Layout from "./componenets/layout/Layout.tsx";
import Posts from "./componenets/posts/Posts.tsx";
import AddPost from "./componenets/posts/addPost/AddPost.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "",
				element: <Posts/>,
			},
			{
				path: "posts",
				element: <Posts/>,
			},
			{
				path: "posts/add",
				element: <AddPost/>,
			}
		]
	},
	{
		path: "*",
		element: <Layout/>,
	}
]);

export default router;
