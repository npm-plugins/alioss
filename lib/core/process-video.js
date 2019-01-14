/**
 * 视频截帧
 * 图片处理除了能够处理已经存在的图片内容，还能够截取出视频中的指定位置产生图片，完成视频截帧
 * @param {object} options
 * @param {number} options.t - 截图时间 单位ms，[0,视频时长]
 * @param {number} options.w - 截图宽度，如果指定为0则自动计算,像素值：[0,视频宽度]
 * @param {number} options.h - 截图高度，如果指定为0则自动计算，如果w和h都为0则输出为原视频宽高
 * @param {string} options.m - 截图模式，不指定则为默认模式，根据时间精确截图，如果指定为fast则截取该时间点之前的最近的一个关键帧
 * @param {string} [options.f=jpg] - 输出图片格式,枚举值：jpg、png
 * @returns {string} 返回处理query
 */
export function snapshot(options) {
  var t = options.t,
      _options$w = options.w,
      w = _options$w === void 0 ? 0 : _options$w,
      _options$h = options.h,
      h = _options$h === void 0 ? 0 : _options$h,
      m = options.m,
      _options$f = options.f,
      f = _options$f === void 0 ? 'jpg' : _options$f;
  return `snapshot,t_${t},f_${f},w_${w},h_${h}`;
}