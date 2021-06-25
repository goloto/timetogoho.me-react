import React from 'react';
import { TimerDescriptionComponent } from '../TimerDescription/TimerDescription.component';
import { Hours } from '../Hours/Hours.component';
import { Minutes } from "../Minutes/Minutes.component";
import { Seconds } from "../Seconds/Seconds.component";

export function TimerComponent() {
  const smallWindow = window.matchMedia('max-aspect-ratio: 9 / 16').matches;
  const mediumWindow = window.matchMedia('max-aspect-ratio: 8 / 7').matches;
  const bigWindow = !mediumWindow && !smallWindow;
  const isWorkingDay = true;

  return(
    <div className='timer'>

      {mediumWindow
        && <TimerDescriptionComponent>
          {isWorkingDay ? 'time to go home' : 'time until working day'}
        </TimerDescriptionComponent>}

      {(bigWindow || smallWindow)
        && <TimerDescriptionComponent>time</TimerDescriptionComponent>}

      <Hours />

      {(bigWindow || smallWindow)
        && <TimerDescriptionComponent>
          {isWorkingDay ? 'to' : 'until'}
        </TimerDescriptionComponent>}

      <Minutes />

      {(bigWindow || smallWindow)
        && <TimerDescriptionComponent>
          {isWorkingDay ? 'go' : 'working'}
        </TimerDescriptionComponent>}

      <Seconds />

      {(bigWindow || smallWindow)
        && <TimerDescriptionComponent>
          {isWorkingDay ? 'home' : 'day'}
        </TimerDescriptionComponent>}

    </div>
  );
}