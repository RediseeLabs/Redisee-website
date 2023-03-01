import styled, { css } from 'styled-components';
import { UilClipboard } from '@iconscout/react-unicons';
import { animated } from '@react-spring/web';

export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: ${(props) => (props.imgRight ? '40% 60%' : '60% 40%')};
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0;
  @media (max-width: 900px) {
    margin: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    order: 1;
  }
  h1 {
    margin-bottom: 5px;
    width: 10;
    font-size: 5em;
    font-weight: 800;
    overflow: hidden;
    span {
      display: block;
    }
    @media (max-width: 1400px) {
      font-size: 3.2em;
    }
  }
  h2 {
    margin-bottom: 10px;
    font-size: 4em;
    font-weight: 800;
    overflow: hidden;
    span {
      display: block;
    }
    @media (max-width: 1400px) {
      font-size: 2em;
    }
  }
  .subtitle {
    margin-bottom: 10px;
    font-size: 2em;
    font-weight: 500;
    overflow: hidden;
    text-align: left;
    @media (max-width: 1400px) {
      font-size: 1.2em;
      text-align: center;
    }
    span {
      display: inline-block;
    }
  }
  .paragraph {
    margin: 0;
    text-align: left;
    overflow: hidden;
    @media (max-width: 900px) {
      text-align: center;
    }
    span {
      display: inline-block;
    }
    b {
      color: #537abd;
      font-size: 1.2em;
    }
  }
  a {
    margin-top: 20px;
    font-size: 2em;
    @media (max-width: 1400px) {
      font-size: 1.5em;
      text-align: center;
    }
  }
`;

export const Image = styled(animated.img)`
  width: 80%;
  margin-left: ${(props) => (props.right ? 'auto' : '0')};
  margin-right: ${(props) => (props.right ? '0' : 'auto')};
  @media (max-width: 900px) {
    margin: auto;
  }
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
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  flex-direction: column;
  align-items: center;
  .members {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 900px) {
      font-size: 3.2em;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
  }
  h1 {
    width: 10;
    margin: 5px;
    font-size: 5em;
    font-weight: 800;
    margin-bottom: 100px;
    @media (max-width: 1400px) {
      font-size: 3.2em;
    }
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  img {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 30px;
    @media (max-width: 900px) {
      width: 30vw;
      height: 30vw;
    }
  }
  div {
    .name {
      font-size: 1.3em;
      margin: 0;
      color: #547fe7;
      @media (max-width: 900px) {
        font-size: 0.5em;
      }
    }
    .role {
      margin-top: 5px;
      @media (max-width: 900px) {
        font-size: 0.3em;
      }
    }
  }
`;
