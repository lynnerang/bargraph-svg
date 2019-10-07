import * as React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import Image from '../images/o9-Bargraph-01.svg';
import PropTypes from 'prop-types';

const Bargraph = props => {
	const { volts } = props;
	const voltsWhole = Math.floor(volts);

	return (
		<SvgLoader path={Image}>
			<SvgProxy selector={`.diodes .st0:nth-child(-n+${voltsWhole})`} class="st0 active" />
			<SvgProxy selector={`.diodes .st0:nth-child(n+${voltsWhole + 1})`} class="st0" />
			<SvgProxy selector={`.diodes .st0:nth-child(${volts - voltsWhole ? voltsWhole + 1 : 0})`} class="st0 partial" />
		</SvgLoader>
	);
};

Bargraph.propTypes = {
	volts: PropTypes.number
};

export default Bargraph;
