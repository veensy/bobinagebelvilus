import cn from 'classnames'
import React, { forwardRef, SVGAttributes } from 'react'
import styles from './Svg.module.scss'

interface Props extends SVGAttributes<SVGElement> {
  optimizationId: string
}

export const Svg = forwardRef<SVGSVGElement, Props>(
  ({ children, className, optimizationId, ...forwardedProps }, ref) => {
    return (
      <svg
        aria-hidden="true"
        focusable={false}
        height="1em"
        role="presentation"
        width="1em"
        {...forwardedProps}
        className={cn(styles.svg, className)}
        ref={ref}
      >
        {children}
      </svg>
    )
  },
)

Svg.displayName = 'Svg'
