import { calculateSpentBudget, formatCurrency, formatPercentage } from "../helpers";
import { Form, Link } from "react-router-dom";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";

const BudgetItem = ({budget, showDelete = false }) => {
    const {id, name, amount, color} = budget;
    const spent = calculateSpentBudget(id);

    return (
        <div 
            className="budget"
            style={{
            "--accent": color
            }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remains</small>
            </div>
        </div>
    );
};
export default BudgetItem;