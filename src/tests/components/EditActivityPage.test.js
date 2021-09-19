import React from 'react';
import { shallow } from 'enzyme';
import { EditActivityPage } from '../../components/EditActivityPage';
import activities from '../fixtures/activities';

let editActivity, removeActivity, history, wrapper;

beforeEach(() => {
    editActivity = jest.fn();
    removeActivity = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditActivityPage editActivity={editActivity} removeActivity={removeActivity} history={history} activity={activities[1]} />);
});

test('should render the EditActivityPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {  

    wrapper.find('ActivityForm').prop('onSubmit')(activities[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editActivity).toHaveBeenLastCalledWith(activities[1].id, activities[1]);
});

test('should handle onRemove', () => {  

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeActivity).toHaveBeenLastCalledWith({
        id: activities[1].id
    });
});