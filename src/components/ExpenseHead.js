import React from 'react';
import '../assets/styles/style.scss';
import styled from 'styled-components';
import { useExpenseState } from '../ExtenseContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 9px;
    font-size: 20px;
    font-weight: 500;
  }
  .total_expense {
    font-size: 20px;
    color: #212529;

    span {
      color: #c92a2a;
    }
  }
`;

const today = new Date();
const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function ExpenseHead() {
  const expense = useExpenseState();
  const totalAmount = expense.reduce((prev, current) => {
    return prev + current.amount;
  }, 0);

 
  return (
    <TodoHeadBlock>
      <h1>오늘의 지출</h1>
      <div className="day">{dateString}</div>
      <div className="total_expense">
        총 지출: <span>{totalAmount}</span> 원
      </div>
    </TodoHeadBlock>
  );
}

export default ExpenseHead;
