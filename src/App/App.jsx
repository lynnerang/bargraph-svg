import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Bargraph from '../Bargraph/Bargraph';
import Dial from '../Dial/Dial';

const App = () => {
	const [ mv, setMv ] = useState(0);

	const onDialChange = amount => {
		let newVal = mv + amount;

		if (newVal < 0) newVal = 0;
		else if (newVal > 5000) newVal = 5000;

		setMv(newVal);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Bargraph Simulator 5000</h1>
			</header>
			<main>
				<section className="controls">
          <div className="controls-inner">
            <article className="dials-wrapper">
              <Dial name="Coarse" onDialChange={onDialChange} />
              <Dial name="Fine" onDialChange={onDialChange} />
            </article>
            <article className="slider-wrapper">
              <p className="slider-text"><span className="slider-label">MAX</span>(5000mV)</p>
              <div className="slider-container">
                <Slider
                  orientation="vertical"
                  defaultValue={0}
                  value={parseInt(mv)}
                  onChange={(e, val) => setMv(val)}
                  aria-labelledby="slider"
                  min={0}
                  max={5000}
                />
              </div>
              <p className="slider-text"><span className="slider-label">MIN</span>(0mV)</p>
            </article>
            <article className="volts-wrapper">
              <p className="volts-screen" aria-live="polite">{(mv / 1000).toFixed(3)}</p>
              <p className="volts-label"> V (Volts)</p>
            </article>
					</div>
        </section>
        <section className="wires"></section>
        <section aria-hidden className="bargraph">
          <Bargraph power={mv / 50 / 20} />
        </section>
			</main>
		</div>
	);
};

export default App;
