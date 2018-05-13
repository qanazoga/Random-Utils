/**
 * @author qanazoga
 * @description Simple things that have no reason not being here.
 */

/** 
 * Returns a random int [min, max). 
 * Works with one or two args (or more, but will only retrieve the min and max from those). 
 *
 * @param args int (min) optional, defaults to 0, inclusive minimum boundary.
 * @param args int (max) exclusive maximum boundary.
 */
function randInt(...args) {
    let max = Math.max(...args);
    let min = (Math.min(...args) == max) ? 0 : Math.min(...args);
    return Math.floor(Math.random() * (max - min)) + min;
  }         

/** 
 * Creates an Array<int> range [min, max). 
 * Works with one or two args (technically more, but will only retrieve the min and max from those :p).
 * Can also do reverse ranges now! :D
 * 
 * range(4) and range(0, 4) will both return [0, 1, 2, 3].
 * range(4, 0) will return [4, 3, 2, 1].
 * @param args int (min) optional, defaults to 0, inclusive minimum boundary.
 * @param args int (max) exlusive maximum boundary.
 */ //TODO: this will be changed to (max) or (min, max) or (min, max, step)
 function range(...args) {
    let max = Math.max(...args);
    let min = (Math.min(...args) == max) ? 0 : Math.min(...args);
    let arr = [...Array(Math.abs(max-min)).keys()].map(num => num += min);
    if (args.length == 2 && args[0] == max) arr = arr.map(num => num += 1).reverse();
    return arr;
}

/**
 * returns a random item from an array.
 */
Array.prototype.randChoice = function randChoice() {
    return this[randInt(this.length)]
}

/**
 * Shuffles an array.
 */
Array.prototype.shuffle = function shuffle() {
    for (let i of range(this.length)) {
        let j = randInt(i);
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}