import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: var(--color-white);
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background: linear-gradient(to bottom left, ${(props) => props.colorstart}, ${(props) => props.colorstart}); /* ${(props) => props.colorstart}, ${(props) => props.colorstart} */

  /* Optional: Add hover effect for better interaction */
  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

function Button({onClick, text, colorStart, colorEnd, type = 'button'}) {

  return (
    <StyledButton onClick={onClick} colorstart={colorStart} colorend={colorEnd} type={type}>
      {text}
    </StyledButton>
  );
}

export default Button;