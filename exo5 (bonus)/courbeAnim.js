const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1000);
const scene = new THREE.Scene();
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

scene.background = new THREE.Color(0, 0, 0);

/*
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );
*/

const material = new THREE.LineBasicMaterial({color: 0x1495A4})

let points = [];

let a = 8;
let b = 5;

for(let t = 0; t < 2*Math.PI; t+=Math.PI/100){
    for(let t2 = 0; t2 < 2*Math.PI; t2+=Math.PI/100){
        points.push( new THREE.Vector3( 3*Math.cos(t)*Math.sin(t2), 3*Math.sin(t)*Math.sin(t2), 3*Math.cos(t2) ) );
    }
}
points.push( new THREE.Vector3( 3*Math.cos(0), 3*Math.sin(0), 0 ) );

let geometry = new THREE.BufferGeometry().setFromPoints(points);

let sphere = new THREE.Line(geometry, material);
sphere.castShadow = true; //default is false
sphere.receiveShadow = true; //default

scene.add(sphere);

points = [];

for(let t = 0; t < 100; t+=100/100000){
    points.push( new THREE.Vector3( (a+b)*Math.sin(t)-b*Math.sin((a/b+1)*t), (a+b)*Math.cos(t)-b*Math.cos((a/b+1)*t), 0 ) );
}

geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);

let t = 0;

animate();

function animate() {
    t += 0.05;
    if(t>200){
        return 0;
    }
    console.log(t);
    sphere.position.set((a+b)*Math.sin(t)-b*Math.sin((a/b+1)*t), (a+b)*Math.cos(t)-b*Math.cos((a/b+1)*t), 0.0);
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}