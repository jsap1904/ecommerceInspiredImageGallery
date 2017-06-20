// product constructor
function climbShoeArray(shoe, brand, gender, level, image) {
	this.shoe = shoe
	this.brand = brand
	this.gender = gender
	this.level = level
	this.image = image
}

// create new products from the product constructor
var lotus = new climbShoeArray("Lotus", "Mad Rock", "Womens", "advanced", "img/lotus.jpg")
var masai = new climbShoeArray("Masai", "Tenaya", "Unisex", "beginner", "img/masai.jpg")
var miura = new climbShoeArray("Miura", "La Sportiva", "Mens", "adavanced", "img/miura.jpg")
var nago = new climbShoeArray("Nago", "La Sportiva", "Mens", "beginner", "img/nago.jpg")
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
	var nameH2   = document.createElement("h2")
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
	var likeButton = document.createTextNode("like")

	// update source attribute
	image.src = newCharArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-lg-3"
	newDiv.className = "Character Name" + [i] + " thumbnail"
	
	// add text to elements
	nameH2.appendChild(characterName)
	universeH4.appendChild(characterUniverse)
	typeH4.appendChild(characterType)
	appearancesH4.appendChild(characterAppearances)
	btn.appendChild(likeButton)

	// add elements to new div
	newDiv.appendChild(nameH2)
	newDiv.appendChild(image)
	newDiv.appendChild(universeH4)
	newDiv.appendChild(typeH4)
	newDiv.appendChild(appearancesH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)

}

