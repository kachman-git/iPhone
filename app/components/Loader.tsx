import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-gray-600">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
