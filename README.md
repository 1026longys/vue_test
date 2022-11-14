# vue_test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Vue 核心

## vue 简介

一套用于 **构建用户界面** 的 **渐进式** Javascript 框架

vue 可以自底向上逐层的应用

- 简单应用：只需一个轻量小巧的核心库
- 复杂应用：可以引入各式各样的 Vue 插件

### 特点

1. 采用**组件化**模式，提高代码复用率、且让代码更好维护

2. **声明式**编码，让编码人员无需直接操作 DOM，提高开发效率

3. 使用 **虚拟 DOM** + 优秀的 **Diff 算法** ，尽量复用 DOM 节点

   ```js
   // 命令式编码

   // 准备html字符串
   let htmlStr = " "// 遍历数据拼接html字符串
   .persons
     .forEach((p) => {
       htmlStr += "<li>${p.id} - ${p.name} - ${p.age}</li>";
     });
   // 获取list元素
   let list = document.getElementById("list");
   // 修改内容(亲自操作DOM)
   list.innerHTML = htmlStr;
   ```

```vue
<!-- 声明式编码 -->
<ul id="list">
	<li v-for="p in persons">
		{{p.id}} - {{p.name}} - {{p.age}}
	</li>
</ul>
```

​ vue.js 官网：https://cn.vuejs.org/

## 初识 Vue

### 引入 Vue

```html
<!-- 引入vue -->
<script src="./vue.js"></script>
```

#### 解决两个提示问题

1. Download the Vue Devtools extension for a better development experience:
   https://github.com/vuejs/vue-devtools

   解决方法：

   - 点击扩展程序

   - 点击右上角的开发者模式，将他启用

   - 将下载的**Vue.crx**文件直接拖动到浏览器窗口即可

2. You are running Vue in development mode.
   Make sure to turn on production mode when deploying for production.
   See more tips at https://vuejs.org/guide/deployment.html

解决方法：

```html
<script>
  Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示
</script>
```

### hello 小案例

```html
<!-- 准备一个容器 -->
<div id="root">
  <h1>hello, {{name}}</h1>
</div>
<h1>hello, {{name}}</h1>

<script>
  Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示

  // 创建Vue实例
  new Vue({
    el: "#root", // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
    data: {
      // data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象
      name: "Vue",
    },
  });
</script>
```

#### 总结：

1. 想让 Vue 工作，就必须创建一个 Vue 实例，且要传入一个配置对象
2. root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue 语法
3. root 容器里的代码被称为【Vue 模板】
4. Vue **实例** 和 **容器** 是**一一对应**的
5. 真实开发中只有一个 Vue 实例，并且会配合着组件一起使用
6. {{xxx}}中的 xxx 要写 js 表达式，且**xxx 可以自动读取到 data 中的所有属性**
7. **一旦 data 中的数据发生改变，那么页面中用到该数据的地方也会自动更新**

## 模板语法

1. 插值语法：

   - 功能：用于解析标签体内容。

   - 写法：{{xxx}}，xxx 是 js 表达式，且可以直接读取到 data 中的所有属性。

2. 指令语法：

   - 功能：用于解析标签（包括:标签属性、标签体内容、绑定事件.....）。

   - 举例：v-bind:href="xxx” 简写为 :href="xxx"，xxx 要写 js 表达式，且可以直接读取到 data 中的**所有属性**

   - 备注：Vue 中有很多的指令，且形式都是: v-???，此处只是拿 v-bind 举个例子。

例：

```html
<div id="root">
  <h1>插值语法</h1>
  <h3>你好，{{name}}</h3>
  <hr />
  <h1>指令语法</h1>
  <a v-bind:href="school.url">点我去{{school.name}}</a>
  <a :href="school.url">点我去{{school.name}}</a>
</div>

<script>
  Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示

  // 创建Vue实例
  new Vue({
    el: "#root",
    data: {
      name: "Vue",
      // 结构可以多层
      school: {
        name: "尚硅谷",
        url: "http://www.atguigu.com",
      },
    },
  });
</script>
```

## 数据绑定

1. 单向绑定(v-bind)：数据只能从 data 流向页面。
2. 双向绑定(v-model)：数据不仅能从 data 流向页面，还可以从页面流向 data.
   - 双向绑定一般都应用在**表单类元素**上 (如: input、select 等)
   - `v-model:value` 可以简写为 v-model，因为 v-model 默认收集的就是 value 值。

## el 和 data 两种写法

1. el 有 2 种写法

   - new Vue 时候配置 el 属性。
   - 先创建 Vue 实例，随后再通过`vm. $mount('#root ')`指定 el 的值。

2. data 有 2 种写法

   - 对象式

   - 函数式

     如何选择：目前哪种写法都可以，以后学习到**组件**时，**data 必须使用函数式**，否则会报错.

3. 一个重要的原则：由 Vue 管理的函数，一定**不要写箭头函数**，一旦写了箭头函数，this 就不再是 Vue 实例了。

```html
<div id="root">
  <h1>你好，{{name}}</h1>
</div>

<script type="text/javascript">
  Vue.config.productionTip = false;
  // el的两种写法
  /*const v = new Vue({
		// 第一种写法
        // el : '#root',
        data:{
    		name:'尚硅谷'
    		}
    })
    console.log(v)
    // 第二种写法
    v.$mount('#root')*/

  // data的两种写法
  new Vue({
    el: " #root",
    // data的第一种写法：对象式
    /*data:{
    		name:'尚硅谷'
    	}*/

    // data的第二种写法：函数式         后期组件开发的时候用
    data() {
      console.log(this); //此处的this是Vue实例对象
      return {
        name: "尚硅谷",
      };
    },
  });
</script>
```

**`vm._data`** 中做了数据劫持，set()

## 理解 MVVM

1. M：模型(Model)：对应 data 中的数据
2. V：视图(View)：模板代码
3. VM：视图模型(ViewModel)： Vue 实例对象

- data 中所有的属性，最后都出现在了 vm 身上
- vm 身上所有的属性及 Vue 原型上所有属性，在 Vue 模板中都可以直接使用

## Object.defineProperty

**`Object.defineProperty(object, propName, descriptor)`** 三个参数

- object 对象 => 给谁加
- propName 属性名 => 要加的属性的名字 【类型：String】
- descriptor 属性描述 => 加的这个属性有什么样的特性 【类型：Object】

```html
<script>
  let number = 18;
  let person = {
    name: "张三",
    sex: "男",
  };

  Object.defineProperty(person, "age", {
    // value: 18,
    // enumerable: true,         // 控制属性是否可以被 枚举，默认值是false
    // writable: true,           // 控制属性是否可以被 修改，默认值是false
    // configurable: true,       // 控制属性是否可以被 删除，默认值是false

    // 当有人 读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get() {
      console.log("有人读取age属性了");
      return number;
    },
    //当有人 修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value) {
      console.log("有人修改了age属性，且值是", value);
      number = value;
    },
  });
</script>
```

## 数据代理

1. Vue 中的数据代理：通过 vm 对象来代理 data 对象中属性的操作（读/写)
2. Vue 中数据代理的好处：更加方便的操作 data 中的数据
3. 基本原理：通过**`object.defineProperty()`**把 data 对象中所有属性添加到 vm 上。为每一个添加到 vm 上的属性，都指定一个**getter/setter**。在 getter/setter 内部去操作（读/写)data 中对应的属性

```html
<div id="root">
  <h1>学校名称：{{name}}</h1>
  <h1>学校地址：{{address}}</h1>
</div>

<script>
  Vue.config.productionTip = false; // 阻止vue在启动时生成生产提示

  // 创建Vue实例
  let vm = new Vue({
    el: "#root",
    data: {
      name: "尚硅谷",
      address: "北京",
    },
  });
</script>
```

vm 中的\_data 中的东西并不是数据代理，而是做了一个数据劫持

## 事件处理

### 事件的基本使用

1. 使用 **`v-on:xxx`** 或 **`@xxx`** 绑定事件，其中 xxx 是事件名
2. 事件的回调需要配置在 methods 对象中，最终会在 vm 上
3. **methods 中配置的函数，不要用箭头函数！否则 this 就不是 vm 了**
4. methods 中配置的函数，都是被 Vue 所管理的函数，this 的指向是 vm 或 组件实例对象
5. **`@click="demo”`** 和 **`@click="demo($event)”`** 效果一致，但后者可以传参

```html
<div id="root">
  <h2>欢迎来到{{name}}学习</h2>
  <!-- <button v-on:click="showInfo">点我提示信息</button> -->
  <button @click="showInfo1">点我提示信息1（不传参）</button>
  <button @click="showInfo2($event, 66)">点我提示信息2（传参）</button>
</div>

<script>
  Vue.config.productionTip = false;

  const vm = new Vue({
    el: "#root",
    data: {
      name: "尚硅谷",
    },
    methods: {
      showInfo1(event) {
        console.log(event.target.innerText);
        console.log(this); // 此处this指向vm
        alert("你好！");
      },
      showInfo2(event, number) {
        console.log(event, number);
        alert("你好！!");
      },
    },
  });
</script>
```

### 事件修饰符

1. **prevent**：阻止默认事件（常用）
2. **stop**：阻止事件冒泡（常用）
3. **once**：事件只触发一次（常用）
4. capture：使用事件的捕获模式;
5. self：只有 event.target 是当前操作的元素时才触发事件;
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕;

```html
<!-- 阻止默认事件 -->
<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

<!-- 阻止事件冒泡 -->
<div class="demo1" @click="showInfo">
  <button @click.stop="showInfo">点我提示信息</button>
</div>

<!-- 事件只触发一次 -->
<button @click.once="showInfo">点我提示信息</button>

<!-- 先阻止事件冒泡再阻止默认事件 （可以连点） -->
<a href="http://www.atguigu.com" @click.stop.prevent="showInfo">点我提示信息</a>
...
```

事件修饰符可以连点

### 键盘事件

Vue 中常用的按键别名:

- 回车 => enter
- 删除 => delete(捕获“删除”和“退格”健)
- 退出 => esc
- 空格 => space
- 换行 => tab
- 上 => up 下 => down 左 => left 右 => right

```html
<input type="text" placeholder="前按下回车提示输入" @keyup.enter="showInfo" />
```

1. Vue 未提供别名的按键，可以使用按键原始的 key 值去绑定，但注意要转为 kebab-case (短横线命名)

2. 系统修饰键（用法特殊）：**`tab、 ctrl、alt、shift、meta`**

   - 配合 keyup 使用：按下修饰健的同时，再按下其他键，随后释放其他键，事件才被触发

   - 配合 keydown 使用：正常触发事件

   ```html
   <!-- 按 ctrl + 任意键 触发 -->
   <input type="text" @keyup.ctrl="showInfo" />
   <!-- 只有按 ctrl+y 才能触发 -->
   <input type="text" @keyup.ctrl.y="showInfo" />
   ```

3. 也可以使用 keyCode 去指定具体的按键**（不推荐) (可能在未来被废除)**

   ```html
   <input type="text" @keyup.13="showInfo" />
   ```

4. **`Vue.config.keyCodes.自定义键名 = 键码`**，可以去定制按键别名

   ```html
   <script>
     // Vue.config.keyCodes.自定义键名 = 键码
     Vue.config.keyCodes.huiche = 13;
   </script>
   ```

## 计算属性

1. 定义：要用的属性不存在，要通过 **已有属性** 计算得来。
2. 原理：底层借助了 objcet.defineproperty 方法提供的 getter 和 lsetter
3. **get 函数什么时候执行**
   - **初次读取时会执行一次。**
   - 当**依赖的数据发生改变时**会被再次调用
4. 优势：与 methods 实现相比，**内部有缓存机制（复用）**，效率更高，调试方便
5. 备注：
   - 计算属性最终会出现在 vm 上，直接读取使用即可
   - 如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变

```html
<div id="root">
  姓：<input type="text" v-model="firstName" /><br />
  名：<input type="text" v-model="lastName" /><br />
  全名：<span>{{fullName}}</span>
</div>

<script>
  Vue.config.productionTip = false;

  const vm = new Vue({
    el: "#root",
    data: {
      firstName: "张",
      lastName: "三",
    },
    // 计算属性
    computed: {
      fullName: {
        get() {
          console.log("get被调用了");
          return this.firstName + "-" + this.lastName;
        },
        set(value) {
          console.log("set被调用了", value);
          const arr = value.split("-");
          this.firstName = arr[0];
          this.lastName = arr[1];
        },
      },
    },
  });
</script>
```

只考虑读取不考虑修改时，可简写为：

```html
<script>
    ...
  computed: {
            fullName(){
                console.log('get被调用了');
                return this.firstName + '-' + this.lastName
            }
        }
    ...
</script>
```

## 监视属性

### 监视属性

1. 当被监视的属性变化时，回调函数自动调用，进行相关操作
2. **监视的属性必须存在，才能进行监视！！**
3. 监视的两种写法:
   - new Vue 时传入 watch 配置
   - 通过 **`vm.$watch('需要监视的属性', {配置属性})`** 监视

```html
<div id="root">
  <h2>今天天气很{{info}}</h2>
  <button @click="changeWeather">点我切换天气</button>
</div>

<script>
  Vue.config.productionTip = false;

  const vm = new Vue({
    el: "#root",
    data: {
      isHot: true,
    },
    computed: {
      info() {
        return this.isHot ? "炎热" : "凉爽";
      },
    },
    methods: {
      changeWeather() {
        this.isHot = !this.isHot;
      },
    },
    // 监视属性    （很明确的知道需要监视谁）
    watch: {
      // 监视的属性名（计算属性也可以被监视）  （String类型）
      isHot: {
        immediate: true, // 初始化时是否让handler调用一下  默认值：false
        // 当监视属性发生变化时调用
        handler(newValue, oldValue) {
          console.log("isHot被修改了", newValue, oldValue);
        },
      },
    },
  });
  // 监视属性 第二种写法   （前期监视对象不明确，后期根据用户的行为进行监视...）
  vm.$watch("isHot", {
    immediate: true, // 初始化时让handler调用一下
    handler(newValue, oldValue) {
      console.log("isHot被修改了", newValue, oldValue);
    },
  });
</script>
```

### 深度监视

深度监视:

- Vue 中的 watch 默认不监测对象内部值的改变（一层)
- 配置 **`deep: true`** 可以监测对象内部值改变（多层）

备注:

- **Vue 自身可以监测对象内部值的改变，但 Vue 提供的 watch 默认不可以**
- 使用 watch 时根据数据的具体结构,决定是否采用深度监视

```html
...
<script>
     ...
  const vm = new Vue({
         el: '#root',
         data: {
             isHot: true,
             numbers:{
                 a: 1,
                 b: 1
             }
         },
         ...
         watch: {
             ...
             // 监视多级结构中某个属性的变化
             'numbers.a': {
                 handler() {
                     console.log('numbers被修改了');
                 }
             },
             // 监视多级结构中所有属性的变化
             numbers: {
                 deep: true,
                 handler() {
                     console.log('numbers被修改了');
                 }
            }
         }
     })
</script>
```

若不考虑其他配置属性，则可以简写成：

```vue
<script>
...
   	watch: {
           // 监视的属性名
           isHot(newValue, oldValue) {
               console.log('isHot被修改了', newValue, oldValue)
           }
       }
</script>
```

**计算属性无法开启异步任务去维护数据，而监视属性可以；（`setTimeout(()=> {},1000)`）**

### 监视数据的原理

#### 对象

```html
<script>
  let data = {
    name: "尚硅谷",
    address: "北京",
  };
  // 创建一个监视的实例对象，用于监视data中属性的变化
  const obs = new observer(data);
  console.log(obs);

  // 准备一个vm实例对象
  let vm = {};
  vm._data = data = obs;

  function observer(obj) {
    // 汇总对象中所有的属性形成一个数组
    const keys = Object.keys(obj);
    console.log(keys);
    // 遍历
    keys.forEach((k) => {
      Object.defineProperty(this, k, {
        get() {
          return obj[k];
        },
        set(val) {
          console.log(`${k}被改了`);
          obj[k] = val;
        },
      });
    });
  }
</script>
```

#### 数组

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括:

- **push()**
- **pop()**
- **shift()**
- **unshift()**
- **splice()**
- **sort()**
- **reverse()**

```js
vm.student.hobby.push('124')            // 在末尾添加一个 124
vm.student.hobby.pop()                  // 删除最后一个元素
vm.student.hobby.unshift('124')         // 在开头添加一个 124
vm.student.hobby.shift()                // 删除第一个元素
vm.student.hobby.splice(0, 1, '123')    // 从下标为0开始到1，数据改为123
......
```

#### 总结（重点）

Vue 监视数据的原理

1. **vue 会监视 data 中所有层次的数据**

1. 如何**监测对象**中的数据
   通过 **setter** 实现监视，且要在 new Vue 时就传入要监测的数据。

- 对象中后追加的属性，Vue 默认不做响应式处理
- 如需给后添加的属性做响应式，请使用如下 API:
  - **`vue.set(target, propertyName/index, value)`**
  - **`vm.$set(target, propertyName/index, value)`**

3. 如何监测数组中的数据

   通过包妻数组更新元素的方法实现，本质就是做了两件事:

   - 调用原生对应的方法对数组进行更新
   - 重新解析模板，进而更新页面

4. 在 Vue **修改数组** 中的某个元素一定要用如下方法:

   - 使用这些 API：**`push()、pop()、shift()、unshift()、splice()、sort()、reverse()`**
   - **`Vue.set()`** 或 **`vm.$set()`**

特别注意：**`Vue.set()`** 和 **`vm.$set()`** **不能给 vm 或 vm 的根数据对象添加属性!!!**

## computed 和 watch 比较

computed 和 watch 之间的区别：

- computed 能完成的功能,watch 都可以完成
- watch 能完成的功能，computed 不一定能完成，例如: **watch 可以进行异步操作**

两个重要的小原则：

- 所被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或组件实例对象
- 所有不被 Vue 所管理的函数（定时器的回调函数、ajax 的回调函数、Promise 的回调函数等)，最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象

## 绑定 class 和 style 样式

1. class 样式

   - 写法：class= "xxx" xxx 可以是字符串、对象、数组。
     - 字符串写法适用于：类名不确定，要动态获取。
     - 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
     - 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。

2. style 样式

- **`:style="{fontSize: xxx}“`** 其中 xxx 是动态值
- **`:style="[a,b]"`** 其中 a、b 是样式对象

```html
<div id="root">
  <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定-->
  <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
  <br /><br />

  <!--绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定-->
  <div class="basic" :class="classArr">{{name}}</div>
  <br /><br />

  <!--绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用-->
  <div class="basic" :class="classObj">{{name}}</div>

  <div class="basic" :class="styleObj">{{name}}</div>
</div>

<script>
     ...
  // 创建Vue实例
     new Vue({
         el: '#root',
         data: {
             name: '尚硅谷',
             mood: 'normal',
             classArr: ['sty1', 'sty2', 'sty3'],
             classObj: {
                 sty1: false,
                 sty2: false,
                 sty3: false
             },
             // 绑定style样式
             styleobj:{
  			fontSize: '40px',      // 注意 key 的书写规则
                 color : 'red',
  		},
  		styleobj2:{
  			backgroundColor: 'orange'
             },
         },
         methods: {
             changeMood() {
                 const arr = ['normal', 'happy', 'bad']
                 let index = Math.floor(Math.random()*3)
                 this.mood = arr[index]
                 console.log(index);
             }
         }
     })
</script>
```

## 条件渲染

1. **`v-if`**

   - 写法：

     1. v-if="表达式"

     2. v-else-if="表达式”

     3. v-else="表达式"

   - 适用于：**切换频率较低** 的场景

   - 特点：**不展示的 DOM 元素直接被移除**

   - 注意：v-if 可以和 :v-else-if、v-else 一起使用，但要求结构不能被 **“打断”**

2. **`v-show`**

   - 写法：v-show="表达式"

   - 适用于：**切换频率较高** 的场景。

   - 特点：**不展示的 DOM 元素未被移除，仅仅是使用 样式隐藏掉** === **`display: none;`**

3. 备注：使用**`v-if`**的时，元素可能无法获取到，而使用 **`v-show`** 一定可以获取到。

```html
<div id="root">
  <h2>当前的n值是:{{n}}</h2>
  <button @click="n++">点我n+1</button>

  <!--使用v-show做条件渲染-->
  <!-- <h2 v-show="false">欢迎来到{{name}}/h2> -->
  <!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

  <!--使用v-if做条件渲染-->
  <!-- <h2 v-if="false">欢迎来到{{name]}</h2> -->
  <!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

  <!-- v-else和v-else-If -->
  <!-- <div v-if="n === 1">Angular</div>
	<div v-else-if="n === 2">React</div>
	<div v-else-if="n === 3">Vue</div>
	<div v-else>哈哈</div> -->

  <!-- v-if、template的配合使用 -->
  <template v-if="n === 1">
    <h2>你好</h2>
    <h2>尚硅谷</h2>
    <h2>北京</h2>
  </template>
</div>
<script>
   ...
  // 创建Vue实例
     new Vue({
         el: '#root',
         data: {
             n: 0,
             name: '尚硅谷',
             ...
         }
</script>
```

**v-else 不需要加条件，也不会被条件影响**

**template 能和 v-if 配合，但不能与 v-show 配合**

## 列表渲染

**`v-for`**

1. 用于展示列表数据
2. 语法：**`v-for=" (item, index) in xxx" : key="yyy"`**
3. 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少)

```html
<div id="root">
  <!-- 遍历数组 -->
  <ul>
    <h2>人员列表（遍历数组）</h2>
    <li v-for="(p, index) in persons" :key="index">
      {{p.name}} - {{p.age}} - {{index}}
    </li>
  </ul>
  <!-- 遍历对象 -->
  <ul>
    <h2>汽车信息（遍历对象）</h2>
    <li v-for="(value, k) of cars" :key="k">{{k}} - {{value}}</li>
  </ul>
  <!-- 遍历字符串 -->
  <ul>
    <h2>测试遍字符串</h2>
    <li v-for="(char, index) of str" :key="index">{{char}} - {{index}}</li>
  </ul>
  <!-- 遍历指定次数 -->
  <ul>
    <h2>测试遍指定次数</h2>
    <li v-for="(number, index) of 5" :key="index">{{number}} - {{index}}</li>
  </ul>
</div>

<script>
  Vue.config.productionTip = false;

  // 创建Vue实例
  new Vue({
    el: "#root",
    data: {
      persons: [
        { id: "001", name: "张三", age: 18 },
        { id: "002", name: "李四", age: 19 },
        { id: "003", name: "王五", age: 20 },
      ],
      cars: {
        name: "奥迪A8",
        price: "70万",
        color: "黑色",
      },
      str: "hello",
    },
  });
</script>
```

### key 的作用和原理

虚拟 DOM 中 key 的作用：

​ **key 是虚拟 DOM 对象的标识**，当数据发生变化时，Vue 会根据【**新数据**】生成【**新的虚拟 DOM**】，随后 Vue 进行【**新虚拟 DOM**】与【**旧虚拟 DOM**】的差异比较，比较规则如下:

1. 对比规则：

   - 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key

     - **若虚拟 DOM 中内容没变，直接使用之前的真实 DOM**

     - **若虚拟 DOM 中内容变了，则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM**

   - 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key

     - 创建新的真实 DOM，随后渲染到到页面

1. 用 index 作为 key 可能会引发的问题：

   - 若对数据进行：逆序添加、逆序删除等破坏顺序操作：

     ​ 会产生没有必要的真实 DOM 更新 ==> 界面效果没问题，但效率低

   - 如果结构中还包含输入类的 DOM：

     ​ 会产生错误 DOM 更新 ==> 界面有问题

1. 开发中如何选择 key ：

   - **最好使用每条数据的唯一标识作为 key**，比如 id、手机号、身份证号、学号等唯一值。
   - 如果不存在对数据的**逆序添加、逆序删除等破坏顺序操作**，仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。

### 列表过滤

```html
<div id="root">
  <input type="text" placeholder="请输入关键字" v-model="keyWord" />
  <ul>
    <li v-for="p in filpersons" :key="p.id">
      {{p.name}} - {{p.age}} - {{p.sex}}
    </li>
  </ul>
</div>
```

**监视属性**

```html
<script>
  new Vue({
     	el: '#root',
         data: {
            	keyWord: '',
         	persons: [ {...},{...},{...},{...} ],
         },
     	watch:{
             keyWord:{
                 immediate: true,
                 handler(val) {
                     this.filpersons = this.persons.filter((p)=> {
                         return p.name.indexOf(val) !== -1
                     })
                 }
             }
         }
     })
</script>
```

当 watch 与 computed 都可以时，优先 computed。

**计算属性**

```html
<script>
  new Vue({
    el: "#root",
    data: {
      keyWord: "",
      persons: [
        { id: "001", name: "马冬梅", age: 18, sex: "女" },
        { id: "002", name: "周冬雨", age: 19, sex: "女" },
        { id: "003", name: "温兆伦", age: 20, sex: "男" },
        { id: "003", name: "周杰伦", age: 22, sex: "男" },
      ],
      filpersons: [],
    },
    computed: {
      filpersons() {
        return this.persons.filter((p) => {
          return p.name.indexOf(val) !== -1;
        });
      },
    },
  });
</script>
```

### 列表排序

```html
<div id="root">
  ...
  <button @click="sortType=2">年龄升序</button>
  <button @click="sortType=1">年龄降序</button>
  <button @click="sortType=0">原顺序</button>
  ...
</div>

<script>
  new Vue({
    el: "#root",
    data: {
      keyWord: "",
      sortType: 0,
      persons: [
        { id: "001", name: "马冬梅", age: 18, sex: "女" },
        { id: "002", name: "周冬雨", age: 19, sex: "女" },
        { id: "003", name: "温兆伦", age: 20, sex: "男" },
        { id: "003", name: "周杰伦", age: 22, sex: "男" },
      ],
    },
    computed: {
      filpersons() {
        return this.persons.filter((p) => {
          return p.name.indexOf(val) !== -1;
        });
        if (this.sortType) {
          arr.sort((p1, p2) => {
            return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age;
          });
        }
        return arr;
      },
    },
  });
</script>
```

## 更新时的问题

```html
<!-- 准备一个容器 -->
<div id="root">
  <h2>人员列表</h2>
  <button @click="updateMei">更新马冬梅的信息</button>
  <ul>
    <li v-for="p in persons" :key="p.id">{{p.name}} - {{p.age}} - {{p.sex}}</li>
  </ul>
</div>

<script>
  Vue.config.productionTip = false;

  // 创建Vue实例
  const vm = new Vue({
    el: "#root",
    data: {
      keyWord: "",
      sortType: 0, // 原顺序
      persons: [
        { id: "001", name: "马冬梅", age: 18, sex: "女" },
        { id: "002", name: "周冬雨", age: 31, sex: "女" },
        { id: "003", name: "温兆伦", age: 30, sex: "女" },
        { id: "004", name: "周杰伦", age: 22, sex: "男" },
      ],
    },
    methods: {
      updateMei() {
        // this.persons[0].name = '马老师'   // 奏效
        // this.persons[0].age = 50   // 奏效
        // this.persons[0].sex = '男'   // 奏效

        // 页面显示数据不发生改变，但实际上数据已经发生改变
        this.persons[0] = { id: "001", name: "马老师", age: 50, sex: "男" };
      },
    },
  });
</script>
```

## Vue.set()

```js
methods: {
    // 给data中的对象 添加 属性和值
    addSex() {
        // Vue.set(this.student, 'sex', '男')
        this.$set(this.student, 'sex', '男')
    }
},
```

## 收集表单数据

1. 若:<input type="text"/>，则 v-model 收集的是 value 值，用户输入的就是 value 值。
2. 若:<input type="radio"/>，则 v-model 收集的是 value 值，且要给标签配置 value 值。
3. 若:<input type="checkbox"/>
   - 没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值)
   - 配置 input 的 value 属性:
     - v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值)
     - v-model 的初始值是**数组**，那么收集的的就是 value 组成的数组
4. v-model 的三个修饰符：
   - **lazy**：失去焦点再收集数据
   - **number**：输入字符非转为有效的数字 一般这样用： **`<input type="number" v-model.number="">`**
   - **trim**：输入**首尾空格**过滤

```html
<div id="root">
  <form @submit.prevent="demo">
    账号:<input type="text" v-model.trim="userInfo.accounts" /> <br />
    // trim 密码:<input type="password" v-model="userInfo.password" /> <br />
    年龄:<input type="number" v-model.number="userInfo.age" /> <br />
    // number 性别: 男<input
      type="radio"
      name="sex"
      v-model="userInfo.sex"
      value="男"
    />
    女<input type="radio" name="sex" v-model="userInfo.sex" value="女" /> 爱好:
    学习<input type="checkbox" v-model="userInfo.hobby" value="study" />
    打游戏<input type="checkbox" v-model="userInfo.hobby" value="game" />
    吃饭<input type="checkbox" v-model="userInfo.hobby" value="rice" /><br />
    所属校区
    <select v-model="userInfo.city">
      <option value="">请选择校区</option>
      <option value="beijing">北京</option>
      <option value="shanghai">上海</option>
      <option value="shenzhen">深圳</option>
      <option value="wuhan">武汉</option>
    </select>
    <br /><br />
    其他信息:
    <textarea v-model.lazy="userInfo.other"></textarea> <br />
    // lazy <input type="checkbox" v-model="userInfo.agree" />阅读并接受<a
      >用户协议</a
    >
    <button>提交</button>
  </form>
</div>
<script>
  Vue.config.productionTip = false;

  // 创建Vue实例
  const vm = new Vue({
    el: "#root",
    data: {
      userInfo: {
        accounts: "",
        password: "",
        age: "",
        sex: "男",
        hobby: [],
        city: "beijing",
        other: "",
        agree: false,
      },
    },
    methods: {
      demo() {
        // json 格式输出
        console.log(JSON.stringify(this.userInfo));
      },
    },
  });
</script>
```

## 过滤器

**定义：**对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理)

**语法:**

1. 注册过滤器：**`Vue.filter(name, callback)`** 或 **`new Vue{filters:{{}}`**
2. 使用过滤器：**`{{xxx | 过滤器名}}`** 或 **`v-bind: 属性 = “xxx|过滤器名"`**
3. 备注:
   - 过滤器也可以接收额外参数、多个过滤器也可以串联
   - 并没有改变原本的数据,是产生新的对应的数据

```html
<div id="root">
  <h2>显示格式化后的时间</h2>
  <!--计算属性实现-->
  <h3>现在是: {{fmtTime}}</h3>
  <!-- methods实现-->
  <h3>现在是: {{getFmtTime()}}</h3>
  <!--过滤器实现-->
  <h3>现在是: {{time | timeFormater}}</h3>
  <!--过滤器实现（传参)-->
  <h3>现在是: {{time | timeFormater('YYYY_MM_DD') | myslice}}</h3>
</div>
<script>
  Vue.config.productionTip = false;
  // 全局过滤器
  Vue.filter("myslice", function (value) {
    return value.slice(0, 4);
  });

  // 创建Vue实例
  new Vue({
    el: "#root",
    data: {
      time: 1621561377603, // 时间戳
    },
    computed: {
      fmtTime() {
        return dayjs(this.time).format("YYYY年MM月DD日 HH:mm:ss");
      },
    },
    methods: {
      getFmtTime() {
        return dayjs(this.time).format("YYYY年MM月DD日 HH:mm:ss");
      },
    },
    // 局部过滤器    // 只有本vue可以用，其他vue不能用
    filters: {
      timeFormater(value, str = "YYYY年MM月DD日 HH:mm:ss") {
        return dayjs(value).format(str);
      },
    },
  });
</script>
```

## 内置指令

### 已学过

1. **v-bind**：单向绑定解析表达式,可简写为：xxx
2. **v-model**：双向数据绑定
3. **v-for**：遍历数组/对象/字符串
4. **v-on**：绑定事件监听,可简写为 e
5. **v-if**：条件渲染(动态控制节点是否存存在)
6. **v-else**：条件渲染（动态控制节点是否存存在)
7. **v-show**：条件渲染(动态控制节点是否展示)

### v-text

- 作用：向其所在的节点中渲染文本内容
- 插值语法的区别：v-text 会替换掉节点中的所有内容，{{xxx}}则不会。

### v-html

1. 作用：向指定节点中渲染包含 html 结构的内容
2. 与插值语法的区别：
   - v-html 会替换掉节点中所有的内容，{{xxx}}则不会。
   - v-html 可以识别 html 结构。
3. 严重注意： **v-html 有安全性问题!!!!**
   - 在网站上动态演染任意 HTML 是非常危险的，容易导致 XSS 攻击
   - 一定要在可信的内容上使用 v-html，**永不要用在用户提交的内容上!**

### v-cloak

v-cloak 指令（没有值）：

1. 本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性
2. 使用 css 配合 v-cloak 可以解决网速慢时页面展示出 {{xxx}} 的问题。

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>

<div id="root">
  <h2 v-cloak>{{name}}</h2>
</div>
```

### v-once

1. v-once 所在节点在初次动态渲染后，就视为静态内容了。
2. 以后**数据的改变不会引起 v-once 所在结构的更新**，**可以用于优化性能**

### v-pre

1. **跳过其所在节点的编译过程**
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，**会加快编译**

## 自定义指令

### 函数式与对象式

需求 1：定义一个 v-big 指令，和 v-text 功能类似，但会把绑定的数值放大 10 倍

需求 2：定义一个 v-fbind 指令，和 v-bind 功能类似，但可以让其所绑定的 input 元素默认获取焦点

例：

```html
<div id="root">
  <h2>{{name}}</h2>
  <h2>当前的n值是:<span v-text="n"></span></h2>
  <h2>放大10倍后的n值是:<span v-big="n"></span></h2>
  <button @click="n++">点我n+1</button>
  <hr />
  <input type="text" v-fbind:value="n" />
</div>

<script type="text/javascript">
  Vue.config.productionTip = false;
  new Vue({
    el: "#root",
    data: {
      name: "尚硅谷",
      n: 1,
    },
    // 自定义指令
    directives: {
      // 调用： 1.指令与元素成功绑定时(一上来)   2.指令所在的模板被重新解析时
      //    元素   绑定信息
      big(element, binding) {
        console.log("big");
        element.innerText = binding.value * 10; // n * 10
      },
      fbind: {
        // 指令与元素成功绑定时（一上来)
        bind(element, binding) {
          element.value = binding.value;
        },
        // 指令所在元素被插入页面时
        inserted(element, binding) {
          element.focus();
        },
        // 指令所在的模板被重新解析时
        update(element, binding) {
          element.value = binding.value;
        },
      },
    },
  });
</script>
```

### 总结

1. 定义语法:

   - 局部指令

     ```js
     // 对象
     new Vue({
         directives:{指令名:配置对象}
     })

     // 函数
     new Vue({
         directives：{指令名() {回调函数}}
     })
     ```

   - 全局指令：

     ```html
     <script>
       // 注意没加 -s    规则与过滤器相同
       Vue.directive(指令名, 配置对象)
       Vue.directive('fbind', {
           bind(element,binding) {...},
           inserted(element,binding) {...},
           update(element,binding) {...}
       )

       Vue.directive(指令名, 回调函数)
       Vue.directive('big', function(element,binding){...})
     </script>
     ```

2. 配置对象中常用的 3 个回调：

   - **bind：指令与元素成功绑定时调用**

   - **inserted：指令所在元素被插入页面时调用**

   - **update：指令所在模板结构被重新解析时调用**

     ```js
     fbind:{
         // 指令与元素成功绑定时
         bind(element,binding) {
             ...
         },
         // 指令所在元素被插入页面时
         inserted(element,binding) {
         	...
         },
         // 指令所在的模板被重新解析时
         update(element,binding) {
             ...
         }
     }
     ```

3. 备注：

   - 指令定义时不加 v-，但使用时要加 **v-**
   - 指令名如果是多个单词，要使用 **`kebab-case`** 命名方式，不要用 camelCase 命名。

### 三个坑

1. 自定义指令的复杂命名

   ```html
   <div id="root">
     ...
     <h2><span v-big-number></span></h2>
     ...
   </div>
   <script>
     ...
        new Vue({
            ...
            directives:{
                'big-number'(element, binding) {...}
            }
            ...
        })
        ...
   </script>
   ```

2. 自定义指令的 this 指向问题

   **this 全都指向 window**

   ```html
   <div id="root">
     ...
     <h2><span v-big></span></h2>
     ...
   </div>
   <script>
     ...
        new Vue({
            ...
            directives:{
                big(element, binding) {
                	console.log(this);        // this => window
                },
                fbind:{
                    bind(element,binding) {console.log(this);},    // this => window
                    inserted(element,binding) {console.log(this);},// this => window
                    update(element,binding) {console.log(this);}   // this => window
                }
            }
            ...
        })
        ...
   </script>
   ```

3. 在**`new Vue({})`**中定义的自定义指令全都是局部的，只能在自己的实例中用，别人用不了

## 生命周期

### 引出

- 又名：生命周期回调函数、生命周期函数、生命周期钩子
- 是什么：Vue 在关键时刻帮我们调用的一些特殊名称的函数
- 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的
- **生命周期函数中的 this 指向是 vm 或组件实例对象**

### 生命周期图示

<img src="C:\Users\86137\Desktop\前端课程学习笔记\Vue\Vue全套\imgs\生命周期.png" alt="生命周期" style="zoom: 50%;" />

常用的生命周期钩子：

1. mounted：发送 ajax 请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】
2. beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】

关于销毁 Vue 实例

1. 销毁后借助 Vue 开发者工具看不到任何信息
2. 销毁后自定义事件会失效，**但原生 DOM 事件依然有效**
3. 一般不会在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程了

# Vue 组件化编程

## 组件化

### 初识组件化

#### 组件

理解：用来实现局部 ( 特定 ) 功能效果的代码集合(html / css / js / image….）
为什么用：一个界面的功能很复杂
作用：复用编码，简化项目编码，提高运行效率

#### 组件化

当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用。

#### 三大步骤

##### 第一步：创建组件

使用 vue.extend(options)创建，options 和 new Vue(options)时传入的那个 options 几乎一样，但也有点区别

区别如下：

1. el 不要写，为什么?

   - 最终所有的组件都要经过**一个 vm 的管理**，由 vm 中的 el 决定服务哪个容器

2. **data 必须写成函数**，为什么?

   - 避免组件被复用时，数据存在引用关系

   备注：使用 template 可以配置组件结构。

```html
<script>
  // 第一步：创建school组件
  const school = Vue.extend({
    template: `
            <div>
               <h2>学校名称：{{name}}</h2>
                <h2>学校地址：{{adress}}</h2>
            </div> 
        `,
    data() {
      return {
        name: "文达",
        adress: "合肥紫蓬山",
      };
    },
  });
</script>
```

##### 第二步：注册

1. 局部注册：靠 new Vue 的时候传入 components 配置项
2. 全局注册：靠 **`Vue.component('组件名',组件)`**

```html
<script>
  Vue.component("school", school);
  new Vue({
    el: "#root",
    data: {
      msg: "你好啊！",
    },
    // 第二步：注册组件（局部注册）
    components: {
      school,
      student,
    },
  });
</script>
```

##### 第三步：编写组件标签

```html
<div id="root">
  <h2>{{msg}}</h2>
  <hr />
  <!-- 第三步：编写组件标签 -->
  <school></school>
</div>
```

#### 几个注意点

##### 关于组件名

1. 一个单词组成：
   - 第一种写法 ( 首字母小写 ) ：school
   - 第二种写法 ( 首字母大写 ) ：School
2. 多个单词组成：
   - 第一种写法 ( kebab-case 命名 ) ：my-school
   - 第二种写法 ( camelCase 命名 ) ：MySchool（需要 Vue 脚手架支持)
3. 备注:
   - 组件名尽可能回避 HTML 中已有的元素名称，例如: h2、H2 都不行
   - 可以使用 **name 配置项** 指定组件 **在开发者工具中呈现的名字**

##### 关于组件标签

- 第一种写法：<school> </school>
- 第二种写法：<school/>
- 备注：**不用使用脚手架时，`<school/>` 会导致后续组件不能渲染**

##### 简写方式

```js
const school = Vue.extend(options);
// 可简写为:
const school = options;
```

### 非单文件组件

#### 组件的嵌套

```html
<div id="root">
  <app></app>
</div>

<script>
  const student = Vue.extend({
      template: `...`,
      data() { return {...} }
  })
  const school = Vue.extend({
      template: `<div>  ...   <student></student> </div>`,
      data() {return {...}},
      components: {student}
  })
  const app = Vue.extend({
      template: `<div> <school></school> </div>`,
      components: {school}
  })
  // 创建Vue实例
  new Vue({
      el: '#root',
      components: {
          app
      }
  })
</script>
```

#### VueComponent 构造函数

1. school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是 Vue.extend 生成的。
2. 我们只需要写<school/>或<school></school>，Vue 解析时会帮我们创建 school 组件的实例对象，即 Vue 帮我们执行的：**`new VueComponent(options)`**
3. **特别注意：每次调用 Vue.extend，返回的都是一个全新的 VueComponent ！！！**
4. 关于 this 指向：
   - 组件配置中:
     - data 函数、methods、watch 和 computed 中的函数它们的 **this** 均是 **VueComponent 实例对象**
   - new Vue()配置中：
     - data 函数、methods、watch 和 computed 中的函数它们的 **this** 均是 **Vue 实例对象**
5. VueComponent 的实例对象，简称 vc（也可称之为：组件实例对象 )。Vue 的实例对象，简称 vm。

### 单文件组件

![文件结构](C:\Users\86137\Desktop\前端课程学习笔记\Vue\Vue全套\imgs\文件结构.png)

**index.html**

```html
<div class="root"></div>
<script src="../vue.js"></script>
<script src="./main.js"></script>
```

**main.js**

```js
import App from "main.js";
new Vue({
  el: "#root",
  templates: `<App></App>`,
  components: {
    App,
  },
});
```

**app.vue**

```vue
<template>
  <div id="root">
    <School></School>
    <Student></Student>
  </div>
</template>
<script>
// 引入
import School from "./School.vue";
import Student from "./Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>
```

**报错：在摸板中不能使用 import**

```tex
Uncaught SyntaxError: Cannot use import statement outside a module
```

**需要使用脚手架**

# Vue 脚手架编程基础

## 脚手架

### 安装与创建

1. **选择淘宝镜像**

   ```bash
   npm config set registry https://registry.npm.taobao.org
   ```

2. **全局安装**

   ```bash
   npm install -g @vue/cli
   ```

3. **切换到你要创建项目的目录**，然后使用命令创建项目

   ```bash
   vue create xxxx
   ```

4. **启动项目**

   ```bash
   npm run serve
   ```

```bash
App running at:
  - Local:   http://localhost:8080/          // 自己访问
  - Network: http://172.17.90.111:8080/      // 别人访问

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

### 分析内容

#### 一般

1. **.gitignore** ：git 的忽略文件，这里配置的都是不想接受 git 管理的

2. **babel.config.js**：babel

3. 只要符合 npm 的，都有。配置一些东西

   - package.json

     ```json
     {
         ...
     	"scripts": {
             "serve": "vue-cli-service serve", // 运行
             "build": "vue-cli-service build", // 构建，最后执行，把东西变成浏览器认识的东西
             "lint": "vue-cli-service lint"    // 语法检查（一般几乎不用）
           },
         ...
     }
     ```

   - package-lock.json

#### 重要

##### src

**assets 文件夹**

通常在它下面放静态资源

**main.js**

```js
// 引入vue
import Vue from "vue";
// 引入App组件，它是所有组件的父组件
import App from "./App.vue";

Vue.config.productionTip = false; // 关闭vue的生产提示

new Vue({
  // 创建Vue实例对象 ---- vm
  render: (h) => h(App),
}).$mount("#app"); // === el: 'app',
```

**App.vue**

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
...;
</style>
```

##### components

放 App.vue 下面的 vue 文件

##### public

**index.html**

```html
<!-- 配置页签图标  这里的 <%= BASE_URL %>  ==> public （路径问题） -->
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<!-- 配置网页标题       ==> package-lock.json中的name -->
<title><%= htmlWebpackPlugin.options.title %></title>
   </head>
   <body>
   <!-- 当浏览器不支持js时，noscript中的元素就会被渲染 -->
   <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
   </noscript>
```

**部分错误:**

```node
Component name "Student" should always be multi-word  vue/multi-word-component-names
```

根据提示信息可知是组件名出了问题

报错信息翻译过来大概就是： 组件名 " Student " 应该总是使用 多个单词拼接横线组成的

1. **`vue.js`** 和 **`vue.runtime.xxx.js`**的区别:
   - **`vue.js`**是**完整版的 Vue**，包含：**核心功能+模板解析器。**
   - **`vue.runtime.xxx.js`**是**运行版的 Vue**，只包：**核心功能，没有模板解析器**
2. 因为**`vue.runtime,xxx.js`**没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容

```js
render(createElement) {
	return createElement('h1', '你好啊')
}
// 精简
render: createElement=> createElement('h1', '你好啊')
// 再精简
render: q=> q('h1', '你好啊')
```

### ref 属性

1. 被用来给元素 或 子组件注册引用信息（id 的替代者)
2. 应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
   - 打标识：<h1 ref="xxx">.....</h1>或 <School ref="xxx"></School>
   - 获取： **`this.$refs.xxx`**

```vue
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School";
export default {
  name: "App",
  data() {
    return { msg: "欢迎学习vue" };
  },
  components: { School },
  methods: {
    showDOM() {
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.sch); // School组件的实例对象（vc）
    },
  },
};
</script>
```

### props 配置

**功能：让组件接收外部传过来的数据**

传递数据：<Demo name="xxx" sex="xxx" :age="xxx"/>

接收数据：

1. 第一种方式（只接收）∶

   ```js
   props: ["name", "sex", "age"]; // 顺序不做要求
   ```

2. 第二种方式（限制类型）：

   ```js
   props: {
       name :String,
       sex :String,
       age: Number
   }
   ```

3. 第三种方式（限制类型、限制必要性、指定默认值）:

   ```js
   props: {
       name: {
           type: String,    // 类型是字符型
           required: true   // name是必须的
       },
       age: {
           type: Number,
           default: 99      // 默认值
       }
   }
   ```

备注：props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据

```vue
data() { return { msg: '我是文达的学生！', myAge: this.age // ☆ } }, methods: {
addAge() { this.myAge++ } },
```

### mixin 混入

功能：可以把多个组件共用的配置提取成一个混入对象使用方式

#### 定义混合

**mixin.js**

```js
export const hunhe = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log("你好啊！");
  },
};
export const hunhe2 = {
  data() {
    return {
      x: 999,
      y: 100,
    };
  },
};
```

#### 使用混合

```vue
<script>
// 引入混合
import {hunhe, hunhe2} from '../mixin'
export default {
    ...
    mixins: [hunhe, hunhe2],
    mounted() {
        console.log('你好啊！！！')
    }
}
</script>
```

#### 全局混合

**mian.js**

```js
...
import {hunhe, hunhe2} from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)
...
```

#### 注意

1. 当 data 中数据重复时，**以原本数据为主**
2. 当生命钩子重复时，来者不拒，只不过 mixin 混合先输出

## 插件

功能：用于增强 Vue
本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据

### 创建插件

**plugins.js**

```js
export default {
    install(Vue, x, y, z) {
        console.log(x y z)
        // 全局过滤器
        Vue.filter('mySlice', function (value) { return value.slice(0, 4) })

        // 定义全局指令
        Vue.directive('fbind', {...})

        // 定义混入
        Vue.mixin({data() { return {x: 999, y: 100} }})

        // 给 Vue 原型上添加一个方法 (原型上的方法 vm 和 vc 都能用)
        Vue.prototype.hello = ()=> {alert('你好啊')}
    }

}
```

### 使用插件

**main.js**

```js
// 引入插件
import plugins from "./plugins";

// 应用（使用）插件
Vue.use(plugins, 1, 2, 3);
```

## Scoped 样式

**作用：让样式在局部生效，防止冲突**

### 查看版本的命令

```
npm view 要查看的 versions
```

### 安装支持 less 的

```vue
npm i less-loader@7 // 最好是版本6、7及以上
```

#### 目的

**Student.vue**

```vue
<style lang="less" scoped>
....;
</style>
```

## 案例

### 添加功能实现

#### nanoid

nanoid ：随机生成一个 id

**下载：**

```
npm i nanoid
```

**使用：**

```vue
<script>
// 引入 （分别暴露）
   import {nanoid} from 'nanoid'

   export default {
       name: '...',
       methods: {
       	add(e) {
   			// 使用：直接调用即可
               const todoObj = {id: nanoid(), ...}
           }
   	}
   }
</script>
```

### 总结

#### 组件化编码流程

1. 拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。
2. 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
   - 一个组件在用：放在组件自身即可
   - 一些组件在用：放在他们共同的父组件上(<span style="color:red">状态提升</span>)
3. 实现交互：从绑定事件开始

#### props 适用于

1. **父组件 ==> 子组件通信**

   ```vue
   <!-- App.vue -->
   <template>
     ...
     <WdList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo" />
   </template>

   <!-- WdList.vue -->
   <template>
     <!-- 向WdItem.vue传数据 -->
     <WdItem
       v-for="todoObj in todos"
       :key="todoObj.id"
       :todo="todoObj"
       :checkTodo="checkTodo"
       :delTodo="delTodo"
     />
   </template>
   <script>
   export default {
          name: '...',
      	// 接收App.vue传输的数据
          props: ['todos', 'checkTodo', 'delTodo'],
          ...
      }
   </script>

   <!-- WdItem.vue -->
   <script>
   export default {
          name: '...',
      	// 接收WdList.vue传输的数据
          props: ['todo', 'checkTodo', 'delTodo'],
          ...
      }
   </script>
   ```

2. **子组件 ==> 父组件通信（要求父先给子一个函数)**

   ```vue
   <!-- App.vue -->
   <script>
   export default {
          ...
          methods: {
              // 添加一个todo
              addTodo(todoObj) { this.todos.unshift(todoObj) },
              // 勾选或取消勾选一个todo
              checkTodo(id) {
                  this.todos.forEach((todo)=> {
                      if(todo.id === id) todo.done = !todo.done })
              },
              // 删除
              delTodo(id) { this.todos = this.todos.filter(todo => todo.id !== id)},
              // 全选或全不选
              checkAllTodo(done) { this.todos.forEach(todo => todo.done = done) },
              // 清除已选
              clearTodo() {this.todos = this.todos.filter(todo=>!todo.done)}
          }
      }
   </script>
   ```

#### 注意点

1. 使用 v-model 时要切记：**v-model 绑定的值不能是 props 传过来的值，因为 props 是不可以修改的!**
2. props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐这样做

## webStorage

1. 存储内容大小一般支持**5MB**左右 (不同浏览器可能还不一样)
2. 浏览器端通过 **`Window.sessionStorage`** 和 **`Window.localStorage`** 属性来实现本地存储机制。
3. 相关 API： (xxxxx === (session | local) )
   1. **`xxxxxStorage . setItem('key', 'value');`**
      - 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
   2. **`xxxxxStorage.getItem('person');`**
      - 该方法接受一个键名作为参数，返回键名对应的值
   3. **`xxxxxStorage .removeItem('key');`**
      - 该方法接受一个键名作为参数，并把该键名从存储中删除
   4. **`xxxxxStorage.clear()`**
      - 该方法会清空存储中的所有数据
4. 备注：
   1. SessionStorage 存储的内容会随着**浏览器窗口关闭而消失**
   2. LocalStorage 存储的内容，需要**手动清除才会消失**
   3. **`xxxxxStorage.getItem(xxx)`** 如果 xxx 对应的 value 获取不到，那么 getltem 的返回值是 null
   4. **`JSON.parse(null)`** 的结果依然是 null

## 组件自定义事件

### 绑定

**`App.vue`**

```vue
<template>
  <div class="app">
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据（一，使用@或v-on) -->
    <Student @wenda="getStudentName" @demo="getName" />
    <!-- ... : 子给父传递数据（二，使用ref, 灵活) -->
    <!-- <Student ref="student" /> -->
  </div>
</template>
<script>
import ...
export default {
    name: 'App',
    ....
    components: {...},
    methods: {
        getStudentName(name, ...params) {
            console.log('App收到了学生名:' + name, params)
        }
    },
    // 生命周期钩子（挂起） (ref)
    // mounted() {
    //     setTimeout(() => {
    //         this.$refs.student.$on('wenda', this.getStudentName)
    //         this.$refs.student.$once('wenda', this.getStudentName) // 只执行一次
    //     }, 3000)
    // }
}
</script>
```

**`Student.vue`**

```vue
<template>
  <div class="student">
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <button @click="getName">点我提示学生名</button>
  </div>
</template>
<script>
export default {
  name: "Student-xinxi",
  data() {
    return { name: "张三", age: 18, x: 666 };
  },
  methods: {
    getName() {
      // 触发Student组件实例身上的atguigu事件
      this.$emit("wenda", this.name, 666, 888, 900);
    },
  },
};
</script>
```

子组件可以使用 **`$emit`** 触发父组件的自定义事件

### 解绑与销毁

**`Student.vue`**

```vue
<template>
  <div class="student">
    ...
    <button @click="unbind">点我解绑</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>
<script>
export default {
    ...
    methods: {
        getName() {...},
        unbind() {
            // this.$off('wenda')        // 解绑一个自定义事件
            // this.$off(['wenda', ...])    // 解绑多个自定义事件
            this.$off()            // 解绑所有自定义事件
        },
        death() {
            // 销毁当前Student组件的实例
            this.$destroy()
            // 销毁后所有Student实例的自定义事件全都不奏效
        }
    }
}
</script>
```

### 总结

1. 一种组件间通信的方式，适用于：<span style="color: red; font-weight: bold">子组件===>父组件</span>

2. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（**事件的回调在 A 中**)

3. 绑定自定义事件:

   - 第一种方式，在父组件中：**`<Demo @wenda="test"/>`** 或 **`<Demo v-on:wenda="test"/>`**

   - 第二种方式，在父组件中：

     ```vue
     <Demo ref="demo"/>
     .......
     </script>
     	export defalut {
     	...
             methods: {
                 test() {...}
             },
             mounted(){
                 this.$refs.xxx.$on('wenda', this.test)
             }
     		// 或者
             // mounted(){
             //    this.$refs.xxx.$on('wenda', () => {...})
             // }
         }
     </script>
     ```

   - 若想让自定义事件只能触发一次，可以使用 once 修饰符，或$once 方法。

4. 触发自定义事件： **`this.$emit('wenda',数据)`**

5. 解绑自定义事件： **`this.$off('wenda')`**

6. 组件上也可以绑定原生 DOM 事件，需要使用 **`native`** 修饰符

7. 注意：通过 **`this.$refs.xx.$son('wenda', 回调)`** 绑定自定义事件时，**回调要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题**

## 全局事件总线

1. 一种组件间通信的方式，适用于**任意组件间**通信

2. 安装全局事件总线：

   ```js
   // main.js
   new Vue({
     render: (h) => h(App),
     beforeCreate() {
       Vue.prototype.$bus = this; // 安装全局事件总线，$bus就是当前应用的vm
     },
   }).$mount("#app"); // === el: app,
   ```

3. 使用事件总线：

   - 接收数据：A 组件想接收数据，则在 A 组件中给**$bus**绑定自定义事件，事件的回调留在 A 组件自身

     ```vue
     <!-- School.vue -->
     <script>
     export default {
         ... ,
         mounted() {
             // 绑定事件总线
             this.$bus.$on('hello', (data) => {
                 console.log('我是School组件，收到数据：' + data);
             })
         },
         // 在销毁前解绑全局事件总线
         beforeDestroy() {
             this.$bus.$off('hello')
         }
     }
     </script>

     <!-- Student.vue -->
     <!-- 绑定点击事件 -->
     <script>
        ...
     methods: {
            getName() {
                this.$bus.$emit('hello', this.name)
            }
        },
        ...
     </script>
     ```

   - 提供数据：**`this.$bus.$emit('xxxx', 数据)`**

4. 最好在 **beforeDestroy** 钩子中，用$off 去解绑 当前组件所用到的事件

## 消息订阅与发布

### 第三方库

**pubsub.js ： publish + subscribe**

#### 安装

```bash
npm i pubsub-js
```

#### 引入与使用

```vue
<!-- School.vue -->
<script>
import pubsub from 'pubsub-js'
export default {
    ... ,
    methods: {
    	//          消息名 ， 数据
    	getStuName(msgName, data){...}
	},
    mounted() {
       	// 消息订阅
    	this.pubId = pubsub.subscribe('hello', this.getStuName)
    },
    beforeDestroy() {
        // 取消订阅
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<!-- Student.vue -->
<!-- 绑定点击事件 -->
<script>
   import pubsub from 'pubsub-js'
   ...
methods: {
       getName() {
           // 消息发布
           pubsub.publish('hello', 666)
       }
   },
   ...
</script>
```

## $nextTick

- 语法：**`this.$nextTick ( 回调函数 )`**
- 作用：在下一次 DOM 更新结束后执行其指定的回调。
- 什么时候用：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行。

## 过渡与动画

作用：在插入、更新或移除 DOM 元素时，在合适的时候给元素**添加样式类名**

### 写法

1. 准备好样式

   - 元素进入的样式
     - **`v-enter`**：进入的起点
     - **`v-enter-active`**：进入过程中
     - **`v-enter-to`**：进入的终点
   - 元素离开的样式
     - **`v-leave`**：离开的起点
     - **`v-leave-active`**：离开过程中
     - **`v-leave-to`**：离开的终点

2. 使用 **`<transition>`** 包裹要过度的元素，并配置**name**属性

   ```vue
   <transition name="hello">
   	<h1 v-show="isShow">你好啊!</h1>
   </transition>
   ```

3. 备注：若有多个元素需要过度，则需要使用：**`<transition-group>`**，且每个元素都要指定 **key**值。

### 第三方样式库

#### animate.css

**安装**

```bash
npm install animate.css
```

**引入**

```js
import "animate.css";
```

#### 补

**`<translation>`** 中的一些属性

```vue
name="animate__animated animate__bounce" // 必写 enter-active-class=""
leave-active-class=""
```

# Vue 中的 ajax

## 发送 Ajax 请求的库

1. xhr
2. jQuery
3. **axios**
4. fetch
5. **vue-resource**

## 配置代理

### 方式一

#### 安装 axios

```bash
npm i axios
```

封装了 Ajax 请求

#### 解决跨域问题

1. CORS 浏览器向服务器发送请求，服务器响应了，并携带了特殊的响应头
2. jsonp ( script src 引入外部资源不受同源限制)，但只能解决 get 请求

#### 代理服务器

1. nginx

2. vue-cli

   **vue.config.js**

```js
module.exports = {
  // 开启代理服务器 (缺点：1.（8080本身就有的东西）  2.不能配置多个代理（8080只能向5000发请求）)
  devServer: {
    proxy: "http://localhost:5000", // 要发送的地方（不需要写全）
  },
};
```

**App.vue**

```vue
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudent() {
      axios.get("http://localhost:8080/students").then(
        (response) => console.log("请求成功了", response.data),
        (error) => console.log("请求失败了", error.message)
      );
    },
  },
};
</script>
```

- 优点：配置简单，请求资源时直接发给前端(8080)即可。
- 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
- 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源)

### 方式二

**vue.config.js**

```js
module.exports = defineConfig({

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''},    // 将路径中匹配到的的/api变成空串
        ws: true,         // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的host值 (8080,r若为false，则5000)
      },
      ....   // 代理服务器
    }
  }
})
```

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

## 案例

**List.vue**

```vue
<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      class="card"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!--展示欢迎词-->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!--展示加载中-->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!--展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "WdList",
  data() {
    return { info: { isFirst: true, isLoading: false, errMsg: "", users: [] } };
  },
  mounted() {
    this.$bus.$on("updateList", (dataObj) => {
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>
```

**Search.vue**

```vue
<script>
 ...
 SearchUser() {
     // 搜索按钮按下时
     axios.$emit('updateList',{isFirst:false,isLoading:true,errMsg:'',users:[]})
     // 发送请求(axios)
     this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
response => {
             // 请求成功后更新List的数据
             this.$bus.$emit('updateList',{isLoading: false, errMsg:'', users:  response.data.items})
         }, error => {
             this.$bus.$emit('updateList', {isLoading: false, errMsg: error.message, users: []})
         }
     )
 }
 ...
</script>
```

## vue-resource

### 安装

```bash
npm i vue-resource
```

### 引入与使用

与上一节案例连起来，**（已经停止维护了）**

**main.js**

```js
// 引入vue-resource插件
import vueResource from "vue-resource";
// 使用插件
Vue.use(vueResource);
```

**Search.vue**

```js
// 发送请求(vue-resource)
this.$http.get(`url`).then();
```

## 插槽

插槽（slot）是 vue 为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽

### 默认插槽

#### 声明

**Category.vue：**

```vue
<!--定义一个插槽（挖个坑，等着组件的使用者进行填充）-->
<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
```

### 具名插槽

#### 声明

**Category.vue：**

```vue
<!--定义一个插槽（挖个坑，等着组件的使用者进行填充）-->
<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
```

#### 使用

**APP.vue:**

```vue
<img slot="center" src="a.jpg" alt="">
<a slot="footer" href="">更多美食</a>

<!-- <template v-slot:footer>     -->
<template #footer>
	<div class="foot">
    	<a href="">经典</a>
   		<a href="">热门</a>
   		<a href="">推荐</a>
	</div>
	<h4>欢迎前来观影</h4>
</template>
```

只能在**`<template> </template>`** 标签中写 **v-slot: 或 #**

### 作用域插槽

**数据在定义插槽的地方**，用这个插槽的结构是由使用者决定的

```vue
...
<slot :games="games" msg="hello">我是一些默认内容</slot>
...
<script>
export default {
  name: "WdCategory",
  data() {
    return { games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"] };
  },
};
</script>
```

**App.vue**

```vue
<Category title="游戏">
    <!-- 可以传多个参数 -->
    <!-- <template #default="{games, msg}"> -->
    <template v-slot:default="{games, msg}">
        <ul>
            <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
		{{msg}}          <!-- hello -->
   </template>
</Category>

<Category title="游戏">
    <!-- 据说不用 scope 了 -->
    <template scope="wd">
        <h4 v-for="(item, index) in wd.games" :key="index">{{ item }}</h4>
    </template>
</Category>
```

# Vuex

## 理解 vuex

### 是什么

1. 概念：专门在 Vue 中实现**集中式状态（数据）**管理的一个**Vue 插件**，对 vue 应用中多个组件的共享状态进行集中式的管理（读 / 写），也是一种组件间通信的方式，且适用于任意组件间通信

2. Github 地址：https://github.com/vuejs/vuex

### 什么时候用

1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态

## Vuex 原理

### 原理图

<img src="C:\Users\86137\Desktop\前端课程学习笔记\Vue\Vue全套\imgs\vuex.png" alt="vuex" style="zoom: 33%;" />

**`dispatch 和 commit === { ... , jia: function }`**

**`mutation === {..., jia: function() {state, 2} }` **

**`state === {todos: [], sum: 2}`**

​ 动作类型 值

**vc** ==> **`dispatch('jia', 2)`** ==> **`commit('jia', 2)`** ==> **`state.sun += 2`**

**你可能感觉 actions 有些多余，但对于值不确定的时候，需要 actions 从 backend API 中拿**

### 搭建环境

#### 需解决的问题

1. 安装
2. 使用 Vuex 插件
3. store
4. VC 身上有 store

#### 安装

在 2022.2.7，vue3 成为了默认版本，同时 vuex 也更新到了 4，也就是说执行 **`npm i vue`** 和 **`npm i vuex`** 安装的直接就是 vue3 和 vuex4 版本，而 vuex4 只能在 vue3 中使用，强行使用，则会出错：

<img src="C:\Users\86137\Desktop\前端课程学习笔记\Vue\Vue全套\imgs\安装vuex4在vue2的错误.png" alt="安装vuex4在vue2的错误" style="zoom: 67%;" />

```bash
npm i vuex@3
```

#### 使用

两种方法：

1. 在 src 文件夹 ==> vuex 文件夹 ==> store.js 文件 （官网推荐）
2. 在 src 文件夹 ==> store 文件夹 ==> index.js 文件

**index.js：**

```js
// 加该文件用于创建Vuex中最为核心的store

// 引入Vuex
import Vuex from "vuex";
// 准备actions—用于响应组件中的动作
const actions = {};
// 准备mutations—用于操作数据(state)
const mutations = {};
// 准备state—用于存储数据
const state = {};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
```

**main.js:**

```js
...
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 引入store
import store from './store'

new Vue({ ..., store, ... }).$mount('#app');
```

**如上运行会报错，报错信息：**

**必须在 创建 store 之前 调用 `Vue.use(Vuex)`**

```
[vuex] must call Vue.use(Vuex) before creating a store instance.
```

调整代码并不管用，因为 main.js 执行时会先扫描一遍，将所有的 import 语句按照原有的顺序汇总到最上方

**解决：**

**index.js 中添加如下代码**

```js
// 引入Vue
import Vue from "vue";
// 使用插件
Vue.use(Vuex);
```

## 求和案例

**Count.vue:**

```vue
<template>
  <div class="category">
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button class="btn" @click="increment">+</button>
    <button class="btn" @click="decrement">-</button>
    <button class="btn" @click="incrementOdd">是奇数就加</button>
    <button class="btn" @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "WdCount",
  data() {
    return { n: 1 };
  },
  methods: {
    // 若写在actives中没有意义，则在这里使用commit直接... vc ==>  mutations
    increment() {
      this.$store.commit("Add", this.n);
    },
    decrement() {
      this.$store.commit("Reduce", this.n);
    },

    incrementOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
};
</script>
```

**index.js:**

```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 准备actions—用于响应组件中的动作
const actions = {
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("Add", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("Add", value);
    }, 1000);
  },
};
// 准备mutations—用于操作数据(state)
const mutations = {
  Add(state, value) {
    state.sum += value;
  },
  Reduce(state, value) {
    state.sum -= value;
  },
};
// 准备state—用于存储数据
const state = { sum: 0 };

// 创建并暴露store
export default new Vuex.Store({ actions, mutations, state });
```

## Getters 配置项

当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工

```js
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};
```

注：当逻辑复杂且想要复用时，推荐用 getters

## 四个 map 方法

**四个 map 方法都有两种写法：对象 、 数组**

### mapState 和 mapGetters

用于帮助我们映射 **`state / getters`** 中的数据为**计算属性**

```js
import { mapState, mapGetters } from 'vuex'
...
computed: {
	// 借助mapState生成计算属性，从state中读取数据。（对象写法)
	...mapState({ sum: 'sum', school: 'school', subject: 'subject'}),
	// 当键值是一样的时候，可简写为： (数组写法)
	...mapState(['sum','school', 'subject']),

	// 借助mapGetters生成计算属性，从getter中读取数据。（对象写法)
	...mapGetters({bigSum: 'bigSum'}),
	// 当键值是一样的时候，可简写为： (数组写法)
	...mapGetters(['bigSum']),
}
...
```

### mapMutations 和 mapActions

用于帮助我生成与**`mutations / actions `**对话的**方法**，即：包含 **`$store.dispatch/commit(xxx)`**

```js
import { mapMutations, mapActions } from 'vuex'
...
methods: {
    ... mapMutations({increment: 'ADD', decrement: 'RED'}), // 也有两种写法
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'})
},
...
```

## 多组件共享数据

**person.vue**

```vue
<template>
  <div>
    <h4 style="color: red">Count组件求和为：{{ sum }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPer()">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import ...
export default {
    ...
    computed: {
        ...
        ...mapState(['sum']),
    },
    methods: { addPer() {...} }
}
</script>
```

## vuex 模块化

**index.js**

```js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { nanoid } from 'nanoid'

Vue.use(Vuex)

// 求和相关的配置
const countOptions = {
    namespaced: true,       // 开启命名空间
    actions: {...},
    mutations: {...},
    state: {...},
    getters: {...}
}

// 人员相关的配置
const personOptions = {
    namespaced: true,
    actions: {...},
    mutations: {...},
    state: { personList: [ {id: '001', name: '张三',} ]},
    getters: {...}
}

// 创建并暴露store
export default new Vuex.Store({
    modules: { countAbout: countOptions, personAbout: personOptions,}
})
```

**Person.vue**

```vue
<template>
  <div>
    <h1>人员列表</h1>
    <h4 style="color: red">Count组件求和为：{{ sum }}</h4>
    <h4>列表中最后一个人的名字是：{{ lastPersonName }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPer">添加</button>
    <button @click="addPerServer">随机添加一个人</button>
    ...
  </div>
</template>
<script>
import { nanoid } from 'nanoid'
export default {
    ...
    computed: {
        // 对比  state.personList  <==>  state.personAbout.personList
        personList() { return this.$store.state.personAbout.personList },
        sum() { return this.$store.state.countAbout.sum },

        lastPersonName() {        // es6写法  a.b === a['b']  (a.b路径中不能有/)
            return this.$store.getters['personAbout/lastPersonName']
        }
    },
    methods: {
        addPer(e) {    // 添加
            const p = { id: nanoid(), name: this.name }
            // 注意此处写法 对比 .commit('ADD_PER',p) (personAbout是自己定义的模块名)
            this.$store.commit('personAbout/ADD_PER', p)
            this.name = ''
        }, addPerServer() {...}
    },
}
</script>
```

# vue-router

## 路由简介

1. 路由就是一组 **key - value** 的对应关系
2. 多个路由，需要经过**路由器**的管理

## 路由的理解

### 什么是路由

1. —个路由就是一组**映射关系** **(key - value)**
2. key 为路径, value 可能是 **function** 或 **componente**

### 路由分类

#### 前端路由

- 理解：value 是**component**，用于**展示页面内容**
- 工作过程：当浏览器的**路径改变**时，**对应的组件就会显示**

#### 后端路由

1. 理解：value 是**function**，用于**处理客户端提交的请求**
2. 工作过程：服务器**接收到一个请求**时，根据请求路径找到**匹配的函数来处理请求**，返回响应数据

## vue-router

vue 的一个**插件库**，专门用来**实现 SPA 应用**

### 对 SPA 应用的理解

1. 单页 Web 应用 （**single page web application，SPA**）
2. 整个应用只有**一个完整的页面**
3. 点击页面中的导航链接**不会刷新**页面，只会做页面的**局部更新**
4. **数据需要通过 Ajax 请求获取**

### 安装

```bash
npm i vue-router
```

应用插件。。。

### 使用

**编写 router 配置项**

**router/index.js**

```js
// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入路由组件
import About from "../components/About";
import Home from "../components/Home";

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    { path: "/home", component: Home },
  ],
});
```

**main.js**

```js
...
// 引入vueRouter插件库
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
...
// 使用插件
Vue.use(VueRouter)

new Vue({
    render: h=> h(App),
    router: router,         //
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app');
```

**App.vue**

```vue
...
<!-- Vue中借助router-link标签实现路由的切换 -->
<router-link active-class="active" to="/about">About</router-link>
<router-link active-class="active" to="/home">Home</router-link>
...
<!-- 指定组件的呈现位置 -->
<router-view></router-view>
...
```

**实现切换：**

```vue
<router-link active-class="active" to="/about">About</router-link>
```

- **`<router-link>`**：vue-router 提供的特殊标签，可以借助 vue-router 库转换成 **`<a>`**
- **`active-class="active"`**：该元素被激活时的样式； **active** ： 样式的类名
- **`to="/about"`**：类似 a 标签的 href，只不过路径写法有区别， **/必须加**

**指定组件的呈现位置**

```vue
<!-- 指定组件的呈现位置 -->
<router-view></router-view>
```

### 注意点

1. 路由组件通常存放在 **`pages`** 文件夹，一般组件通常存放在 **`components`** 文件夹。
2. 通过切换，“隐藏"了的路由组件，**默认是被销毁掉的**，需要的时候再去挂载
3. 每个组件都有自己的 **`$route`** 属性，里面存储着**自己的路由信息**（每个组件的都不一样）
4. **整个应用只有一个 router**，可以通过组件的 **`$router`** 属性获取到

## 嵌套路由

配置路由规则，使用**`children`**配置项：

```js
{
    path: '/home',
    component: Home,
    // 嵌套路由
    children: [      // 通过children配置子级路由
        {
            path: 'news',    // 二级路由千万不要写  '/'
            component: News,
        },
        {
            path: 'message',
            component: Message,
        }
    ]
}
```

**跳转（要写完整路径) ∶**

```vue
<router-link ... to="/home/news">News</router-link>
```

**注意路径的写法！！！（记得带着他爹）**

## 路由传参

### query 传参

**传递参数**

```vue
<template>
  <ul>
    <li v-for="m in messageList" :key="m.id">
      <!-- 跳转路由并携带query参数，to的字符串写法 -->
      <router-link :to="`/home/message/detail?id=${m.id}&name=${m.name}`">{{
        m.name
      }}</router-link>

      <!-- 跳转路由并携带query参数，to的对象写法 -->
      <router-link
        :to="{
          path: '/home/message/detail',
          query: { id: m.id, name: m.name },
        }"
      >
        {{ m.name }}
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", name: "消息001" },
        { id: "002", name: "消息002" },
        { id: "003", name: "消息003" },
      ],
    };
  },
};
</script>
```

**接收参数**

```vue
{{ $route.query.id }} {{ $route.query.name }}
```

### 命名参数

作用：可以简化路由的跳转

```js
{
    path: 'message',
    component: Message,
    children: [{
        name: 'xaingqing',      // 命名
        path: 'detail',
        component: Detail,
    }]
}
```

```vue
<router-link
  :to="{
    name: 'xaingqing', // path ==> name    命名替换路径
    query: {
      id: m.id,
      name: m.name,
    },
  }"
>
	{{m.name}}
</router-link>
```

### params 传参

**配置路由，声明接收 params 参数**

```js
{
    path: 'message',
    component: Message,
    children: [{
        name: 'xaingqing',
        path: 'detail/:id/:name',  // 使用占位符接收params参数
        component: Detail,
    }]
}
```

**传递参数**

```vue
<!-- 跳转路由并携带params参数，to的字符串写法 -->
<router-link
  :to="`/home/message/detail/${m.id}/${m.name}`"
>{{m.name}}</router-link>

<!-- 跳转路由并携带params参数，to的对象写法 -->
<router-link
  :to="{
    name: 'xaingqing', // 此处不能写 path，只能用name
    params: {
      id: m.id,
      name: m.name,
    },
  }"
>
	{{m.name}}
</router-link>
```

特别注意：路由携带 params 参数，若用**to 的对象写法**，**则不能使用 path 配置项，必须使用 name 配置！**

**接收参数**

```vue
{{ $route.params.id }} {{ $route.params.id }}
```

## props 配置

作用：让路由组件更方便的收到参数

**index.js 传递参数**

```js
{
    path: 'message',
    component: Message,
    children: [{
        name: 'xiangqing',
       path: 'detail',
        component: Detail,
        // 第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
        // porps: {a: 1, b: 'hello'},

 		// ... 布尔值为真，会把该路由组件收到的所有params参数，以props的形式传给Detail组件
        // porps: true,

        // props的第三种写法，值为函数
        props($route) {
            return {id: $route.query.id, name: $route.query.name}
        }
    }]
}
```

**Detail.vue 接收参数**

```vue
<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ name }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "name"],
};
</script>
```

## `<router-link>`的 replace 属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式

2. 浏览器的历史记录有两种写入方式：分别为 **`push`** 和 **`replace`** ，**push 是追加历史记录**，**replace 是替换当前记录**。**路由跳转时候默认为 push**

3. 如何开启 replace 模式：

   ```vue
   <router-link replace ...>News</router-link>
   ```

## 编程式路由导航

作用：不借助**`<router-link>`**实现路由跳转，让路由跳转更加灵活\

方法都是 **`$router`** 上的

```js
// $router的两个API
this.$router.push({
    name: " xiangqing" ,
    params: {
    	id: xxx,
        name: ×XX
    }
})
this.$router.replace({
    name: "xiangqing" ,
    params: {
    	id: xxx,
        title: xxx
    }
})

this.$router.forward()		// 前进
this.$router.back()		    // 后退
this.$router.go(2)          // 正为前进，负为后退，数值为步数
```

## 缓存路由组件

作用：让不展示的路由组件保持挂载，不被销毁

```vue
<keep-alive include="News">
	<router-view></router-view>
</keep-alive>

<!-- 多个缓存路由写法 -->
<keep-alive :include="['News', 'Message']">
	<router-view></router-view>
</keep-alive>
```

这里 **`include="News"`** 中的 **News 为组件名**，是路由组件中定义的名字 **`export default{name:''.}`**

## 两个新的生命周期钩子

作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。具体名字:

1. **`activated`** 路由组件被**激活**时触发

2. **`deactivated`** 路由组件**失活**时触发

   **News.vue**

```js
activated() {
	console.log('组件被激活了')
	this.timer = setInterval(() =>{
		this.opacity -= 0.1
		if (this.opacity <= 0) this.opacity = 1
	}, 100)
},
// 路由组件失活时
deactivated() {
	console.log('组件失活了')
	clearInterval(this.timer)
}
```

## 路由守卫

### 全局路由守卫

#### 全局前置

**调用情况**

- **初始化的时候被调用**
- **每次路由切换之前被调用**

$route 中的 meta{}（路由元信息：程序员自定义的信息）

<img src="C:\Users\86137\Desktop\前端课程学习笔记\Vue\Vue全套\imgs\QQ截图20221110164546.png" style="zoom: 67%;" />

可在每个需要**权限校验**的对象中加入**`meta`**配置项

```js
....
{
    name:'xiaoxi',            //  1
    path: 'news',
    component: News,
    // meta: {isAuth: true}   // 需要校验  2
},
    ...
// 全局前置路由守卫 ———— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next)=> {
    if(to.name === 'xiaoxi' || to.name === 'msg') {     // 1
	// if(to.meta.isAuth) {                             // 2
    if(localStorage.getItem('school') === 'wenda') {
            next()
    }else {
        next()
    }
})
```

#### 全局后置

**调用情况**

- **初始化的时候被调用**
- **每次路由切换之后被调用**

```js
// 全局后置路由守卫 ———— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  // console.log('后置路由守卫', to, from)
  document.title = to.meta.title || "系统";
});
```

### 独享路由守卫

```js
{
    name:'xiaoxi',
    path: 'news',
    component: News,
    meta: {isAuth: true, title: '消息'},
    // 独享路由守卫
	beforeEnter: (to, from, next)=> {
	     // console.log('独享路由守卫', to, from)
	    if(to.meta.isAuth) {
	        if(localStorage.getItem('school') === 'wenda') {
	            next()
	        }else{
	            alert('学校名不对，无权限查看!');
	        }
	    }else {
	       next()
	    }
	}
},
```

### 组件路由守卫

```js
// 通过路由规则，进入该组件时被调用
beforeRouteEnter(to, from, next) {
	console.log('About--beforeRouteEnter', to, from)
	if(to.meta.isAuth) {
		if(localStorage.getItem('school') === 'wenda') {
			next()
		}else{
			alert('学校名不对，无权限查看!');
		}
	}else {
		next()
	}
},
// 通过路由规则，离开该组件时被调用
beforeRouteLeave(to, from, next) {
	console.log('About--beforeRouteLeave', to, from)
	next()
},
```

**`document.title = to.meta.title`**可以在后置路由守卫中进行操作

## history 模式与 hash 模式

**打包：**

```bash
npm run build
```

专门用于在 nodejs 中解决 **history** 404 的问题

npm 中的 **connect-history-api-fallback (服务器里的中间件)**

```bash
npm i connect-history-api-fallback
```

1. 对于一个 url 来说，什么是 hash 值?——#及其后面的内容就是 hash 值。
2. hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器。
3. hash 模式：
   1. 地址中永远带着#号，不美观。
   2. 若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会被标记为不合法
   3. 兼容性较好
4. history 模式：
   1. 地址干净，美观
   2. 兼容性和 hash 模式相比略差
   3. 应用部署上线时**需要后端人员支持**，解决刷新页面服务端 404 的问题。

**在 history 工作模式下：**

在路由中加入

```js
const router = new VueRouter({
    mode: 'history',            // 在history工作模式下
    routes: [...]
}
```

**第一步：打包**

```bash
npm run build
```

**第二步：搭建服务器**

新建文件夹，在终端打开，并执行以下两条代码：

```bash
npm init

npm i express
```

创建**index.js**文件：

```js
const express = require("express");
var history = require("connect-history-api-fallback");

const app = express();
// 在引入资源之前使用
app.use(history());
app.use(express.static(__dirname + "/static"));

app.get("/person", (req, res) => {
  res.send({
    name: "John",
    age: 18,
  });
});

app.listen(5005, (err) => {
  if (!err) console.log("服务器启动成功了！");
});
```

专门用于在 nodejs 中解决 **history** 404 的问题

npm 中的 **connect-history-api-fallback (服务器里的中间件)**

```bash
npm i connect-history-api-fallback
```

**第三步：运行服务器**

```node
node server
```

# Vue UI 组件库

## 常用组件库

1. **移动端 常用 U 组件库**
   - Vant https://youzan.github.io/vant
   - Cube Ul https://didi.github.io/cube-uie
   - Mint Ul http://mint-ui.github.io
2. **PC 端常用 UI 组件库**
   - Element Ul https://element.eleme.cn
   - IView Ul https://www.iviewui.com

## Element Ul

### 基本使用

**全部引入**

```js
...
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 应用ElementUI
Vue.use(ElementUI);


// 创建vm
new Vue({...}).$mount('#app');

```

### 按需引入

**首先，安装 babel-plugin-component：**

```bash
npm install babel-plugin-component -D
```

**-D ：开发依赖**

**然后，将 .babelrc (babel.config.js) 修改为：**

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

**接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：**

```javascript
...
import { Button, Select } from 'element-ui';


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
