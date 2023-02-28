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
      opacity: 100,
      y: 0,
    },
    config: {
      duration: 400,
    },
  }));

  return (
    <Section id="product">
      <TextContainer ref={text}>
        <h1 className="title">
          <animated.span style={slideUp}>RediSee</animated.span>
        </h1>
        <h4 className="subtitle">
          <animated.span style={slideUp}>
            A web application to Monitor redis database
          </animated.span>
        </h4>
        <p className="paragraph">
          <animated.span style={slideUp}>
            Sed feugiat euismod ex ut tincidunt. Pellentesque dictum luctus
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            suscipit. Etiam faucibus placerat neque, et vehicula dui accumsan
          </animated.span>
        </p>
        <p className="paragraph">
          <animated.span style={slideUp}>
            vitae. Duis quis nibh nec metus aliquet lobortis.
          </animated.span>
        </p>

        <Clipboard>
          <p>github/resisSee</p>
          <IconClipBoard
            onClick={() => {
              console.log('copy');
            }}
          />
        </Clipboard>
      </TextContainer>
      <Image ref={image} style={slideLeft} src={main} />
    </Section>
  );
};

export default Product;
