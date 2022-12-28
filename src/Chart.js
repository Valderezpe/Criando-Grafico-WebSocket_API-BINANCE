import ApexChart from 'react-apexcharts';

export default function Chart(props){
    const options={
        xaxis: {
            type: 'datetime'
        },
        yaxios: {
            tooltip: {
                enabled: true
            }
        }
    }

    const series =[{
        data: props.data
      }]

    return(
        <ApexChart
        options={options} 
        series={series}
        type="candlestick"
        width={720}
        height={480}
        />
    )
      
}