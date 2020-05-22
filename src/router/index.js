import Vue from "vue";
import VueRouter from "vue-router";
import pageOne from "@/components/pageOne.md";
import pageTwo from "@/components/pageTwo.md";
import pageThree from "@/components/pageThree.md";
import pageFour from "@/components/pageFour.md";
import pageFive from "@/components/pageFive.md";
import pageSix from "@/components/pageSix.md";
import pageSeven from "@/components/pageSeven.md";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pageOne",
    component: pageOne
  },
  {
    path: "/pageTwo",
    name: "pageTwo",
    component: pageTwo
  },
  {
    path: "/pageThree",
    name: "pageThree",
    component: pageThree
  },
  {
    path: "/pageFour",
    name: "pageFour",
    component: pageFour
  },
  {
    path: "/pageFive",
    name: "pageFive",
    component: pageFive
  },
  {
    path: "/pageSix",
    name: "pageSix",
    component: pageSix
  },
  {
    path: "/pageSeven",
    name: "pageSeven",
    component: pageSeven
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
