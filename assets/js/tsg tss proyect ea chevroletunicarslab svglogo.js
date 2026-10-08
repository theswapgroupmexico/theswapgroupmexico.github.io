import React from 'react';
import styled, { keyframes } from 'styled-components';

// --- ANIMACIONES EXTRAÍDAS DE TU CSS ---

const drawRed = keyframes`
  85% { fill: transparent; stroke: red; }
  90% { fill: transparent; stroke: red; stroke-dashoffset: 0; }
  95% { fill: red; stroke: red; stroke-dashoffset: 0; stroke-width: 5; }
  100% { fill: red; stroke: red; stroke-width: 5; stroke-dashoffset: 0; }
`;

const drawWhite = keyframes`
  85% { fill: transparent; stroke: white; }
  90% { fill: transparent; stroke: white; stroke-dashoffset: 0; }
  95% { fill: white; stroke: white; stroke-dashoffset: 0; stroke-width: 5; }
  100% { fill: white; stroke: white; stroke-width: 5; stroke-dashoffset: 0; }
`;

const textAnim = keyframes`
  85% { fill: transparent; }
  90% { fill: transparent; stroke-dashoffset: 0; }
  95% { fill: white; stroke: white; stroke-dashoffset: 0; stroke-width: 5; }
  100% { fill: white; stroke: white; stroke-width: 0; stroke-dashoffset: 0; }
`;

// --- COMPONENTES ESTILIZADOS ---

const StyledSvg = styled.svg`
  width: ${props => props.width || "100%"};
  transition: all 500ms ease;
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));

  /* Responsive según tu CSS */
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PathRed = styled.path`
  fill: none;
  stroke: red;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 2500;
  stroke-dashoffset: 3000;
  animation: ${drawRed} 10s ease-out forwards infinite alternate;
`;

const PathWhite = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 2500;
  stroke-dashoffset: 3000;
  animation: ${drawWhite} 10s ease-out forwards infinite alternate;
`;

const AnimatedText = styled.text`
  fill: none;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: ${textAnim} 10s ease-out forwards infinite alternate;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-style: italic;
`;

const CorvetteZ06Logo = ({ width = "100%", className = "" }) => {
  return (
    <StyledSvg 
      viewBox="0 0 1200 200" 
      width={width} 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shadow)">
        {/* 'Z' Roja con animación unicarsred */}
        <PathRed d="M50,150 L350,150 L100,50 L400,50 L380,75 L150,75 L380,140 L50,140 Z" />
        
        {/* '06' Blanco con animación unicarsgray */}
        <PathWhite d="M450,50 L650,50 L650,150 L450,150 Z M480,70 L480,130 L620,130 L620,70 Z" />
        <PathWhite d="M700,50 L900,50 L900,70 L730,70 L730,100 L900,100 L900,150 L700,150 L700,130 L870,130 L870,120 L700,120 Z" />
        
        {/* Texto CORVETTE con animación textblack */}
        <AnimatedText x="750" y="40" font-size="30" letter-spacing="2">
          CORVETTE
        </AnimatedText>
      </g>
    </StyledSvg>
  );
};

export default CorvetteZ06Logo;