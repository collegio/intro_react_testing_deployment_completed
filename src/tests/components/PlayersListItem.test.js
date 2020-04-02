import React from 'react';
import { shallow } from 'enzyme';
import { PlayersListItem } from '../../components/PlayersListItem';
import players from '../fixtures/players';

test('should render the players list item', () => {
    const wrapper = shallow(<PlayersListItem { ...players[0] } />);
    expect(wrapper).toMatchSnapshot();
});