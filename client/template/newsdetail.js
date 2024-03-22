import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.newsdetail.onCreated(function () {
  const id = FlowRouter.getParam('_id')
});

/*Template.newsdetail.helpers({
  id() {
    console.log(FlowRouter.getParam('key'))
  },
  category() {
    //return FlowRouter.getParam('category');
  }
});*/
