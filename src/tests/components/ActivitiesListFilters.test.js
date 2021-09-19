import React from 'react';
import { shallow } from 'enzyme';
import { ActivitiesListFilters } from '../../components/ActivitiesListFilters';
import { filters, altFilters1, altFilters2 } from '../fixtures/activityFilters';

let setFilterText, setFilterType, sortByName, sortByDistance, wrapper;

beforeEach(() => {
    setFilterText = jest.fn();
    setFilterType = jest.fn();
    sortByName = jest.fn();
    sortByDistance = jest.fn();
    wrapper = shallow(
        <ActivitiesListFilters 
            filters={filters} 
            setFilterText={setFilterText}
            setFilterType={setFilterType}
            sortByName={sortByName}
            sortByDistance={sortByDistance}
        />
    );
})

test('should render the activities list filters with default values', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render the activities list filters with alternate filters', () => {
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

test('should handle activity type select changes', () => {
    const value = "cycling";
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    });
    expect(setFilterType).toHaveBeenLastCalledWith(value);
});

test('should set sorting by distance', () => {
    const value = 'distance';
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByDistance).toHaveBeenCalled();
});

test('should set sorting by name', () => {
    const value = 'name';
    wrapper.setProps({ filters: altFilters1 });
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByName).toHaveBeenCalled();
});
