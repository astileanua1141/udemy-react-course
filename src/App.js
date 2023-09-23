import Expenses from './components/Expenses';

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
