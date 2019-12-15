const Artist = require('../models/artist');

/**
 * Creates a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
    // Previous example new User({ name: 'Joe' });
    const artist = new Artist(artistProps);
    
    return artist.save();
};