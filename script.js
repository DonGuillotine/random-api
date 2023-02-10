// We create a variable with the API url as a value
var api_url = "https://randomuser.me/api/";

async function getUser(){
    // Make an API call or request
    // get the response back
    var response = await fetch(api_url);

    // Parse it to JSON format
    var data = await response.json();
    console.log(data.results);
    
    // Can be better written with newer versions of Javascript

    // RETRIEVE DATA FROM JSON
    var user = data.results[0];
    var username = user.name;
    var title = username.title;
    var first = username.first;
    var last = username.last;
    var gender = user.gender;
    var email = user.email;
    var phone = user.phone;
    var image = user.picture.large;
    var image_icon = user.picture.thumbnail;
    var age = user.dob.age;
    var userLocation = user.location;
    var city = userLocation.city;
    var state = userLocation.state;
    var country = userLocation.country;

    var fullName = title + ". " + first + "" + last;
    document.title = fullName;

    // Access the div container
    // and add elements to containers
    document.getElementById("head").innerHTML = fullName;
    document.getElementById("email").innerHTML = "mailto: " + email;
    document.getElementById("email").innerHTML = email;
    document.getElementById("phone").innerHTML = "Telephone number " + phone;   
    document.getElementById("phone").innerHTML = phone;

    // Accessing our Span Container
    document.querySelector("#age").textContent = age;
    document.querySelector("#gender").textContent = gender;
    document.querySelector("#location").textContent = city + " " + state;
    document.querySelector("#country").textContent = country;
    
    // Create a new element and append or attach it
    // to previously created containers

    var img = document.createElement("img");
    var img_div = document.getElementById("user-img");
    img.src = image;
    img_div.append(img);

    var favicon = document.getElementById("favicon");
    favicon.setAttribute("href", image_icon);
}
getUser();
