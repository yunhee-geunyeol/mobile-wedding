let currentIndex = 0;
const $images = $(".galleryImage img");
const $modal = $("#galleryModal");
const $modalImg = $(".modal-image");

// 이미지 클릭 시 모달 열기
$images.on("click", function() {
  currentIndex = $images.index(this);
  $modal.css("display", "flex");
  $modalImg.attr("src", $(this).attr("src"));
});

// 닫기 버튼
$(".close").on("click", function() {
  $modal.hide();
});

// 이전 버튼
$(".prev").on("click", function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + $images.length) % $images.length;
  $modalImg.attr("src", $images.eq(currentIndex).attr("src"));
});

// 다음 버튼
$(".next").on("click", function(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % $images.length;
  $modalImg.attr("src", $images.eq(currentIndex).attr("src"));
});

// 모달 바깥 클릭 시 닫기
$modal.on("click", function(e) {
  if ($(e.target).is($modal)) {
    $modal.hide();
  }
});

function fn_copyAccount(account) {
  navigator.clipboard.writeText(account).then(() => {
    alert("계좌번호가 복사되었습니다: " + account);
  });
}