import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

//oncreated
Template.newscategory.onCreated(function () {
  const instance = this;
  instance.newsdata = new ReactiveVar(null)
  instance.loading = new ReactiveVar(true)
  instance.page = new ReactiveVar(0);
  instance.category = new ReactiveVar(null)
  instance.country = new ReactiveVar("tr")
    // Bu işlev, URL parametreleri değiştiğinde çalışır
    instance.autorun(function () {
      const category = FlowRouter.getParam('_category');
      const currentPage = instance.page.get()
      const currentCountry = instance.country.get()
      instance.loading.set(true); // Yükleme başladığında loading durumunu true olarak ayarlıyoruz
      Meteor.call('getFilteredNews',currentPage, category, currentCountry ,(error, result) => {
        if (error) {
          console.log(error);
        } else {
          instance.newsdata.set(result.data.result);
          instance.loading.set(false);
          instance.category.set(category)
          console.log(instance.newsdata.get());
        }
      });
    });
});

//helpers
Template.newscategory.helpers({
  data() {
    const instance = Template.instance();
    return instance.newsdata.get();
  },
  isLoading() {
    const instance = Template.instance();
    return instance.loading.get(); // Yükleme durumunu döndürüyoruz
  },
  getCategoryName(){
    const instance = Template.instance();
    return instance.category.get();
  }
});

//events
Template.newscategory.events({
  'change .country-select'(event) {
    const instance = Template.instance();
    const category = FlowRouter.getParam('_category') || "general";
    instance.page.set(0);
    const currentPage = instance.page.get();
    instance.country.set(event.target.value)
    const country = instance.country.get()
    Meteor.call('getFilteredNews', currentPage,category,country, (error, result) => {
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
    const category = FlowRouter.getParam('_category') || "general";
    const currentPage = instance.page.get();
    instance.page.set(currentPage + 1);
    const newpage = instance.page.get();
    const country = instance.country.get()
    Meteor.call("getFilteredNews",newpage,category,country, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        instance.newsdata.set(result.data.result)
        window.scrollTo(0, 0);
      }
    });
  },
});