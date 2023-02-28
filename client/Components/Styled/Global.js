import styled, { css } from 'styled-components';
import { UilClipboard } from '@iconscout/react-unicons';
import { animated } from '@react-spring/web';

export const Section = styled.div`
  width: 1520px;
  margin: auto;
  margin-top: 100px;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
  margin: 100px auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin-left: ${(props) => (props.right ? '50px' : 'auto')};
  h1 {
    width: 10;
    margin: 5px;
    font-size: 5em;
    font-weight: 800;
    overflow: hidden;
    span {
      display: block;
    }
  }
  h2 {
    margin: 5px;
    font-size: 4em;
    font-weight: 800;
    overflow: hidden;
    span {
      display: block;
    }
  }
  .subtitle {
    margin: 6px 0;
    font-size: 2em;
    font-weight: 500;
    overflow: hidden;
    span {
      display: block;
    }
  }
  .paragraph {
    margin: 0;
    text-align: left;
    width: 500px;
    overflow: hidden;
    span {
      display: block;
    }
    b {
      color: #537abd;
      font-size: 1.2em;
    }
  }
`;

export const Image = styled(animated.img)`
  margin-left: 80px;
  width: 90%;
`;

export const Clipboard = styled.pre`
  margin-top: 30px;
  width: 300px;
  height: 80px;
  background-color: rgb(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    font-size: 1.4em;
    color: black;
    margin-right: 50px;
  }
`;

export const IconClipBoard = styled(UilClipboard)`
  height: 60px;
  color: grey;
  margin-right: 20px;
  :hover {
    color: #4480ed;
    cursor: pointer;
  }
`;

export const TeamWrapper = styled(animated.div)`
  width: 1520px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .members {
    display: flex;
  }
  h1 {
    width: 10;
    margin: 5px;
    font-size: 5em;
    font-weight: 800;
    margin-bottom: 100px;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 50px;
  img {
    object-fit: fill;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  div {
    .name {
      font-size: 1.3em;
      margin: 0;
      color: #547fe7;
    }
    .role {
      margin-top: 5px;
    }
  }
`;
