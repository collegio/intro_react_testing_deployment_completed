import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sport_type: 'all',
        skill_level: 'all',
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
        sport_type: 'all',
        skill_level: 'all',
        sort_by: 'name'
    });
});

test('should set sport type', () => {
    const testType = 'baseball';
    const action = {
        type: 'SET_FILTER_TYPE',
        sport_type: testType
    }
    const state = filtersReducer(undefined, action);

    expect(state).toEqual({
        text: '',
        sport_type: testType,
        skill_level: 'all',
        sort_by: 'name'
    });
});

test('should set sorting by skill level', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_SKILL' });

    expect(state).toEqual({
        text: '',
        sport_type: 'all',
        skill_level: 'all',
        sort_by: 'skill_level'
    });
});

test('should set sorting by name', () => {
    const curState = {
        text: '',
        sport_type: 'all',
        skill_level: 'all',
        sort_by: 'skill_level'
    };
    const action = {
        type: 'SORT_BY_NAME'
    }
    const state = filtersReducer(curState, action);

    expect(state).toEqual({
        text: '',
        sport_type: 'all',
        skill_level: 'all',
        sort_by: 'name'
    });
});