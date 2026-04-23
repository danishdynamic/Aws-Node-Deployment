import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  // Fetch expenses from Backend
  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_URL}/expenses`);
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/expenses`, { title, amount, category });
      setTitle('');
      setAmount('');
      fetchExpenses(); // Refresh the list
    } catch (error) {
      console.error("Error saving expense:", error);
    }
  };

  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Expense Tracker</h1>

        {/* Total Card */}
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-8 text-center">
          <p className="text-blue-100 uppercase text-sm font-semibold tracking-wide">Total Expenses</p>
          <h2 className="text-4xl font-bold">${total.toFixed(2)}</h2>
        </div>

        {/* Form Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" placeholder="What did you buy?" 
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title} onChange={(e) => setTitle(e.target.value)} required
            />
            <input 
              type="number" placeholder="Amount" 
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={amount} onChange={(e) => setAmount(e.target.value)} required
            />
            <select 
              className="p-2 border rounded-lg bg-white"
              value={category} onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transport">Transport</option>
            </select>
            <button className="md:col-span-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Add Expense
            </button>
          </form>
        </div>

        {/* Expense List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {expenses.map((expense) => (
              <li key={expense.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-800">{expense.title}</p>
                  <p className="text-xs text-gray-500 uppercase">{expense.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${parseFloat(expense.amount).toFixed(2)}</p>
                  <p className="text-[10px] text-gray-400">{new Date(expense.date_added).toLocaleDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;