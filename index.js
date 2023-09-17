function getRandomData(arrayLength) {
  const arrOfRandomInts = [];
  for (let i = 0; i < arrayLength; i++) {
    const val3 = generateRandomData();
    arrOfRandomInts.push(val3);
  }

  return arrOfRandomInts;
}

function generateRandomData() {
  const val1 = Math.floor(Math.random() * 500);
  const val2 = Math.floor(Math.random() * 500);

  return val1 + val2;
}

const randomData = getRandomData(15);

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [...randomData],
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
