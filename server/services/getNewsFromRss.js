import { Meteor } from "meteor/meteor";
Meteor.methods({
  getNewsFromRss: function (rss) {
    try {
      const result = HTTP.call(
        "GET",
        Meteor.settings.API_URL +
          "/getNewsfromRSS?data.rss_url="+rss,
        {
          headers: {
            "Content-Type": "application/json", // İstek başlığı
            "Authorization": Meteor.settings.API_KEY, // İstek başlığı
          },
        }
      );
      return result;
    } catch (e) {
      return e;
    }
  },
});
