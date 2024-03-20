import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'getFilteredNews': function (tag="general", country="tr") {
    try {
      const result = HTTP.call('GET','');
      return result;
      
    } catch (e) {
      return false;
    }
  },
});