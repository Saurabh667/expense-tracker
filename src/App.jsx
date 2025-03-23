import { useState } from 'react'
import './App.css'
import NewExpense from './components/NewExpense'


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'College Fee',
    amount: 76500,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Room-rent',
    amount: 2000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Food-expenses',
    amount: 1500,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NewExpense/>
    </>
  )
};


export default App;
