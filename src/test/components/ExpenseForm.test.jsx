import React from 'react';

import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm.jsx';

import expenses from '../fixed/expenses.js';
import toJSON from 'enzyme-to-json';

import moment from 'moment';



test('should render ExpenseForm correctly ', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

// should render Expenseform with form data


test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    //simulate a form submit
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />)

    //at first input at index 0
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('description')).toBe(value);
})

// should set note on textarea change


test('should set description on textarea change', () => {
    const value = 'New area text';
    const wrapper = shallow(<ExpenseForm />)

    //at first input at index 0
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })

    expect(wrapper.state('note')).toBe(value);
})

// should set amount if valid input
// 23.50 
test('should set description on amount valid', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />)

    //at first input at index 0
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe(value);
})

// should not set amount if invalid input
test('should set description on amount not valid', () => {
    const value = '232.323';
    const wrapper = shallow(<ExpenseForm />)

    //at first input at index 0
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
    //test spy
    const onSubmitSpy = jest.fn();
   
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})


test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment()
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

//should set calendar foccus on change


test('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true
    
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})