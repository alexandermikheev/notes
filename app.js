const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
      notes: ["task 1", "task 2", "task 3"],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);

      // reset
      this.input.value = "";
    },
    remove(index) {
      console.log(`note: ${index} has been removed`);
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
