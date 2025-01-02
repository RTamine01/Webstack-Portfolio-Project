import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";

export async function LogoutAction() {
    deleteItem({ key: "userName" });
    x
    return redirect("/");
}