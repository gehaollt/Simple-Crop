# React 用法



## 1、引入样式

目前提供了两种默认样式 `./build/template-2.css` 适用移动设备，`./build/template-1.css` 适用 PC。

```jsx
import "../../build/template-2.css";
```

## 2、引入组件代码

```jsx
import { MobileCrop } from "../../index.jsx";
```

## 3、初始化

```jsx
<MobileCrop {...this.state.cropParams} />
```

- 移动端初始化参数示例：

```jsx
this.state = {
  inputValue: "",
  cropParams: {
    src: "../../img/test2.jpg", // 裁剪图片地址
    size: {
      //裁剪尺寸
      width: 800,
      height: 600,
    },
    cropSizePercent: 0.9, //裁剪框显示比例
    cropCallback: this.cropCallback, //图片裁剪完成回调函数
    uploadCallback: this.uploadCallback, //上传裁剪图片成功回调函数
    closeCallback: this.closeCallback, //关闭组件回调函数
  },
};
```

- PC 初始化参数示例：

```jsx
this.state = {
  inputValue: "",
  cropParams: {
    title: "上传图片过大，请裁剪", //标题
    src: "../../img/test2.jpg", // 裁剪图片地址
    size: {
      // 裁剪尺寸
      width: 800,
      height: 600,
    },
    cropSizePercent: 0.65, //裁剪框显示比例
    borderWidth: 1, //裁剪框边框宽度
    funcBtns: ["close", "crop", "upload"], //功能按钮配置
    borderColor: "#fff", //裁剪框边框颜色
    coverColor: "rgba(0,0,0,.5)", //裁剪框遮罩颜色
    startAngle: -360, //旋转刻度盘开始角度
    endAngle: 360, //旋转刻度盘结束角度
    cropCallback: this.cropCallback, //图片裁剪完成回调函数
    uploadCallback: this.uploadCallback, //上传裁剪图片成功回调函数
    closeCallback: this.closeCallback, //关闭组件回调函数
  },
};
```

## 4、选取裁剪图片

```jsx
<input
  onChange={this.setCropImage.bind(this)}
  type="file"
  accept="image/png,image/jpeg"
  value={this.state.inputValue}
></input>
```

```jsx
setCropImage (evt) {
  var files = evt.target.files;
  if (files.length > 0) {
    let cropParams = this.state.cropParams;
    cropParams.src = files[0];
    this.setState({
      cropParams: cropParams,
      inputValue: '' // 清空 input value 属性
    });
  }
}
```

## 5、更新组件参数

```jsx
<button onClick={this.updateComponent.bind(this)}>组件更新</button>
```

```jsx
updateComponent () {
  let cropParams = this.state.cropParams;
  cropParams.borderColor = "#0BFF00"; //更新值
  cropParams.cropSizePercent = 0.5;
  cropParams.size = {
    width: 600,
    height: 600
  };
  this.setState({
    cropParams: cropParams
  })
}
```
