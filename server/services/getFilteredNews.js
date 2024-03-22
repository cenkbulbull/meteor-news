import { Meteor } from "meteor/meteor";

Meteor.methods({
  getFilteredNews: function (page = "0", tag = "general", country = "tr") {
    try {
      const result = HTTP.call(
        "GET",
        Meteor.settings.API_URL +
          "/getNews?country=" +
          country +
          "&tag=" +
          tag +
          "&paging=" +
          page,
        {
          headers: {
            "authorization": Meteor.settings.API_KEY,
            "content-type": "application/json",
          },
        }
      );
      return result;
    } catch (e) {
      return e;
    }
  },
});
