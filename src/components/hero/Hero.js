import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';
import { colorModifiers } from '../../utils/modifiers';


/**
 * 
 * HOC for each of three possible direct children of the Hero component:
 *  - HeroHead
 *  - HeroBody
 *  - HeroFoot
 */
const HeroChild = ({
  baseClass,
  children,
  classes = []
}) => {
  const classList = classNames(baseClass, classes);

  return (
    <div className={classList}>
      {children}
    </div>
  );
};

export const HeroHead = ({
  children,
  classes = []
}) => (
  <HeroChild
    baseClass={'hero-head'}
    children={children}
    classes={classes}
  />
);

export const HeroBody = ({
  children,
  classes = []
}) => (
  <HeroChild
    baseClass={'hero-body'}
    children={children}
    classes={classes}
  />
);

export const HeroFoot = ({
  children,
  classes = []
}) => (
  <HeroChild
    baseClass={'hero-foot'}
    children={children}
    classes={classes}
  />
);

export const Hero = ({
  bold,
  children,
  color,
  classes = [],
  size,
  withNavbar
}) => {
  const baseClass = 'hero';
  const classList = classNames(
    baseClass,
    {
      [`is-bold`]: bold,
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      [`is-fullheight-with-navbar`]: withNavbar
    },
    classes
  );

  return (
    <section className={classList}>
      {children}
    </section>
  );
};

Hero.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.array,
  color: PropTypes.oneOf(colorModifiers),
  size: PropTypes.oneOf(['small', 'medium', 'fullHeight']),
  withNavbar: PropTypes.bool
};
