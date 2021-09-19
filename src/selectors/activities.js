// Get visible activities

export default (activities, { text, activity_type, sort_by }) => {
    return activities.filter((activity) => {

        // match the text search
        const textNameMatch = activity.name.toLowerCase().includes(text.toLowerCase());

        // match the sport type
        let typeMatch = false;
        if (activity_type == 'all' || activity_type == activity.activity_type) {
            typeMatch = true;
        }

        return (textNameMatch && typeMatch);

    }).sort((a, b) => {

        if (sort_by === 'name') {
            return a.name > b.name ? 1 : -1;
        } else if (sort_by === 'distance') {

            // sort in reverse
            return a.distance > b.distance ? -1 : 1;
        }
    });
};