import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountingElement = ({ number, text, delay, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,
  });

  useEffect(() => {
    let timer;
    if (inView && count < number) {
      timer = setInterval(() => {
        setCount((prevCount) => (prevCount < number ? prevCount + 1 : number));
      }, delay);
    }

    return () => clearInterval(timer); 
  }, [inView, count, number, delay]);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '20px' }} className='count-div'>
      <h1>{count}{count === number && suffix}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default CountingElement