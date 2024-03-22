import { Template } from "meteor/templating";

Template.newscard.helpers({
  news() {
    return Template.instance().data.news.title;
  }
});