import React, { useState } from 'react';
import styled from 'styled-components';
import backImg from './back.jpg';

function App() {

  const [blurPosition, setBlurPosition] = useState({x:-40, y:-40})

  return (
    <div className="App">
      <BlurDiv 
        blurPosition={blurPosition}
        onMouseMove={e => {
          setBlurPosition({x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop})
        }}
      />
    </div>
  );
}

const BlurDiv = styled.div`
  margin:50px;
  width:612px;
  height:607px;
  position:relative;    
  &:before,
  &:after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;    
    background:url(${backImg});
  }			
  &:after {        
    filter:blur(5px);    
    clip-path: circle(60px at ${props => (`${props.blurPosition.x}px ${props.blurPosition.y}px)`)};
  }
`

export default App;
