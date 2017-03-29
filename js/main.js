// product constructor
function Character(name, universe, type, appearances, image) {
	this.name  = name
	this.universe  = universe
	this.type = type
	this.appearances = appearances
	this.image = image
}

// create new products from the product constructor
var spiderman  = new Shirt("Spiderman", "Marvel", "Hero", 7, "img/whitetee.png")
var deadpool  = new Shirt("Deadpool", "Marvel", "Anti Hero", 2, "img/blacktee.png")
var ironman    = new Shirt("Ironman", "Marvel", "Hero", 5, "img/redtee.png")
var wonderwoman   = new Shirt("Wonder Woman", "DC", "Hero", 2, "img/bluetee.png")
var batman  = new Shirt("Batman", "DC", "Hero", 6, "img/greentee.png")
var aquaman = new Shirt("Aquaman", "DC", "Hero", 1, "img/yellowtee.png")
var magneto = new Shirt("Magneto", "Marvel", "Villian", 5, "img/bluetee.png")
var joker  = new Shirt("Joker", "DC", "Villian", 3, "img/greentee.png")
var wolverine = new Shirt("Wolverine", "Marvel", "Anti Hero", 7, "img/yellowtee.png")