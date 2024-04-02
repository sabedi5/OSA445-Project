// JavaScript code for updating and displaying the chart
const ctx = document.getElementById('progressChart').getContext('2d');

// Initial progress data from Flask server-side
const progressData = {{ progress_data|tojson }};

// Create an array to hold datasets for each exercise type
const datasets = [];

// Loop through each exercise type in the progress data
for (let i = 0; i < progressData.exercises.length; i++) {
    // Create a new dataset for each exercise type
    const dataset = {
        label: progressData.exercises[i],
        data: [],
        backgroundColor: 'rgba(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', 0.2)',
        borderColor: 'rgba(0, 0, 0, 0.8)', // Dark border color
        borderWidth: 3 // Wider border
    };
    datasets.push(dataset);
}

// Create the progress chart
const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: progressData.labels,
        datasets: datasets
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Function to update progress chart
function updateChart(newData) {
    // Loop through each dataset and add the corresponding duration
    for (let i = 0; i < newData.exercises.length; i++) {
        const index = progressData.exercises.indexOf(newData.exercises[i]);
        progressChart.data.datasets[index].data.push(newData.durations[i]);
    }
    progressChart.update();
}
