import React from 'react';
import { shallow } from 'enzyme';
import { PlayersListFilters } from '../../components/PlayersListFilters';
import { filters, altFilters1, altFilters2 } from '../fixtures/playerFilters';

let setFilterText, setFilterType, sortByName, sortBySkill, wrapper;

beforeEach(() => {
    setFilterText = jest.fn();
    setFilterType = jest.fn();
    sortByName = jest.fn();
    sortBySkill = jest.fn();
    wrapper = shallow(
        <PlayersListFilters 
            filters={filters} 
            setFilterText={setFilterText}
            setFilterType={setFilterType}
            sortByName={sortByName}
            sortBySkill={sortBySkill}
        />
    );
})

test('should render the players list filters with default values', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render the players list filters with alternate filters', () => {
    wrapper.setProps({ filters: altFilters1 });
    expect(wrapper).toMatchSnapshot();
});

test('should handle filter text changes', () => {
    const value = "Crosby";
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('should handle sport type select changes', () => {
    const value = "baseball";
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    });
    expect(setFilterType).toHaveBeenLastCalledWith(value);
});

test('should set sorting by skill level', () => {
    const value = 'skill_level';
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortBySkill).toHaveBeenCalled();
});

test('should set sorting by name', () => {
    const value = 'name';
    wrapper.setProps({ filters: altFilters1 });
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByName).toHaveBeenCalled();
});
