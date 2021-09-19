import React from 'react';
import { shallow } from 'enzyme';
import { ActivitiesListItem } from '../../components/ActivitiesListItem';
import activities from '../fixtures/activities';

test('should render the activities list item', () => {
    const wrapper = shallow(<ActivitiesListItem { ...activities[0] } />);
    expect(wrapper).toMatchSnapshot();
});