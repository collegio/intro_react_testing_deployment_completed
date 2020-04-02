import React from 'react';
import { shallow } from 'enzyme';
import { EditPlayerPage } from '../../components/EditPlayerPage';
import players from '../fixtures/players';

let editPlayer, removePlayer, history, wrapper;

beforeEach(() => {
    editPlayer = jest.fn();
    removePlayer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditPlayerPage editPlayer={editPlayer} removePlayer={removePlayer} history={history} player={players[1]} />);
});

test('should render the EditPlayerPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {  

    wrapper.find('PlayerForm').prop('onSubmit')(players[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editPlayer).toHaveBeenLastCalledWith(players[1].id, players[1]);
});

test('should handle onRemove', () => {  

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removePlayer).toHaveBeenLastCalledWith({
        id: players[1].id
    });
});