'use client'
import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import * as THREE from 'three'
interface IProps {
    children?: ReactNode
}
const Three1: FC<IProps> = memo(() => {
    const firstRenderRef = useRef(true)
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight); // 将渲染器的输出添加到HTML文档中
        document.querySelector('#three1')?.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }, [])
    // if (typeof window !== "undefined") {
    //     // Client-side-only code

    // }


    return <div id='three1'>Three1</div>
})

export default Three1
