function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  noLoop();
}

function draw() {

  // Dimensione e posizione del cerchio esterno
  let size = 50;
  let spacing = 80;
  let XnColonne = windowWidth/(size+spacing)/1.2; // Numero colonne
  let YnRighe = windowHeight/(size+spacing)/1.2; // Numero righe

  // Calcolo della larghezza e dell'altezza totali della griglia
  let gridWidth = (XnColonne * (size + spacing));
  let gridHeight = (YnRighe * (size + spacing));

  // Calcolo delle posizioni iniziali di x e y per centrare la griglia
  let a = ((width - gridWidth) / 2)+size;
  let b = ((height - gridHeight) / 2)+size;
  
   for(let i = 0; i < XnColonne ;i++){
    for(let j = 0; j < YnRighe ;j++){
      drawCircle(a + i * (size + spacing),b + j * (size + spacing),size)
    }
  }   
}

function drawCircle(a, b, size) {
  // Array di colori
  let colori = ["green","red", random(["gold", "blue"])];

  // Array per tenere traccia dei colori già utilizzati
  let coloriUsati = [];

  // Genera posizioni casuali per i cerchi
  let x = random(a-20, a+20);
  let y = random(b-20, b+20);
  let x1 = random(a-20, a+20);
  let y1 = random(b-20, b+20);
  let x2 = random(a-20, a+20);
  let y2 = random(b-20, b+20);

  // Disegna il cerchio esterno
  stroke("black");
  strokeWeight(3);
  fill("#00000000")
  circle(a, b, size * 2);

  // Disegna i cerchi interni con colori diversi
  noStroke();
  blendMode(ADD);

  // Assegna un colore casuale al primo cerchio
  let colore1 = random(colori);
  coloriUsati.push(colore1);
  fill(colore1);
  circle(x, y, size);

  // Assegna un colore diverso al secondo cerchio
  let colore2 = random(colori.filter(colore => colore !== colore1));
  coloriUsati.push(colore2);
  fill(colore2);
  circle(x1, y1, size);

  // Assegna l'ultimo colore rimasto al terzo cerchio
  let colore3 = colori.find(colore => !coloriUsati.includes(colore));
  coloriUsati.push(colore3);
  fill(colore3);
  circle(x2, y2, size);
}