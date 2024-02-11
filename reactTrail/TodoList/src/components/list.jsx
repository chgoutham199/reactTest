import React, { useState } from "react";

export default function Dot(props) {
  return (
    <div onClick={() => props.onTouch(props.id)}>
      <li>{props.items}</li>
    </div>
  );
}
