document.addEventListener("DOMContentLoaded", function () {
  const ctx = $("#myChart");
  const body = $("body");
  const chartBtn = $(".dropbtn");
  const chartTypes = $(".dropdown-content");
  let chartType = "bar";

  // ====== INITIAL CHART FUNCTION ========
  function createChart() {
    let newChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Dropdown button event listener
  chartBtn.on("click", function() {
    chartTypes.toggleClass("show");
  })

  


  createChart();
});
