import React, { Fragment, Component } from 'react';
// import ProfileLink from './Link.js';
// import ButtonList from './Link.js';
import Link from './Link.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Link url='//react.dev'>
          <strong>React</strong>
        </Link>
        <Link url='//vuejs.org'>Vue</Link>
        <Link url='//angular.io'>Angular</Link>
      </Fragment>
    );
  }
}
export default App;
