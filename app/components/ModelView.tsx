import React, { RefObject } from "react";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Light";
import Loader from "./Loader";
import IPhone from "./Iphone";

interface ModelViewProps {
  index: number;
  groupRef: RefObject<THREE.Group>;
  gsapType: string;
  controlRef: RefObject<any>;
  setRotationState: (angle: number) => void;
  size: string;
  item: any;
}

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          const angle = controlRef.current?.getAzimuthalAngle() ?? 0;
          setRotationState(angle);
        }}
      />
      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <React.Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </React.Suspense>
      </group>
    </View>
  );
};

export default ModelView;
