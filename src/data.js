export const API_KEY = 'AIzaSyAzKpm5DsBuWOZryhXOTcz4NB5emEo8v8Q';

/**
 * Converts a value to a string representation with a metric prefix.
 * @param {number} value
 * @returns {string}
 */
export const value_converter = (value) => {
    /**
     * If the value is one million or greater, convert it to a string
     * representation with the metric prefix 'M'.
     */
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    }
    /**
     * If the value is one thousand or greater, convert it to a string
     * representation with the metric prefix 'K'.
     */
    else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    }
    /**
     * If the value is less than one thousand, return the value as a string.
     */
    else {
        return value;
    }
};
