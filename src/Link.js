import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <p>
        <a href={this.props.url}>{this.props.children}</a>
      </p>
    );
  }
}

export default Link;
