import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const orbit = new OrbitControls( camera, renderer.domElement );

const axesHelper = new THREE.AxesHelper( 3 );
scene.add( axesHelper );

camera.position.set(-10, 30, 30);
orbit.update()

const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const box = new THREE.Mesh( geometry, material );
scene.add( box );

const planeGeometry = new THREE.PlaneGeometry( 30, 30 );
const planeMaterial = new THREE.MeshBasicMaterial( { 
  color: 0xFFFFFF,
  side: THREE.DoubleSide
} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper)

function animate() {
  requestAnimationFrame( animate );

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  orbit.update()

  renderer.render( scene, camera );
};

animate();