var svg = dimple.newSvg("#chartContainer", 800, 600);
d3.csv("lifespan_mfull.csv", function (data) {
    var myChart = new dimple.chart(svg, data);
    var x = myChart.addMeasureAxis("x", "Women 2030");
    x.overrideMin = 69;
    myChart.setBounds(100, 30, 650, 550);

    var y = myChart.addCategoryAxis("y", "Country");

    var m2010 = myChart.addSeries("Men 2010", dimple.plot.bar);
    m2010.stacked = false;

    var m2030 = myChart.addSeries("Men 2030", dimple.plot.bar);
    m2030.stacked = false;

    var w2010 = myChart.addSeries("Women 2010", dimple.plot.bar);
    w2010.stacked = false;

    var w2030 = myChart.addSeries("Women 2030", dimple.plot.bar);
    w2030.stacked = false;

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();
});
