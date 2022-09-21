const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0x1495A4})

const points = [];

points.push(new THREE.Vector3(2,1,0));
points.push(new THREE.Vector3(4,-1,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);