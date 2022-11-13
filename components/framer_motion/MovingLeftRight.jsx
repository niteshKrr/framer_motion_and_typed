import React from "react";
import { motion } from "framer-motion";


const MovingLeftRight = () => {
  return (
    <div className="container mx-auto bg-green-300 my-10 flex justify-center">
          <motion.div animate={{x:[0,500,500,0,-500,-500,0] }}
              transition={{repeat : Infinity , duration :6}}
          >
        <div className="my-5">
          <div className=" p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-10">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovingLeftRight;
