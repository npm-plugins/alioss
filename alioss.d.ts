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
   * 获取图片信息的api
   */
  info(): string
  /**
   * 获取图片配色的api
   */
  averageHue(): string
}