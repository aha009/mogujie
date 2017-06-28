# Vue2.0 仿蘑菇街


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


* 主要技术栈

    * vue2.0(数据绑定)
    * vue-router(SPA)
    * vuex(管理组件状态，实现组件通信）
    * es6、html5、css3
    * axios
    
* 组件库 
    mint-ui(有一些组件特别好用，方便快速开发)

## 目录
```
|
|—— build 
|—— config
|——src : dev resources.
| |—— assets/
| |    |____css
| |    |____images    
| |—— public/ 公共组件
| |    |____ BottomNav.vue
| |    |____ SearchBar.vue     
| |    |____ TabBar.vue  
| |    |____ sidebar.vue  
| |—— page
| |    |____ cart
| |    |____ category
| |    |____ good
| |    |____ mainframe
| |    |____ mine
| |—— router/
| |    |____ index.js 路由映射
| |—— store/ 
| |    |____ store.js
| |—— App.vue :neteast-yanxuan SPA
| |__ main.js : the entry of douban-movieSPA
|
|__ static : static files

```