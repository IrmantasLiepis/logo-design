var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;

autoIncrement.initialize(db);

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  idName: {
    type: String
  },
  category: {
    type: String
  },
  designer: {     //to be changed instead of user
    type: String
  },
  description: {
    type: String
  },
  designCount: {
    type: Number
  },
  award: {
    type: Number
  },
  contestLength: {
    type: Number
  },
  submitionCount: {
    type: Number
  },
  submitions: [{
    submitionUrl: {type: String},
    submitionRating: {type: Number},
    submitionAuthor: {type: Schema.Types.ObjectId, ref: 'User'},
    submitionId: {type: Number},
    status: {type: String}, // active/deleted
    comments: [{
      comment: {type: String},
      commentAuthor: {type: Schema.Types.ObjectId, ref: 'User'}
    }]
  }],
  comments: [{
    comment: {type: String},
    commentAuthor: {type: Schema.Types.ObjectId, ref: 'User'}
  }],
  startDate: {
    type: Date, default: Date.now()
  },
  endDate: {
    type: Date, default: Date.now()
  },
  status: {       //active or finished
    type: String
  },
  extraInfo: {      //extra info for designers
    type: String  
  },
  organization: {type: String},
  colors: {type: String},
  style: {type: String},
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  }],
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  uniqueId: {
    type: Number
  },
  // winnerSubmition: {
  //   //type: Schema.Types.ObjectId, ref: 'User'
  //   type: Schema.Types.Mixed
  // }
  winnerSubmition: {
    submitionUrl: {type: String},
    submitionRating: {type: Number},
    submitionAuthor: {type: Schema.Types.ObjectId, ref: 'User'},
    submitionId: {type: Number},
    status: {type: String}, // active/deleted
    comments: [{
      comment: {type: String},
      commentAuthor: {type: Schema.Types.ObjectId, ref: 'User'}
    }]
  }
});

// TODO gotta rethink this...
// schema.post('remove', function(doc) { // schema.pre another option
//   var deletedContest = doc;
//   User.findById(doc.user, function(err, doc) {
//     doc.contests.pull(deletedContest);
//     doc.save();
//   });
// });

// schema.plugin(autoIncrement.plugin, {
//   model: 'Contests',
//   field: 'submitions.submitionId',
//   startAt: 1,
//   incrementBy: 1
// });

schema.plugin(autoIncrement.plugin, {
  model: 'Contests',
  field: 'uniqueId',
  startAt: 10,
  incrementBy: 1
});

module.exports = mongoose.model('Contests', schema);