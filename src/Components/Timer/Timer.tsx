import React from 'react';
import { TimerDescription } from '../TimerDescription/TimerDescription';
import { Hours } from '../Hours/Hours';
import { Minutes } from "../Minutes";
import { Seconds } from "../Seconds/Seconds";

export function Timer() {
  const smallWindow = window.matchMedia('max-aspect-ratio: 9 / 16').matches;
  const mediumWindow = window.matchMedia('max-aspect-ratio: 8 / 7').matches;
  const bigWindow = !mediumWindow && !smallWindow;
  const isWorkingDay = true;

  return(
    <div className='timer'>
      {mediumWindow && <TimerDescription text={isWorkingDay ? 'time to go home' : 'time until working day'} />}
      {(bigWindow || smallWindow) && <TimerDescription text={'time'} />}
      <Hours />
      {(bigWindow || smallWindow) && <TimerDescription text={isWorkingDay ? 'to' : 'until'} />}
      <Minutes />
      {(bigWindow || smallWindow) && <TimerDescription text={isWorkingDay ? 'go' : 'working'} />}
      <Seconds />
      {(bigWindow || smallWindow) &&  <TimerDescription text={isWorkingDay ? 'home' : 'day'} />}
    </div>
  );
}