const currentTime = moment()
$("#currentDay").text(currentTime.format("dddd, MMMM Do"));

console.log(timeNotes)

const container = document.getElementById("time-container");



function saveNote(event) {

    event.preventDefault();
    //Point to button
    const button = event.target;
    //Ensure correct button selected
    console.log(event.target)
    //grab time from button ID
    const buttonId = button.id;
    console.log(buttonId)
    //remove "button" leaving just time e.g. "9am" or "11am"
    const time = buttonId.slice(7);
    console.log(time)
    ;
    //grab user input
    const textArea = document.getElementById('textarea-' + time);
    const userInput = textArea.value
    console.log(userInput)
    //store in Local storage - store to array - object, hopefully
    localStorage.setItem(time, JSON.stringify(userInput));
    
}

//Function to return items from storage to page - very manual, may try to automate
function init() {
    var nineAmSlot = JSON.parse(localStorage.getItem("9am"));
    document.getElementById('textarea-9am').textContent = nineAmSlot
    var tenAmSlot = JSON.parse(localStorage.getItem("10am"));
    document.getElementById('textarea-10am').textContent = tenAmSlot
    var elevenAmSlot = JSON.parse(localStorage.getItem("11am"));
    document.getElementById('textarea-11am').textContent = elevenAmSlot
    var twelvePmSlot = JSON.parse(localStorage.getItem("12pm"));
    document.getElementById('textarea-12pm').textContent = twelvePmSlot
    var onePmSlot = JSON.parse(localStorage.getItem("1pm"));
    document.getElementById('textarea-1pm').textContent = onePmSlot
    var twoPmSlot = JSON.parse(localStorage.getItem("2pm"));
    document.getElementById('textarea-2pm').textContent = twoPmSlot
    var threePmSlot = JSON.parse(localStorage.getItem("3pm"));
    document.getElementById('textarea-3pm').textContent = threePmSlot
    var fourPmSlot = JSON.parse(localStorage.getItem("4pm"));
    document.getElementById('textarea-4pm').textContent = fourPmSlot
    var fivePmSlot = JSON.parse(localStorage.getItem("5pm"));
    document.getElementById('textarea-5pm').textContent = fivePmSlot

}

function createTimeRow() {
    // Cycle through array
    for (let index = 0; index < timeNotes.length; index++) {
        const timeNote = timeNotes[index];
        // Pull time + message from array
        let time = timeNote.time
        let note = timeNote.message
        // create "container" element
        let timeDiv = document.createElement("div")
        timeDiv.setAttribute('class', "d-flex flex-row")
        timeDiv.setAttribute('id', "row-" + time)
        // append child time to time div
        let timeNumber = document.createElement("div")
        timeNumber.setAttribute('class', "hour col-1")
        timeNumber.textContent = time
        timeDiv.appendChild(timeNumber)

        // append child block to time div
        let inputBlock = document.createElement("div")
        inputBlock.setAttribute('class', "input-group mb-2 col-11 description")
        timeDiv.appendChild(inputBlock)
        // append child input to block
        let input = document.createElement("textarea")
        input.setAttribute('class', "form-control input-height")
        input.setAttribute('id', "textarea-" + time)
        input.textContent = note
        inputBlock.appendChild(input)
        // append child button to block
        let button = document.createElement("button")
        button.setAttribute('class', "btn btn-primary saveBtn")
        button.setAttribute('id', "button-" + time)
        button.addEventListener("click", saveNote);

        button.textContent = "💾"
        inputBlock.appendChild(button)
        // append class to input based upon moment time



        //append entire timeDiv to container so it can be displayed on the page
        container.appendChild(timeDiv)


    }
}

createTimeRow()

init()

