var currentTime = moment()
$("#currentDay").text(currentTime.format("dddd, MMMM Do"));

console.log(timeNotes)

var container = document.getElementById("time-container");

// Cycle through array
for (let index = 0; index < timeNotes.length; index++) {
    const timeNote = timeNotes[index];
    // Pull time + message from array
    let time = timeNote.time
    let note = timeNote.message
    // create "container" element
    let timeDiv = document.createElement("div")
    timeDiv.setAttribute('class', "d-flex flex-row")
    // append child time to time div
    let timeNumber = document.createElement("div")
    timeNumber.setAttribute('class', "hour col-1")
    timeNumber.textContent = time
    timeDiv.appendChild(timeNumber)

    // append child block to time div
    let inputBlock = document.createElement("div")
    inputBlock.setAttribute('class', "input-group mb-3 col-11")
    timeDiv.appendChild(inputBlock)
    // append child input to block
    let input = document.createElement("input")
    input.setAttribute('class', "form-control input-height")
    inputBlock.appendChild(input)
    // append child button to block
    let button = document.createElement("button")
    button.setAttribute('class', "btn btn-outline-secondary saveBtn")
    button.textContent = "💾"
    inputBlock.appendChild(button)
    // append class to input based upon moment time
    
    
    //append entire timeDiv to container so it can be displayed on the page
    container.appendChild(timeDiv)


}

console.log(currentTime)