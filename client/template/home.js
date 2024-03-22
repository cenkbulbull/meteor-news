import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

//oncreated
Template.home.onCreated(function () {
  const instance = this;
  instance.newsdata = new ReactiveVar(null);
  instance.loading = new ReactiveVar(true);
  instance.page = new ReactiveVar(0);
  instance.country = new ReactiveVar("tr")

  Meteor.call("getNews", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      this.newsdata.set(result.data.result);
      instance.loading.set(false);
      console.log(this.newsdata);
    }
  });
});

//helpers
Template.home.helpers({
  data() {
    const instance = Template.instance();
    return instance.newsdata.get();
  },
  isLoading() {
    const instance = Template.instance();
    return instance.loading.get(); // Yükleme durumunu döndürüyoruz
  },
});

//events
Template.home.events({
  "change .country-select"(event) {
    const instance = Template.instance();
    const category = FlowRouter.getParam("_category") || "general";
    instance.page.set(0);
    const currentPage = instance.page.get();
    instance.country.set(event.target.value)
    const country = instance.country.get()
    
    console.log("currentpage-->"+ currentPage + " country-->"+country)
    Meteor.call("getFilteredNews", currentPage, category, country, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        instance.newsdata.set(result.data.result);
        console.log(instance.newsdata.get());
      }
    });
  },
  "click .nextpage"(event) {
    const instance = Template.instance();
    const currentPage = instance.page.get();
    const category = FlowRouter.getParam("_category") || "general";
    instance.page.set(currentPage + 1);
    const newpage = instance.page.get();
    const country = instance.country.get()
    Meteor.call("getFilteredNews",newpage,category,country, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        instance.newsdata.set(result.data.result)
        console.log(this.newsdata);
        //console.log(result)
        window.scrollTo(0, 0);
      }
    });
  },
});
