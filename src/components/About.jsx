import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an aspiring IT engineer currently pursuing a degree in IT
        Engineering at IUST University. With a strong passion for web
        development and a commitment to staying at the forefront of technology,
        I have acquired a versatile skill set in modern web development
        technologies such as ReactJs, NextJs, NestJs, ExpressJs, and many more.
        I'm a quick learner and collaborate closely with clients and teammates
        to create efficent, scalable, and user-friendly solutions that solve
        real-worl problemes. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
