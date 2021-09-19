import React from 'react'
import { Svg } from './Svg'

export const LocationIcon = ({
  primaryColor = '#035a94',
  secondaryColor = '#388dc5',
  ...props
}) => {
  return (
    <Svg optimizationId="iconLocation" viewBox="0 0 24 24" {...props}>
      <path
        fill={primaryColor}
        d="M15.92,15.23,18.35,11a7.27,7.27,0,0,0,0-7.35,7.35,7.35,0,0,0-12.72,0,7.27,7.27,0,0,0,0,7.35l2.43,4.21C4,15.71,0,17,0,19.5,0,22.59,6.22,24,12,24s12-1.41,12-4.5C24,17,20,15.71,15.92,15.23ZM7.37,4.67A5.34,5.34,0,1,1,16.62,10L12,18,7.38,10A5.31,5.31,0,0,1,7.37,4.67ZM12,22C5.4,22,2,20.25,2,19.5c0-.53,2.15-1.95,7.18-2.38l1.35,2.33a1.7,1.7,0,0,0,2.94,0l1.35-2.33C19.85,17.55,22,19,22,19.5,22,20.25,18.6,22,12,22Z"
      />
      <circle fill={secondaryColor} cx="12" cy="7" r="2" />
    </Svg>
  )
}
LocationIcon.displayName = 'LocationIcon'

export default LocationIcon
