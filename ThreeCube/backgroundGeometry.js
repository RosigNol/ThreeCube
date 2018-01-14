					$(document).ready(function() {
							console.log = function() {}
							var scene = new THREE.Scene(); 
							// Create a 3d scene 
							// The background
							var camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight,1, 10000); 
							$("#scroll").on("click",function() {
								$('#form').addClass("animated hinge");
							});
							var renderer = new THREE.WebGLRenderer(); renderer.setSize
							(window.innerWidth, window.innerHeight); document.body.appendChild(renderer.domElement); 
							var dim1 = 6;
							var dim2 = 6;
							var dim3 = 6;
							var geometry = new THREE.BoxGeometry(dim1,dim2,dim3,15,15,15); 

							// Sets the geometry like (length , breadt , height , number of cubes per face1 , number of cubes per face2 ,number of cubes per face3)

							var material = new THREE.MeshBasicMaterial({color: 0x16aae9,
							wireframe:true}); 

							// The cube

							var cube = new THREE.Mesh(geometry, material); 

							scene.add(cube); 

							function render() {
								requestAnimationFrame(render); cube.rotation.x += 0.010; 
								cube.rotation.z += 0.010;
								renderer.render(scene, camera); 
								// For the rotation
							}; 
							render();
					})// JavaScript Document