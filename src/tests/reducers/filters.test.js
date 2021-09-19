import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        activity_type: 'all',
        sort_by: 'name'
    });
});

test('should set filter text', () => {
    const testText = 'some text';
    const action = {
        type: 'SET_FILTER_TEXT',
        text: testText
    }
    const state = filtersReducer(undefined, action);

    expect(state).toEqual({
        text: testText,
        activity_type: 'all',
        sort_by: 'name'
    });
});

test('should set sport type', () => {
    const testType = 'walking';
    const action = {
        type: 'SET_FILTER_TYPE',
        activity_type: testType
    }
    const state = filtersReducer(undefined, action);

    expect(state).toEqual({
        text: '',
        activity_type: testType,
        sort_by: 'name'
    });
});

test('should set sorting by distance', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DISTANCE' });

    expect(state).toEqual({
        text: '',
        activity_type: 'all',
        sort_by: 'distance'
    });
});

test('should set sorting by name', () => {
    const curState = {
        text: '',
        activity_type: 'all',
        sort_by: 'distance'
    };
    const action = {
        type: 'SORT_BY_NAME'
    }
    const state = filtersReducer(curState, action);

    expect(state).toEqual({
        text: '',
        activity_type: 'all',
        sort_by: 'name'
    });
});