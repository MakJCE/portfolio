import React from 'react';

const HtmlLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-html5"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="rgb(255, 91, 20)"
      fill="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </svg>
  );
};

export default HtmlLogo;
