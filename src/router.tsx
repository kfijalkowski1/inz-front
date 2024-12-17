import {createBrowserRouter} from 'react-router-dom';
import Layout from "./componenets/layout/Layout.tsx";
import Posts from "./componenets/posts/Posts.tsx";
import AddPost from "./componenets/posts/addPost/AddPost.tsx";
import LoginComponent from "./componenets/register_login/LoginComponent.tsx";
import {LogoutComponent} from "./componenets/register_login/LogoutComponent.tsx";
import Post from "./componenets/posts/Post.tsx";
import EditPost from "./componenets/posts/EditPost.tsx";
import MyPage from "./componenets/userPage/MyPage.tsx";
import {AdminOverview} from "./componenets/estateAdmin/adminOverview.tsx";
import {AddWorker} from "./componenets/estateAdmin/addWorker.tsx";
import {ViewWorkers} from "./componenets/estateAdmin/viewWorkers.tsx";
import {ViewUsers} from "./componenets/estateAdmin/viewUsers.tsx";
import {ViewRequests} from "./componenets/requests/ViewRequests.tsx";
import AddRequest from "./componenets/requests/addRequest.tsx";
import {ViewRequest} from "./componenets/requests/single/ViewRequest.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
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
			},
			{
				path: "admin/add_worker",
				element: <AddWorker/>
			},
			{
				path: "admin/workers_view",
				element: <ViewWorkers/>
			},
			{
				path: "admin/residents_view",
				element: <ViewUsers/>
			},
			{
				path: "requests",
				element: <ViewRequests/>,
			},
			{
				path: "requests/add",
				element: <AddRequest/>,
			},
			{
				path: "requests/:requestId",
				element: <ViewRequest/>,
			}
		]
	},
	{
		path: "*",
		element: <Layout/>,
	}
]);

export default router;
