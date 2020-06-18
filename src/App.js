import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="appContainer">
        <Header />
        <div className="balanceandincomeContainer">
        <div className="balanceContainer">
        <Balance />
        </div>
        <IncomeExpenses />
        </div>
        <div className="transandadd">
        <TransactionList />
        <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
