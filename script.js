document.addEventListener("DOMContentLoaded", function () {
  const ctx = $("#myChart");
  const body = $("body");
  const btnCont = $(".dropdown");
  const chartBtn = $(".dropbtn");
  const chartTypes = $(".dropdown-content");
  const chartTitle = $("h1");
  let chartType;
  let myChart;

  chartBtn.text("Select Chart Type");
  chartTitle.addClass("container");
  btnCont.addClass("container");
  // chartBtn.addClass("center")

  // ====== INITIAL CHART FUNCTION ========
  function createChart(typeOfChart) {
    // Clear existing chart if it exists
    if (myChart) {
      myChart.destroy();
    }

    // Intitial Chart Function
    myChart = new Chart(ctx, {
      type: typeOfChart,
      data: {
        labels: ["Linking Libraries", "Debugging", "Centering Button"],
        datasets: [
          {
            label: "% of Time Available",
            data: [1, 1, 98],
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
  chartBtn.on("click", function () {
    chartTypes.toggleClass("show");
    console.log("Chart Button has been clicked");
  });

  // ChartType selection
  chartTypes.find("a").on("click", function () {
    const selectedType = $(this).text();
    console.log("chartType has been selected");
    chartTypes.toggleClass("show");
    chartBtn.text(selectedType);
    chartType = selectedType;
    createChart(chartType);
  });

  // createChart(chartType);
});
