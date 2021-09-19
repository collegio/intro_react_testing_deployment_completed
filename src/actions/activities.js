import uuid from 'uuid';

export const addActivity = ({ name, activity_type = 'running', distance = '0 km' } = {}) => ({
    type: 'ADD_ACTIVITY',
    activity: {
        id: uuid(),
        name,
        activity_type,
        distance
    }
})
  
export const removeActivity = ({ id } = {}) => ({
    type: 'REMOVE_ACTIVITY',
    id
});

export const editActivity = (id, updates) => ({
    type: 'EDIT_ACTIVITY',
    id,
    updates
});