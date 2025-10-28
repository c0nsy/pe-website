import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PropertyMaintenance from "../views/PropertyMaintenance.vue";
import ContractServices from "../views/ContractServices.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/property-maintenance",
    name: "PropertyMaintenance",
    component: PropertyMaintenance,
  },
  {
    path: "/additional-services",
    name: "AdditionalServices",
    component: ContractServices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
