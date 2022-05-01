import styled from 'styled-components';

export const Container = styled('div')`
position: relative;
width: 75px;
display: inline-block;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
text-align: left;
`;

export const Input = styled('input')`
display: none;
`;

export const Label = styled('label')`
display: block;
overflow: hidden;
cursor: pointer;
border: 0 solid #bbb;
border-radius: 20px;
margin: 0;
`;

export const Inner = styled('span')`
display: block;
width: 200%;
margin-left: -100%;
transition: margin 0.3s ease-in 0s;
&:before,
&:after {
  display: block;
  float: left;
  width: 50%;
  height: 34px;
  padding: 0;
  line-height: 34px;
  font-size: 14px;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
}
&:before {
  content: "Yes";
  text-transform: uppercase;
  padding-left: 10px;
  background-color: #f90;
  color: #fff;
}
&:after {
    content: "No";
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
`;

export const Switch = styled('span')`
display: block;
width: 24px;
margin: 5px;
background: #fff;
position: absolute;
top: 0;
bottom: 0;
right: 40px;
border: 0 solid #bbb;
border-radius: 20px;
transition: all 0.3s ease-in 0s;
`;