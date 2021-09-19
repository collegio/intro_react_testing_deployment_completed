import { setFilterText, setFilterType, sortByName, sortByDistance } from '../../actions/filters';

test('should set filter text', () => {
    const testText = 'some text';
    const result = setFilterText(testText);

    expect(result).toEqual({
        type: 'SET_FILTER_TEXT',
        text: testText
    });
});

test('should set default filter type', () => {
    const result = setFilterType();

    expect(result).toEqual({
        type: 'SET_FILTER_TYPE',
        activity_type: 'all'
    });
});

test('should set specified filter type', () => {
    const testType = 'running';
    const result = setFilterType(testType);

    expect(result).toEqual({
        type: 'SET_FILTER_TYPE',
        activity_type: testType
    });
});

test('should set sorting by name', () => {
    const result = sortByName();

    expect(result).toEqual({
        type: 'SORT_BY_NAME'
    });
});

test('should set sorting by distance', () => {
    const result = sortByDistance();

    expect(result).toEqual({
        type: 'SORT_BY_DISTANCE'
    });
});