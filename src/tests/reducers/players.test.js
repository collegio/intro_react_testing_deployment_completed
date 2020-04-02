import players from '../fixtures/players';
import playersReducer from '../../reducers/players';

test('should setup default player values', () => {
    const state = playersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('add a player', () => {
    const action = {
        type: 'ADD_PLAYER',
        player: players[3]
    }
    const state = playersReducer(undefined, action);

    expect(state).toEqual([
        players[3]
    ]);
});

test('remove a player', () => {
    const action = {
        type: 'REMOVE_PLAYER',
        id: "3"
    }
    const state = playersReducer(players, action);

    expect(state).toEqual([
        players[0],
        players[1],
        players[3],
        players[4]
    ]);
});

test('edit a player', () => {
    const testUpdates = {
        name: "Lebron James",
        sport_type: "basketball",
        message: "blah blah blah"
    }
    const action = {
        type: 'EDIT_PLAYER',
        id: "3",
        updates: testUpdates
    }
    const state = playersReducer(players, action);

    expect(state).toEqual([
        players[0],
        players[1],
        {
            ...players[2],
            ...testUpdates
        },
        players[3],
        players[4]
    ]);
});