export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SEARCH = 'SEARCH';

export const toggleFav = id => {
    return { type: TOGGLE_FAV, songId: id };
};

export const search = name => {
    return { type: SEARCH, songName: name };
};
