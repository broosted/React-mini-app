import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../components/ExpenseDashboardPage.jsx';

import toJSON from 'enzyme-to-json';


test('should render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})