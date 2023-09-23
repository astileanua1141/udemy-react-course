import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance',
      amount: 29.55,
      date: new Date(2022, 3, 28),
    },
    { id: 'e2', title: 'TV', amount: 294.67, date: new Date(2023, 3, 28) },
    {
      id: 'e3',
      title: 'Washing machine',
      amount: 24.67,
      date: new Date(2023, 3, 29),
    },
    {
      id: 'e4',
      title: 'Toilet Paper',
      amount: 9.67,
      date: new Date(2023, 3, 27),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
