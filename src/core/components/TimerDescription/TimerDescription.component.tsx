import React from 'react';

export function TimerDescription(props: {children: string}) {
  return(
    <div className="text-group text-group_separated">
      <div className="text">{props.children}</div>
    </div>
  );
}