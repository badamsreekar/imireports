import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
  static defaultProps = {
    size: 32,
  };

  static propTypes = {
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    let { dark, height, width, size } = this.props;
    return (

<svg
xmlns="http://www.w3.org/2000/svg"
className={cx("Icon", { }, { })}
viewBox="0 0 252.77037 182.31359"
y="0px"
x="0px"
height={height || size}
width={width || size}><g id="g5" transform="translate(-527.5946,-108.77425)"><polygon points="1174.1,17.6 1131.8,120 1234.1,77.6 " id="polygon21" transform="translate(-500.67992,100.13599)" style={{fill:'#fce400'}}/><polygon points="1108.1,177 1169.9,177 1251.7,95.1 1234.1,77.6 1131.8,120 " id="polygon23" transform="translate(-500.67992,100.13599)" style={{fill:'#f7c300'}}/><polygon points="1074.7,143.6 1131.8,120 1174.2,17.6 1156.6,0 1074.7,81.9 " id="polygon25" transform="translate(-500.67992,100.13599)" style={{fill:'#f7c300'}}/><polygon points="1108.1,177 1131.8,120 1074.7,143.6 1074.7,177 " id="polygon27" transform="translate(-500.67992,100.13599)" style={{fill:'#d49f00'}}/></g></svg>


    );
  }
}
