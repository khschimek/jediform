// Runs on Page Load
function main() {
    var jediKnights = localStorage.getItem("jediKnights")
    console.log("Existing Jedi: " + jediKnights)
    console.log("custom javascript loaded")
}

// Set lightsaber color with Color Code - ex: color="#00FF00" for green
function setLightsaberColor(color) {
    console.log("setting lightsaber color to " + color + "...")

    // Update both the lightsaber color picker and Train Button with selected color
    document.getElementById("lightsaber").value = color
    document.getElementById("trainButton").style = "background-color:" + color + ";width:80%;"

    console.log("color set")
}

// Updates default lightsaber color when User selects Designation
function typeSelected(HTMLinput) {
    console.log("designation " + HTMLinput.value + " selected")

    var jediType = document.getElementById("jediType").value
    var defaultLightsaberColor = "green"

    if (jediType == "Consular") {
        defaultLightsaberColor = "#00FF00" //green
    } else if (jediType == "Guardian") {
        defaultLightsaberColor = "#0000FF" //blue
    } else { // Sentinel
        defaultLightsaberColor = "#FFFF00" //yellow
    }

    setLightsaberColor(defaultLightsaberColor)
}

// Updates lightsaber color when user selects Color
function colorSelected(HTMLinput) {
    console.log("color " + HTMLinput.value + " selected")
    setLightsaberColor(HTMLinput.value)
}

// Build a new Jedi object and add it to the Local Storage Jedi Knights object
function trainJedi() {

    console.log("training Jedi...")

    // Check for any existing Knights in Local Storage
    var jediKnights = localStorage.getItem("jediKnights")
    console.log(JSON.stringify(jediKnights))

    // Create a new Jedi object
    var newJedi = {
        name: document.getElementById("jediName").value,
        type: document.getElementById("jediType").value,
        master: document.getElementById("jediMaster").value,
        lightsaber: document.getElementById("lightsaber").value,
        rank: 1
    }

    // Add the new Jedi to the Collection of Knights and Update Local Storage
    jediKnights += newJedi
    localStorage.setItem("jediKnights", JSON.stringify(jediKnights))
}

// Run main function on Page Load
main()
