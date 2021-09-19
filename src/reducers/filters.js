// the default items that we can possibly filter by
const filtersDefaultState = {
    text: '',
    activity_type: 'all',
    sort_by: 'name'
};

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_FILTER_TYPE':
            return {
                ...state,
                activity_type: action.activity_type
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sort_by: 'name'
            };
        case 'SORT_BY_DISTANCE':
            return {
                ...state,
                sort_by: 'distance'
            };
        default:
            return state;
    }
};