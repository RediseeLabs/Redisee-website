import React from 'react';
import { TeamWrapper, Member } from './Styled/Global';
import AnnaImg from '../assets/Anna.png';
import GarrettImg from '../assets/Garrett.png';
import PatriceImg from '../assets/Patrice.png';
import DavidImg from '../assets/David.png';
import { animated, useInView } from '@react-spring/web';

const Team = () => {
  const members = [
    { name: 'Anna', role: 'Engineer', img: AnnaImg },
    { name: 'Patrice', role: 'Engineer', img: PatriceImg },
    { name: 'Garrett', role: 'Engineer', img: GarrettImg },
    { name: 'David', role: 'Engineer', img: DavidImg },
  ];

  const [ref, slideUp] = useInView(() => ({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 400 },
  }));

  const membersCards = members.map((m) => (
    <Member>
      <img src={m.img} />
      <div className="info">
        <h1 className="name">{m.name}</h1>
        <p className="role">{m.role}</p>
      </div>
    </Member>
  ));

  return (
    <TeamWrapper ref={ref} style={slideUp} id="team">
      <h1>Meet our Team</h1>
      <div className="members">{membersCards}</div>
    </TeamWrapper>
  );
};

export default Team;
