import { Template } from "meteor/templating";
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.newscard.helpers({
  news() {
    return Template.instance().data.news;
  }
});

Template.newscard.events({
  
});