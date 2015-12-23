'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProjectSchema = new mongoose.Schema({
  created_by: String,
  investigator: String,
  description: String,
  date_created: Date,
  date_completed: Date,
});

export default mongoose.model('Project', ProjectSchema);
