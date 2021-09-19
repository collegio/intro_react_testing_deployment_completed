import activities from '../fixtures/activities';
import { filters } from '../fixtures/activityFilters';
import activitySelector from '../../selectors/activities';

test('testing the activity selector with no filters', () => {
    const result = activitySelector(activities, filters);

    expect(result).toEqual([
        activities[4],
        activities[0],
        activities[2],
        activities[1],
        activities[3]
    ]);
});

test('testing the activity selector with search text set', () => {
    const result = activitySelector(activities, {
        ...filters,
        text: 'walk'
    });

    expect(result).toEqual([
        activities[0],
        activities[3]
    ]);
});

test('testing the activity selector with activity type set', () => {
    const result = activitySelector(activities, {
        ...filters,
        activity_type: 'cycling'
    });

    expect(result).toEqual([
        activities[2]
    ]);
});

test('testing the activity selector while sorting by name', () => {
    const result = activitySelector(activities, {
        ...filters,
        sort_by: 'name'
    });

    expect(result).toEqual([
        activities[4],
        activities[0],
        activities[2],
        activities[1],
        activities[3]
    ]);
});

test('testing the activity selector while sorting by distance', () => {
    const result = activitySelector(activities, {
        ...filters,
        sort_by: 'distance'
    });

    expect(result).toEqual([
        activities[4],
        activities[1],
        activities[2],
        activities[3],
        activities[0]
    ]);
});

test('testing the activity selector while providing multiple filters', () => {
    const result = activitySelector(activities, {
        ...filters,
        text: 'dog',
        activity_type: 'walking'
    });

    expect(result).toEqual([
        activities[3]
    ]);
});