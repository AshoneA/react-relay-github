export default function PRBar(data) {
  const yAxisData = data.map(({ name }) => name);
  return {
    title: {
      text: 'pull request',
      subtext: '数据来自网络'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    dataZoom: [{
      type: "slider",
      orient: "vertical"
    },
    {
      type: "inside",
      orient: "vertical"
    }
    ],
    legend: {
      data: ['star number']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: yAxisData,
    },
    series: [
      {
        name: 'star number',
        type: 'bar',
        data,
      },
    ]
  }
}
