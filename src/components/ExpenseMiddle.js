import React from 'react';
import styled from 'styled-components';
import SelectComp from './Select';

const ExpenseMiddleBlock = styled.div`
  padding: 48px 22px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  text-align: right;

  .categoryName {
    margin-right: 20px;
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
  }
`;

function ExpenseMiddle() {
  const selectGroup = ['전체', '식료품', '교통', '식사', '생활', '의료'];
  return (
    <ExpenseMiddleBlock>
      <div className="categoryName">카테고리별로 보기:</div>
      <SelectComp selectGroup={selectGroup} />
    </ExpenseMiddleBlock>
  );
}

export default ExpenseMiddle;
