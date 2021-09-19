import { addActivity, removeActivity, editActivity } from '../../actions/activities';

test('should add an activity with default information', () => {
    const newActivity = {
        name: 'Evening Walk'
    };
    const result = addActivity(newActivity);

    expect(result).toEqual({
        type: 'ADD_ACTIVITY',
        activity: {
            id: expect.any(String),
            name: newActivity.name,
            activity_type: 'running',
            distance: '0 km'
        }
    });
});

test('should add an activity with specifed information', () => {
    const newActivity = {
        name: 'Evening Walk',
        activity_type: 'running',
        distance: '10 km'
    };
    const result = addActivity(newActivity);

    expect(result).toEqual({
        type: 'ADD_ACTIVITY',
        activity: {
            id: expect.any(String),
            name: newActivity.name,
            activity_type: newActivity.activity_type,
            distance: newActivity.distance
        }
    });
});

test('should remove an activity', () => {
    const testID = '12345';
    const result = removeActivity({id: testID});

    expect(result).toEqual({
        type: 'REMOVE_ACTIVITY',
        id: testID
    });
});

test('should edit an activity', () => {
    const testID = '12345';
    const testUpdates = {
        distance: '20 km',
        activity_type: 'cycling'
    };
    const result = editActivity(testID, testUpdates);

    expect(result).toEqual({
        type: 'EDIT_ACTIVITY',
        id: testID,
        updates: testUpdates
    });
});