import captureWebsite from 'capture-website';
import { readFile } from 'fs/promises';

export interface Options {
  width?: number;
  height?: number;
  dpr?: number;
}

export async function outputChartImage(
  input: string | object,
  output: string,
  { width = 400, height = 300, dpr = 1 }: Options
) {
  let optionJson;
  if (typeof input === 'string') {
    optionJson = await readFile(input, 'utf-8');
  } else {
    optionJson = JSON.stringify(input);
  }
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
  </head>
  <body>
    <div id="main" style="width: ${width}px;height:${height}px;"></div>
    <script type="text/javascript">
      var myChart = echarts.init(document.getElementById('main'), null, { renderer: 'svg' });
      var option = ${optionJson};
      option.animation = false;
      myChart.setOption(option);
    </script>
  </body>
</html>
`;

  await captureWebsite.file(html, output, {
    inputType: 'html',
    scaleFactor: dpr,
    element: '#main',
    overwrite: true,
  });
}
