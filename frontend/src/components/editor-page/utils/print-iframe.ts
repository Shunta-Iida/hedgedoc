/*
 * SPDX-FileCopyrightText: 2024 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/**
 * Prints the content of the renderer iframe.
 */
export const printIframe = (): void => {
  const iframe = document.getElementById('editor-renderer-iframe') as HTMLIFrameElement
  if (!iframe) {
    return
  }
  iframe.contentWindow.print()
}
