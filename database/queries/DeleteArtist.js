const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
    // ES6 version can just do '_id' because the key is the same as value
    // Solution #1
    return Artist.remove({ _id });

    // Alternative solution: Not a good solution because you're touching the database twice
    // return Artist.findById(_id)
    //     .then((artist) => {
    //         artist.remove();
    //     });
};