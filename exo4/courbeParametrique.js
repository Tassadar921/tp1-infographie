const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

scene.background = new THREE.Color(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x1495A4})

let a = 8;
let b = 5;

const points = [];

for(let t = 0; t < 100; t+=100/100000){
    points.push( new THREE.Vector3( (a+b)*Math.sin(t)-b*Math.sin((a/b+1)*t), (a+b)*Math.cos(t)-b*Math.cos((a/b+1)*t), 0 ) );
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);