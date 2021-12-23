import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilter] = useState("2020");
  const filterChangedHandler = (year) => {
    setFilter(year);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        {/*The && can be used to return what's next if the stattement is true.
         {filteredExpense.length === 0  && <p>No expenses found.</p>}  */
        }
        <ExpensesList items={filteredExpense} />
        
      </Card>
    </div>
  );
};

export default Expenses;
