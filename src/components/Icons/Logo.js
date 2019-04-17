import React from 'react'

const Logo = properties => (
  <svg width="1em" height="1em" viewBox="0 0 240 238" {...properties}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#2D3A8C"
        d="M121 0l84.146 34.854L240 119l-34.854 84.146L121 238l-84.146-34.854L2 119l34.854-84.146z"
      />
      <path
        fill="#2BB0ED"
        d="M151 17.5l61.165 25.335L237.5 104l-25.335 61.165L151 190.5l-61.165-25.335L64.5 104l25.335-61.165z"
      />
      <path
        fill="#2BB0ED"
        d="M86.5 63l61.165 25.335L173 149.5l-25.335 61.165L86.5 236l-61.165-25.335L0 149.5l25.335-61.165z"
      />
      <text
        fontFamily="Arial-BoldItalicMT, Arial"
        fontSize={30}
        fontStyle="italic"
        fontWeight="bold"
        letterSpacing={2.778}
        fill="#FFF"
      >
        <tspan x={90} y={95}>
          {`PHP`}
        </tspan>
        <tspan x={23} y={128}>
          {`Inspections`}
        </tspan>
        <tspan
          x={50}
          y={166}
          fontFamily="ArialNarrow, Arial Narrow"
          fontSize={26}
          fontWeight="normal"
          letterSpacing={2.78}
        >
          {`EA Ultimate`}
        </tspan>
      </text>
    </g>
  </svg>
)

export default Logo
