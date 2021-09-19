import React from 'react';
import { shallow } from 'enzyme';
import { ActivitiesList } from '../../components/ActivitiesList';
import activities from '../fixtures/activities';

test('should render the activities list with activities', () => {
    const wrapper = shallow(<ActivitiesList activities={activities} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the activities list no activities', () => {
    const wrapper = shallow(<ActivitiesList activities={[]} />);
    expect(wrapper).toMatchSnapshot();
});