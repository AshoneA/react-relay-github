export default function PRBar(data) {
  const xAxisData = data.map(({ name }) => name);
  return {
    title: {
      text: 'the repo pull request number',
      subtext: 'last 50'
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
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
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
