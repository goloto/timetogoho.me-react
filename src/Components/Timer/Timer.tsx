import React from 'react';

function Timer() {
  return(
    <div className='timer'>
      <TimerDescription />
      <Hours />
      <TimerDescription />
      <Minutes />
      <TimerDescription />
      <Seconds />
      <TimerDescription />
    </div>
  );
}