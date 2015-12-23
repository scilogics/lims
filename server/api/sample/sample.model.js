'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SampleSchema = new mongoose.Schema({
  project: String,
  created_by: Date,
  
  status: String,
});

export default mongoose.model('Sample', SampleSchema);