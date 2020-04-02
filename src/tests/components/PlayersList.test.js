import React from 'react';
import { shallow } from 'enzyme';
import { PlayersList } from '../../components/PlayersList';
import players from '../fixtures/players';

test('should render the players list with players', () => {
    const wrapper = shallow(<PlayersList players={players} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the players list no players', () => {
    const wrapper = shallow(<PlayersList players={[]} />);
    expect(wrapper).toMatchSnapshot();
});