import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header.jsx';
import toJSON from 'enzyme-to-json';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Expensify');

    expect(toJSON(wrapper)).toMatchSnapshot();
//     const renderer = new ReactShallowRenderer();

//     renderer.render(
//         <Header />
//     );

//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// //    console.log(renderer.getRenderOutput());
})