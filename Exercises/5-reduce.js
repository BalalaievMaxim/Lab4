'use strict';

const sum = (...args) => args.reduce((result, arg) => result += arg, 0);

module.exports = { sum };
