const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
    // write a query that will follow sort, offset, limit options only
    // it should look like this: { all: [artist], count: count, offset: offset, limit: limit }

    const query = Artist.find({})
        // to string interpolate an object key
        .sort({ [sortProperty]: 1 })
        .skip(offset)
        .limit(limit);

    return Promise.all([query, Artist.count()])
        .then((results) => {
            return { 
                all: results[0],
                count: results[1], 
                offset: offset, 
                limit: limit 
            }
        });
};