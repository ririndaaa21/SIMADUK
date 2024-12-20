document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('myChart').getContext('2d');
    const ctx2 = document.getElementById('earning').getContext('2d');

    // Data from PHP
    const migrasiData = totalMigrasi; // PHP data passed to JS
    const aspirasiData = totalAspirasi;
    const beritaData = totalBerita;

    // First chart
    const myChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Migrasi', 'Aspirasi', 'Berita'],
            datasets: [{
                label: 'Total Data',
                data: [migrasiData, aspirasiData, beritaData],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    ' rgb(255, 205, 86)',
                    'rgb(54, 162, 235)',
                ],
                borderColor: 'rgb(12, 12, 12)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    // Second chart (example)
    const earningsChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'Total Migrasi Setiap Tahun',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                ],
                borderColor: 'rgb(12, 12, 12)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
        }
    });
});
