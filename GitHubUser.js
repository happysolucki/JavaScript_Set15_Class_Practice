class GitHubUser {
  constructor(userName, fileName, descriptionOfRepository, code) {
    this.userName = userName;
    this.fileName = fileName;
    this.descriptionOfRepository = descriptionOfRepository;
    this.code = code;
  }

  listProperties() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let user = new GitHubUser(
    "happysolucki",
    "test.js",
    "A test repository",
    "some code..."
  );
  console.log("EX 4");
  user.listProperties();
}

main();
