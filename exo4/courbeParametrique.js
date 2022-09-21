const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

scene.background = new THREE.Color(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x1495A4})

let a = 8;  // on initialise a et b avec les données de l'énoncé
let b = 5;

const points = [];

for(let t = 0; t < 100; t+=100/100000){    
    points.push( new THREE.Vector3( (a+b)*Math.sin(t)-b*Math.sin((a/b+1)*t), (a+b)*Math.cos(t)-b*Math.cos((a/b+1)*t), 0 ) );
} // on a placé nos points selon les équations de l'énoncé sur l'intervalle [0,100] avec un pas de 100/100000 (on aura donc 100000 points sur l'intervalle)

const geometry = new THREE.BufferGeometry().setFromPoints(points);  // on affiche les points

const drawing = new THREE.Line(geometry, material); // on relie les points grace à .Line de façon à dessiner la courbe paramétrique
scene.add(drawing); // on ajoute le dessin dans la scène
renderer.render(scene, camera); // on fait le rendu