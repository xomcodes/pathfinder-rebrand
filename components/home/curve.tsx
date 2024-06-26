import React from 'react'

function Curve() {
  return (
    <svg viewBox="0 0 500 500">
    <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="500">
      <textPath xlinkHref="#curve">
        Dangerous Curves Ahead
      </textPath>
    </text>
  </svg>
  )
}

export default Curve