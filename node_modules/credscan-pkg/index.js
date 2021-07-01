var edge = require('edge-js');

var f = edge.func(require('path').join(__dirname, 'CredScan.cs'));

const credscan = (input) => f(input, function (error, result) {
    if (error) throw error;
    console.log(result);
    return result;
});

module.exports = {credscan};
