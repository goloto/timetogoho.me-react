import React from 'react';

function Timer() {
  const smallWindow = window.matchMedia('max-aspect-ratio: 9 / 16').matches;
  const mediumWindow = window.matchMedia('max-aspect-ratio: 8 / 7').matches;
  const bigWindow = !mediumWindow && !smallWindow;

  return(
    <div className='timer'>
      {mediumWindow && <TimerDescription />}
      {(bigWindow || smallWindow) && <TimerDescription />}
      <Hours />
      {(bigWindow || smallWindow) && <TimerDescription />}
      <Minutes />
      {(bigWindow || smallWindow) && <TimerDescription />}
      <Seconds />
      {(bigWindow || smallWindow) &&  <TimerDescription />}
    </div>
  );
}