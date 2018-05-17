//the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#volSignup").on("click", function (event) {
            event.preventDefault();

          

                // make a newUser obj
                var newUser = {
                    // name from name input
                    firstName: $("#firstName").val().trim(),
                    // name from name input
                    lastName: $("#lastName").val().trim(),
                    // orgEmail from orgEmail input
                    volEmail: $("#volEmail").val().trim(),
                    // password from password input
                    password: $("#password").val().trim(),
                    // phone number from phone number input
                    phoneNum: $("#phoneNum").val().trim()
                    
                };  
                console.log(newUser);

               

                // send an AJAX POST-request with jQuery
                $.post("/api/newUser", newUser)
                    // on success, run this callback
                    .then(function (data) {
                        // log the data we found
                        console.log(data);
                       
                        window.location.href = data.redirect
                    });

                // empty each input box by replacing the value with an empty string
                $("#firstName").val(""); 
                $("#lastName").val("");
                $("#volEmail").val("");
                $("#password").val("");
                $("#phoneNum").val("");
                

            });


            // org on click
            $("#orgSignup").on("click", function (event) {
                event.preventDefault();
    
              
             // make a newOrg obj
             var newOrg = {
                // name from name input
                OrgName: $("#orgName").val().trim(),
                // orgEmail from orgEmail input
                orgEmail: $("#orgEmail").val().trim(),
                // password from password input
                password1: $("#password1").val().trim(),
                // phone number from phone number input
                phoneNum1: $("#phoneNum1").val().trim(),
                // hh role
            };

              // send an AJAX POST-request with jQuery
              $.post("/api/new", newOrg)
              // on success, run this callback
              .then(function (data) {
                  // log the data we found
                  console.log(data);
                 
                });
                  $("#orgName").val("");
                  $("#orgEmail").val("");
                  $("#password1").val("");
                  $("#phoneNum1").val("");
                });