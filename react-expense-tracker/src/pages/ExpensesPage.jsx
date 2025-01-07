import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Table from "../components/Table";

export function expensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
}

const ExpensesPage = () => {
    const { expenses } = useLoaderData()
  return (
    <div className="grid-lg">
    <h1>All expenses</h1>
    {
        expenses && expenses.length > 0
        ? (
            <div className="grid-md">
                <h2>Recent expenses <small>({expenses.length} total)</small></h2>
                <Table expenses={expenses} />
            </div>
        ) : <p>Nothing to show</p>
    }
</div>
  )
}

export default ExpensesPage;