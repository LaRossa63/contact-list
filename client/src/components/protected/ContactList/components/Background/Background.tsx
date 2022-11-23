import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  z-index: 0;

  background-color: ${(props) => props.theme.pallette.background.default};
`;

const portal = document.getElementById('modal') as HTMLElement;

export const Background = () => {
  return ReactDOM.createPortal(<Container />, portal);
};
