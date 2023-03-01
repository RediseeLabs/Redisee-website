import React from 'react';
import image2 from '../assets/main.svg';
import { Section, Image, TextContainer } from './Styled/Global';
import { animated, useInView } from '@react-spring/web';

const About = () => {
  const [image, slideLeft] = useInView(() => ({
    from: {
      opacity: 0,
      x: 80,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: {
      duration: 400,
    },
  }));

  const [text, slideUp] = useInView(() => ({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: {
      duration: 400,
    },
  }));

  return (
    <Section imgRight id="about">
      <TextContainer ref={text} right>
        <h2 className="title">
          <animated.span style={slideUp}>What is RediSee ?</animated.span>
        </h2>
        <p className="paragraph">
          <animated.p style={slideUp}>
            RediSee provides real-time monitoring of Redis instances. Metrics
            are available for keyspace, evicted keys, memory used, keyspace
            misses, hit rate, latency, etc. Multiple instances can be visualized
            simultaneously. RediSee is easy to navigate and use, with creation
            and deletion of instance visualization being completed with the
            click of a button.
          </animated.p>
        </p>
      </TextContainer>
      <Image right ref={image} style={slideLeft} src={image2} />
    </Section>
  );
};

export default About;
