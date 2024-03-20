import { Meteor } from 'meteor/meteor';


Meteor.methods({
  'getNewsDetail': function (id) {
    try {
      const result = HTTP.call('GET', '/'+id);
      return result;
      
    } catch (e) {
      return false;
    }
  },
});