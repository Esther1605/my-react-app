import React from 'react';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}>
      <option value="">Select category</option>
      <option value="">Food</option>
      <option value="">Utilities</option>
      <option value="">Health</option>
      <option value="">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
