import { metadata, viewport } from 'next-sanity/studio'
import StudioClient from './studioClient'

export const dynamic = 'force-static'

export { metadata, viewport }

export default function StudioPage() {
  return <StudioClient />
}
