import React from 'react';

const Dial = (props) => {
  const increment = props.name === 'Coarse' ? 100 : 1;

  const onDialClick = (e) => {
    if (e.target.classList.contains('fa-caret-up')) {
      props.onDialChange(increment);
    } else {
      props.onDialChange(-increment);
    }
  }

  return (
    <article className="dial-wrapper">
      <i aria-role="button" className="fas fa-caret-up"onClick={onDialClick}/>
      <div className="dial-bg">
        <h2>{props.name}</h2>
        <p>({increment} mV)</p>
      </div>
      <i aria-role="button" className="fas fa-caret-down" onClick={onDialClick}/>
    </article>
  );
}

export default Dial;