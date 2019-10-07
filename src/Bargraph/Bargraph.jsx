import * as React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Image from '../images/o9-Bargraph-01.svg';
import PropTypes from 'prop-types';

const Bargraph = (props) => {
  const getClass = () => {
    const { power } = props;
    let result = `power-${Math.floor(power)}`;
    
    return power % 1 === 0 ? result : `${result} next-partial`;
  }

  console.log(Math.floor(props.power))

  return (
    <SvgLoader className={getClass()} path={Image}>
      <SvgProxy
        selector={`.diodes .st0:nth-child(-n+${Math.floor(props.power)})`}
        class="st0 active"
      />
      {/* <SvgProxy selector="rect:nth-of-type(4)" class="st0 diode-5" />
      <SvgProxy selector="rect:nth-of-type(6)" class="st0 diode-4" />
      <SvgProxy selector="rect:nth-of-type(8)" class="st0 diode-3" />
      <SvgProxy selector="rect:nth-of-type(10)" class="st0 diode-2" />
      <SvgProxy selector="rect:nth-of-type(12)" class="st0 diode-1" /> */}
    </SvgLoader>
  );
};

Bargraph.propTypes = {
  power: PropTypes.number
};

export default Bargraph;