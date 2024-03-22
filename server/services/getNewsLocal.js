import { Meteor } from "meteor/meteor";
Meteor.methods({
  getNewsLocal: function (city) {
    try {
      const result = HTTP.call(
        "GET",
        Meteor.settings.API_URL + "/getNewsLocal?city=" + city,
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
