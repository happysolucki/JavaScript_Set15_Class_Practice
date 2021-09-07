class CodeSchoolInstructor {
  constructor(teacherName, previousEmployer, knownLanguages) {
    this.teacherName = teacherName;
    this.previousEmployer = previousEmployer;
    this.knownLanguages = knownLanguages;
  }

  listProperties() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let instructor = new CodeSchoolInstructor(
    "Angela Yu",
    "London App Brewery",
    "English"
  );
  console.log("EX 6");
  instructor.listProperties();
}

main();
