import React from 'react';
import { shallow } from 'enzyme';
import { AddActivityPage } from '../../components/AddActivityPage';
import activities from '../fixtures/activities';

let addActivity, history, wrapper;

beforeEach(() => {
    addActivity = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddActivityPage addActivity={addActivity} history={history} />);
});

test('should render the AddActivityPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {  

    wrapper.find('ActivityForm').prop('onSubmit')(activities[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addActivity).toHaveBeenLastCalledWith(activities[1]);
});