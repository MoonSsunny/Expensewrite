import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import Button from './Button';
import SelectComp from './Select';
import { useExpenseDispatch, useExpenseNextId } from '../ExtenseContext';

const CircleButton = styled.button`
  background: #a5d8ff;
  &:hover {
    background: #1864ab;
  }
  &:active {
    background: #339af0;
  }

  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  font-size: 60px;
  color: white;
  border-radius: 30px;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #1864ab;

      &:hover {
        background: #228be6;
      }

      &:active {
        background: #1971c2;
      }

      transform: rotate(45deg);
    `}
`;

const InsertModal = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.55);
  position: absolute;
`;

const InsertModalForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 15px;
  }

  input {
    width: 100%;
    height: 25px;
    box-sizing: border-box;
  }

  .btn-group {
    margin-top: 20px;
    text-align: right;
  }
`;

function ExpneseCreate() {
  const selectGroup = ['식료품', '교통', '식사', '생활', '의료'];
  const dispatch = useExpenseDispatch();
  const nextId = useExpenseNextId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [useExpense, setUseExpense] = useState('');
  const [clickValue, setClickValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const onCangeMoney = e => setUseExpense(Number(e.target.value));
  const onToggle = () => setOpen(!open);
  const onSelectChange = e => setClickValue(e.target.value);
  const onSubmit = () => {
    dispatch({
      type: 'CREATE',
      expense: {
        id: nextId.current,
        text: value,
        amount: useExpense,
        category: clickValue,
      },
    });
    setValue('');
    nextId.current += 1;
    setUseExpense('');
    onToggle();
  };

  return (
    <>
      {open && (
        <InsertModal>
          <InsertModalForm>
            <h1>지출등록</h1>
            <h2>내용</h2>
            <input type="text" value={value} onChange={onChange}></input>
            <h2>금액</h2>
            <input
              type="number"
              value={useExpense}
              onChange={onCangeMoney}
            ></input>
            <h2>카테고리</h2>
            <SelectComp
              name="lable-group"
              className="modal_select"
              onChange={onSelectChange}
              selectGroup={selectGroup}
            ></SelectComp>
            <div className="btn-group">
              <Button btnColor="blue" type="submit" onClick={onSubmit}>
                등록
              </Button>
              <Button btnColor="skyBlue" onClick={onToggle}>
                취소
              </Button>
            </div>
          </InsertModalForm>
        </InsertModal>
      )}

      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default ExpneseCreate;
