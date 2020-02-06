import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";
import PropTypes from "prop-types";

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool
};

export default navigationItem;
