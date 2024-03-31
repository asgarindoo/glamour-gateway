import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./index.css";
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
  .use(router)
  .use(
    createAuth0({
      domain: "dev-e28uq2rrwhlukf2g.us.auth0.com",
      clientId: "A1DifQ4gsVrJMQ13fUbQ785HLTv2sLEP",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  )
  .mount("#app");
