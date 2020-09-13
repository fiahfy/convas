const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.crossOrigin = 'anonymous'
    img.src = url
  })
}

export const cover = async (
  dataUrl: string,
  width: number,
  height: number
): Promise<string> => {
  const img = await loadImage(dataUrl)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Could not get context 2d')
  }
  let x = 0
  let y = 0
  let w = width
  let h = height
  if (height / width > img.height / img.width) {
    w = (img.width * height) / img.height
    x = (w - width) / -2
  } else {
    h = (img.height * width) / img.width
    y = (h - height) / -2
  }
  canvas.width = width
  canvas.height = height
  ctx.drawImage(img, 0, 0, img.width, img.height, x, y, w, h)
  return canvas.toDataURL()
}

export const contain = async (
  dataUrl: string,
  width: number,
  height: number
): Promise<string> => {
  const img = await loadImage(dataUrl)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Could not get context 2d')
  }
  let x = 0
  let y = 0
  let w = width
  let h = height
  if (height / width > img.height / img.width) {
    h = (img.height * width) / img.width
    y = (height - h) / 2
  } else {
    w = (img.width * height) / img.height
    x = (width - w) / 2
  }
  canvas.width = width
  canvas.height = height
  ctx.drawImage(img, 0, 0, img.width, img.height, x, y, w, h)
  return canvas.toDataURL()
}

export const fill = async (
  dataUrl: string,
  width: number,
  height: number
): Promise<string> => {
  const img = await loadImage(dataUrl)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Could not get context 2d')
  }
  canvas.width = width
  canvas.height = height
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height)
  return canvas.toDataURL()
}
