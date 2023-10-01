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
    edit(name, idx){
      console.log(name,idx)
      // this.notes[idx].push(input);
      this.notes[idx].edit = true
      console.log(this.notes[idx].edit);
    },
    pushEdit(idx){
      let a = document.querySelectorAll("input")
      let value = a[1].value
      this.notes[idx].name = value;
      this.input.value = ""
      this.notes[idx].edit = false
    }
  }
};

Vue.createApp(App).mount("#app");
