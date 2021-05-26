import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <div>
      <h2>Meet the Team!</h2>
      <Awesome>
        <h2>We are awesome!</h2>
        <p>Gabriel Henton - React II</p>
        <p>Onaje Oladuwa - React II</p>
        <p>Chavion Jackson - React I</p>
        <p>Douglas Little - Back End</p>
        <p> and Dalian Simpson - React I</p>
      </Awesome>
    </div>
  );
};

export default AboutUs;

// Styled component styling

const Awesome = styled.div`
  font-size: 30px;
`;
