/**
 * 是否支持webp
 * @return {Boolean} 默认返回false
 */

export function isSupportWebp() {
  // localStorage存在且之前设置过iswebp
  if (localStorage && localStorage.iswebp) {
    return JSON.parse(localStorage.iswebp)
  }
  
  var isWebp = false
  // localStorage存在且之前没设置过iswebp
  if (localStorage && !localStorage.iswebp) {
    var cs = document.createElement('canvas')
    // 如果支持canvas
    if (cs.getContext && cs.getContext('2d')) {
      try {
        iswebp = (cs.toDataURL('image/webp').indexOf('data:image/webp') === 0)
      } catch (e) {
        console.error(e)
      }
    }
    localStorage.isWebp = isWebp
  }
  
  // 返回结果
  return JSON.parse(isWebp)
}

/**
 * 图片类型
 * @param {string} imgurl - 合法的图片url
 * @returns {string} 返回图片类型 jpg|png|jpeg|gif
 */
export function imageType(imgurl) {
  const matchs = imgurl.match(/.(jpg|png|jpeg|gif)$/i)
  if (matchs === null) {
    console.error('imgurl is illegal')
    return null
  }
  return matchs[1].toLocaleLowerCase()
}