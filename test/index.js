// import oss from '../src/index'
import oss, { processImage } from '../lib/index'

oss('//xxx.tuia.cn/demo.png').process(processImage.format).result()