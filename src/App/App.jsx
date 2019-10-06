import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Bargraph from '../Bargraph/Bargraph';
import Dial from '../Dial/Dial';

const App = () => {
  const [mv, setMv] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  const onUpdate = (val) => {
    setMv(val);
    setInputVal(val);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(inputVal);
  }

  const onDialChange = (val) => {
    // console.log("val " + val)
    const diff = Math.abs(mv - val);
    // console.log("diff " + diff)
    let newVal = mv + diff;
    // console.log("newVal " + newVal)
    if (newVal < 5000) newVal = 5000;
    else if (newVal < 0) newVal = 0;

    setMv(newVal);
  }

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "6rem"
  };

  console.log(mv)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bargraph Simulator 5000</h1>
        <div style={styles}>
          <Dial
            width={200}
            height={200}
            onDialChange={onDialChange}
            value={mv}
          />
        </div>
      </header>
      <main>
        <Slider
          orientation="vertical"
          defaultValue={0}
          value={parseInt(mv)}
          onChange={(e, val) => onUpdate(val)}
          aria-labelledby="slider"
          min={0}
          max={5000}
        />
        <form className="mv-entry" onSubmit={onSubmit}>
          <label htmlFor="mv-input">mV (millivolts)</label>
          <div>
            <input type="number" id="mv-input" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <input type="submit" className="submit-btn" value="Go"/>
          </div>
        </form>
        <Bargraph power={(mv / 50) / 20}/>
      </main>
    </div>
  );
}

export default App;
