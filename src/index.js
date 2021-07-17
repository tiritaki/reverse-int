module.exports = function reverse (n) {
    let r = n.toString().split('').reverse().join('');
    return parseInt(r);
}
