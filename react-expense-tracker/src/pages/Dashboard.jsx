import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function DashboardLoader() {
    const userName = fetchData("userName");
    return { userName };
}

const Dashboard = () => {
    const {userName} = useLoaderData()
    
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default Dashboard;