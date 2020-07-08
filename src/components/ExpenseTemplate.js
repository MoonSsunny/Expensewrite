import React from 'react';
import styled from 'styled-components';

const ExpenseTemplateBlock = styled.div`
  width: 512px;
  height: 728px;
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function ExpenseTemplate({ children }) {
  return <ExpenseTemplateBlock>{children}</ExpenseTemplateBlock>;
}

export default ExpenseTemplate;
