import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 0;

  background-color: ${(props) => props.theme.pallette.background.default};
`;

const portal = document.getElementById('modal') as HTMLElement;

export const Background = () => {
  return ReactDOM.createPortal(<Container />, portal);
};
