import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../../ui/pages/home";
import "../../ui/pages/newsdetail"

/*FlowRouter.route("/lists", {
  name: "Lists.show",
  action(params, queryParams) {
    console.log("Looking at a list?");
  },
});*/

FlowRouter.route("/", {
  name: "home",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "home" });
  },
});

FlowRouter.route("/news/:_id", {
  name: "newsdetail",
  action(params, queryParams) {
    BlazeLayout.render("App_body", { content: "newsdetail" });
  },
});

