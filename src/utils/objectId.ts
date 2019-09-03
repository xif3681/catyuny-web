/*
*
* Copyright (c) 2011-2014- Justin Dearing (zippy1981@gmail.com)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) version 2 licenses.
* This software is not distributed under version 3 or later of the GPL.
*
* Version 1.0.2
*
*/
let increment = Math.floor(Math.random() * (16777216));
let pid = Math.floor(Math.random() * (65536));
let machine = Math.floor(Math.random() * (16777216));

/**
 * Javascript class that mimics how WCF serializes a object of type MongoDB.Bson.CreateObjectId
 * and converts between that format and the standard 24 character representation.
 */
class ObjectId {
  increment: number = 0
  pid: number = 0
  machine: number = 0
  timestamp: number = 0

  constructor(...args: any) {
    this.create()
  }

  create() {
    if (!(this instanceof ObjectId)) {
      return new ObjectId(arguments[0], arguments[1], arguments[2], arguments[3]).toString();
    }

    if (typeof (arguments[0]) == 'object') {
      this.timestamp = arguments[0].timestamp;
      this.machine = arguments[0].machine;
      this.pid = arguments[0].pid;
      this.increment = arguments[0].increment;
    }
    else if (typeof (arguments[0]) == 'string' && arguments[0].length == 24) {
      this.timestamp = Number('0x' + arguments[0].substr(0, 8)),
        this.machine = Number('0x' + arguments[0].substr(8, 6)),
        this.pid = Number('0x' + arguments[0].substr(14, 4)),
        this.increment = Number('0x' + arguments[0].substr(18, 6))
    }
    else if (arguments.length == 4 && arguments[0] != null) {
      this.timestamp = arguments[0];
      this.machine = arguments[1];
      this.pid = arguments[2];
      this.increment = arguments[3];
    }
    else {
      this.timestamp = Math.floor(new Date().valueOf() / 1000);
      this.machine = machine;
      this.pid = pid;
      this.increment = increment++;
      if (increment > 0xffffff) {
        increment = 0;
      }
    }
  }

  getDate() {
    return new Date(this.timestamp * 1000);
  };

  toArray() {
    const strOid = this.toString();
    const array = [];
    for(let i = 0; i < 12; i++) {
      array[i] = parseInt(strOid.slice(i*2, i*2+2), 16);
    }
    return array;
  };

  /**
   * Turns a WCF representation of a BSON CreateObjectId into a 24 character string representation.
   */
  toString() {
    if (this.timestamp === undefined
      || this.machine === undefined
      || this.pid === undefined
      || this.increment === undefined) {
      return 'Invalid CreateObjectId';
    }

    const timestamp = this.timestamp.toString(16);
    const machine = this.machine.toString(16);
    const pid = this.pid.toString(16);
    const increment = this.increment.toString(16);
    return '00000000'.substr(0, 8 - timestamp.length) + timestamp +
      '000000'.substr(0, 6 - machine.length) + machine +
      '0000'.substr(0, 4 - pid.length) + pid +
      '000000'.substr(0, 6 - increment.length) + increment;
  }
}

export default ObjectId