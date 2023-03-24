# echarts-image

![Chart](chart.png)

Generate chart images using command line or Node.js API. No need to create a website!

Note: you must have internet access when using this tool, because it loads JS from CDN.

## Install

```bash
npm i echarts-image
```

## CLI

```bash
echarts-image option.json chart.png --width 400 --height 300 --dpr 2
```

## API

```js
import { outputChartImage } from 'echarts-image';

// Check examples from echarts website https://echarts.apache.org/examples/
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

outputChartImage(option, 'output.png', { width: 400, height: 300, dpr: 2 });
```

## Options

### width

Width of chart in pixel. Default `400`.

### height

Height of chart in pixel. Default `300`.

### dpr

Device pixel rate. Default `1`.
