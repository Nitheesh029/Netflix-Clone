const movieData = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
  {
    number: 7,
  },
  {
    number: 8,
  },
  {
    number: 9,
  },
];
const generateCards = (datas) => {
  let html = "";
  datas.forEach((data) => {
    html += `
          <div class="w-[112px] md:w-[200px] relative mt-10 cursor-pointer hover:-translate-y-10 duration-300 shadow-slate-900 shadow-xl">
              <img src="/images/movie${data.number}.jpg" alt="" class="rounded-xl object-cover w-full">
              <div class="absolute text-black bottom-0 font-bold text-6xl md:text-8xl custom-outline">${data.number}</div>
          </div>
      `;
  });
  document.querySelector(".movie-card-container").innerHTML = html;
};

generateCards(movieData);

const scrollElement = document.querySelector(".movie-card-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
