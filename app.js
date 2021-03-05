const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
      notes: ["task 1", "task 1", "task 2"],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);

      // reset
      this.input.value = "";
    },
  },
};

Vue.createApp(App).mount("#app");
