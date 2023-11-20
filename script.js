document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(e) {
    const file = e.target.files[0];

    if (file) {
        if (file.name.endsWith('.csv')) {
            // Se o arquivo for CSV, use PapaParse
            parseCSV(file);
        } else if (file.name.endsWith('.xls') || file.name.endsWith('.xlsx')) {
            // Se o arquivo for Excel, use XLSX
            readExcel(file);
        } else {
            alert('Formato de arquivo não suportado.');
        }
    }
}

function parseCSV(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const csvData = event.target.result;
        displayData(csvData);
        generateChart(parseCSVData(csvData), 'bar');
    };

    reader.readAsText(file);
}

function readExcel(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

        displayData(excelData);
        generateChart(excelData, 'bar');
    };

    reader.readAsArrayBuffer(file);
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior

    const table = document.createElement('table');

    data.forEach(row => {
        const tableRow = document.createElement('tr');

        row.forEach(cell => {
            const tableData = document.createElement('td');
            tableData.textContent = cell;
            tableRow.appendChild(tableData);
        });

        table.appendChild(tableRow);
    });

    outputDiv.appendChild(table);
}

function generateChart(data, chartType) {
    const labels = data[0].slice(1); // A primeira coluna é assumida como rótulos
    const datasets = [];

    for (let i = 1; i < data.length; i++) {
        const seriesData = data[i].slice(1).map(Number); // Converte os valores para números
        const color = getRandomColor();
        datasets.push({
            label: data[i][0], // Assume que a primeira coluna de cada linha é o rótulo da série
            data: seriesData,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1
        });
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    stacked: false // Barras não empilhadas
                },
                y: {
                    stacked: false // Barras não empilhadas
                }
            },
            plugins: {
                legend: {
                    display: false // Não mostrar a legenda padrão
                }
            }
        }
    });

    // Adiciona as datas abaixo de cada barra
    const xAxis = myChart.scales.x;
    datasets.forEach((dataset, i) => {
        const meta = myChart.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
            const label = xAxis.getLabelForValue(labels[index]);
            const labelX = bar.x + bar.width / 2;
            const labelY = bar.y + 10; // Ajuste a posição vertical conforme necessário
            ctx.textAlign = 'center';
            ctx.fillText(label, labelX, labelY);
        });
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function parseCSVData(csvData) {
    const lines = csvData.split('\n');
    const result = [];

    lines.forEach(line => {
        result.push(line.split(','));
    });

    return result;
}
