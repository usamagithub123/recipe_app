import{
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "./App";
import RecipeDetails from "./components/RecipeDetails.js/RecipeDetails";
  const router=createBrowserRouter([
    {
      path:"/",
      element: <App/>,
    },
    {
      path:"recipe/:id",
      element:<RecipeDetails/>
    }
  ]);
  const MyRoutes=()=><RouterProvider router={router}/>

  export default MyRoutes