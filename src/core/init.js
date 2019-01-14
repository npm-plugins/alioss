/**
 * 开启阿里云oss-process
 * @param {string} url - 资源地址
 * @param {string} [type] - 资源类型
 * @returns {import("../../alioss").Alioss}
 */
export default function(url, type = 'image') {
  const source = `${url}?x-oss-process=${type}`
  let target = `${url}?x-oss-process=${type}`

  function process(handler) {
    const handlers = []
    if (handler instanceof Function) {
      handlers.push(handler)
    }

    handlers.forEach(hd => {
      target += hd()
    })

    return modules
  }

  function result() {
    return target
  }

  function info() {
    return source + '/info'
  }

  function averageHue() {
    return source + '/average-hue'
  }

  const modules = {
    process,
    result,
    info,
    averageHue
  }

  return modules
}