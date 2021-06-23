import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  h2 {
    font-size: 3em;
    font-weight: 500;
    color: #ffffff;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    h2 {
      font-size: 3rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
