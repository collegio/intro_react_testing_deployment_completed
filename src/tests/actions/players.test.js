import { addPlayer, removePlayer, editPlayer } from '../../actions/players';

test('should add a player with default information', () => {
    const newPlayer = {
        name: 'Sidney Crosby'
    };
    const result = addPlayer(newPlayer);

    expect(result).toEqual({
        type: 'ADD_PLAYER',
        player: {
            id: expect.any(String),
            name: newPlayer.name,
            sport_type: 'hockey',
            gender: 'Male',
            skill_level: 'basic',
            message: ''
        }
    });
});

test('should add a player with specifed information', () => {
    const newPlayer = {
        name: 'Sidney Crosby',
        sport_type: 'hockey',
        gender: 'Male',
        skill_level: 'basic',
        message: 'test message'
    };
    const result = addPlayer(newPlayer);

    expect(result).toEqual({
        type: 'ADD_PLAYER',
        player: {
            id: expect.any(String),
            name: newPlayer.name,
            sport_type: newPlayer.sport_type,
            gender: newPlayer.gender,
            skill_level: newPlayer.skill_level,
            message: newPlayer.message
        }
    });
});

test('should remove a player', () => {
    const testID = '12345';
    const result = removePlayer({id: testID});

    expect(result).toEqual({
        type: 'REMOVE_PLAYER',
        id: testID
    });
});

test('should edit a player', () => {
    const testID = '12345';
    const testUpdates = {
        message: 'test',
        sport: 'baseball'
    };
    const result = editPlayer(testID, testUpdates);

    expect(result).toEqual({
        type: 'EDIT_PLAYER',
        id: testID,
        updates: testUpdates
    });
});