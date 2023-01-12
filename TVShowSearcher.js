const form = document.querySelector("#tvShowSearcher");
const showsNames = document.querySelector("#showsNames");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  deleteImgs();
  const searchName = form.elements.showsNames.value;
  const config = { params: { q: searchName } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  showImgs(res.data);
  form.elements.showsNames.value = "";
});

const showImgs = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const newImg = document.createElement("img");
      newImg.src = result.show.image.medium;
      document.body.append(newImg);
    }
  }
};
const deleteImgs = function () {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
};
