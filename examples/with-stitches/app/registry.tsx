'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useRef } from 'react'

import { getCssText, globalStyles } from '../stitches.config'

/**
 * Injects our stitches theme into the HTML before any content loads
 * @component
 * @see https://github.com/stitchesjs/stitches/issues/1109#issuecomment-1497289065
 */
export default function StitchesRegistry({
  children,
}: {
  children: ReactNode
}) {
  const inserted = useRef(false)

  useServerInsertedHTML(() => {
    if (inserted.current === false) {
      inserted.current = true
      globalStyles()
      return (
        <style
          id="stitches"
          // Resolves: "Warning: Each child in a list should have a unique "key" prop | at <style>"
          key={Date.now().toString()}
          dangerouslySetInnerHTML={{
            __html: getCssText(),
          }}
        />
      )
    }
  })

  return <>{children}</>
}
