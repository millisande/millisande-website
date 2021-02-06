import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './pages/pages.js';
import GlobalStyles from './GlobalStyles';
import {HeaderBar} from './components/components.js'

class App extends Component {

  render() {

    const options = ["About", "Portfolio", "CV"]
    
    return (
        <div>
        <GlobalStyles />
        <HeaderBar /*options={options} onClick={handleSwitch}*/></HeaderBar>
        <Switch>
                <Route exact path="/about" component={pages.About} />
                <Route exact path="/cv" component={pages.Cv} />
                <Route exact path="/portfolio" component={pages.Portfolio} />
                <Route exact path="/" component={pages.Home} />
              </Switch>
              </div>
    );
  }
}

export default App;
