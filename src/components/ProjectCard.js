import React from 'react';
import { motion } from 'framer-motion';
const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
    style={{"border":"0.06px solid grey"}}
      whileHover={{ scale: 0.97 }} 
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <img src={image} alt={title}  className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">View Project</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;