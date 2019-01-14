export default function oss(url: string, type: string): Alioss

interface Alioss {
  /**
   * 资源处理
   * @param handler - 处理程序
   */
  process(handler: Function): Alioss
  /**
   * 处理结果
   */
  result(): string
  /**
   * 图片信息
   */
  info(): AliossInfo
  /**
   * 获取图片的平均色调
   */
  averageHue(): AliossHue
}

interface AliossInfo {
  FileSize: InfoFormat,
  Format: InfoFormat,
  ImageHeight: InfoFormat,
  ResolutionUnit: InfoFormat,
  XResolution: InfoFormat,
  YResolution: InfoFormat
}

interface InfoFormat {
  value: string
}

interface AliossHue {
  RGB: string
}