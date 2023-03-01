import React from 'react';
import {
  Section,
  Image,
  TextContainer,
  Clipboard,
  IconClipBoard,
} from './Styled/Global.js';
import main from '../assets/image2.svg';
import { animated, useInView, easings } from '@react-spring/web';

const Product = () => {
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
      opacity: 100,
      y: 0,
    },
    config: {
      duration: 400,
    },
  }));

  return (
    <Section id="product">
      <Image ref={image} style={slideRight} src={main} />

      <TextContainer right ref={text}>
        <h1 className="title">
          <animated.span style={slideUp}>RediSee</animated.span>
        </h1>
        <h4 className="subtitle">
          <animated.span style={slideUp}>
            The Perfect Tool to Motitor your Redis Instances.
          </animated.span>
        </h4>
        <p className="paragraph">
          <animated.span style={slideUp}>
            Visualizing the health of your Redis instances is only a few short
            steps away. Click the link below, to access RediSee GitHub where you
            can clone the repo, and follow easy set-up instructions.
          </animated.span>
        </p>
        <a href={'https://github.com/redisee-Team/redisee'} target="_blank">
          go to our repository
        </a>
      </TextContainer>
    </Section>
  );
};

export default Product;
