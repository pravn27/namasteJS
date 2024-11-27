function getName() {
  var userName = "Praveen";
  getUserName();
  function getUserName() {
    console.log(userName);
  }
}

getName();
