import React, { useEffect, useRef } from 'react';
import {
    WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight,
    BufferGeometry, Float32BufferAttribute, PointsMaterial, Points, Group,
    IcosahedronGeometry, MeshStandardMaterial, Mesh, TorusKnotGeometry, Vector2
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

        // --- Constants & Theme ---
        const THEME = {
            backgroundColor: 0x0a0a1a, // A deep, dark blue
            particleColor: 0x8B5CF6,   // Vidyaarambh's violet accent
            objectColor1: 0x8B5CF6,    // Violet
            objectColor2: 0x14b8a6,    // Teal for contrast
        };
        const PARTICLE_COUNT = 300;
        const MOUSE_INFLUENCE = 0.05;

        // --- Core Scene Setup ---
        let scene, camera, renderer, composer, bloomPass;
        let mainGroup, particles;
        const mouse = new Vector2(0, 0);
        let reqId;

        const init = () => {
            const mount = mountRef.current;
            
            // Renderer
            renderer = new WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(THEME.backgroundColor, 1);
            mount.appendChild(renderer.domElement);

            // Scene & Camera
            scene = new Scene();
            camera = new PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
            camera.position.set(0, 0, 7);

            // Lighting
            scene.add(new AmbientLight(0xffffff, 0.5));
            const dirLight = new DirectionalLight(THEME.particleColor, 0.7);
            dirLight.position.set(5, 5, 5);
            scene.add(dirLight);

            // --- Object Creation ---
            createObjects();

            // --- Post-processing (for Bloom effect) ---
            const renderScene = new RenderPass(scene, camera);
            bloomPass = new UnrealBloomPass(new Vector2(mount.clientWidth, mount.clientHeight), 1.2, 0.4, 0.75);
            composer = new EffectComposer(renderer);
            composer.addPass(renderScene);
            composer.addPass(bloomPass);

            // --- Event Listeners & Initial Calls ---
            window.addEventListener('resize', handleResize);
            mount.addEventListener('mousemove', throttledMouseMove);
            handleResize();
            animate();
        };

        const createObjects = () => {
            // Particle System
            const positions = new Float32Array(PARTICLE_COUNT * 3);
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            }
            const particleGeometry = new BufferGeometry();
            particleGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
            const particleMaterial = new PointsMaterial({
                color: THEME.particleColor,
                size: 0.03,
                transparent: true,
                opacity: 0.8
            });
            particles = new Points(particleGeometry, particleMaterial);
            scene.add(particles);

            // Central Wireframe Objects
            mainGroup = new Group();
            const ico = new Mesh(
                new IcosahedronGeometry(1.4, 1),
                new MeshStandardMaterial({ color: THEME.objectColor1, wireframe: true, transparent: true, opacity: 0.2 })
            );
            const torus = new Mesh(
                new TorusKnotGeometry(0.8, 0.26, 120, 16),
                new MeshStandardMaterial({ color: THEME.objectColor2, wireframe: true, transparent: true, opacity: 0.15 })
            );
            torus.position.set(0.5, 0.2, 0.8);
            mainGroup.add(ico);
            mainGroup.add(torus);
            scene.add(mainGroup);
        };

        // --- Event Handlers ---
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
            mouse.x = ((event.clientX - rect.left) / mount.clientWidth) * 2 - 1;
            mouse.y = -(((event.clientY - rect.top) / mount.clientHeight) * 2 - 1);
        };
        
        const throttledMouseMove = throttle(handleMouseMove, 16); // Throttle to roughly 60fps

        // --- Animation Loop ---
        const animate = (time) => {
            // Particle animation
            particles.rotation.y = time * 0.0001;

            // Group animation based on mouse position for interactivity
            mainGroup.rotation.y += (mouse.x * MOUSE_INFLUENCE - mainGroup.rotation.y) * 0.05;
            mainGroup.rotation.x += (mouse.y * MOUSE_INFLUENCE - mainGroup.rotation.x) * 0.05;
            
            // Autonomous rotation for a sense of life
            mainGroup.children[0].rotation.x += 0.001;
            mainGroup.children[0].rotation.y -= 0.0005;
            mainGroup.children[1].rotation.x -= 0.0005;
            mainGroup.children[1].rotation.z += 0.001;

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
            // Dispose of Three.js objects
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
            renderer.dispose();
        };
    }, []);

    // We use a div as a mount point now, which is more flexible than a direct canvas ref
    return <div ref={mountRef} className="absolute inset-0 -z-10 w-full h-full" />;
}
