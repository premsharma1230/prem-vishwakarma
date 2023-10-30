import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prem Dev
        </motion.span>
        
        <div className="social">  
          <h2 className="text-sm capitalize text-white">Resume</h2> 
          <a href="https://instagram.com/iam_prem_sharma">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
