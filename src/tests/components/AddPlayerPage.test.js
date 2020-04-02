import React from 'react';
import { shallow } from 'enzyme';
import { AddPlayerPage } from '../../components/AddPlayerPage';
import players from '../fixtures/players';

let addPlayer, history, wrapper;

beforeEach(() => {
    addPlayer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddPlayerPage addPlayer={addPlayer} history={history} />);
});

test('should render the AddPlayerPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {  

    wrapper.find('PlayerForm').prop('onSubmit')(players[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addPlayer).toHaveBeenLastCalledWith(players[1]);
});