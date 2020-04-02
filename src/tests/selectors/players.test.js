import players from '../fixtures/players';
import { filters } from '../fixtures/playerFilters';
import playerSelector from '../../selectors/players';

test('testing the player selector with no filters', () => {
    const result = playerSelector(players, filters);

    expect(result).toEqual([
        players[2],
        players[3],
        players[4],
        players[1],
        players[0]
    ]);
});

test('testing the player selector with search text set', () => {
    const result = playerSelector(players, {
        ...filters,
        text: 'brees'
    });

    expect(result).toEqual([
        players[2],
        players[4]
    ]);
});

test('testing the player selector with sport type set', () => {
    const result = playerSelector(players, {
        ...filters,
        sport_type: 'hockey'
    });

    expect(result).toEqual([
        players[3],
        players[0]
    ]);
});

test('testing the player selector with skill level set', () => {
    const result = playerSelector(players, {
        ...filters,
        skill_level: 'basic'
    });

    expect(result).toEqual([
        players[4]
    ]);
});

test('testing the player selector while sorting by name', () => {
    const result = playerSelector(players, {
        ...filters,
        sort_by: 'name'
    });

    expect(result).toEqual([
        players[2],
        players[3],
        players[4],
        players[1],
        players[0]
    ]);
});

test('testing the player selector while sorting by skill', () => {
    const result = playerSelector(players, {
        ...filters,
        sort_by: 'skill_level'
    });

    expect(result).toEqual([
        players[4],
        players[3],
        players[2],
        players[1],
        players[0]
    ]);
});

test('testing the player selector while providing multiple filters', () => {
    const result = playerSelector(players, {
        ...filters,
        text: 'brees',
        sport_type: 'football'
    });

    expect(result).toEqual([
        players[2]
    ]);
});