import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Changed ID to J and updated the path data */}
      <g id="J" transform="translate(11.000000, 5.000000)">
        <path
          d="M44,30.3 L44,52 C44,57.5 40.5,61 35,61 C29.5,61 26,57.5 26,52 L26,50 L31,50 L31,52 C31,54.8 32.7,56.5 35,56.5 C37.3,56.5 39,54.8 39,52 L39,30.3 L44,30.3 Z"
          fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
