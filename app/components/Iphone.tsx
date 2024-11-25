import * as THREE from "three";
import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

interface ModelProps {
  item: {
    color: string[];
    img: string;
  };
  [key: string]: any; // To allow additional props for flexibility
}

const Model: React.FC<ModelProps> = (props) => {
  const { nodes, materials } = useGLTF("/models/scene.glb") as any;

  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).forEach(
      ([materialName, material]: [string, THREE.Material]) => {
        // Skip specific material names
        if (
          materialName !== "zFdeDaGNRwzccye" &&
          materialName !== "ujsvqBWRMnqdwPx" &&
          materialName !== "hUlRcbieVuIiOXG" &&
          materialName !== "jlzuBkUzuJqgiAK" &&
          materialName !== "xNrofRCqOXXHVZt"
        ) {
          (material as THREE.MeshStandardMaterial).color = new THREE.Color(
            props.item.color[0]
          );
        }
        (material as THREE.Material).needsUpdate = true;
      }
    );
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      {Object.entries(nodes).map(
        ([nodeName, node]: [string, THREE.Mesh | THREE.Object3D]) => {
          const material = (node as THREE.Mesh).material;
          const geometry = (node as THREE.Mesh).geometry;

          return (
            <mesh
              key={nodeName}
              castShadow
              receiveShadow
              geometry={geometry}
              material={material}
              scale={0.01}
            >
              {nodeName === "xXDHkMplTIDAXLN" && (
                <meshStandardMaterial roughness={1} map={texture} />
              )}
            </mesh>
          );
        }
      )}
    </group>
  );
};

export default Model;

useGLTF.preload("/models/scene.glb");
