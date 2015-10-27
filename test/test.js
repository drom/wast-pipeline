'use strict';

var fs = require('fs'),
    path = require('path'),
    dut = require('../lib'),
    parser = require('wast-parser').parse;

describe('test', function () {
    it('all', function (done) {
        fs.readFile(
            path.resolve(__dirname, './test.wast'),
            'utf-8',
            function (err, data) {
                if (err) { throw err; }
                var ast = parser(data);
                console.log(dut(ast));
                done();
            }
        );
    });
});
