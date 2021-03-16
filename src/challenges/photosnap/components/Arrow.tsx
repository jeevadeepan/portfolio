import React from "react";

export default function Arrow(props: any) {
  const color = props.color || '#000';
  return (
    <svg width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7H41.864" stroke={color}/>
      <path d="M35.428 1l6 6-6 6" stroke={color} />
    </svg>
  );
}
