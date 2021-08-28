
const figures = document.getElementsByClassName("imageToSelect");
// attributi da cambiare in base alla figura
let title = document.getElementById("title-figure");
let image = document.getElementById("current-image");
let formulaTitle = document.getElementById("formula-title");
let formulaImage = document.getElementsByClassName("formula-image");
let textInput = document.querySelectorAll(".textInput");

for (let i = 0; i < figures.length; i++) {
	figures[i].addEventListener("click", function(e) {
		try{	//rimuove eventuali input in eccesso
			let deleteInput = document.getElementsByClassName("temp-input");
			while(deleteInput.length > 0) {	//finche ci sono elementi con quella classe
				deleteInput[0].parentNode.removeChild(deleteInput[0]);	//rimuovo sempre il primo elemento
			}
			// ripulisce il valore degli input
			for(let i = 0; i < textInput.length; i++){
				textInput[i].value = "";
			}
			// calcello il valore dei risultati
			results[0].innerHTML = "";
			results[1].innerHTML = "";
		}catch(e){}
		
		removeCurrentClass();
		
		// QUADRATO
		if(e.target.id === "square"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setSquare();
		}

		// RETTANGOLO
		else if (e.target.id === "rectangle"){
			this.classList.add("current-figure-selected");
			setRectangle();
		}

		// Triangolo Equilatero
		else if(e.target.id === "eqTriangle"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setEqTriangle();
		}

		// Triangolo Isoscele
		else if(e.target.id === "isTriangle"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setIsTriangle();
		}

		// Triangolo Rettangolo
		else if(e.target.id === "reTriangle"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setReTriangle();
		}

		// Trapezio Rettangolo
		else if(e.target.id === "reTrapezoid"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setReTrapezoid();
		}

		// Trapezio Isoscele
		else if(e.target.id === "isTrapezoid"){
			this.classList.add("current-figure-selected");	//aggiunge la classe che evidenzia la figura
			setIsTrapezoid();
		}

		// CERCHIO
		else if(e.target.id === "circle"){
			this.classList.add("current-figure-selected");
			setCircle();
		}
	})
}

let firstButton = document.getElementById("button1");
let secondButton = document.getElementById("button2");
let results = document.querySelectorAll(".result");

// primo bottone
firstButton.addEventListener("click", function(){	//quando il botton viene premuto
	textInput = document.querySelectorAll(".textInput");	//aggiorno la variabile degli input
	for(let i = 0; i < figures.length; i++){
		if(figures[i].classList.contains("current-figure-selected")){
			if(figures[i].id === "square"){
				results[0].innerHTML = "Result: " + getAreaSquare();
			}

			else if(figures[i].id === "rectangle"){
				results[0].innerHTML = "Result: " + getAreaRectangle();
			}

			else if(figures[i].id === "eqTriangle" || figures[i].id === "isTriangle" || figures[i].id === "reTriangle"){
				results[0].innerHTML = "Result: " + getAreaTriangle();
			}

			else if(figures[i].id === "reTrapezoid" || figures[i].id === "isTrapezoid"){
				results[0].innerHTML = "Result: " + getAreaTrapezoid();
			}

			else if(figures[i].id === "circle"){
				results[0].innerHTML = "Result: " + getAreaCircle();
			}

		}
	}
})

// secondo bottone
secondButton.addEventListener("click", function(){	//quando il botton viene premuto
	textInput = document.querySelectorAll(".textInput");	//aggiorno la variabile degli input
	for(let i = 0; i < figures.length; i++){
		if(figures[i].classList.contains("current-figure-selected")){
			if(figures[i].id === "square"){
				results[1].innerHTML = "Result: " + getPerimeterSquare();
			}

			else if(figures[i].id === "rectangle"){
				results[1].innerHTML = "Result: " + getPerimeterRectangle();
			}

			else if(figures[i].id === "eqTriangle"){
				results[1].innerHTML = "Result: " + getPerimeterEqTriangle();
			}
			
			else if(figures[i].id === "isTriangle"){
				results[1].innerHTML = "Result: " + getPerimeterIsTriangle();
			}

			else if(figures[i].id === "reTriangle"){
				results[1].innerHTML = "Result: " + getPitagoraReTriangle();
			}

			else if(figures[i].id === "reTrapezoid"){
				results[1].innerHTML = "Result: " + getPerimeterReTrapezoid();
			}

			else if (figures[i].id === "isTrapezoid"){
				results[1].innerHTML = "Result: " + getPerimeterIsTrapezoid();
			}

			else if(figures[i].id === "circle"){
				results[1].innerHTML = "Result: " + getCircumferenceCircle();
			}

		}
	}
})

// rimuove la classe che evidenzia la figura in uso a tutte le figure
function removeCurrentClass() {
	for (let i = 0; i < figures.length; i++) {
		figures[i].classList.remove("current-figure-selected");
	}
}

// setta la pagina per il rettangolo
function setRectangle(){
	title.innerHTML = "Rectangle";	//titolo
	image.src = "images/Rettangolo/rettangoloGrandeMOD.png";	//immagine grande
	formulaImage[0].src = "images/Rettangolo/formulaArea.png";	//immagine della formula1
	formulaTitle.innerHTML = "Perimeter";		//titolo della formula 2 (la prima è "Area" per tutte le figure)
	formulaImage[1].src = "images/Rettangolo/formulaPerimetro.png"	//immagine della formula2
	textInput[0].placeholder = "insert height";
	textInput[1].placeholder = "insert height";

	// sezione input
	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert base"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);	//metto il nuovo input in cima al div

	// creo un altro field per l'input
	let anotherInput2 = document.createElement("input");
	anotherInput2.type = "text";
	anotherInput2.placeholder = "insert base"
	anotherInput2.className = "temp-input textInput";
	let divInput2 = document.getElementsByClassName("input-field")[1];
	divInput2.insertBefore(anotherInput2, divInput2.firstChild);

	//chiama funzione per i calcoli
}
// setta la pagina per il quadrato
function setSquare(){
	title.innerHTML = "Square";
	image.src = "images/Quadrato/quadratoGrandeMOD.png";
	formulaImage[0].src = "images/Quadrato/formulaArea.png";
	formulaTitle.innerHTML = "Perimeter";
	formulaImage[1].src = "images/Quadrato/formulaPerimetro.png";
	textInput[0].placeholder =" insert side";
	textInput[1].placeholder =" insert side";
	//chiama funzione per i calcoli


}
// setta la pagina per il cerchio
function setCircle(){
	title.innerHTML = "Circle";
	image.src = "images/Cerchio/cerchioGrandeMOD.png";
	formulaImage[0].src = "images/Cerchio/formulaArea.png";
	formulaTitle.innerHTML = "Circumference:";
	formulaImage[1].src = "images/Cerchio/formulaCirconferenza.png";
	textInput[0].placeholder = "insert radius";
	textInput[1].placeholder = "insert radius";
	//chiama funzione per i calcoli
}

// setta la pagina per il triangolo equilatero
function setEqTriangle(){
	title.innerHTML = "Equilateral Triangle";
	image.src = "images/Triangolo/equilatero/triangoloEquilateroGrandeMOD.png";
	formulaImage[0].src = "images/Triangolo/formulaArea.png";
	formulaTitle.innerHTML = "Perimeter";
	formulaImage[1].src = "images/Triangolo/equilatero/formulaPerimetro.png";
	textInput[0].placeholder = "insert height";
	textInput[1].placeholder = "insert side";

	// creo un altro field per l'input
	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert base"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);
}

// setta la pagina per il triangolo isoscele
function setIsTriangle(){
	title.innerHTML = "Isosceles Triangle";
	image.src = "images/Triangolo/isoscele/triangoloIsosceleGrandeMOD.png";
	formulaImage[0].src = "images/Triangolo/formulaArea.png";
	formulaTitle.innerHTML = "Perimeter";
	formulaImage[1].src = "images/Triangolo/isoscele/formulaPerimetro.png";
	textInput[0].placeholder = "insert height";
	textInput[1].placeholder = "insert side b";

	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert base"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);	//metto il nuovo input in cima al div

	// creo un altro field per l'input
	let anotherInput2 = document.createElement("input");
	anotherInput2.type = "text";
	anotherInput2.placeholder = "insert side a"
	anotherInput2.className = "temp-input textInput";
	let divInput2 = document.getElementsByClassName("input-field")[1];
	divInput2.insertBefore(anotherInput2, divInput2.firstChild);
}

// setta la pagina per il triangolo rettangolo
function setReTriangle(){
	title.innerHTML = "Right Trinagle";
	image.src = "images/Triangolo/rettangolo/triangoloRettangoloGrandeMOD.png";
	formulaImage[0].src = "images/Triangolo/formulaArea.png";
	formulaTitle.innerHTML = "Pitagora:";
	formulaImage[1].src = "images/Triangolo/rettangolo/formulaPitagora.png";
	textInput[0].placeholder = "insert height";
	textInput[1].placeholder = "insert side b";

	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert base"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);	//metto il nuovo input in cima al div

	// creo un altro field per l'input
	let anotherInput2 = document.createElement("input");
	anotherInput2.type = "text";
	anotherInput2.placeholder = "insert side a"
	anotherInput2.className = "temp-input textInput";
	let divInput2 = document.getElementsByClassName("input-field")[1];
	divInput2.insertBefore(anotherInput2, divInput2.firstChild);
}

// setta la pagina per il trapezio rettangolo
function setReTrapezoid(){
	title.innerHTML = "Right Trapezoid";
	image.src = "images/Trapezio/rettangolo/trapezioRettangoloGrandeMOD.png";
	formulaImage[0].src = "images/Trapezio/formulaArea.png";
	formulaTitle.innerHTML = "Perimeter";
	formulaImage[1].src = "images/Trapezio/rettangolo/formulaPerimetro.png";
	textInput[0].placeholder = "insert b";
	textInput[1].placeholder = "insert c";

	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert B"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);	//metto il nuovo input in cima al div

	let anotherInput1 = document.createElement("input");
	anotherInput1.type = "text";
	anotherInput1.placeholder = "insert h"
	anotherInput1.className = "temp-input textInput";
	anotherInput1.style.marginRight = "5px";
	divInput.insertBefore(anotherInput1, divInput.firstChild);

	let anotherInput2 = document.createElement("input");
	anotherInput2.type = "text";
	anotherInput2.placeholder = "insert h"
	anotherInput2.className = "temp-input textInput";
	let divInput2 = document.getElementsByClassName("input-field")[1];
	divInput2.insertBefore(anotherInput2, divInput2.firstChild);

	let anotherInput3 = document.createElement("input");
	anotherInput3.type = "text";
	anotherInput3.placeholder = "insert b";
	anotherInput3.className = "temp-input textInput";
	anotherInput3.style.marginRight = "5px";
	divInput2.insertBefore(anotherInput3, divInput2.firstChild);

	let anotherInput4 = document.createElement("input");
	anotherInput4.type = "text";
	anotherInput4.placeholder = "insert B";
	anotherInput4.className = "temp-input textInput";
	anotherInput4.style.marginRight = "5px";
	divInput2.insertBefore(anotherInput4, divInput2.firstChild);
}

// setta la pagina per il trapezio isoscele
function setIsTrapezoid(){
	title.innerHTML = "Isosceles Trapezoid";
	image.src = "images/Trapezio/isoscele/trapezioIsosceleGrandeMOD.png";
	formulaImage[0].src = "images/Trapezio/formulaArea.png";
	formulaTitle.innerHTML = "Perimeter";
	formulaImage[1].src = "images/Trapezio/isoscele/formulaPerimetro.png";
	textInput[0].placeholder = "insert b";
	textInput[1].placeholder = "insert c";

	let anotherInput = document.createElement("input");
	anotherInput.type = "text";
	anotherInput.placeholder = "insert B"
	anotherInput.className = "temp-input textInput";
	let divInput = document.getElementsByClassName("input-field")[0];	
	divInput.insertBefore(anotherInput, divInput.firstChild);

	let anotherInput1 = document.createElement("input");
	anotherInput1.type = "text";
	anotherInput1.placeholder = "insert h"
	anotherInput1.className = "temp-input textInput";
	anotherInput1.style.marginRight = "5px";
	divInput.insertBefore(anotherInput1, divInput.firstChild);

	let anotherInput2 = document.createElement("input");
	anotherInput2.type = "text";
	anotherInput2.placeholder = "insert b"
	anotherInput2.className = "temp-input textInput";
	let divInput2 = document.getElementsByClassName("input-field")[1];
	divInput2.insertBefore(anotherInput2, divInput2.firstChild);

	let anotherInput3 = document.createElement("input");
	anotherInput3.type = "text";
	anotherInput3.placeholder = "insert B";
	anotherInput3.className = "temp-input textInput";
	anotherInput3.style.marginRight = "5px";
	divInput2.insertBefore(anotherInput3, divInput2.firstChild);
}

// FORMULE
// quadrato
getAreaSquare = () => textInput[0].value * textInput[0].value;
getPerimeterSquare = () => textInput[1].value * 4;

// rettangolo
getAreaRectangle = () => textInput[0].value * textInput[1].value
getPerimeterRectangle = () => (Number(textInput[2].value) + Number(textInput[3].value)) * 2;

// triangolo
getAreaTriangle = () => (textInput[0].value * textInput[1].value) / 2;
getPerimeterEqTriangle = () => textInput[2].value * 3;
getPerimeterIsTriangle = () => Number(textInput[2].value) + Number(textInput[3].value) * 2;
getPitagoraReTriangle = () => Math.sqrt(Math.pow(textInput[2].value, 2) + Math.pow(textInput[3].value, 2));

// trapezio
getAreaTrapezoid = () => (textInput[0].value * (Number(textInput[1].value) + Number(textInput[2].value))) / 2;
getPerimeterReTrapezoid = () => Number(textInput[3].value) + Number(textInput[4].value) + Number(textInput[5].value) + Number(textInput[6].value);
getPerimeterIsTrapezoid = () => Number(textInput[3].value) + Number(textInput[4].value) + Number(textInput[5].value) * 2;

// cerchio
getAreaCircle = () => textInput[0].value * textInput[0].value * Math.PI;
getCircumferenceCircle = () => 2* textInput[1].value * Math.PI;
