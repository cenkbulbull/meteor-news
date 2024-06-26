import { Meteor } from "meteor/meteor";
Meteor.methods({
  getNews: function (page = "0") {
    console.log(page);
    try {
      const result = HTTP.call(
        "GET",
        Meteor.settings.API_URL +
          "/getNews?country=tr&tag=general&paging=" +
          page,
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
