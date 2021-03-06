import React, { Component } from 'react';

class Spoiler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open,
    };
  }

  toggleDisplay = () => {
    const state = !this.state.open;
    this.setState({open: state});
  }

  render() {
    const {
        label = '',
        headerBgColor = 'gray',
        headerColor = 'white',
        maxHeight = '200px',
        bordered = false,
        textAlign = 'left',
      } = this.props;

    const animatedStyle = {
      transform: 'scaleY(1.2)',
      display: 'block',
      boxSizing: 'border-box',
      margin: '25px',
      border: bordered ? '1px solid #aaa' : 'none',
      borderRadius: '5px',
      overflow: 'scroll',
      maxHeight: 'calc(100%)',
      minHeight: '2em',
      transition: 'all 0.25s'
    }
    const animatedStyleClosed = {
      transform: 'scaleY(1.0)',
      boxSizing: 'border-box',
      display: 'block',
      margin: '25px',
      border: bordered ? '1px solid #aaa' : 'none',
      borderRadius: '5px',
      overflow: 'hidden',
      maxHeight: '32px',
      transition: 'all 0.25s'
    }
    const headerStyle = {
      zIndex: '10',
      position: 'fixed',
      top: '0px',
      backgroundColor: headerBgColor,
      border: 'none',
      fontSize: '1em',
      width: '100%',
      padding: '5px',
      color: headerColor,
      fontWeight: 'bold'
    }
    const bodyStyleOpen = {
      opacity: 1.0,
      paddingLeft: '10px',
      transition: 'opacity 0.25s ease-in'
    }
    const bodyStyleClosed = {
      opacity: 0.0,
      paddingLeft: '10px',
      transition: 'opacity 0.25s ease-in'
    }
    const {open} = this.state;
    return (
      <div style={open ? animatedStyle : animatedStyleClosed} >
        <div style={headerStyle} onClick={this.toggleDisplay}>{label}</div>
        <div style={open ? bodyStyleOpen : bodyStyleClosed}>{this.props.children}</div>
      </div>
    );
  }

}

export default Spoiler;
