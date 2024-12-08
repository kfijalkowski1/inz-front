import {createBrowserRouter} from 'react-router-dom';
import Layout from "./componenets/layout/Layout.tsx";
import Posts from "./componenets/posts/Posts.tsx";
import AddPost from "./componenets/posts/addPost/AddPost.tsx";
import LoginComponent from "./componenets/register_login/LoginComponent.tsx";
import Home from "./componenets/home/HomePage.tsx";
import {LogoutComponent} from "./componenets/register_login/LogoutComponent.tsx";
import Post from "./componenets/posts/Post.tsx";
import EditPost from "./componenets/posts/EditPost.tsx";
import MyPage from "./componenets/userPage/MyPage.tsx";
import {AdminOverview} from "./componenets/estateAdmin/adminOverview.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "",
				element: <Home/>,
			},
			{
				path: "posts",
				element: <Posts/>,
			},
			{
				path: "posts/add",
				element: <AddPost/>,
			},
			{
				path: "posts/:postId",
				element: <Post/>,
			},
			{
				path: "posts/:postId/edit",
				element: <EditPost/>,
			},
			{
				path: "login",
				element: <LoginComponent/>,
			},
			{
				path: "logout",
				element: <LogoutComponent/>,
			},
			{
				path: "my_page",
				element: <MyPage/>,
			},
			{
				path: "admin",
				element: <AdminOverview/>,
			}
		]
	},
	{
		path: "*",
		element: <Layout/>,
	}
]);

export default router;
