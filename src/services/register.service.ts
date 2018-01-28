

export class RegisterService {
  userName = "";
  userAbout = "";
  userTagsArr = [];
  userZip = "";

  addUserTags(tags) {
    this.userTagsArr = [];
    for (var i = 0; i < tags.length; i++) {
      this.userTagsArr.push(tags[i]);
    }
    console.log(this.userTagsArr);
  }

  addUserInfo(name, about) {
    this.userName = name;
    this.userAbout = about;
    console.log(this.userName);
    console.log(this.userAbout);
  }

  addUserZip(zip) {
    this.userZip = zip;
    console.log(this.userZip);
  }
}
