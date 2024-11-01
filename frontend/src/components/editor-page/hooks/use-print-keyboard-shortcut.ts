/*
 * SPDX-FileCopyrightText: 2024 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { printIframe } from '../utils/print-iframe'
import { useEffect } from 'react'

/**
 * Hook to listen for the print keyboard shortcut and print the content of the renderer iframe.
 */
export const usePrintKeyboardShortcut = (): void => {
  useEffect(() => {
    const handlePrint = (event: KeyboardEvent): void => {
      if (event.key === 'p' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault()
        printIframe()
      }
    }

    window.addEventListener('keydown', handlePrint)

    return () => {
      window.removeEventListener('keydown', handlePrint)
    }
  }, [])
}
