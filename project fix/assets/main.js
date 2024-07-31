let currentQuestion = 0;
const maxQuestions = 10;
let answeredQuestions = 0;
let score = 0; // Tambahkan variabel skor
let questions = [
  {
    question: "Kumpulan dari matahari, planet, dan benda langit lainnya disebut?",
    options: ["Galaksi", "Bima Sakti", "Tata Surya", "Sebuah asteroid"],
    answer: 2,
  },
  {
    question: "Apa nama planet yang paling dekat dengan matahari?",
    options: ["Mars", "Venus", "Bumi", "Merkurius"],
    answer: 3,
  },
  {
    question:
      "Planet manakah yang terbesar di tata surya?",
    options: [
      "Venus",
      "Jupiter",
      "Saturnus",
      "Mars",
    ],
    answer: 1,
  },
  {
    question: "Berapa jumlah planet di tata surya kita?",
    options: [
      "6",
      "7",
      "8",
      "9",
    ],
    answer: 3,
  },
  {
    question:
      "Planet manakah yang memiliki cincin yang terkenal?",
    options: ["Mars", "Jupiter", "Uranus", "Saturnus"],
    answer: 3,
  },
  {
    question: "Apakah nama satelit alami Bumi?",
    options: ["Bulan", "Phobos", "Ganymede", "Titan"],
    answer: 0,
  },
  {
    question:
      "Planet manakah yang disebut sebagai 'planet merah'?",
    options: [
      "Bumi",
      "Venus",
      "Mars",
      "Jupiter",
    ],
    answer: 2,
  },
  {
    question: "Berapa jumlah bulan yang ada di Mars?",
    options: [
      "0",
      "1",
      "2",
      "3",
    ],
    answer: 2,
  },
  {
    question: "Garis edar yang dimiliki setiap planet disebut?",
    options: ["Satelit", "Planet", "Orbit", "Meteorid"],
    answer: 2,
  },
  {
    question:
      "Apa nama sabuk asteroid utama yang terletak di antara orbit Mars dan Jupiter?",
    options: [
      "Sabuk Kuiper",
      "Sabuk Van Allen",
      "Sabuk Asteroid",
      "Sabuk Oort",
    ],
    answer: 2,
  },
  {
    question: "Berapa jumlah satelit alami yang dimiliki oleh Bumi?",
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
    answer: 0,
  },
  {
    question: "Apa nama planet yang memiliki orbit terjauh di tata surya?",
    options: ["Mars", "Jupiter", "Venus", "Merkurius"],
    answer: 1,
  },
  {
    question:
      "Planet manakah yang memiliki cuaca yang paling ekstrem?",
    options: [
      "Venus",
      "Jupiter",
      "Saturnus",
      "Uranus",
    ],
    answer: 1,
  },
  {
    question: "Planet manakah yang memiliki warna biru khas karena atmosfernya?",
    options: [
      "Mars",
      "Venus",
      "Uranus",
      "Jupiter",
    ],
    answer: 2,
  },
  {
    question: "Manakah dari planet berikut yang tidak memiliki satelit alami?",
    options: ["Venus", "Mars", "Uranus", "Neptunus"],
    answer: 0,
  },
  {
    question: "Di planet manakah terdapat gunung tertinggi di tata surya, yang dikenal sebagai Olympus Mons?",
    options: [
      "Jupiter",
      "Uranus",
      "Neptunus",
      "Mars",
    ],
    answer: 3,
  },
  {
    question: "Berapa lama Bumi memerlukan waktu untuk mengelilingi Matahari satu kali?",
    options: [
      "100 hari",
      "365 hari",
      "500 hari",
      "730 hari",
    ],
    answer: 1,
  },
  {
    question: "Pusat Tata Surya adalah?",
    options: ["Planet", "Bulan", "Matahari", "Meteor"],
    answer: 2,
  },
  {
    question: "Apa nama planet yang paling kecil di tata surya?",
    options: [
      "Mars",
      "Merkurius",
      "Pluto",
      "Uranus",
    ],
    answer: 1,
  },
  {
    question: "Apa yang menyebabkan planet-planet di tata surya bergerak mengelilingi Matahari?",
    options: [
      "Gravitasi",
      "Magnetisme",
      "Suhu",
      "Angin matahari",
    ],
    answer: 0,
  },
  // ... tambahkan pertanyaan lainnya
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const currentQuestionData = questions[currentQuestion];

  questionDiv.innerHTML = currentQuestionData.question;
  optionsDiv.innerHTML = "";

  currentQuestionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline-secondary mt-2";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsDiv.appendChild(button);
  });
}

document.getElementById("prevButton").addEventListener("click", function () {
  prevQuestion();
});

document.getElementById("nextButton").addEventListener("click", function () {
  nextQuestion();
});

function selectOption(selectedIndex) {
  answeredQuestions++;
  const currentQuestionData = questions[currentQuestion];
  if (selectedIndex === currentQuestionData.answer) {
    score++; // Tambahkan skor jika jawaban benar
  }

  if (answeredQuestions >= maxQuestions) {
    document.getElementById("finishButton").style.display = "block";
    document.getElementById("pertanyaan").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("prevButton").style.display = "none";

    // Masukkan skor ke dalam input
    document.getElementById("skor").value = score;
  } else {
    nextQuestion();
  }
  // Perbarui tampilan skor
  document.getElementById("score").textContent = "Skor: " + score;
}

function prevQuestion() {
  currentQuestion--;
  if (currentQuestion >= 0) {
    loadQuestion();
  } else {
    currentQuestion = 0;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    currentQuestion = 0;
    shuffleArray(questions);
    loadQuestion();
  }
}
shuffleArray(questions);
loadQuestion();
// Fungsi untuk mengirim data ke skrip Google Apps
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then(function (data) {
      // Data terkirim, maka lakukan pengalihan
      location.replace("thanks.html"); // Ganti dengan halaman tujuan Anda
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
