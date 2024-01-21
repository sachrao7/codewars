/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // // method 1
    // // sort and see if they are equal
    // return s.split('').sort().join('') == t.split('').sort().join('')



    // method 2
    // count each letter in the string to an counter object

    if (s.length != t.length) {
        return false
    }

    let sCounter = {}
    let tCounter = {}

    for (let i=0; i<s.length; i++) {
        sCounter[s[i]] = (sCounter[s[i]] || 0) + 1
        tCounter[t[i]] = (tCounter[t[i]] || 0) + 1
    }

    //check to see if counts mismatch
    console.log(sCounter)
    console.log(tCounter)
    for (const key in sCounter) {
        if (sCounter[key] != tCounter[key]) {
            return false
        }
    }
    return true

};