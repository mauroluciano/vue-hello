const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World!",
      image: "./img/image.jpg",
      alt: "ciao",
    };
  },
}).mount("#app");
