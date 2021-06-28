import React from 'react';
import styled from "styled-components";

export function TimerDescription(props: {children: string}) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Text = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--soft-color_2);
    font-size: var(--third-font-size);
    line-height: var(--third-font-size);
    text-transform: uppercase;
  `;

  return(
    <Container>
      <Text>
        {props.children}
      </Text>
    </Container>
  );
}