import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Dashboard />,
      loader: DashboardLoader,
      errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
