'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  created_by: String,
  investigator: String,
  date_created: Date,
  date_completed: Date,
});

export default mongoose.model('Project', ProjectSchema);
