// Second section, 6 identical images with sub text

// Display image 6 times (Stack overflow)
const teeNames = [
    "Gember Thee",
    "Groene Thee",
    "Kamille Thee",
    "Munt Thee",
    "Zwarte Thee",
    "Appel Thee",
  ]

  for (var i = 0; i < 6; i++) {
    var img = new Image()
    img.src = "https://i.imgur.com/Wv9qrfa.jpeg"
    var tee = teeNames[i]
    // Create div-element, add classname, add to created div
    // and put it in the div with id "tee-cup-wrapper"
    var div = document.createElement("div")
    var p = document.createElement("p")
    div.classList.add("section-" + i)
    p.classList.add("section-" + i)
    div.appendChild(img)
    p.appendChild(tee)
    document.getElementById("tee-cup-wrapper").appendChild(div)
  }