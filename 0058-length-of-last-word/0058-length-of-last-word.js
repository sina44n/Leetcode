/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let word = s.trim().split(' ')

    let lastword = word[word.length-1]


    return lastword.length
    
};