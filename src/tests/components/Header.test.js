import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test ('should render the header', () => {

    const wrapper = shallow(<Header>Test Header</Header>);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});