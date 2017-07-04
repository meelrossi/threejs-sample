var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// distance to object
camera.position.z = 1;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.set(0, 0, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));



// Cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-3, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 3, 0));
geometry.vertices.push(new THREE.Vector3(3, 0, 0));
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var line = new THREE.Line(geometry, material);
scene.add(line);
console.log(line)

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
