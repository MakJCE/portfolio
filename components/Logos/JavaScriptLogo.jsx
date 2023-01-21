import React from 'react';

const JavaScriptLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-javascript"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="rgb(245, 201, 7)"
      fill="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M7.5 8h3v8l-2 -1" />
      <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
    </svg>
  );
};

export default JavaScriptLogo;