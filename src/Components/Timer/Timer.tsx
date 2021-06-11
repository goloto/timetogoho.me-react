import React from 'react';
import { TimerDescription } from '../TimerDescription/TimerDescription';
import { Hours } from '../Hours/Hours';
import { Minutes } from "../Minutes";
import { Seconds } from "../Seconds/Seconds";

export function Timer() {
  const smallWindow = window.matchMedia('max-aspect-ratio: 9 / 16').matches;
  const mediumWindow = window.matchMedia('max-aspect-ratio: 8 / 7').matches;
  const bigWindow = !mediumWindow && !smallWindow;

  return(
    <div className='timer'>
      {mediumWindow && <TimerDescription text={'time to go home'} />}
      {(bigWindow || smallWindow) && <TimerDescription text={'time'} />}
      <Hours />
      {(bigWindow || smallWindow) && <TimerDescription text={'to'} />}
      <Minutes />
      {(bigWindow || smallWindow) && <TimerDescription text={'go'} />}
      <Seconds />
      {(bigWindow || smallWindow) &&  <TimerDescription text={'home'} />}
    </div>
  );
}