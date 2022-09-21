const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();

camera.position.set(0,0,100);   // on place la caméra de façon à bien voir ce qu'il se passe dans notre scène 

scene.background = new THREE.Color(0, 0, 0);

const purple = new THREE.LineBasicMaterial({color: 0x85138E}); // on prépare les couleurs des formes (purple pour le carré, green pour le triangle)
const green = new THREE.LineBasicMaterial({color: 0x3CAF0D});

const squareBuffer = [];  // on stocke les points du carré à afficher

squareBuffer.push( new THREE.Vector3( 20, 30, 0 ) );  
squareBuffer.push( new THREE.Vector3( 50, 0, 0 ) );
squareBuffer.push( new THREE.Vector3( 20, -30, 0 ) );   // on place les points de façon à créer une forme carrée 
squareBuffer.push( new THREE.Vector3( -10, 0, 0 ) );
squareBuffer.push( new THREE.Vector3( 20, 30, 0 ) );

const figure1 = new THREE.BufferGeometry().setFromPoints(squareBuffer);  // on affiche les points avec setFromPoints

const square = new THREE.Line(figure1, purple); // on relie les points grace à .line 
scene.add(square);  // on ajoute la figure carrée dans la scène



const triangleBuffer = [];  // on stocke les points du triangle à afficher

triangleBuffer.push( new THREE.Vector3( -40, 30, 0 ) );
triangleBuffer.push( new THREE.Vector3( -10, 30, 0 ) ); // on place les points de façon à créer une forme triangulaire
triangleBuffer.push( new THREE.Vector3( -40, 0, 0 ) );
triangleBuffer.push( new THREE.Vector3( -40, 30, 0 ) );

const figure2 = new THREE.BufferGeometry().setFromPoints(triangleBuffer); // on affiche les points avec setFromPoints

const triangle = new THREE.Line(figure2, green); // on relie les points grace à .Line
scene.add(triangle);    // on ajoute la figure carrée dans la scène

renderer.render(scene, camera); // on fait le rendu