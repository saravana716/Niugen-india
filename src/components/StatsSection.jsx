import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import './StatsSection.css';

const Counter = ({ from, to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-box">
            <h3><Counter from={0} to={500} />+</h3>
            <p>Happy Families</p>
          </div>
          <div className="stat-box">
            <h3><Counter from={0} to={20} />+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3><Counter from={0} to={15} /></h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-box">
            <h3><Counter from={0} to={100} />%</h3>
            <p>Clear Documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
