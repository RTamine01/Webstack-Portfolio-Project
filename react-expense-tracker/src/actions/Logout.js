import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function LogoutAction() {
    deleteItem({ key: "userName" });
    deleteItem({ key: "budgets" });
    deleteItem({ key: "expenses" });
    toast.success("User deleted successfully");
    return redirect("/");
}