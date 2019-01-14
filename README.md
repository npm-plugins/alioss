## 阿里云oss处理

阿里云OSS图片处理服务（Image Processing，简称 IMG） ，是阿里云OSS对外提供的海量、安全、低成本、高可靠的图片处理服务。您可以将原始图片上传保存在 OSS 上，通过简单的 RESTful 接口，在任何时间、任何地点、任何互联网设备上对图片进行处理。图片处理服务提供图片处理接口，图片上传请使用 OSS 上传接口。

## use

```
import oss, { processImage, processVideo, helper } from '@tuia/alioss'

oss('//xxx.tuia.cn/demo.png').process(processImage.format).result()
```