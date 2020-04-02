import React from 'react';
import { shallow } from 'enzyme';
import PlayerForm from '../../components/PlayerForm';
import players from '../fixtures/players';

// @TODO: add a mocked up version of Moment.js

test('should render the player form', () => {
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the player form with data', () => {
    const wrapper = shallow(<PlayerForm player={players[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
    const value = 'Sidney Crosby';
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set sport type on select change', () => {
    const value = 'baseball';
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('sport_type')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set gender on select change', () => {
    const value = 'Female';
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('gender')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set skill level on select change', () => {
    const value = 'expert';
    const wrapper = shallow(<PlayerForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('skill_level')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should trigger valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<PlayerForm player={players[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        name: players[0].name,
        sport_type: players[0].sport_type,
        gender: players[0].gender,
        skill_level: players[0].skill_level,
        message: players[0].message
    });
});