const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.input);
    },
  },
};

Vue.createApp(App).mount("#app");
