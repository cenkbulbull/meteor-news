import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import "../ui/components/shared/navbar";
import "../ui/components/shared/footer";
import "../ui/components/newscard.html";
import "../ui/components/trendingcard.html";

import "./main.html";

import "../lib/router/routes";

//template
import "./template/home";
import "./template/newscategory";
import "./template/newsdetail";
import "./template/newscard";
import "./template/trendingcard";

Template.navbar.events({
  "click .search-city"(event,instance) {
    const searchbtn = event.currentTarget;
    const cityinput = searchbtn.previousElementSibling.value;
    Meteor.call("getNewsLocal", cityinput, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        alert("CollectAPI, getNewsLocal endpointinde parametre hatası vermektedir. Hata Mesajı  "+ result.content)
      }
    });
  },
});
