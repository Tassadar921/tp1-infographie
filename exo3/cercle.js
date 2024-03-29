const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();
camera.position.set( 0, 0, 10 ); //zoomé pour bien voir ce qu'il se passe
camera.lookAt( 0, 0, 0 );

scene.background = new THREE.Color(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x1495A4})

const points = [];

for(let t = 0; t < 2*Math.PI; t+=Math.PI/100){ //on tourne autour de l'origine en suivant l'équation paramétrique, en traçant 200 points (2PI/(PI/100))
    points.push( new THREE.Vector3( 3*Math.cos(t), 3*Math.sin(t), 0 ) );
}
points.push( new THREE.Vector3( 3*Math.cos(0), 3*Math.sin(0), 0 ) ); //afin de tracer le dernier segment entre le dernier et le premier point

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const circle = new THREE.Line(geometry, material);
scene.add(circle);
renderer.render(scene, camera);