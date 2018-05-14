$(document).ready(function() {
  // Getting references to the name input and volunteer container, as well as the table body
  var nameInput = $("#volunteer-name");
  var volunteerList = $("tbody");
  var volunteerContainer = $(".volunteer-container");
  // Adding event listeners to the form to create a new volunteer
 
  $(document).on("submit", "#volunteer-form", handlevolunteerFormSubmit);


  // Getting the initial list of volunteers
  getvolunteers();

  // A function to handle what happens when the form is submitted to create a new volunteer
  function handlevolunteerFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertvolunteer function and passing in the value of the name input
    upsertvolunteer({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an volunteer. Calls getvolunteers upon completion
  function upsertvolunteer(volunteerData) {
    $.post("/api/volunteers", volunteerData)
      .then(getvolunteers);
  }

  // Function for creating a new list row for volunteers
  function createvolunteerRow(volunteerData) {
    var newTr = $("<tr>");
    newTr.data("volunteer", volunteerData);
    newTr.append("<td>" + volunteerData.name + "</td>");
    newTr.append("<td> " + volunteerData.Posts.length + "</td>");
    newTr.append("<td><a href='/event?volunteer_id=" + volunteerData.id + "'>Go to Events</a></td>");
    return newTr;
  }

  // Function for retrieving volunteers and getting them ready to be rendered to the page
  function getvolunteers() {
    $.get("/api/volunteers", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createvolunteerRow(data[i]));
      }
      rendervolunteerList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of volunteers to the page
  function rendervolunteerList(rows) {
    volunteerList.children().not(":last").remove();
    volunteerContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      volunteerList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no volunteers
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an account before you can see events.");
    volunteerContainer.append(alertDiv);
  }

  
 
});
