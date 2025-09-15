import * as THREE from 'three';

export function initThreeJS(): (() => void) | undefined {
  const canvas = (document.getElementById('three-canvas') || document.getElementById('three-canvas-configurator')) as HTMLCanvasElement;
  if (!canvas) return undefined;

  // Check if canvas is already initialized
  if (canvas.dataset.initialized === 'true') {
    return undefined;
  }
  canvas.dataset.initialized = 'true';

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  let animationId: number;
  
  // Create subtle particle system with gradient colors (static)
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500; // x10 increase
  const posArray = new Float32Array(particlesCount * 3);
  const colorArray = new Float32Array(particlesCount * 3);
  
  // Define gradient colors matching the image (static - no color changes)
  const gradientColors = [
    new THREE.Color(0x0f172a), // Very Dark Blue
    new THREE.Color(0x1e293b), // Dark Slate  
    new THREE.Color(0x312e81), // Indigo 800
    new THREE.Color(0x1e1b4b), // Indigo 900
    new THREE.Color(0x3b82f6), // Blue 500
    new THREE.Color(0x6366f1), // Indigo 500
    new THREE.Color(0x8b5cf6), // Violet 500
    new THREE.Color(0xa855f7), // Purple 500
    new THREE.Color(0xec4899), // Pink 500 (subtle)
    new THREE.Color(0x7c3aed), // Violet 600
  ];
  
  for (let i = 0; i < particlesCount; i++) {
    // Position
    posArray[i * 3] = (Math.random() - 0.5) * 80; // x2 spread
    posArray[i * 3 + 1] = (Math.random() - 0.5) * 80;
    posArray[i * 3 + 2] = (Math.random() - 0.5) * 40;
    
    // Color - pick random color from gradient palette (static)
    const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    colorArray[i * 3] = color.r;
    colorArray[i * 3 + 1] = color.g;
    colorArray[i * 3 + 2] = color.b;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.35, // Even larger particles for more 3D effect
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    vertexColors: true
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Create floating geometric elements with gradient colors (static)
  const geometricElements: THREE.Mesh[] = [];
  
  // Floating spheres with gradient colors
  const sphereGeometry = new THREE.SphereGeometry(0.6, 20, 20); // Larger and more detailed
  
  for (let i = 0; i < 180; i++) { // Even more spheres
    const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.8,
      wireframe: false
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(
      (Math.random() - 0.5) * 60, // Larger spread
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 30
    );
    geometricElements.push(sphere);
    scene.add(sphere);
  }
  
  // Floating rings/torus with gradient colors
  const torusGeometry = new THREE.TorusGeometry(0.8, 0.2, 12, 20); // Larger and more detailed
  
  for (let i = 0; i < 120; i++) { // More torus elements
    const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7,
      wireframe: true
    });
    
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(
      (Math.random() - 0.5) * 70,
      (Math.random() - 0.5) * 70,
      (Math.random() - 0.5) * 40
    );
    torus.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    geometricElements.push(torus);
    scene.add(torus);
  }
  
  // Gradient wave-like curved lines
  const curveGeometry = new THREE.CylinderGeometry(0.05, 0.05, 6, 12); // Thicker and longer
  
  for (let i = 0; i < 150; i++) { // More curve elements
    const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const curveMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.85
    });
    
    const curve = new THREE.Mesh(curveGeometry, curveMaterial);
    curve.position.set(
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 50
    );
    curve.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    geometricElements.push(curve);
    scene.add(curve);
  }
  
  // Add new geometric elements - Cubes
  const cubeGeometry = new THREE.BoxGeometry(1.0, 1.0, 1.0); // Larger cubes
  
  for (let i = 0; i < 200; i++) { // Even more cubes
    const color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      wireframe: true
    });
    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(
      (Math.random() - 0.5) * 90,
      (Math.random() - 0.5) * 90,
      (Math.random() - 0.5) * 60
    );
    cube.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    geometricElements.push(cube);
    scene.add(cube);
  }
  
  camera.position.z = 6;
  
  // Animation loop with proper cleanup
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Very subtle rotation for depth
    particlesMesh.rotation.y += 0.0005;
    
    geometricElements.forEach((element, index) => {
      element.rotation.x += 0.001 * (index % 2 === 0 ? 1 : -1);
      element.rotation.y += 0.0008 * (index % 3 === 0 ? 1 : -1);
    });
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle resize
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    // Proper cleanup
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    
    window.removeEventListener('resize', handleResize);
    
    // Dispose of Three.js resources
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
    
    scene.clear();
    renderer.dispose();
    
    // Reset canvas initialization flag
    if (canvas) {
      canvas.dataset.initialized = 'false';
    }
  };
}