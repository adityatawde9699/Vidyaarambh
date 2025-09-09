import React, { useEffect, useRef } from 'react';
import {
    WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, PointLight,
    BufferGeometry, Float32BufferAttribute, PointsMaterial, Points, Group,
    IcosahedronGeometry, MeshStandardMaterial, Mesh, TorusKnotGeometry, Vector2, Vector3,
    SphereGeometry, RingGeometry, Color, ShaderMaterial, DoubleSide, AdditiveBlending,
    ConeGeometry, CylinderGeometry, OctahedronGeometry
} from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// Helper function to throttle another function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

export default function ThreejsCanvas() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // --- Enhanced Constants & Theme ---
        const THEME = {
            backgroundColor: 0x110D44, // Deep Indigo from your palette
            particleColor: 0x6AF2F0,   // Bright Cyan
            objectColor1: 0x9A2EFE,    // Vivid Purple
            objectColor2: 0x244BFF,    // Royal Blue (CTA)
            accentColor: 0x1C2A9E,     // Electric Blue
            glowColor: 0x6AF2F0,       // Cyan glow
        };
        
        const PARTICLE_COUNT = 800;
        const FLOATING_OBJECTS_COUNT = 12;
        const MOUSE_INFLUENCE = 0.08;
        const WAVE_AMPLITUDE = 2.5;

        // --- Core Scene Setup ---
        let scene, camera, renderer, composer, bloomPass;
        let mainGroup, particles, floatingObjects, energyRings, waveMesh;
        const mouse = new Vector2(0, 0);
        const mouseTarget = new Vector2(0, 0);
        let time = 0;
        let reqId;

        // Custom shader for energy waves
        const waveVertexShader = `
            uniform float time;
            uniform float mouseX;
            uniform float mouseY;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
                vUv = uv;
                vPosition = position;
                
                vec3 pos = position;
                float wave1 = sin(pos.x * 0.5 + time * 2.0) * 0.3;
                float wave2 = cos(pos.z * 0.3 + time * 1.5) * 0.2;
                float mouseInfluence = sin(distance(pos.xy, vec2(mouseX * 5.0, mouseY * 5.0)) - time * 3.0) * 0.1;
                
                pos.y += wave1 + wave2 + mouseInfluence;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `;

        const waveFragmentShader = `
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec2 vUv;
            varying vec3 vPosition;
            
            void main() {
                float gradient = sin(vUv.x * 3.14159) * sin(vUv.y * 3.14159);
                float pulse = sin(time * 2.0 + vPosition.x * 0.1) * 0.5 + 0.5;
                
                vec3 color = mix(color1, color2, gradient * pulse);
                float alpha = gradient * 0.4;
                
                gl_FragColor = vec4(color, alpha);
            }
        `;

        const init = () => {
            const mount = mountRef.current;
            
            // Enhanced Renderer
            renderer = new WebGLRenderer({ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(THEME.backgroundColor, 1);
            renderer.shadowMap.enabled = true;
            mount.appendChild(renderer.domElement);

            // Scene & Camera
            scene = new Scene();
            camera = new PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 200);
            camera.position.set(0, 2, 12);

            // Enhanced Lighting System
            scene.add(new AmbientLight(0x6AF2F0, 0.3));
            
            const mainLight = new DirectionalLight(THEME.particleColor, 1.2);
            mainLight.position.set(8, 8, 5);
            mainLight.castShadow = true;
            scene.add(mainLight);

            // Colored point lights for dynamic lighting
            const pointLight1 = new PointLight(THEME.objectColor1, 1.5, 25);
            pointLight1.position.set(-8, 4, 3);
            scene.add(pointLight1);

            const pointLight2 = new PointLight(THEME.objectColor2, 1.2, 20);
            pointLight2.position.set(8, -4, -3);
            scene.add(pointLight2);

            const pointLight3 = new PointLight(THEME.accentColor, 1.0, 15);
            pointLight3.position.set(0, 8, 0);
            scene.add(pointLight3);

            // --- Enhanced Object Creation ---
            createEnhancedParticles();
            createCentralObjects();
            createFloatingObjects();
            createEnergyRings();
            createWaveField();

            // --- Enhanced Post-processing ---
            const renderScene = new RenderPass(scene, camera);
            bloomPass = new UnrealBloomPass(
                new Vector2(mount.clientWidth, mount.clientHeight), 
                2.0,  // strength
                0.6,  // radius  
                0.1   // threshold
            );
            composer = new EffectComposer(renderer);
            composer.addPass(renderScene);
            composer.addPass(bloomPass);

            // --- Event Listeners & Initial Calls ---
            window.addEventListener('resize', handleResize);
            mount.addEventListener('mousemove', throttledMouseMove);
            handleResize();
            animate();
        };

        const createEnhancedParticles = () => {
            // Multi-layered particle system
            const positions = new Float32Array(PARTICLE_COUNT * 3);
            const colors = new Float32Array(PARTICLE_COUNT * 3);
            const sizes = new Float32Array(PARTICLE_COUNT);

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                // More spread out positions
                positions[i * 3 + 0] = (Math.random() - 0.5) * 40;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

                // Random colors from your palette
                const colorChoice = Math.random();
                const color = new Color();
                if (colorChoice < 0.4) {
                    color.setHex(THEME.particleColor); // Cyan
                } else if (colorChoice < 0.7) {
                    color.setHex(THEME.objectColor1); // Purple
                } else {
                    color.setHex(THEME.objectColor2); // Blue
                }
                colors[i * 3 + 0] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;

                sizes[i] = Math.random() * 0.08 + 0.02;
            }

            const particleGeometry = new BufferGeometry();
            particleGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
            particleGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
            particleGeometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

            const particleMaterial = new PointsMaterial({
                size: 0.05,
                transparent: true,
                opacity: 0.8,
                vertexColors: true,
                blending: AdditiveBlending
            });

            particles = new Points(particleGeometry, particleMaterial);
            scene.add(particles);
        };

        const createCentralObjects = () => {
            mainGroup = new Group();

            // Main icosahedron with enhanced material
            const ico = new Mesh(
                new IcosahedronGeometry(2.2, 2),
                new MeshStandardMaterial({ 
                    color: THEME.objectColor1, 
                    wireframe: true, 
                    transparent: true, 
                    opacity: 0.3,
                    emissive: new Color(THEME.objectColor1).multiplyScalar(0.1)
                })
            );

            // Nested torus knots
            const torus1 = new Mesh(
                new TorusKnotGeometry(1.2, 0.3, 150, 20, 2, 3),
                new MeshStandardMaterial({ 
                    color: THEME.objectColor2, 
                    wireframe: true, 
                    transparent: true, 
                    opacity: 0.25,
                    emissive: new Color(THEME.objectColor2).multiplyScalar(0.08)
                })
            );

            const torus2 = new Mesh(
                new TorusKnotGeometry(0.8, 0.2, 120, 16, 3, 2),
                new MeshStandardMaterial({ 
                    color: THEME.particleColor, 
                    wireframe: true, 
                    transparent: true, 
                    opacity: 0.2,
                    emissive: new Color(THEME.particleColor).multiplyScalar(0.06)
                })
            );

            torus1.position.set(0.3, 0.1, 0.5);
            torus2.position.set(-0.2, 0.3, -0.4);
            
            mainGroup.add(ico);
            mainGroup.add(torus1);
            mainGroup.add(torus2);
            scene.add(mainGroup);
        };

        const createFloatingObjects = () => {
            floatingObjects = new Group();
            
            for (let i = 0; i < FLOATING_OBJECTS_COUNT; i++) {
                let geometry, material;
                const type = i % 4;
                
                switch(type) {
                    case 0:
                        geometry = new OctahedronGeometry(0.3 + Math.random() * 0.4, 1);
                        break;
                    case 1:
                        geometry = new IcosahedronGeometry(0.2 + Math.random() * 0.3, 0);
                        break;
                    case 2:
                        geometry = new ConeGeometry(0.2 + Math.random() * 0.2, 0.8 + Math.random() * 0.4, 6);
                        break;
                    default:
                        geometry = new SphereGeometry(0.15 + Math.random() * 0.2, 8, 6);
                }

                const colorChoice = [THEME.objectColor1, THEME.objectColor2, THEME.particleColor, THEME.accentColor];
                material = new MeshStandardMaterial({
                    color: colorChoice[Math.floor(Math.random() * colorChoice.length)],
                    wireframe: Math.random() > 0.5,
                    transparent: true,
                    opacity: 0.4 + Math.random() * 0.3,
                    emissive: new Color(colorChoice[i % colorChoice.length]).multiplyScalar(0.05)
                });

                const mesh = new Mesh(geometry, material);
                
                // Random positioning in a sphere around the scene
                const radius = 8 + Math.random() * 12;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                
                mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
                mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
                mesh.position.z = radius * Math.cos(phi);
                
                // Store initial position and random values for animation
                mesh.userData.initialPosition = mesh.position.clone();
                mesh.userData.rotationSpeed = new Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                );
                mesh.userData.floatSpeed = 0.5 + Math.random() * 1.0;
                mesh.userData.floatOffset = Math.random() * Math.PI * 2;
                
                floatingObjects.add(mesh);
            }
            
            scene.add(floatingObjects);
        };

        const createEnergyRings = () => {
            energyRings = new Group();
            
            for (let i = 0; i < 5; i++) {
                const ring = new Mesh(
                    new RingGeometry(3 + i * 1.5, 3.2 + i * 1.5, 32),
                    new MeshStandardMaterial({
                        color: i % 2 === 0 ? THEME.particleColor : THEME.objectColor1,
                        transparent: true,
                        opacity: 0.15 - i * 0.02,
                        side: DoubleSide,
                        blending: AdditiveBlending
                    })
                );
                
                ring.rotation.x = Math.PI / 2;
                ring.userData.rotationSpeed = (0.005 + i * 0.002) * (i % 2 === 0 ? 1 : -1);
                energyRings.add(ring);
            }
            
            scene.add(energyRings);
        };

        const createWaveField = () => {
            const geometry = new BufferGeometry();
            const size = 30;
            const segments = 50;
            const vertices = [];
            const uvs = [];

            for (let i = 0; i <= segments; i++) {
                for (let j = 0; j <= segments; j++) {
                    const x = (i / segments - 0.5) * size;
                    const z = (j / segments - 0.5) * size;
                    vertices.push(x, 0, z);
                    uvs.push(i / segments, j / segments);
                }
            }

            const indices = [];
            for (let i = 0; i < segments; i++) {
                for (let j = 0; j < segments; j++) {
                    const a = i * (segments + 1) + j;
                    const b = a + segments + 1;
                    const c = a + 1;
                    const d = b + 1;

                    indices.push(a, b, c);
                    indices.push(c, b, d);
                }
            }

            geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
            geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
            geometry.setIndex(indices);

            const material = new ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    mouseX: { value: 0 },
                    mouseY: { value: 0 },
                    color1: { value: new Color(THEME.particleColor) },
                    color2: { value: new Color(THEME.objectColor1) }
                },
                vertexShader: waveVertexShader,
                fragmentShader: waveFragmentShader,
                transparent: true,
                side: DoubleSide,
                blending: AdditiveBlending
            });

            waveMesh = new Mesh(geometry, material);
            waveMesh.position.y = -8;
            scene.add(waveMesh);
        };

        // --- Enhanced Event Handlers ---
        const handleResize = () => {
            const mount = mountRef.current;
            if (!mount) return;
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        };
        
        const handleMouseMove = (event) => {
            const mount = mountRef.current;
            if (!mount) return;
            const rect = mount.getBoundingClientRect();
            mouseTarget.x = ((event.clientX - rect.left) / mount.clientWidth) * 2 - 1;
            mouseTarget.y = -(((event.clientY - rect.top) / mount.clientHeight) * 2 - 1);
        };
        
        const throttledMouseMove = throttle(handleMouseMove, 16);

        // --- Enhanced Animation Loop ---
        const animate = (timestamp) => {
            time = timestamp * 0.001;

            // Smooth mouse interpolation
            mouse.lerp(mouseTarget, 0.05);

            // Enhanced particle animation with waves
            if (particles) {
                particles.rotation.y = time * 0.0003;
                particles.rotation.x = Math.sin(time * 0.0002) * 0.1;
                
                const positions = particles.geometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    positions[i + 1] += Math.sin(time * 0.001 + positions[i] * 0.01) * 0.002;
                }
                particles.geometry.attributes.position.needsUpdate = true;
            }

            // Enhanced main group animation
            if (mainGroup) {
                mainGroup.rotation.y += (mouse.x * MOUSE_INFLUENCE - mainGroup.rotation.y) * 0.08;
                mainGroup.rotation.x += (mouse.y * MOUSE_INFLUENCE - mainGroup.rotation.x) * 0.08;
                
                // Individual object rotations
                mainGroup.children[0].rotation.x += 0.003;
                mainGroup.children[0].rotation.y -= 0.002;
                if (mainGroup.children[1]) {
                    mainGroup.children[1].rotation.x -= 0.002;
                    mainGroup.children[1].rotation.z += 0.004;
                }
                if (mainGroup.children[2]) {
                    mainGroup.children[2].rotation.y += 0.005;
                    mainGroup.children[2].rotation.x += 0.001;
                }

                // Pulsing scale effect
                const scale = 1 + Math.sin(time * 0.002) * 0.05;
                mainGroup.scale.setScalar(scale);
            }

            // Animate floating objects
            if (floatingObjects) {
                floatingObjects.children.forEach((obj) => {
                    // Rotation
                    obj.rotation.x += obj.userData.rotationSpeed.x;
                    obj.rotation.y += obj.userData.rotationSpeed.y;
                    obj.rotation.z += obj.userData.rotationSpeed.z;
                    
                    // Floating motion
                    const floatY = Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * WAVE_AMPLITUDE;
                    const floatX = Math.cos(time * obj.userData.floatSpeed * 0.7 + obj.userData.floatOffset) * 1.5;
                    
                    obj.position.copy(obj.userData.initialPosition);
                    obj.position.y += floatY;
                    obj.position.x += floatX;
                    
                    // Mouse influence on nearby objects
                    const distance = obj.position.distanceTo(camera.position);
                    if (distance < 15) {
                        obj.position.x += mouse.x * (1 - distance / 15) * 2;
                        obj.position.y += mouse.y * (1 - distance / 15) * 2;
                    }
                });
            }

            // Animate energy rings
            if (energyRings) {
                energyRings.children.forEach((ring) => {
                    ring.rotation.z += ring.userData.rotationSpeed;
                });
                energyRings.rotation.y = time * 0.0005;
            }

            // Update wave field
            if (waveMesh && waveMesh.material.uniforms) {
                waveMesh.material.uniforms.time.value = time;
                waveMesh.material.uniforms.mouseX.value = mouse.x;
                waveMesh.material.uniforms.mouseY.value = mouse.y;
            }

            // Dynamic camera movement
            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
            camera.position.y += (-mouse.y * 1 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);

            composer.render();
            reqId = requestAnimationFrame(animate);
        };

        init();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(reqId);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeEventListener('mousemove', throttledMouseMove);
                if(renderer.domElement) {
                   mountRef.current.removeChild(renderer.domElement);
                }
            }
            // Enhanced cleanup
            scene.traverse(object => {
                if (object.isMesh || object.isPoints) {
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
            if (renderer) renderer.dispose();
            if (composer) composer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 -z-10 w-full h-full" />;
}