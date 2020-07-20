// TODO: add code here
function getSortOrder(prop) {
    return function(a,b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        }
    }

window.addEventListener("load", function () {
    //fetch command send request to URL
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        //handler function retreives JSON data from response object. Calls anonymous function. 
        response.json().then(function (json) {
            //div object defined and linke to HTML element with id of container

            //Count
            const count = document.getElementById("count");
            count.innerHTML = "ASTRONAUT COUNT: " + json.length;

            //Sort
            json.sort(getSortOrder("hoursInSpace"));

            for (item in json) {
                const div = document.getElementById("container");

                //default value of red text
                let activeColor = "red";
                //set color to green if active
                if (json[item].active) {
                    activeColor = "green";
                };


                //innerHTML property of div object set to HTML elements in quotes
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                    <h3>${json[item].firstName} ${json[item].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[item].hoursInSpace}</li>
                                <li style= "color:${activeColor}">Active: ${json[item].active}</li>
                                <li>Skills: ${json[item].skills.join(", ")}</li>
                            </ul>
                        </div>
                            <img class="avatar" src=${json[item].picture}>
                </div>
                    `;
            };
        });
    });
});