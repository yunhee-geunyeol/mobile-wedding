let currentIndex = 0;
const $images = $(".galleryImage img");
const $modal = $("#galleryModal");
const $modalImg = $(".modal-image");

// 화면크기 체크
windowSizeChk();

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

// 화면크기 체크
function windowSizeChk() {
  var windowWidth = $( window ).width();

  if (windowWidth < 720) {
    new daum.roughmap.Lander({
      "timestamp" : "1759568169754",
      "key" : "a93grwterh7",
      "mapWidth" : "380",
      "mapHeight" : "190"
    }).render();
  } else {
    new daum.roughmap.Lander({
      "timestamp" : "1759568169754",
      "key" : "a93grwterh7",
      "mapWidth" : "640",
      "mapHeight" : "360"
    }).render();
  }

  $('.wrap_controllers').css("display", "none");
  $('.cont').css("display", "none");
}


$(document).ready(function() {
  const hideKakaoElements = function() {
    $('.cont').hide();
  };

  // 최초 실행
  hideKakaoElements();

  // 이후에도 계속 감시 (최대 5초 동안)
  let count = 0;

  const interval = setInterval(function() {
    hideKakaoElements();
    count++;

    if (count > 10) clearInterval(interval);
  }, 100);
});





function fn_copyAccount(account) {
  navigator.clipboard.writeText(account).then(() => {
  });
}



