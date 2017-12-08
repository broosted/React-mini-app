import React from 'react';
import { shallow } from 'enzyme';
import  {EditExpensePage}  from '../../components/EditExpensePage.jsx';
import expenses from '../fixed/expenses.js';


let editExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
  <EditExpensePage 
  editExpense={editExpense} 
  history={history} 
  expense={expenses[2]} />);
});

test('should render EditExpensePage', ()=> {
    expect(wrapper).toMatchSnapshot();
}) 

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});