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
      <button><i className="fas fa-caret-up" onClick={onDialClick}/></button>
      <div className="dial-bg">
        <h2 className="dial-name">{props.name}</h2>
        <p className="dial-label">({increment} mV)</p>
      </div>
      <button><i className="fas fa-caret-down" onClick={onDialClick}/></button>
    </article>
  );
}

export default Dial;