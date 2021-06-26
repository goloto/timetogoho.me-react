import React from 'react';
import { TimerDescription } from '../TimerDescription/TimerDescription.component';
import { Hours } from '../Hours/Hours.component';
import { Minutes } from "../Minutes/Minutes.component";
import { Seconds } from "../Seconds/Seconds.component";

export function Timer() {
  const smallWindow = window.matchMedia('max-aspect-ratio: 9 / 16').matches;
  const mediumWindow = window.matchMedia('max-aspect-ratio: 8 / 7').matches;
  const bigWindow = !mediumWindow && !smallWindow;
  const isWorkingDay = true;

  return(
    <div className='timer'>

      {mediumWindow
        && <TimerDescription>
          {isWorkingDay ? 'time to go home' : 'time until working day'}
        </TimerDescription>}

      {(bigWindow || smallWindow)
        && <TimerDescription>time</TimerDescription>}

      <Hours />

      {(bigWindow || smallWindow)
        && <TimerDescription>
          {isWorkingDay ? 'to' : 'until'}
        </TimerDescription>}

      <Minutes />

      {(bigWindow || smallWindow)
        && <TimerDescription>
          {isWorkingDay ? 'go' : 'working'}
        </TimerDescription>}

      <Seconds />

      {(bigWindow || smallWindow)
        && <TimerDescription>
          {isWorkingDay ? 'home' : 'day'}
        </TimerDescription>}

    </div>
  );
}