const WATI_API_ENDPOINT = "https://wati-server-demo5.clare.ai";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2MxZjk1Yi05MTBlLTQ5ZjYtYWQzZS1lYTU2YjVmNmQ4M2UiLCJ1bmlxdWVfbmFtZSI6ImphaG5hdmlAY2xhcmUuYWkiLCJuYW1laWQiOiJqYWhuYXZpQGNsYXJlLmFpIiwiZW1haWwiOiJqYWhuYXZpQGNsYXJlLmFpIiwiYXV0aF90aW1lIjoiMDUvMTUvMjAyMyAwNzoxNDo1NyIsImRiX25hbWUiOiJ3YXRpX2RlbW81IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiRVhURVJOQUxfQURNSU5JU1RSQVRPUiIsImV4cCI6MjUzNDAyMzAwODAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.Ll42vPOreqem4dgACMzMCjmgMr7wXpEg5dogsNJkPdk";

const sendTemplateMessage = function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    //validate the phone number string
    let regexPattern = /^\d{10}$/;
    let isValidPhoneNumber = regexPattern.test(phone);    

    if(name.length === 0) {
        alert("Please enter a valid name");
        return;
    }

    if(!isValidPhoneNumber) {
        alert("Please enter a 10 digit whatsapp number");
        return;
    }

    const options = {
        method: 'POST',
        headers: {
          'content-type': 'text/json',
          Authorization: AUTH_TOKEN
        },
        body: JSON.stringify({
          parameters: [{name: 'name', value: name}, {name: 'number', value: phone}],
          template_name: 'registration_confirmation',
          broadcast_name: 'New Broadcast'
        })
      };
      
      fetch(`${WATI_API_ENDPOINT}/api/v1/sendTemplateMessage?whatsappNumber=918630966711`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";

}


//console.log(document.getElementById("submitButton"));

document.getElementById("submitButton").addEventListener("click", sendTemplateMessage);

