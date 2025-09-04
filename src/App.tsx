import { useCallback, useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

function App() {
  const [selectedCategories, setSelectedCategories] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    {
      id: 2,
      description: 'Electricity Bill',
      amount: 75,
      category: 'Utilities',
    },
    { id: 3, description: 'Internet', amount: 60, category: 'Utilities' },
    { id: 4, description: 'Dining Out', amount: 40, category: 'Food' },
    { id: 5, description: 'Gym Membership', amount: 30, category: 'Health' },
    { id: 6, description: 'Cinema', amount: 40, category: 'Entertainment' },
  ]);

  const visibleExpenses =
    selectedCategories ?
      expenses.filter((e) => e.category === selectedCategories)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategories(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
