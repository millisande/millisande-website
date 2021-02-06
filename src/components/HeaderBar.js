import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from '../assets/logo.png'
import styled from 'styled-components';
import { withRouter } from "react-router";

const Bar = styled('div')`
  display: grid;
  grid-template-columns: 80px 2fr 1fr;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid black
  padding: 5px
`;

const Logo = styled('img')`
  height: 75%;
  grid-column: span 1;
  object-fit: cover;
  max-width: 50px;
  `;

const Tabs = styled('div')`
display: flex;
justify-content: flex-end
`;

const Tab = styled('button')`
margin: 10px`;

// A simple component that shows the pathname of the current location
class HeaderBarBase extends React.Component {

  render() {
    const { match, location, history } = this.props;
    console.log(location)
    const options = ["About", "Portfolio", "CV"]
    return (
      <Bar>
        <Logo src={logo} alt="smiley sun"></Logo>
        <h2>Millisande</h2>
        <Tabs>
        {options.map((opt, idx) => (
        <Tab
          key={idx}
          onClick={() => history.push(`/${opt}`)}
          //active={selected === opt.id}
          //isFullWidth={isFullWidth}
          //isBlue={isBlue}
        >{opt}</Tab>))}
        </Tabs>
      </Bar>
    )
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const HeaderBar = withRouter(HeaderBarBase);


export default HeaderBar;