module.exports = function tiny(string) {
    if (typeof string !== 'string') throw new TypeError("Tiny want a string!")
    return String.prototype.trim ? string.trim() : string.replace(/\s/g, "");
}