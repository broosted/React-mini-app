import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary.jsx';

test('should correctly render ExpensesSummary with 1 expense',() => {
const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={234}/>)

expect(wrapper).toMatchSnapshot();
})



test('should correctly render ExpensesSummary with multiple expenses',() => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={2343232423}/>)
    
    expect(wrapper).toMatchSnapshot();   
})