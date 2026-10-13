'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  isContactHref,
  isNowishOrderHref,
  trackMetaEvent,
} from '@/lib/meta-browser'
import { MENU_SECTION_IDS, isMenuPath } from '@/lib/meta'

function closestAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null
  return target.closest('a')
}

export default function MetaEvents() {
  const pathname = usePathname()
  const viewedSections = useRef(new Set<string>())

  useEffect(() => {
    viewedSections.current.clear()
    trackMetaEvent('PageView')
    if (isMenuPath(pathname)) {
      trackMetaEvent('ViewContent')
    }
  }, [pathname])

  useEffect(() => {
    if (!isMenuPath(pathname)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (!id || viewedSections.current.has(id)) continue
          viewedSections.current.add(id)
          trackMetaEvent('ViewContent')
        }
      },
      { threshold: 0.35 }
    )

    for (const id of MENU_SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = closestAnchor(event.target)
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      if (isNowishOrderHref(href)) {
        trackMetaEvent('Lead')
        return
      }

      if (isContactHref(href)) {
        trackMetaEvent('Contact')
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
