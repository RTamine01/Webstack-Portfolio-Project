export const waait = () => new Promise(res => setTimeout(res, Math.random() * 900));



const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${Math.random() * 360} 65% 50%`;
};

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
};

export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    };
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
};

export const createExpense = ({ name, amount, budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    };
    const existingExpenses = fetchData("expenses") ?? [];
    localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]));
};


export const calculateSpentBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => 
        expense.budgetId === budgetId ? acc + expense.amount : acc, 0);
    return budgetSpent;
};

export const formatPercentage = (amnt) => {
    return amnt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    })
}
export const formatCurrency = (amnt) => {
    return amnt.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
};

