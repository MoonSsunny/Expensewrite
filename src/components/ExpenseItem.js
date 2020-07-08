import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from './Button';
import { useExpenseDispatch } from '../ExtenseContext';

const ExpenseItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  overflow-y: auto;
`;

const Title = styled.div`
  width: 50px;
  height: 40px;
  font-size: 15px;
  font-weight:600;
  color: #343a40;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  line-height: 100%;
  background: #faa2c1;
  border-radius: 14px;

  ${props =>
    props.category === '식료품' &&
    css`
      width: 70px;
      background: #fa5252;
    `}
  ${props =>
    props.category === '교통' &&
    css`
      background: #91a7ff;
    `}
  ${props =>
    props.category === '생활' &&
    css`
      background: #099268;
    `}
  ${props =>
    props.category === '의료' &&
    css`
      background: #f08c00;
    `}
`;

const Text = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 20px;
`;
const Amount = styled.div`
  flex: 1;
  margin-right: 10px;
  color: red;
  font-size: 20px;
  text-align: right;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    color: #343a40;
  }
`;
const Dialog = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.55);
`;
const DialogBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
  }
`;
const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

function ExpenseItem({
  id,
  category,
  title,
  amount,
  text,
  cancelText,
  confirmText,
}) {
  const dispatch = useExpenseDispatch();
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <>
      {open && (
        <Dialog>
          <DialogBlock>
            <h3>{title}</h3>
            <ButtonGroup>
              <Button btnColor="blue" onClick={onToggle}>
                {cancelText}
              </Button>
              <Button btnColor="sky" onClick={onRemove}>
                {confirmText}
              </Button>
            </ButtonGroup>
          </DialogBlock>
        </Dialog>
      )}

      <ExpenseItemBlock>
        <Title category={category}>{category}</Title>
        <Text>{text}</Text>
        <Amount>- {amount}원</Amount>
        <Edit>
          <MdEdit size="25px" />
        </Edit>
        <Edit>
          <MdDelete size="25px" onClick={onToggle} open={open} />
        </Edit>
      </ExpenseItemBlock>
    </>
  );
}

ExpenseItem.defaultProps = {
  title: '정말로 삭제하시겠습니까?',
  cancelText: '취소',
  confirmText: '확인',
};

export default ExpenseItem;
