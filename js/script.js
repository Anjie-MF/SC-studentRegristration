const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json")
    const data = await request.json(); //this line parses the JSON file
    console.log(data);
    displayContactList(data);
};

const displayContactList = function (data) {
    for (const student of data) { //this line loops over the data
        if (student.registered === "no") {
            const li = document.createElement("li"); //this line create a new list element...
            li.innerText = student.name; //...that contains their name
            notRegistered.append(li); //this line appends the notRegistered element in the DOM
        }
    }
};

getRegistrationData();