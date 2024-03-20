import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../../ui/pages/home";
import "../../ui/pages/newsdetail"
import "../../ui/pages/newscategory"
import "../../ui/pages/notFoundPage"


FlowRouter.route("/", {
  name: "home",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "home" });
    Meteor.call('getNews',(error,result)=>{
      if(error){
        console.log(error)
      }else{
        console.log(result)
      }
    });
  },
});

FlowRouter.route("/:_category", {
  name: "newscategory",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "newscategory" });
    Meteor.call('getFilteredNews',params._category,queryParams,(error,result)=>{
      if(error){
        console.log(error)
      }else{
        console.log(result)
      }
    });
  },
});

FlowRouter.route("/news/:_id", {
  name: "newsdetail",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "newsdetail" });
    Meteor.call('getNewsDetail',params._id,(error,result)=>{
      if(error){
        console.log(error)
      }else{
        console.log(result)
      }
    });
  },
});

FlowRouter.notFound = {
  name: "notfound",
  action() {
    BlazeLayout.render('notFoundLayout', { content: 'notFoundPage' });
  }
};

