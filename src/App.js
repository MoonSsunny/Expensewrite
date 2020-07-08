import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import ExpenseTemplate from './components/ExpenseTemplate';
import ExpenseHead from './components/ExpenseHead';
import ExpenseMiddle from './components/ExpenseMiddle';
import ExpneseCreate from './components/ExpneseCreate';
import ExpenseList from './components/ExpenseList';
import { ExpenseProvider } from './ExtenseContext';
import './assets/styles/style.scss';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Noto Sans KR', sans-serif;
    background : #e9ecef;
  }`;

function App() {
  return (
    <ExpenseProvider>
      <GlobalStyle />
      <ExpenseTemplate>
        <ExpenseHead />
        <ExpenseMiddle />
        <ExpenseList />
        <ExpneseCreate />
      </ExpenseTemplate>
    </ExpenseProvider>
  );
}

export default App;
