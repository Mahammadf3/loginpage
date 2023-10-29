import styled from "styled-components";

export const SubmitButton=styled.button`
cursor:pointer;

&:hover {
    background-color:blue;
    color:white;
  }
`;
export const SubmitForm=styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 12px;
height:60vh;
width:30vw;
box-shadow: 0px 4px 16px 0px gray;
background-color:  lightsteelblue;

@media (max-width: 768px) {
    width: 90vw; 
    background-color:skyblue;
  }

`;
export const DivContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh;

@media (max-width: 768px) {
    padding: 20px; 
  }

`;

export const InputData=styled.input`
margin:12px;
width:15vw;
cursor:pointer;
@media (max-width: 768px) {
    width:40vw; 
  }


`;

export const Passage=styled.p`
color:red`;
export const Passage1=styled.p`
color:green`;

export const Heading=styled.h1`
`;
