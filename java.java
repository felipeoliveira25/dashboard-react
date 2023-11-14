document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);
const dataPreview = document.getElementById('dataPreview');
const dataSeriesSelect = document.getElementById('dataSeries');
const chartTypeSelect = document.getElementById('chartType');
const financialChart = document.getElementById('financialChart').getContext('2d');
let chart;

function handleFileSelect(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            
            displayDataPreview(results.data);

            
            fillDataSeriesSelect(results.meta.fields);
        }
    });
}

function displayDataPreview(data) {
    
}

function fillDataSeriesSelect(fields) {
    
}

function generateChart() {
   
    const selectedSeries = dataSeriesSelect.value;
    const selectedChartType = chartTypeSelect.value;

    if (chart) {
        chart.destroy(); 
    }

    
    chart = new Chart(financialChart, {
        type: selectedChartType,
        data: {
            
        },
        options: {
            
        }
    });
}
