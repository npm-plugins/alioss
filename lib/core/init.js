/**
 * 开启阿里云oss-process
 * @param {string} url - 资源地址
 * @param {string} [type] - 资源类型
 * @returns {import("../../alioss").Alioss}
 */
export default function (url) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image';
  var source = `${url}?x-oss-process=${type}`;
  var target = `${url}?x-oss-process=${type}`;

  function process(handler) {
    var handlers = [];

    if (handler instanceof Function) {
      handlers.push(handler);
    }

    handlers.forEach(function (hd) {
      target += hd();
    });
    return modules;
  }

  function result() {
    return target;
  }

  function info() {
    return source + '/info';
  }

  function averageHue() {
    return source + '/average-hue';
  }

  var modules = {
    process,
    result,
    info,
    averageHue
  };
  return modules;
}