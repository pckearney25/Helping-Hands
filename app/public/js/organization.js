$(document).ready(function() {
  /* global moment */
  var hhOrgData = JSON.parse(localStorage.hhUserData);
  console.log(hhOrgData);

  $("#session-storage").html(hhOrgData);
});
