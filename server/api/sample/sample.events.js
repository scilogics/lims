/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
var Sample = require('./sample.model');
var SampleEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SampleEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Sample.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SampleEvents.emit(event + ':' + doc._id, doc);
    SampleEvents.emit(event, doc);
  }
}

export default SampleEvents;
