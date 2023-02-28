import React from 'react';
import image2 from '../assets/main.svg';
import { Section, Image, TextContainer } from './Styled/Global';
import { animated, useInView } from '@react-spring/web';

const About = () => {
  const [image, slideRight] = useInView(() => ({
    from: {
      opacity: 0,
      x: -80,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: { duration: 400 },
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
    <Section id="about">
      <Image ref={image} style={slideRight} src={image2} />
      <TextContainer ref={text} right>
        <h2 className="title">
          <animated.span style={slideUp}>What is RediSee ?</animated.span>
        </h2>
        <p className="paragraph">
          <animated.span style={slideUp}>
            maximus lectus dolor eget magna. Morbi convallis tincidunt felis sit
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            scelerisque, leo in iaculis aliquam, nibh quam sollicitudin tellus,
            in
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            suscipit, elementum neque vitae, ultrices enim. Vestibulum
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            <b>auctor a bibendum non</b>, dapibus sed magna. Integer et diam
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            volutpat diam ac arcu ornare, non <b>faucibus tortor sodales.</b>
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            Maecenas eu mattis risus. Morbi maximus dolor id ullamcorper
          </animated.span>
        </p>
      </TextContainer>
    </Section>
  );
};

export default About;
