import activities from '../fixtures/activities';
import activitiesReducer from '../../reducers/activities';

test('should setup default activity values', () => {
    const state = activitiesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('add a activity', () => {
    const action = {
        type: 'ADD_ACTIVITY',
        activity: activities[3]
    }
    const state = activitiesReducer(undefined, action);

    expect(state).toEqual([
        activities[3]
    ]);
});

test('remove a activity', () => {
    const action = {
        type: 'REMOVE_ACTIVITY',
        id: "3"
    }
    const state = activitiesReducer(activities, action);

    expect(state).toEqual([
        activities[0],
        activities[1],
        activities[3],
        activities[4]
    ]);
});

test('edit a activity', () => {
    const testUpdates = {
        name: "Evening Walk",
        activity_type: "walking",
        distance: "2 km"
    }
    const action = {
        type: 'EDIT_ACTIVITY',
        id: "3",
        updates: testUpdates
    }
    const state = activitiesReducer(activities, action);

    expect(state).toEqual([
        activities[0],
        activities[1],
        {
            ...activities[2],
            ...testUpdates
        },
        activities[3],
        activities[4]
    ]);
});