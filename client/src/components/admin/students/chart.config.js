export const TestMarksSeries = [
  {
    name: "Units 1",
    data: [8, 4, 5, 5, 7],
  },
  {
    name: "Units 2",
    data: [9, 4, 2, 4, 6],
  },
];

export const TestMarksOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#45ea77", "#d7fce3"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["WBP", "PWP", "MAD", "MAN", "ETI"],
  },
  yaxis: {
    title: {
      text: "Test Marks",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    enabled: true,
    y: {
      formatter(val) {
        return val;
      },
    },
  },
};

export const AttendanceSeries = [
  {
    name: "PWP",
    data: [8, 4, 5, 5, 7],
  },
  {
    name: "WBP",
    data: [9, 4, 2, 4, 6],
  },
  {
    name: "MAD",
    data: [6, 5, 4, 7, 8],
  },
];

export const AttendanceOptions = {
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  colors: ["#208b3a", "#4ad66d", "#b7efc5"],

  dataLabels: {
    enabled: false,
  },
  stroke: {
    // colors: ["transparent"],
    curve: "smooth",
  },
  xaxis: {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week5"],
  },
  yaxis: {
    title: {
      text: "Attendance",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    enabled: true,
    y: {
      formatter(val) {
        return val;
      },
    },
  },
};

export const StudentOverview = [
  {
      title: "Academic Skills",
      percentage: 64,
      color: "#6C5DD3",
  },
  {
      title: "Physical and Sports",
      percentage: 40,
      color: "#7FBA7A",
  },
  {
      title: "Creative Skills",
      percentage: 50,
      color: "#FFCE73",
  },
  {
      title: "Digital Skills",
      percentage: 80,
      color: "#FFA2C0",
  },
];