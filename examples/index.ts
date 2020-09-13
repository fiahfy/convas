import { cover, contain, fill } from '../src'

const img = (name: string): HTMLImageElement =>
  document.querySelector<HTMLImageElement>(`[name="${name}"]`)
//
;(async () => {
  const original = img('original').src
  img('cover').src = await cover(original, 256, 256)
  img('contain').src = await contain(original, 256, 256)
  img('fill').src = await fill(original, 256, 256)
})()
