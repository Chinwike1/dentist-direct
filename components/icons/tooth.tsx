import React from 'react'

export default function ToothIcon({
  className,
  ...props
}: {
  className?: string
}) {
  return (
    <svg
      width="127"
      height="124"
      viewBox="0 0 127 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g filter="url(#filter0_dii_0_17)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.6355 13.5685C67.7483 16.0083 59.2516 16.0083 53.3643 13.5685C48.5811 11.5862 43.2307 11.4024 38.2939 13.4795C27.8757 17.863 23.2029 30.6728 27.7373 42.2284C27.7383 42.2309 27.7383 42.2338 27.7372 42.2363L29.1522 45.2126C33.9355 55.2733 37.541 65.8197 39.9015 76.6554L42.1469 86.9631C42.924 89.9262 45.67 92 48.8166 92C52.1961 92 55.0757 89.6157 55.6122 86.3732L58.7778 67.2414C59.1506 64.9882 61.1516 63.3313 63.5 63.3313C65.8485 63.3313 67.8495 64.9882 68.2223 67.2415L71.3878 86.3731C71.9243 89.6157 74.8039 92 78.1834 92C81.3301 92 84.076 89.9262 84.8531 86.9631L87.0985 76.6554C89.459 65.8197 93.0645 55.2733 97.8478 45.2125L99.2628 42.2363C99.2617 42.2338 99.2617 42.2309 99.2627 42.2284C103.797 30.6728 99.1243 17.863 88.7061 13.4795C83.7693 11.4024 78.4188 11.5862 73.6355 13.5685Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_0_17"
          x="0.0557022"
          y="0.204044"
          width="126.889"
          height="131.902"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="14.1551" />
          <feGaussianBlur stdDeviation="12.9756" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.8375 0 0 0 0 0.201 0 0 0 0 0 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_17"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_17"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-9.43676" />
          <feGaussianBlur stdDeviation="5.89798" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.8125 0 0 0 0 0.423448 0 0 0 0 0.0643229 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_0_17"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-3.53879" />
          <feGaussianBlur stdDeviation="2.35919" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_0_17"
            result="effect3_innerShadow_0_17"
          />
        </filter>
      </defs>
    </svg>
  )
}
