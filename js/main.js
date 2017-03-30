// product constructor
function characterArray(name, universe, type, appearances, image) {
	this.name = name
	this.universe = universe
	this.type = type
	this.appearances = appearances
	this.image = image
}

// create new products from the product constructor
var spiderman = new characterArray("Spiderman", "Marvel", "Hero", 7, "img/spiderman.jpg")
var deadpool = new characterArray("Deadpool", "Marvel", "Anti Hero", 2, "img/deadpool.jpg")
var ironman = new characterArray("Ironman", "Marvel", "Hero", 5, "img/ironman.jpg")
var wonderwoman = new characterArray("Wonder Woman", "DC", "Hero", 2, "img/wonderwoman.jpg")
var batman = new characterArray("Batman", "DC", "Hero", 7, "img/batman.jpg")
var aquaman = new characterArray("Aquaman", "DC", "Hero", 1, "img/aquaman.jpg")
var magneto = new characterArray("Magneto", "Marvel", "Villian", 5, "img/magneto.jpg")
var joker = new characterArray("Joker", "DC", "Villian", 3, "img/joker.jpg")
var wolverine = new characterArray("Wolverine", "Marvel", "Anti Hero", 7, "img/wolverine.jpg")
var venom = new characterArray("Venom", "Marvel", "Villian", 1, "img/venom.jpg")
var bane = new characterArray("Bane", "DC", "Villian", 1, "img/bane.jpg")
var flash = new characterArray("Flash", "DC", "Hero", 2, "img/flash.jpg")

// create an array to add products to
var newCharArray = new Array

// add products to array of products
newCharArray.push(spiderman, deadpool, ironman, batman,wonderwoman, joker, aquaman, wolverine, magneto, flash, bane, venom)


// loop through products array
for(var i = 0; i < newCharArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var universeH4   = document.createElement("h4")
	var typeH4  = document.createElement("h4")
	var appearancesH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var characterName = document.createTextNode(newCharArray[i].name)
	var characterUniverse = document.createTextNode("Comic Universe: " + newCharArray[i].universe)
	var characterType = document.createTextNode("Type: " + newCharArray[i].type)
	var characterAppearances = document.createTextNode("Appearances in Movies: " + newCharArray[i].appearances)
	var likeButton = document.createTextNode("Add to team")

	// update source attribute
	image.src = newCharArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-lg-3"
	newDiv.className = "Character Name" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(characterName)
	universeH4.appendChild(characterUniverse)
	typeH4.appendChild(characterType)
	appearancesH4.appendChild(characterAppearances)
	btn.appendChild(likeButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(universeH4)
	newDiv.appendChild(typeH4)
	newDiv.appendChild(appearancesH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
	document.getElementById("productsTwo").appendChild(newItem)
}

