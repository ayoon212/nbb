import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Media from "./components/Media.vue";
import Shows from "./components/Shows.vue";
import Contact from "./components/Contact.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/media", component: Media },
  { path: "/shows", component: Shows },
  { path: "/contact", component: Contact },
  { path: "/*", redirectTo: Home }
];
