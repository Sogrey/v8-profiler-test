const profiler = require('v8-profiler-node8')
const fs = require('fs')

profiler.startProfiling('report')

var test = () => {
    var a = [];
    var b = "Changes default CPU profiler sampling interval to the specified number of microseconds. Default interval is 1000us. This method must be called when there are no profiles being recorded. If called without arguments it resets interval to default.".split(" ");

    for (let i = 0; i < 10000; i++) {
        a = a.concat(b); // 6.23s
        // a.push(...b); // 1ms
    }
}

test();

profiler.stopProfiling('report').export()
    .pipe(fs.createWriteStream('report.json'))
