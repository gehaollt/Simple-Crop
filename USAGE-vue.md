

## 1、引入样式

目前提供了两种默认样式 `./build/template-2.css` 适用移动设备，`./build/template-1.css` 适用 PC。

```vue
import "../../build/template-2.css";
```

## 2、引入组件代码

```vue
import MobileCrop from '../../index.vue';
```

```javascript
components: {
  'simple-crop': MobileCrop
},
```

## 3、初始化

```vue
<simple-crop
  v-bind:crop-params="cropParams"
  v-on:crop="cropCallback"
  v-on:upload="uploadCallback"
  v-on:close="closeCallback"
></simple-crop>
```

- 移动端初始化参数示例：

```javascript
data: {
  cropParams: {
    src: "../../img/test2.jpg", // 裁剪图片地址
    size: { // 裁剪尺寸
      width: 800,
      height: 600
    },
    borderColor: '#fff', //裁剪框边框颜色
    cropSizePercent: 0.9 //裁剪框显示比例
  }
},
```

- PC 初始化参数示例：

```javascript
data: {
  cropParams: {
    title: "上传图片过大，请裁剪", //标题
    src: "../../img/test2.jpg", // 裁剪图片地址
    size: { // 裁剪尺寸
      width: 800,
      height: 600
    },
    cropSizePercent: 0.65, //裁剪框显示比例
    borderWidth: 1, //裁剪框边框宽度
    funcBtns: ["close", "crop", "upload"], //功能按钮配置
    borderColor: "#fff", //裁剪框边框颜色
    coverColor: "rgba(0,0,0,.5)", //裁剪框遮罩颜色
    startAngle: -360, //旋转刻度盘开始角度
    endAngle: 360, //旋转刻度盘结束角度
  }
},
```

## 4、选取裁剪图片

```vue
<input v-on:change="setCropImage" type="file" accept="image/png,image/jpeg"></input>
```

```javascript
setCropImage(evt) {
  var files = evt.target.files;
  if (files.length > 0) {
    this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
    this.cropParams.src = files[0];
  }
  evt.target.value = '';
},
```

## 5、更新组件参数

```javascript
<button v-on:click="updateComponent">组件更新</button>
```

```javascript
updateComponent() {
  this.cropParams = JSON.parse(JSON.stringify(this.cropParams)); //改变对象引用
  this.cropParams.borderColor = '#0BFF00'; //更新值
  this.cropParams.cropSizePercent = 0.5;
  this.cropParams.size = {
    width: 600,
    height: 600
  };
},
```
