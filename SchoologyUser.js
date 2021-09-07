class SchoologyUser {
  constructor(studentName, schoolName, GPA, classes) {
    this.studentName = studentName;
    this.schoolName = schoolName;
    this.GPA = GPA;
    this.classes = classes;
  }

  listProperties() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let user = new SchoologyUser(
    "Bradley Beal",
    "Univ. of Florida",
    3.8,
    "Calculus, English, Anthropology"
  );
  console.log("EX 5");
  user.listProperties();
}

main();
