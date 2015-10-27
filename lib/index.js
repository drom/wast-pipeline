'use strict';

var pipeline = require('json-pipeline'),
    traverse = require('wast-traverse');

module.exports = function (ast) {
    var p;
    traverse(ast, {
        enter: function (node) {
            if (node.kind === 'func') {
                p = pipeline.create();
                p.add('start');
                return;
            }
        },
        leave: function (node) {
            if (node.kind === 'func') {
                console.log(p.render('printable'));
                return;
            }

            if (node.kind === 'get_local') {
                node.ref = p.add('literal').addLiteral(1);
                return;
            }

            if (node.kind === 'const') {
                node.ref = p.add('literal').addLiteral(node.init);
                return;
            }

            if (node.kind === 'binop') {
                p.add(node.operator, [ node.left.ref, node.right.ref ]);
                return;
            }
        }
    });
    return p;
};
