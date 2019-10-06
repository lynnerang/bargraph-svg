import * as React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

const Bargraph = (props) => {
  // console.log(props.power, Math.floor(props.power))

  const getClass = () => {
    const { power } = props;
    return power % 1 != 0 ? `power-${Math.floor(power)} next-partial` : `power-${Math.floor(power)}`;
  }

  return (
    <SvgLoader
      className={getClass()}
      path={require('../o9-Bargraph-01.svg')}
    >
      <SvgProxy selector="rect" class="st0 non-diode" />
      <SvgProxy selector="rect.st0:nth-of-type(n+3):nth-of-type(even)" class="st0 diode" />
      <SvgProxy selector=".diode" fill="magenta"/>
      {/* <SvgProxy selector="rect.st0:nth-of-type(n+4)" class="st0 diode" /> */}
      {/* <SvgProxy selector="rect.st0:nth-of-type(n+4):nth-of-type(-n+12)" class="st0 light" /> */}
    </SvgLoader>
  );
};

export default Bargraph;