// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /*
    first soulation :
        return str.split('').reverse().join('');

        second soulation
        let reserved = '';
    
        for (let ch of str)
        {
            reserved = ch + reserved;
        }

        return reserved;
    */


    // third soulation
    // debugger;
    return str.split('').reduce((rev , char) => char + rev , '');
}

// reverse('asdf');

module.exports = reverse;
