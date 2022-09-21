const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();

camera.position.set(0,0,100);

scene.background = new THREE.Color(0, 0, 0);

const purple = new THREE.LineBasicMaterial({color: 0x85138E});
const green = new THREE.LineBasicMaterial({color: 0x3CAF0D});

const squareBuffer = [];

squareBuffer.push( new THREE.Vector3( 20, 30, 0 ) );
squareBuffer.push( new THREE.Vector3( 50, 0, 0 ) );
squareBuffer.push( new THREE.Vector3( 20, -30, 0 ) );
squareBuffer.push( new THREE.Vector3( -10, 0, 0 ) );
squareBuffer.push( new THREE.Vector3( 20, 30, 0 ) );

const figure1 = new THREE.BufferGeometry().setFromPoints(squareBuffer);

const square = new THREE.Line(figure1, purple);
scene.add(square);

const triangleBuffer = [];

triangleBuffer.push( new THREE.Vector3( -40, 30, 0 ) );
triangleBuffer.push( new THREE.Vector3( -10, 30, 0 ) );
triangleBuffer.push( new THREE.Vector3( -40, 0, 0 ) );
triangleBuffer.push( new THREE.Vector3( -40, 30, 0 ) );

const figure2 = new THREE.BufferGeometry().setFromPoints(triangleBuffer);

const triangle = new THREE.Line(figure2, green);
scene.add(triangle);

renderer.render(scene, camera);