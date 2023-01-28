let displayIndex = 0;
$(document).ready(function () {
  updateView();
  let currentIndex = 0;
  $("#previous").click(function () {
    currentIndex -= 3;
    if (currentIndex < 0) {
      currentIndex = projects.length + (currentIndex % projects.length);
    }
    displayIndex = currentIndex;
    updateView();
  });

  $("#next").click(function () {
    currentIndex += 3;
    if (currentIndex >= projects.length) {
      currentIndex = currentIndex % projects.length;
    }
    displayIndex = currentIndex;
    updateView();
  });
});

function updateView() {
  for (let i = 0; i < 3; i++) {
    let project = projects[(displayIndex + i) % projects.length];
    // $(`#id${i + 1}`).html(`<b>${project["id"]}</b>`);
    $(`#name${i + 1}`).html(`<b>${project['name']}</b>`);
    $(`#description${i + 1}`).html(`<br><p>${project['description']}</p>`);
    $(`#thumbnail${i + 1}`).html(`<a href="${project["preview"]}" target="_blank"><img src="static/img/${project['thumbnail']}" height=150px"></a>`);

    $(`#github${i + 1}`).html(`<a href="${project['github']}" target="_blank">GitHub</a>`);
    $(`#preview${i + 1}`).html(`<a href="${project["preview"]}" target="_blank">Preview</a>`);
  }
}
