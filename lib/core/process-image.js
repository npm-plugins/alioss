/**
 * 图片缩放
 * 将图片按照要求生成缩略图，或者进行特定的缩放
 * @param {object} options
 * @param {string} [options.m] - 指定缩略的模式
 * lfit：等比缩放，限制在指定w与h的矩形内的最大图片。
 * mfit：等比缩放，延伸出指定w与h的矩形框外的最小图片。
 * fill：固定宽高，将延伸出指定w与h的矩形框外的最小图片进行居中裁剪。
 * pad：固定宽高，缩略填充。
 * fixed：固定宽高，强制缩略。
 * @param {number} options.w - 1-4096
 * @param {number} options.h - 1-4096
 * @param {number} options.l - 1-4096
 * @param {number} options.s - 1-4096
 * @param {number} options.limit - 指定当目标缩略图大于原图时是否处理。值是 1 表示不处理；值是 0 表示处理
 * @param {string} options.color - 当缩放模式选择为 pad（缩略填充）时，可以选择填充的颜色(默认是白色)参数的填写方式：采用 16 进制颜色码表示，如 00FF00（绿色）
 * @returns {string} 返回处理query
 */
export function resize(options) {
  var _options$m = options.m,
      m = _options$m === void 0 ? 'lfit' : _options$m,
      w = options.w,
      h = options.h,
      l = options.l,
      s = options.s,
      _options$limit = options.limit,
      limit = _options$limit === void 0 ? 1 : _options$limit,
      _options$color = options.color,
      color = _options$color === void 0 ? 'ffffff' : _options$color,
      _options$p = options.p,
      p = _options$p === void 0 ? 100 : _options$p;
  if (p > 100) limit = 0;
  return `/resize,m_${m},w_${w},h_${h}`;
}
/**
 * 内切圆
 * 用户可以将图片只保存圆形图案，如果图片的最终格式是 png、webp、 bmp 等支持透明通道的图片，那么图片非圆形区域的地方将会以透明填充。如果图片的最终格式是 jpg，那么非圆形区域是以白色进行填充。
 * @param {number} r - 半径 r 不能超过原图的最小边的一半。如果超过，则圆的大小仍然是原圆的最大内切圆。
 * @returns {string} 返回处理query
 */

export function circle(r) {
  return `/circle,r_${r}`;
}
/**
 * 裁剪
 * 可以裁剪图片，指定裁剪的起始点以及裁剪的宽高来决定裁剪的区域
 * @param {object} options
 * @param {number} [options.x] - [0-图片宽度]
 * @param {number} [options.y] - [0-图片宽度]
 * @param {number} options.w - [0-图片宽度]
 * @param {number} options.h - [0-图片宽度]
 * @param {string} [options.g] - [nw, north, ne, west, center, east, sw, south, se],设置裁剪的原点位置，由九宫格的格式，一共有九个地方可以设置，每个位置位于每个九宫格的左上角
 * @returns {string} 返回处理query
 */

export function crop(options) {
  var _options$x = options.x,
      x = _options$x === void 0 ? 0 : _options$x,
      _options$y = options.y,
      y = _options$y === void 0 ? 0 : _options$y,
      w = options.w,
      h = options.h,
      _options$g = options.g,
      g = _options$g === void 0 ? 'nw' : _options$g;
  return `/crop,x_${x},y_${y},w_${w},h_${h},g_${g}`;
}
/**
 * 索引切割
 * 将图片分成 x，y 轴，按指定长度 (length) 切割，指定索引 (index)，取出指定的区域。
 * @param {object} options
 * @param {number} options.x - 进行垂直切割，每块图片的长度,[1,图片宽度]
 * @param {number} options.y - 进行水平切割，每块图片的长度,[1,图片宽度]
 * @param {number} options.i - [0,最大块数)。如果超出最大块数，返回原图
 * @returns {string} 返回处理query
 */

export function indexcrop(options) {
  var _options$x2 = options.x,
      x = _options$x2 === void 0 ? 0 : _options$x2,
      _options$y2 = options.y,
      y = _options$y2 === void 0 ? 0 : _options$y2,
      i = options.i;

  if (x) {
    return `/indexcrop,x_${x},i_${i}`;
  }

  if (y) {
    return `/indexcrop,y_${y},i_${i}`;
  }

  return '';
}
/**
 * 圆角矩形
 * 可以把图片保存成圆角矩形，并可以指定圆角的大小 。
 * @param {number} r - [1, 4096] 生成的最大圆角的半径不能超过原图的最小边的一半 
 * @returns {string} 返回处理query
 */

export function roundedCorners() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return `/rounded-corners,r_${r}`;
}
/**
 * 自适应方向
 * 某些手机拍摄出来的照片可能带有旋转参数（存放在照片exif信息里面）。可以设置是否对这些图片进行旋转。默认是设置自适应方向
 * @param {number} [value] - 进行自动旋转 0：表示按原图默认方向，不进行自动旋转。1：先进行图片旋转，然后再进行缩略。
 * @returns {string} 返回处理query
 */

export function autoOrient() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return `/auto-orient,${value}`;
}
/**
 * 旋转
 * 可以将图片按顺时针旋转。
 * @param {number} value - 图片按顺时针旋转的角度,[0, 360]默认值为 0，表示不旋转
 * @returns {string} 返回处理query
 */

export function rotate(value) {
  return `/rotate,${value}`;
}
/**
 * 模糊
 * 可以对图片进行模糊操作
 * @param {number} [r] - 模糊半径,[1,50]r 越大图片越模糊。
 * @param {number} [s] - 正态分布的标准差,[1,50]s 越大图片越模糊。
 * @returns {string} 返回处理query
 */

export function blur() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return `/blur,r_${r},s_2`;
}
/**
 * 亮度调节
 * 可以对处理后的图片进行亮度调节
 * @param {number} value - 亮度调整。0 表示原图亮度，小于 0 表示低于原图亮度，大于 0 表示高于原图亮度
 * @returns {string} 返回处理query
 */

export function bright(value) {
  return `bright,${value}`;
}
/**
 * 对比度调节
 * 可以对处理后的图片进行对比度调节
 * @param {number} value
 * @returns {string} 返回处理query
 */

export function contrast(value) {
  return `contrast,${value}`;
}
/**
 * 锐化
 * 可以对处理后的图片进行锐化，使图片变得清晰
 * @param {number} [value] - 表示进行锐化处理。取值为锐化参数，参数越大，越清晰, [50, 399] 为达到较优效果，推荐取值为 100
 * @returns {string} 返回处理query
 */

export function sharpen() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return `/sharpen,${value}`;
}
/**
 * 格式转换
 * @param {string} [type] - 可以将图片转换成对应格式，包括 jpg、png、bmp、webp、gif、tiff。
 * @returns {string} 返回处理query
 */

export function format() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'webp';
  return `/format,${type}`;
}
/**
 * 渐进显示
 * 图片格式为 jpg 时有两种呈现方式：
 * 自上而下的扫描式
 * 先模糊后逐渐清晰（在网络环境比较差时明显）
 * 默认保存为第一种，如果要指定先模糊后清晰的呈现方式，请使用渐进显示参数
 * @param {number} value - 1 表示保存成渐进显示的 jpg 格式0 表示保存成普通的 jpg 格式
 * @returns {string} 返回处理query
 */

export function interlace(value) {
  return `/interlace,${value}`;
}
/**
 * 质量变换
 * 如果图片保存成 jpg 或 webp, 可以支持质量变换
 * @param {number} value - 1-100
 * @param {string} [type] - q/Q
 * @returns {string} 返回处理query
 */

export function quality(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Q';
  return `/quality,${type}_${value}`;
}
/**
 * 图片水印
 * 水印操作可以在图片上设置另外一张图片或者文字做为水印[目前只支持文字水印]
 * @param {object} options
 * @param {number} [options.t] - 透明度,默认值：100， 表示 100%（不透明）取值范围: [0-100]
 * @param {number} [options.g] - 水印打在图的位,默认se，取值[nw,north,ne,west,center,east,sw,south,se]
 * @param {string} [options.text] - 表示文字水印的文字内容(必须编码)
 * @param {string} [options.color] - 文字颜色，默认000000
 * @param {string} [options.size] - 文字大小，默认40
 * @param {string} [options.rotate] - 文字旋转 0-360，默认0
 * @returns {string} 返回处理query
 */

export function watermark(options) {
  var _options$t = options.t,
      t = _options$t === void 0 ? 100 : _options$t,
      _options$g2 = options.g,
      g = _options$g2 === void 0 ? 'se' : _options$g2,
      _options$x3 = options.x,
      x = _options$x3 === void 0 ? 10 : _options$x3,
      _options$y3 = options.y,
      y = _options$y3 === void 0 ? 10 : _options$y3,
      _options$voffset = options.voffset,
      voffset = _options$voffset === void 0 ? 0 : _options$voffset,
      _options$text = options.text,
      text = _options$text === void 0 ? '' : _options$text,
      _options$color2 = options.color,
      color = _options$color2 === void 0 ? '000000' : _options$color2,
      _options$size = options.size,
      size = _options$size === void 0 ? 40 : _options$size,
      _options$rotate = options.rotate,
      rotate = _options$rotate === void 0 ? 0 : _options$rotate;
  return `/watermark,t_${t},g_${g},x_${x},y_${y},text_${text},size_${size}color_${color},rotate_${rotate}`;
}