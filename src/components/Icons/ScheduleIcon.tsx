import React from 'react'
import { Svg } from './Svg'

export const ScheduleIcon = ({
  primaryColor = '#035a94',
  secondaryColor = '#388dc5',
  ...props
}) => {
  return (
    <Svg optimizationId="iconSchedule" viewBox="0 0 50 50" {...props}>
      <path
        fill={secondaryColor}
        d="M26.82 27.62l9-4.89a2.49 2.49 0 0 0 .79-3.44 2.5 2.5 0 0 0-3.44-.8l-9 4.89a2.49 2.49 0 0 0-.8 3.44 2.49 2.49 0 0 0 3.45.8z"
      />
      <path
        fill={primaryColor}
        d="M25 0a25 25 0 1 0 25 25A25 25 0 0 0 25 0zm0 45a20 20 0 1 1 20-20 20 20 0 0 1-20 20z"
      />
      <path
        fill={primaryColor}
        d="M16.82 13.7a2.5 2.5 0 0 0-3.38 3.68l10.37 10a2.5 2.5 0 1 0 3.38-3.68z"
      />
    </Svg>
  )
}
ScheduleIcon.displayName = 'ScheduleIcon'

export default ScheduleIcon
