const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//tab-border class ekleyip diğer seçilmeyenlerden kaldırma ve sekme seçme işlevi
function selectItem(e) {
  removeTabBorder();
  removeShow();
  //tab-border sınıf ekleme
  this.classList.add("tab-border");

  //  seçili sekme
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //  seçili sekmeye show class ekleme
  tabContentItem.classList.add("show");
}

//sekmelerden show sınıf kaldırma
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//tab-border sınıf kaldırma
function removeTabBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

//sekme seçme işlevini izleme
tabItems.forEach((item) => item.addEventListener("click", selectItem));
