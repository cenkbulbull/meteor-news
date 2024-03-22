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
  },
});

FlowRouter.route("/:_category", {
  name: "newscategory",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "newscategory", data:{params , queryParams} });
  },
});

FlowRouter.route("/news/:_id", {
  name: "newsdetail",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "newsdetail" });
  },
});

FlowRouter.route("*", {
  name: "notfound",
  action() {
    BlazeLayout.render('notFoundLayout', { content: 'notFoundPage' });
  }
});

