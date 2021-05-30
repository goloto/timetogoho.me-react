import React from 'react';

function Timer() {
  return(
    <div className='timer'>
      {!window.matchMedia('max-aspect-ratio: 8 / 7').matches && <TimerDescription />}
      {window.matchMedia('max-aspect-ratio: 8 / 7').matches && <TimerDescription />}
      <Hours />
      {window.matchMedia('max-aspect-ratio: 8 / 7').matches && <TimerDescription />}
      <Minutes />
      {window.matchMedia('max-aspect-ratio: 8 / 7').matches && <TimerDescription />}
      <Seconds />
      {window.matchMedia('max-aspect-ratio: 8 / 7').matches && <TimerDescription />}
    </div>
  );
}