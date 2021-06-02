import React from 'react';

export function TimerDescription(props: { text: string }) {
  return(
    <div className="text-group text-group_separated">
      <div className="text">{props.text}</div>
    </div>
  );
}