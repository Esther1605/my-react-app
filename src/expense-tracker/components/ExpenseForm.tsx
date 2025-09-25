import React, { useState } from 'react';

interface Props {
  onSubmit: (expense: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expense = {
      description,
      amount: parseFloat(amount), // Convert string to number
      category,
    };

    // Call the onSubmit prop function
    onSubmit(expense);

    // Clear the form
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          className="form-control"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          id="category">
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
