import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  background-color: #f9a828;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color linear 800ms;
  margin-top: 20px;
  :hover {
    background-color: #2e383f;
    color: white;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: #2e383f;
  color: white;
  :hover {
    background-color: #2c617d;
    color: white;
  }
`;

function Button() {
  return (
    <div>
      <BaseButton>Base button</BaseButton>
      <PrimaryButton>Primary button</PrimaryButton>
    </div>
  );
}

export { Button, BaseButton, PrimaryButton };
