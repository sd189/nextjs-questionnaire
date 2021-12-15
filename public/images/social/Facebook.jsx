import React from 'react'

const SvgComponent = (props) => (
  <svg
    width={14}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.529 20 4.5 11.25H.75V7.5H4.5V5c0-3.374 2.09-5 5.1-5 1.441 0 2.68.107 3.041.155v3.526l-2.087.001c-1.637 0-1.954.778-1.954 1.92V7.5h4.65L12 11.25H8.6V20H4.529Z"
      fill="#7E0707"
    />
  </svg>
)

export default SvgComponent
