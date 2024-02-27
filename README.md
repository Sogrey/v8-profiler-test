# v8-profiler-test
使用v8-profiler测试nodejs程序性能



``` bash
npm install
mode app.js
```

安装  v8-profiler-node8

``` bash
npm i v8-profiler-node8
```

CPU性能分析
在要测试的代码块前后进行profiling,然后将profiler保存至本地文件

``` js
const profiler = require('v8-profiler-node8')
const start = () => {
  profiler.startProfiling('report')

 // ADD TEST CODE

  profiler.stopProfiling('report').export()
      .pipe(fs.createWriteStream('report.json'))
}

start()
```


https://www.speedscope.app/ 

使用speedscope在线工具分析刚生成的json文件