// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-ii-14
description: Array.prototype.reduce - callbackfn that uses arguments
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        function callbackfn() {
            result = (arguments[0] === 1 && arguments[3][arguments[2]] === arguments[1]);
        }

        [11].reduce(callbackfn, 1);
        return result;
    }
runTestCase(testcase);
