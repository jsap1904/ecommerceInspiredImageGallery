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
var miura = new climbShoeArray("Miura", "La Sportiva", "Mens", "advanced", "img/miura.jpg")
var nago = new climbShoeArray("Nago", "La Sportiva", "Mens", "beginner", "img/nago.jpg")
var techno = new climbShoeArray("Techno", "Scarpa", "Womens", "intermediate", "img/techno.jpg")
var addict = new climbShoeArray("Addict", "Evolv", "Unisex", "intermediate", "img/addict.jpg")
var finale = new climbShoeArray("Finale", "La Sportiva", "Mens", "beginner", "img/finale.jpg")
var helix = new climbShoeArray("Helix", "La Sportiva", "Mens", "beginner", "img/helix.jpg")
var hiangle = new climbShoeArray("Hiangle", "Scarpa", "Mens", "advanced", "img/hiangle.jpg")
var instinct = new climbShoeArray("Instinct", "Scarpa", "Mens", "advanced", "img/instinct.jpg")
var katana = new climbShoeArray("Katana", "La Sportiva", "Womens", "intermediate", "img/katana.jpg")
var moccasym = new climbShoeArray("Moccasym", "Five Ten", "Unisex", "intermediate", "img/moccasym.jpg")



// create an array to add products to
var newShoeArray = new Array

// add products to array of products
newShoeArray.push(lotus, masai, miura, nago,techno, addict, finale, helix, hiangle, instinct, katana, moccasym)


// loop through products array
for(var i = 0; i < newShoeArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH2   = document.createElement("h2")
	var brandH4   = document.createElement("h4")
	var genderH4  = document.createElement("h4")
	var levelH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")
	var result = document.createElement("div")



	// var x = document.getElementsByTagName("button")[0].createAttribute.onclick.likeCounter();
function likeCounter () {

	var likebtn = document.getElementsByTagName("button")[0];   // Get the first <h1> element in the document
	var att = document.createAttribute("onclick");       // Create a "class" attribute
	att.value = "likeCounter()";                           // Set the value of the class attribute
	likebtn.setAttributeNode(att);   					 // Add the class attribute to <h1>
	
	if (typeof(Storage) !== "undefined") {

		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
		} else {
			sessionStorage.clickcount = 1;
		}

	document.getElementById("result").innerHTML = sessionStorage.clickcount + "Likes"
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage.";
	}
}

	// create text for new elements
	var shoeName = document.createTextNode(newShoeArray[i].shoe)
	var shoeBrand = document.createTextNode("Brand: " + newShoeArray[i].brand)
	var shoeGender = document.createTextNode("Gender: " + newShoeArray[i].gender)
	var shoeLevel = document.createTextNode("Level: " + newShoeArray[i].level)
	// var likeButton = document.createTextNode("like " + sessionStorage.clickcount)
	// var likes = document.createTextNode(sessionStorage.clickcount + "Likes")


	// update source attribute
	image.src = newShoeArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-lg-3"
	newDiv.className = "Shoe Name" + [i] + " thumbnail"
	result.className = "result"
	
	// add text to elements
	nameH2.appendChild(shoeName)
	brandH4.appendChild(shoeBrand)
	genderH4.appendChild(shoeGender)
	levelH4.appendChild(shoeLevel)
	// btn.appendChild(likeButton)
	// result.appendChild(likes)

	// add elements to new div
	newDiv.appendChild(nameH2)
	newDiv.appendChild(image)
	newDiv.appendChild(brandH4)
	newDiv.appendChild(genderH4)
	newDiv.appendChild(levelH4)
	// newDiv.appendChild(btn)
	// newDiv.appendChild(result)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="products"
	document.getElementById("products").appendChild(newItem)


	
}

