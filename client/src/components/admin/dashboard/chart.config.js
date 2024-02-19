export const StudentsSeries = [
  {
    name: "Boys",
    data: [183, 124, 115, 85, 143, 143, 96, 183, 124, 115],
  },
  {
    name: "Girls",
    data: [95, 84, 72, 44, 108, 108, 47, 95, 84, 72],
  },
];

export const StudentsOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
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
    categories: [
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
    ],
  },
  yaxis: {
    title: {
      text: "No. of Students",
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