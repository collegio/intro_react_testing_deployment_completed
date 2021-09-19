export const setFilterText = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
});

export const setFilterType = (activity_type = 'all') => ({
    type: 'SET_FILTER_TYPE',
    activity_type
});

export const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

export const sortByDistance = () => ({
    type: 'SORT_BY_DISTANCE'
});