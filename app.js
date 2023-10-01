const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
      notes: [{
                name: "task1",
                edit: false,
              },
              {
                name: "task2",
                edit: false,
              },
              {
                name: "task3",
                edit: false,
              },
      ],
    };
  },
  mounted() {
     this.getNotes();
  },
   watch: {
     notes: {
       handler(updatedList) {
         localStorage.setItem("notes", JSON.stringify(updatedList));
     },
       deep: true,
     },
   },
  methods: {
     getNotes() {
       const localNotes = localStorage.getItem("notes");
       if (localNotes) {
         this.notes = JSON.parse(localNotes);
       }
     },
    onSubmit() {
      inputObj = {
        name: this.input.value,
        edit: false
      }
      this.notes.push(inputObj);

      // reset
      this.input.value = "";
    },
    remove(index) {
      console.log(`note: ${index} has been removed`);
      this.notes.splice(index, 1);
    },
    edit(idx){
      this.notes[idx].edit = true
    },
    pushEdit(idx){
      let a = document.querySelectorAll("input")[1].value
      this.notes[idx].name = a;
      this.notes[idx].edit = false
    }
  }
};

Vue.createApp(App).mount("#app");
