import { Template } from "meteor/templating";

Template.trendingcard.helpers({
  news() {
    return Template.instance().data.news.title;
  },
});

