import React from 'react';
import { shallow } from 'enzyme';
import ActivityForm from '../../components/ActivityForm';
import activities from '../fixtures/activities';

test('should render the activity form', () => {
    const wrapper = shallow(<ActivityForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the activity form with data', () => {
    const wrapper = shallow(<ActivityForm activity={activities[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ActivityForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
    const value = 'Evening Walk';
    const wrapper = shallow(<ActivityForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set activity type on select change', () => {
    const value = 'cycling';
    const wrapper = shallow(<ActivityForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('activity_type')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set distance on input change', () => {
    const value = '20 km';
    const wrapper = shallow(<ActivityForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('distance')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should trigger valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ActivityForm activity={activities[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        name: activities[0].name,
        activity_type: activities[0].activity_type,
        distance: activities[0].distance
    });
});