export default function starPie(data) {
  const legendData = data.map(({ name }) => name);
  return {
    title: {
      text: 'starred repositories primary language',
      subtext: 'first 100',
      x: 'center'
    },
    grid: {
      top: '100px'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: legendData,
    },
    series: [
      {
        name: 'language',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}