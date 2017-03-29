// product constructor
function CharacterArray(name, universe, type, appearances, image) {
	this.name  = name
	this.universe  = universe
	this.type = type
	this.appearances = appearances
	this.image = image
}

// create new products from the product constructor
var spiderman  = new Shirt("Spiderman", "Marvel", "Hero", 7, "img/spiderman.jpg")
var deadpool  = new Shirt("Deadpool", "Marvel", "Anti Hero", 2, "img/deadpool.jpg")
var ironman    = new Shirt("Ironman", "Marvel", "Hero", 5, "img/ironman.jpg")
var wonderwoman   = new Shirt("Wonder Woman", "DC", "Hero", 2, "img/wonderwoman.jpg")
var batman  = new Shirt("Batman", "DC", "Hero", 6, "img/batman.jpg")
var aquaman = new Shirt("Aquaman", "DC", "Hero", 1, "img/aquaman.jpg")
var magneto = new Shirt("Magneto", "Marvel", "Villian", 5, "img/magneto.jpg")
var joker  = new Shirt("Joker", "DC", "Villian", 3, "img/joker.jpg")
var wolverine = new Shirt("Wolverine", "Marvel", "Anti Hero", 7, "img/wolverine.jpg")

// add products to array of products
characterArray.push(spiderman, deadpool, ironman, wonderwoman, batman, aquaman, magneto, joker, wolverine)

// loop through products array
for(var i = 0; i < characterArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var universeH4   = document.createElement("h4")
	var typeH4  = document.createElement("h4")
	var appearancesH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")