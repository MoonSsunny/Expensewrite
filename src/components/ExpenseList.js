import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';
import { useExpenseState } from '../ExtenseContext';

const ExpenseListBlock = styled.div`
  flex: 1;
  padding: 20px 20px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function ExpenseList() {
  const expenses = useExpenseState();

  return (
    <ExpenseListBlock>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          text={expense.text}
          category={expense.category}
          amount={expense.amount}
        />
      ))}
    </ExpenseListBlock>
  );
}

export default ExpenseList;
