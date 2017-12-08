import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ExpenseListItem from '../../components/ExpenseListItem.jsx';
import expenses from '../fixed/expenses.js';
import toJSON from 'enzyme-to-json';



const mockStore = configureMockStore([])


test('should render ExpenseList with expenses', () => {
    const store = mockStore({})

    const wrapper = shallow(
        <Provider store={store}>
    <ExpenseListItem expenses={expenses[1]} />
    </Provider>
    )

    expect(wrapper).toMatchSnapshot()
})


