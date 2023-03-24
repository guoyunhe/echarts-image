#!/usr/bin/env node

import { Command } from 'commander';
import { outputChartImage } from '..';

const program = new Command('echarts-image');

program
  .argument('<input>', 'ECharts option JSON file path')
  .argument('<output>', 'Output image file path, support .jpg, .png, webp')
  .option('--width <value>', 'Width of chart. 400 by default', parseInt)
  .option('--height <value>', 'Height of chart. 300 by default', parseInt)
  .option('--dpr <value>', 'Device pixel rate of PNG. 1 by default', parseInt)
  .action(outputChartImage);

program.helpOption('-h, --help', 'Show full help');

program.version(PACKAGE_VERSION, '-v, --version', 'Show version number');

program.parse();
