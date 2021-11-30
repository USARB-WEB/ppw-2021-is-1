const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      x: 0,
      y: 0,
      name: "",
      students: [
          {
            name: "Ion",
            age: 12
          },
          {
            name: "Mihai",
            age: 33
          } 
      ],
      averageMark: 1
    },
    computed: {
        sum(){
            return Number(this.x) + Number(this.y);
        },
        reversedName() {
            return this.name.split("").reverse().join("")
        }
    },
    methods: {
        addStudent(){
            this.students.push({
                name: this.studentName,
                age: this.studentAge
            })
        },
        deleteStudent(id){
            this.students.splice(id, 1);
        }
    }
})