import React, { useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// --- Data (same as original) ---
const PROJECTS = [
  { id:"p1", name:"Cyphernest", summary:"Client-side steganography tool using AES-256 encryption(PWA supported)", tags:["encryption","pwa","steganography", "crypto.js"], link:"https://cyphernest.vercel.app/", position:[4,0,-6] },
  { id:"p2", name:"QSL-Simulator", summary:"Quantum Signal Loss(QSL) Simulator.", tags:["astrophysics","deep space","qsl"], link:"https://qsl-simulator.vercel.app/", position:[-6,0,-2] },
  { id:"p3", name:"Portfolio Website", summary:"Portfolio Website", tags:["poject","resume","skill"], link:"https://portfolio-website-murex-six.vercel.app/", position:[0,0,7] },
  { id:"p4", name:"AR Product Try-on", summary:"WebXR preview flow with parametric materials.", tags:["webxr","three","ux"], link:"https://example.com/ar", position:[8,0,3] },
];

const SKILLS = {
  nodes:[
    { id:"js", label:"JavaScript", link:"https://devdocs.io/javascript/", pos:[0,3,0] },
    { id:"react", label:"React", pos:[-3,4,-1] },
    { id:"three", label:"Three.js", pos:[3,4.5,1] },
    { id:"node", label:"Node.js", pos:[1,5.2,-2] },
    { id:"tailwind", label:"Tailwind", pos:[-2,3.8,2] },
    { id:"mongodb", label:"MongoDB", pos:[2.5,3.4,-3] },
  ],
  edges:[
    ["js","react"],
    ["react","node"],
    ["js","three"],
    ["three","mongodb"],
    ["react","tailwind"],
  ],
};

// --- Utility: Text Sprites ---
function makeTextSprite(text, options={}) {
  const { font="500 35px Arial", fillStyle="#f5f8fc", padding=16, bg="rgba(0,0,0,1)" } = options;
  const canvas=document.createElement("canvas");
  const ctx=canvas.getContext("2d");
  ctx.font=font;
  const w=Math.ceil(ctx.measureText(text).width)+padding*2;
  const h=36+padding*2;
  canvas.width=w*2;
  canvas.height=h*2;
  const c=canvas.getContext("2d");
  c.scale(2,2);
  c.font=font;
  c.fillStyle=bg;
  c.fillRect(0,0,w,h);
  c.fillStyle=fillStyle;
  c.textBaseline="middle";
  c.fillText(text,padding,h/2);
  const texture=new THREE.CanvasTexture(canvas);
  const material=new THREE.SpriteMaterial({ map:texture, transparent:true });
  const sprite=new THREE.Sprite(material);
  sprite.scale.set(w/200,h/200,1);
  return sprite;
}

// --- Main Component ---
export default function PortfolioWorld({ filter, onPick }) {
  const mountRef=useRef(null);
  const sceneRef=useRef(null);
  const cameraRef=useRef(null);
  const rendererRef=useRef(null);
  const controlsRef=useRef(null);
  const raycaster=useMemo(()=>new THREE.Raycaster(),[]);
  const mouse=useMemo(()=>new THREE.Vector2(),[]);
  const clickable=useRef([]);
  const hoveredSkill = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(()=>{
    const mount=mountRef.current;
    const scene=new THREE.Scene();
    scene.background=new THREE.Color(0x06070c);
    const camera=new THREE.PerspectiveCamera(60,1,0.1,1000);
    camera.position.set(10,8,12);
    const renderer=new THREE.WebGLRenderer({antialias:false}); // antialias: "true" → smooth edges dete hai 3D objects ko, jagged edges kam ho jaate hain. aur "false" se load kam ho jata hai aur heat kam krta hai, isiliye use kiya hu.
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // limit to 1.5    
    mount.appendChild(renderer.domElement);
    const controls=new OrbitControls(camera,renderer.domElement);
    controls.enableDamping=true;
    controls.dampingFactor=0.05;
    controls.target.set(0,1.2,0);

    
    // lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(10, 10, 7);  // "AmbientLight":- These lights do not have a specific position in the scene as they provide ambient or general illumination. 
    scene.add(dir);
   
    // // Ground plane (subtle grid)
    // const grid = new THREE.GridHelper(60, 60, 0x2a2a2a, 0x1a1a1a);
    // grid.position.y = -0.01;
    // scene.add(grid);

    // islands
    const cylGeo=new THREE.CylinderGeometry(2,2.5,0.6,42);
    PROJECTS.forEach(p=>{
      const visible=!filter || p.tags.includes(filter);
      const mat=new THREE.MeshStandardMaterial({ color: visible?0x2ecc71:0x3a3a3a, roughness:0.7, metalness:0.1 });
      const island=new THREE.Mesh(cylGeo,mat);
      island.position.set(...p.position);
      island.userData={ type:"project", payload:p };
      island.castShadow= true;
      island.receiveShadow = true;
      scene.add(island);
      clickable.current.push(island);
      const label=makeTextSprite(p.name);
      label.position.set(p.position[0],p.position[1]+1.2,p.position[2]);
      scene.add(label);
    });
    
    // --- Skills constellation ---
    const skillGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.15, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({ color: 0x9dc0ff});
    const nodeMap = new Map();

    SKILLS.nodes.forEach((n) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat.clone());
      node.position.set(...n.pos);
      node.userData = { type: "skill", payload: n };
      node.material.emissive = new THREE.Color(0x6aa6ff);
      skillGroup.add(node);
      nodeMap.set(n.id,node);

      // Add label
      const label = makeTextSprite(n.label, { fillStyle:"#f5f8fc", bg:"rgba(0,0,0,0.3)" });
      label.position.set(...n.pos.map((v,i)=>v + (i===1?0.25:0))); // slightly above
      scene.add(label);

      clickable.current.push(node); // skills bhi clickable
    });

    // Add edges
    const lineMat = new THREE.LineBasicMaterial({ color: 0x6aa6ff, transparent:true, opacity:0.6 });
    SKILLS.edges.forEach(([a,b])=>{
      const n1 = nodeMap.get(a);
      const n2 = nodeMap.get(b);
      if(!n1||!n2) return;
      const geom = new THREE.BufferGeometry().setFromPoints([n1.position, n2.position]);
      const line = new THREE.Line(geom, lineMat);
      skillGroup.add(line);
    });

    scene.add(skillGroup);

    // Floating foggy stars background
    const starGeom = new THREE.BufferGeometry();
    const starCount = 800;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3 + 0] = (Math.random() - 0.5) * 220;
      starPos[i * 3 + 1] = Math.random() * 40 + 5;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 220;
    }
    starGeom.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeom,
      new THREE.PointsMaterial({ size: 0.1, color: 0x6aa6ff })
    );
    scene.add(stars);

   // Name (bigger)
const nameText = makeTextSprite("I am Vivek Mishra", { 
  fillStyle:"#ffd700", 
  bg:"rgba(0,0,0,0.5)", 
  font:"Bold 60px Arial"
});
nameText.position.set(0, 8, 0);
scene.add(nameText);

// Title (smaller, niche)
const titleText = makeTextSprite("Interstellar Propulsion Theorist", { 
  fillStyle:"#ffdead", 
  bg:"rgba(0,0,0,0.5)", 
  font:"Bold 50px Arial"
});
titleText.position.set(0, 7, 0);
scene.add(titleText);

    // save refs
    sceneRef.current=scene;
    cameraRef.current=camera;
    rendererRef.current=renderer;
    controlsRef.current=controls;

    // --- pointer hover tooltip ---
    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left)/rect.width)*2 - 1;
      mouse.y = -((e.clientY - rect.top)/rect.height)*2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const hits = raycaster.intersectObjects(clickable.current, false);
      const hitSkill = hits.find(h => h.object.userData?.type === "skill");
      if(hitSkill){
        hoveredSkill.current = hitSkill.object.userData.payload;
        if(!tooltipRef.current){
          tooltipRef.current = document.createElement("div");
          tooltipRef.current.className = "pointer-events-none fixed z-50 text-xs px-2 py-1 rounded bg-black/80 text-white border border-white/10";
          document.body.appendChild(tooltipRef.current);
        }
        tooltipRef.current.textContent = hoveredSkill.current.label;
        tooltipRef.current.style.left = `${e.clientX + 10}px`;
        tooltipRef.current.style.top = `${e.clientY + 10}px`;
      } else {
        hoveredSkill.current = null;
        if(tooltipRef.current?.parentNode){
          tooltipRef.current.parentNode.removeChild(tooltipRef.current);
          tooltipRef.current = null;
        }
      }
    };
    mount.addEventListener("pointermove", handlePointerMove);

// --- Floating Comets ---
const cometCount = 15;
const comets = new THREE.Group();
for(let i=0; i<cometCount; i++){
    const geo = new THREE.SphereGeometry(0.15, 8, 8); // small sphere
    const mat = new THREE.MeshStandardMaterial({ color: 0xffaa33, emissive: 0xff7700, emissiveIntensity: 0.8 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
        (Math.random()-0.5)*150,
        Math.random()*50 + 5,
        (Math.random()-0.5)*150
    );
    mesh.userData = { speed: Math.random()*0.2 + 0.05 };
    comets.add(mesh);
}
scene.add(comets);

comets.children.forEach(c => {
  c.position.x += c.userData.speed;
  if(c.position.x > 75) c.position.x = -75; // reset
});

// --- Floating Asteroids ---
const asteroidCount = 10;
const asteroids = new THREE.Group();
for(let i=0; i<asteroidCount; i++){
    const geo = new THREE.IcosahedronGeometry(Math.random()*0.5 + 0.2, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness:0.8, metalness:0.1 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
        (Math.random()-0.5)*120,
        Math.random()*30 + 5,
        (Math.random()-0.5)*120
    );
    mesh.userData = { speed: Math.random()*0.02 + 0.01 };
    asteroids.add(mesh);
}
scene.add(asteroids);

comets.children.forEach(c => {
  c.position.x += c.userData.speed;
  if(c.position.x > 75) c.position.x = -75; // reset
});


// 
// --- Ground water plane ---
const waterGeo = new THREE.PlaneGeometry(100, 100);
const waterMat = new THREE.MeshStandardMaterial({
  color: 0x1e3f66,        // bluish water
  roughness: 0.4,
  metalness: 0.3,
  transparent: true,
  opacity: 0.8,
});
const water = new THREE.Mesh(waterGeo, waterMat);
water.rotation.x = -Math.PI / 2; // horizontal plane
water.position.y = -0.01;        // just below islands
scene.add(water);





// Sun core with shader
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0.0 }
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec3 vNormal;

    // Simple noise function (placeholder)
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898,78.233,128.852))) * 43758.5453);
    }

    void main() {
      float n = noise(vNormal * 10.0 + time * 0.5);
      vec3 color = mix(vec3(1.0, 0.5, 0.0), vec3(1.0,0.9,0.3), n); // orange to yellow
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  side: THREE.FrontSide
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(-10, 35, 50);   // 👈 Sun ko camera ke aage thoda dur rakha
scene.add(sun);

// Sun light
const sunlight = new THREE.PointLight(0xFDB813, 10, 1000);
sunlight.position.copy(sun.position); // 👈 Light ko bhi sun ke center me rakha
scene.add(sunlight);

// Animate in render loop
function animate() {
  requestAnimationFrame(animate);
  sun.material.uniforms.time.value += 0.05;
  renderer.render(scene, camera);
}



// Dyson Sphere (hollow shell)
// Dyson Sphere Base (grid)
const dysonGeometry = new THREE.SphereGeometry(6, 32, 32);
const dysonMaterial = new THREE.MeshBasicMaterial({
  color: 0x444444,      // Dark metallic
  wireframe: true,
  transparent: true,
  opacity: 0.5
});
const dysonSphere = new THREE.Mesh(dysonGeometry, dysonMaterial);
dysonSphere.position.copy(sun.position);
scene.add(dysonSphere);

// Knots (nodes) par chhote modules
const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8); // chhota sphere
const nodeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffaa00,       // glowing orange modules
  emissive: 0xff6600,    // thoda glow effect
  metalness: 0.8,
  roughness: 0.3
});

const nodes = [];
const pos = dysonGeometry.attributes.position;
for (let i = 0; i < pos.count; i++) {
  const x = pos.getX(i);
  const y = pos.getY(i);
  const z = pos.getZ(i);

  const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
  node.position.set(x, y, z).add(sun.position); // sun ke around position
  scene.add(node);
  nodes.push(node);
}





// Dyson swarm particles
const swarmGeometry = new THREE.BufferGeometry();
const swarmCount = 1100;
const swarmPositions = new Float32Array(swarmCount * 2);

for (let i = 0; i < swarmCount; i++) {
  const r = 12 + Math.random() * 0.5; // Sun ke thoda bahar
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  swarmPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  swarmPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  swarmPositions[i * 3 + 2] = r * Math.cos(phi);
}

swarmGeometry.setAttribute('position', new THREE.BufferAttribute(swarmPositions, 3));

const swarmMaterial = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 0.05,
  transparent: true,
  opacity: 0.8
});

const dysonSwarm = new THREE.Points(swarmGeometry, swarmMaterial);
dysonSwarm.position.copy(sun.position);
scene.add(dysonSwarm);

// Animate Dyson swarm rotation
function animate() {
  requestAnimationFrame(animate);

  sun.material.uniforms.time.value += 0.05;

  dysonSphere.rotation.y += 0.001;
  dysonSwarm.rotation.y += 0.002;

  renderer.render(scene, camera);
}

// const canvas = document.createElement('canvas');
// const context = canvas.getContext('2d');
// context.font = '48px Arial';
// context.fillStyle = 'white';
// context.fillText('Dyson Sphere → Dyson Swarm', 0, 50);

// const texture = new THREE.CanvasTexture(canvas);
// const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
// const sprite = new THREE.Sprite(spriteMaterial);

// sprite.scale.set(10, 2, 1); // scale adjust kar
// sprite.position.set(12, 42, 50); // position adjust kar
// scene.add(sprite);
animate();










    // animation loop
    const loop=()=>{
      controls.update();
      renderer.render(scene,camera);
      requestAnimationFrame(loop);
    };
    loop();

    // Cleanup
    return () => {
      mount.removeEventListener("pointermove", handlePointerMove);
      if(tooltipRef.current?.parentNode){
        tooltipRef.current.parentNode.removeChild(tooltipRef.current);
        tooltipRef.current = null;
      }
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose?.();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material.dispose?.();
        }
      });
    };
  },[filter, mouse, raycaster]);

  // pointer click with smooth camera move
  useEffect(()=>{
    const mount=mountRef.current;
    if(!mount) return;

    let animationId = null;
    const moveCameraToTarget = (targetPos) => {
      const duration = 60; // frames (~1s)
      let frame = 0;
      const startPos = cameraRef.current.position.clone();
      const endPos = new THREE.Vector3(targetPos[0], targetPos[1]+4, targetPos[2]+6);

      const animate = () => {
        frame++;
        cameraRef.current.position.lerpVectors(startPos, endPos, frame/duration);
        controlsRef.current.target.lerpVectors(controlsRef.current.target, new THREE.Vector3(...targetPos), frame/duration);
        if(frame<duration) animationId=requestAnimationFrame(animate);
      };
      animate();
    };

    const handleClick=(e)=>{
      const rect=mount.getBoundingClientRect();
      mouse.x=((e.clientX-rect.left)/rect.width)*2-1;
      mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;
      raycaster.setFromCamera(mouse,cameraRef.current);
      const hits=raycaster.intersectObjects(clickable.current,false);
      if(hits.length){
        onPick?.(hits[0].object.userData.payload);
        if(hits[0].object.userData.type==="project"){
          moveCameraToTarget(hits[0].object.position.toArray());
        }
      }
    };
    mount.addEventListener("click",handleClick);
    return ()=>{
      mount.removeEventListener("click",handleClick);
      if(animationId) cancelAnimationFrame(animationId);
    };
  },[mouse,onPick,raycaster]);

  return <div ref={mountRef} style={{ width:"100%", height:"100%" }} />;
}

