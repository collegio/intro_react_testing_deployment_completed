// the default list of activities, which is empty
const activityDefaultState = [];

export default (state = activityDefaultState, action) => {
    switch (action.type) {

        case 'ADD_ACTIVITY':
            return [
                ...state,
                action.activity
            ];

        case 'REMOVE_ACTIVITY':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_ACTIVITY':
            return state.map((activity) => {
                if (activity.id === action.id) {
                    return {
                        ...activity,
                        ...action.updates
                    };
                }
                else {
                    return activity;
                }
            });

        default:
            return state;
    }
};