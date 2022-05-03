
# <img align="center" alt="if" width="60px" src="https://github.com/freezestanley/Factory/blob/lazy/public/logo.png" />

# Docker
```
docker run -it -dp 9000:9000 -w /app -v "${PWD}:/app" 工作项目镜像 sh -c "node"
```
# IF 
这是一个webpack5 + react + typescript脚手架

# File
```
src
├─Api
├─Components                    //公共组件
│    ├─Home
│    │  ├─assets
│    │  │  ├─components
│    │  │  ├─imgs
│    │  │  └─test
│    │  ├─index.tsx
│    │  ├─index.style.less
│    │  └─index.hooks.ts
│    └─other....
├─Layer                         //布局文件
│  ├─index.tsx
│  └─index.style.less
├─Router                         //布局文件
│  ├─index.tsx
│  └─Layer
│    ├─index.tsx                //Layer模版的文件布局
├─Pages                         //项目文件
│    ├─Home
│    │  ├─assets
│    │  │  ├─components
│    │  │  ├─img
│    │  │  └─test
│    │  ├─index.tsx
│    │  ├─index.style.less
│    │  └─index.hooks.ts
│    └─other....
├─Theme                         //全局样式
└─Toolbox                       //工具
    ├─debugger.tsx
    ├─goDB.less
    ├─index.ts
    └─other....
```


