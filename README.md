Colors For Typescript
================================

How to get?
---------

first 

```
npm install colors.ts
```

or

```
git clone https://github.com/xerysherry/colors.ts.git
```

or Download it in here [https://github.com/xerysherry/colors.ts](https://github.com/xerysherry/colors.ts).

If you clone or download, you need build it.

```
npm install
npm run build
npm run test
```

How to install?
-----------

If you use **npm** install, it is installed!

If you clone or download project, Please copy lib/* to your project path, or your favourite.

How to use?
-----------

It's very easy. 

If you use **npm** install, import colors.ts it, like this:

```TypeScript 
import Colors = require('colors.ts');
```

If you clone or download colors.ts, import colors.ts in your source, like this:

```TypeScript 
import Colors = require('./lib/colors');
```

or

```TypeScript 
require('./lib/colors');
```

Next to use it.

```TypeScript 
import Colors = require('colors.ts');

console.log("this is a red string".red);
Colors.colors("red", "this is a red string too!");
```

Theme
-----

You can use a custom theme.

```TypeScript 
Colors.theme({error:"red"})
console.log("this is a error".error);
Colors.theme({error:["bg_red", "underline"]})
console.log("this is a error".error);
```

Theme have 4 useful propertis(verbose, info, debug, error) and 10 custom properties(custom0 ~ custom10).

Gray and 256 colors 
-------------------

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

// range at [0, 25]
console.log("gray".gray(20));
console.log("gray".gray_bg(20));
// range at [0, 255]
console.log("256 colors".color_at_256(194));
console.log("256 colors".color_bg_at_256(194));

```

Web Safe colors
---------------

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

console.log("web safe colors".colors("#336699"));
console.log("web safe colors".colors("b#996633"));
```

Paint
-----

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

let ts = `class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
`;

console.log(ts.paint([
    {key:["let", "new", "alert", "class"], colors:"red"},
    {key:"this", colors:"lightgreen"},
    {key:"return", colors:"green"},
    {key:"document", colors:"green"},
    {key:new RegExp("string|number|function", "g"), colors:["#6600FF", "bold"]},
    {key:new RegExp("\\{|\\}", "g"), colors:"bold"},
    {key:new RegExp("\\(|\\)", "g"), colors:"bold"},
    {key:[/"[^"]*"/g, /'[^']*'/g], colors:["lightyellow", "underline"]},
]))
```

API
---

Colors.colors(color: string | string[], value: string): string

* return colorful value

Colors.enable(value: boolean = true): void
    
* enable/disable colors

Colors.theme(theme: { [key: string]: string | string[] }): void

* set theme

Colors.paint(paint: { key: string | string[] | RegExp | RegExp[], colors: string | string[] }[], value: string): string

* paint

String Extend

```TypeScript 
declare global {
    interface String {
        reset: string;
        bold: string;
        dim: string;
        italic: string;
        underline: string;
        inverse: string;
        hidden: string;
        strikethrough: string;

        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        //gray: string;
        //grey: string;

        bg_black: string;
        bg_red: string;
        bg_green: string;
        bg_yellow: string;
        bg_blue: string;
        bg_magenta: string;
        bg_cyan: string;
        bg_white: string;

        //theme
        verbose: string;
        info: string;
        debug: string;
        error: string;

        custom0: string;
        custom1: string;
        custom2: string;
        custom3: string;
        custom4: string;
        custom5: string;
        custom6: string;
        custom7: string;
        custom8: string;
        custom9: string;

        color_at_256(idx:number):string;
        color_bg_at_256(idx:number):string;
        gray(level:number):string;
        grey(level:number):string;
        gray_bg(level:number):string;
        grey_bg(level:number):string;

        colors(color:string|string[]):string;
        paint(  paint:{
                    key:string|string[]|RegExp|RegExp[], 
                    colors:string|string[]
                }[]):string;

        up(n?:number):string;
        down(n?:number):string;
        right(n?:number):string;
        left(n?:number):string;
        
        next_line(n?:number):string;
        prev_line(n?:number):string;
        column(n:number):string;
        position(x:number, y:number):string;
        save_position(slot:number):string;
        load_position(slot:number):string;
    }
}
```

Sample
------

In /sample/, you will found some sample. It is very easy and clear.

Screenshot
----------

![windows_cmd](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/windows_cmd.png)
![centos_console](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/centos_console.png)

Gray And 256 Colors

![gray_and_256colors](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/gray_and_256colors.png)

Web Safe Colors

![web_safe_colors](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/web_safe_colors.png)

TypeScript Colorful

![ts_paint](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/ts_paint.png)

Enjoy it!

TypeScript 命令行输出颜色库
=========================

如何获得？
--------

首先，可以使用npm安装

```
npm install colors.ts
```

或者git克隆它

```
git clone https://github.com/xerysherry/colors.ts.git
```

或者在[https://github.com/xerysherry/colors.ts](https://github.com/xerysherry/colors.ts)这里下载它

如果你克隆或者下载，那么就需要build，如下

```
npm install
npm run build
npm run test
```

如何安装？
--------

如果使用npm安装，请跳过

拷贝lib到你的工程路径下, 或者任意你喜欢的地方。

如何使用？
--------

如果通过npm安装，你可以如下引用它

```TypeScript 
import Colors = require('colors.ts');
```

如果通过克隆或者下载，可以用如下方式引用：

```TypeScript 
import {Colors} from './lib/colors'；
```

或者

```TypeScript 
require('./lib/colors');
```

接着，就可以使用啦。

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

console.log("this is a red string".red);
Colors.colors("red", "this is a red string too!");
```

主题
----

你可以使用自定义主题

```TypeScript 
Colors.theme({error:"red"})
console.log("this is a error".error);
Colors.theme({error:"bgRed"})
console.log("this is a error".error);
```

主题相关属性包括，verbose, info, debug, error四个常用的，以及custom0~custom9十个自定义位置。

灰度和256色 
----------

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

// range at [0, 25]
console.log("gray".gray(20));
console.log("gray".gray_bg(20));
// range at [0, 255]
console.log("256 colors".color_at_256(194));
console.log("256 colors".color_bg_at_256(194));

```

网页安全色
---------

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

console.log("web safe colors".colors("#336699"));
console.log("web safe colors".colors("b#996633"));
```

着色方案
-------

```TypeScript 
import Colors = require('colors.ts');
Colors.enable();

let ts = `class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
`;

console.log(ts.paint([
    {key:["let", "new", "alert", "class"], colors:"red"},
    {key:"this", colors:"lightgreen"},
    {key:"return", colors:"green"},
    {key:"document", colors:"green"},
    {key:new RegExp("string|number|function", "g"), colors:["#6600FF", "bold"]},
    {key:new RegExp("\\{|\\}", "g"), colors:"bold"},
    {key:new RegExp("\\(|\\)", "g"), colors:"bold"},
    {key:[/"[^"]*"/g, /'[^']*'/g], colors:["lightyellow", "underline"]},
]))
```

API
---

Colors.colors(color: string | string[], value: string): string

* 返回颜色化的value

Colors.enable(value: boolean = true): void
    
* 是否启用颜色

Colors.theme(theme: { [key: string]: string | string[] }): void

* 设置主题

Colors.paint(paint: { key: string | string[] | RegExp | RegExp[], colors: string | string[] }[], value: string): string

* 着色

String扩展的属性与函数

```TypeScript 
declare global {
    interface String {
        reset: string;
        bold: string;
        dim: string;
        italic: string;
        underline: string;
        inverse: string;
        hidden: string;
        strikethrough: string;

        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        //gray: string;
        //grey: string;

        bg_black: string;
        bg_red: string;
        bg_green: string;
        bg_yellow: string;
        bg_blue: string;
        bg_magenta: string;
        bg_cyan: string;
        bg_white: string;

        //theme
        verbose: string;
        info: string;
        debug: string;
        error: string;

        custom0: string;
        custom1: string;
        custom2: string;
        custom3: string;
        custom4: string;
        custom5: string;
        custom6: string;
        custom7: string;
        custom8: string;
        custom9: string;

        color_at_256(idx:number):string;
        color_bg_at_256(idx:number):string;
        gray(level:number):string;
        grey(level:number):string;
        gray_bg(level:number):string;
        grey_bg(level:number):string;

        colors(color:string|string[]):string;
        paint(  paint:{
                    key:string|string[]|RegExp|RegExp[], 
                    colors:string|string[]
                }[]):string;

        up(n?:number):string;
        down(n?:number):string;
        right(n?:number):string;
        left(n?:number):string;
        
        next_line(n?:number):string;
        prev_line(n?:number):string;
        column(n:number):string;
        position(x:number, y:number):string;
        save_position(slot:number):string;
        load_position(slot:number):string;
    }
}
```

例子
----

你可以在/Sample/下找到相关例子，它们都非常简单和清晰。

截图
----
![windows_cmd](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/windows_cmd.png)
![centos_console](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/centos_console.png)

灰度与256色

![gray_and_256colors](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/gray_and_256colors.png)

网页安全色

![web_safe_colors](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/web_safe_colors.png)

TypeScript着色例子

![ts_paint](https://raw.githubusercontent.com/xerysherry/colors.ts/master/screenshot/ts_paint.png)

请使用它，希望你们喜欢！
