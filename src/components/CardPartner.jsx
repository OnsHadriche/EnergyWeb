import PropTypes from "prop-types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const CardPartner = ({ image }) => {
  const [showOverley, setShowOverly] = useState(false);
 
  return (
    <motion.div
      style={{
        minWidth: "200px",
        width: "100%",
        height: "200px",
      }}
      className="position-relative overflow-hidden bg-light rounded  d-flex justify-content-center align-items-center"
      onHoverStart = {()=>setShowOverly(true)}
      onHoverEnd = {()=>setShowOverly(false)}
    >
        <AnimatePresence>

      {showOverley && (
          <motion.div className="position-absolute inset-0 z-100  h-100 w-100 d-flex justify-content-center align-items-center"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
          <div className="position-absolute bg-black pointer-events-none opacity-50 h-100 w-100"></div>
        </motion.div>
      )}
      </AnimatePresence>
      <img
        src={image}
        alt="Partner Logo"
        className="object-fit-cover rounded "
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
};

CardPartner.propTypes = {
  image: PropTypes.string.isRequired,
};
