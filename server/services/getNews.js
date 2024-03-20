import { Meteor } from 'meteor/meteor';


Meteor.methods({
  'getNews': function () {
    try {
      const result = HTTP.call('GET', '');
      return result;
      
    } catch (e) {
      return false;
    }
  },
});