import React, { useReducer, useContext, useRef } from 'react';

const initialExpense = [
  {
    id: 1,
    text: '용개반점',
    category: '식사',
    amount: 7000,
  },
  {
    id: 2,
    text: '양배추',
    category: '식료품',
    amount: 5000,
  },
  {
    id: 3,
    text: '택시비',
    category: '교통',
    amount: 20000,
  },
  {
    id: 4,
    text: '관리비',
    category: '생활',
    amount: 100000,
  },
  {
    id: 5,
    text: '병원비',
    category: '의료',
    amount: 9000,
  },
];

const ExpenseStateContext = React.createContext();
const ExpenseDispatchContext = React.createContext();
const ExpenseNextIdContext = React.createContext();

function expenseReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.expense);
    case 'REMOVE':
      return state.filter(expense => expense.id !== action.id);
    default:
      throw new Error('Unhanled action');
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialExpense);
  const nextId = useRef(6);
  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        <ExpenseNextIdContext.Provider value={nextId}>
          {children}
        </ExpenseNextIdContext.Provider>
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
}

export function useExpenseState() {
  return useContext(ExpenseStateContext);
}

export function useExpenseDispatch() {
  return useContext(ExpenseDispatchContext);
}

export function useExpenseNextId() {
  return useContext(ExpenseNextIdContext);
}
