import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, DashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { LogoutAction } from "./actions/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Dashboard />,
            loader: DashboardLoader,
            action: dashboardAction,
            errorElement: <Error />
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          loader: expensesLoader,
        },
        {
          path: "logout",
          action: LogoutAction
        }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App;
