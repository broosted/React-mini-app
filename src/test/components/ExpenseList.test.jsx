import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ExpenseList from '../../components/ExpenseList.jsx';
import expenses from '../fixed/expenses.js';
import toJSON from 'enzyme-to-json';

const mockStore = configureMockStore([])


test('should render ExpenseList with expenses', () => {
    const store = mockStore({})

    const wrapper = shallow(
        <Provider store={store}>
    <ExpenseList expenses={expenses} />
    </Provider>
    )

    expect(wrapper).toMatchSnapshot()
})


test('should render ExpenseList with empty message', () => {
    const store = mockStore({})
    
        const wrapper = shallow(
            <Provider store={store}>
        <ExpenseList expenses={[]} />
        </Provider>
        )
        expect(wrapper).toMatchSnapshot()

})

// create test file
// grab imports
// render expenseListitem with fixture data
//create snapshot
