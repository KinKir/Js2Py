// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Error.prototype property has the attributes {DontDelete}
es5id: 15.11.3.1_A1_T1
description: Checking if deleting the Error.prototype property fails
---*/

var proto=Error.prototype;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(delete Error.prototype){
  $ERROR('#1: delete Error.prototype return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(Error.prototype!==proto){
  $ERROR('#2: var proto=Error.prototype; delete Error.prototype; Error.prototype===proto. Actual: '+Error.prototype);
}
//
//////////////////////////////////////////////////////////////////////////////
