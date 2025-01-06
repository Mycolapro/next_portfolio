import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';
import {motion} from "framer-motion"
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <motion.div
       initial={{
        opacity: 0,   
       }}
       whileInView = {{
         x : 0,
         opacity : 1,
         scale : 1,
       }}
       transition ={{ duration : 0.5 }}
      className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Dynamic and results-driven Senior Full Stack Lead Developer with over 6 years of extensive experience in architecting and delivering innovative web and mobile applications. Proficient in developing robust backend systems using Node.js, Python, and Java, while crafting intuitive frontends with React, Angular, and Vue.js. Adept at utilizing blockchain technologies to enhance decentralized applications, smart contracts, and cryptocurrency integrations. 
          </p>
          <p className='py-2 text-gray-600'>
          Passionate about code quality and performance optimization, I consistently implement best practices, including TDD and CI/CD pipelines, to ensure seamless deployment and maintainability. Extensive experience in leading cross-functional teams through Agile methodologies, fostering collaboration and driving project milestones to success. 
          </p>
          <p className='py-2 text-gray-600'>
          Skilled in database design and management using both SQL (Postgres, MySQL) and NoSQL (MongoDB, Firebase) technologies, ensuring data integrity and availability for high-traffic applications. Committed to staying updated with emerging technologies and continuously improving skills to foster innovation within projects. My proactive approach to problem-solving allows me to tackle complex challenges head-on, delivering impactful solutions that exceed client expectations. 
          </p>
          <p className='py-2 text-gray-600'>
          Eager to leverage my expertise in both development and leadership to contribute to a forward-thinking organization that values creativity and technical excellence.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
