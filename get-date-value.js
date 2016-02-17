const getDateValue = function(value) {
    let parts, day, month, year;

    if (value && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
        parts = value.split('/');

        day = parseInt(parts[1], 10);
        month = parseInt(parts[0], 10);
        year = parseInt(parts[2], 10);
    }
    else if (value && /^\d{4}-\d{1,2}-\d{1,2}$/.test(value)) {
        parts = value.split('-');

        year = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        day = parseInt(parts[2], 10);
    }

    // return as YYYY-MM-DD
    return parts ? year + '-' + month + '-' + day : null;
};

export default getDateValue;
