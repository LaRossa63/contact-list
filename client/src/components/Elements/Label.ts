import styled from 'styled-components';

export const Label = styled.label<{ gap?: string }>`
  display: flex;
  flex-direction: column;

  gap: ${(props) => props.gap || '5.5px'};
`;
