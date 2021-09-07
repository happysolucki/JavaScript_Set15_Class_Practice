class TwitterUser {
  constructor(userName, followingNumber, followersNumber, pictureURL) {
    this.userName = userName;
    this.followingNumber = followingNumber;
    this.followersNumber = followersNumber;
    this.pictureURL = pictureURL;
  }

  listProperties() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let user = new TwitterUser("happysolucki", 96, 936, "./assets/pfp.png");
  console.log("EX 3");
  user.listProperties();
}

main();
