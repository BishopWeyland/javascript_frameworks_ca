import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

function MyForm() {
  return (
    <div>
      <StyledInput type="text" id="myInput" placeholder="Enter text here" />

      <StyledTextarea
        id="myTextarea"
        placeholder="Enter text here"
      ></StyledTextarea>
    </div>
  );
}

export { MyForm, StyledInput, StyledTextarea };
