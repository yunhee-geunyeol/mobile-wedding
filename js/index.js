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

  // 카카오맵 하위 구성요소(테이블) 제거
  hideKakaoElements();

  // dom ready 이후에도 계속 감시 (0.1초 간격)
  let count = 0;

  const interval = setInterval(function() {
    hideKakaoElements();
    count++;
    // 10초 이후에 interval 이벤트 STOP
    if (count > 10) clearInterval(interval);
  }, 100);

  // 계좌이체 신랑측/신부측 토글 활성화
  $('.groom-account').show();
  $('.bride-account').hide();

  $('#toggleSide').on('change', function() {
    if ($(this).is(':checked')) {
      $('.groom-account').fadeOut(200, function() {
        $('.bride-account').fadeIn(200);
      });
    } else {
      $('.bride-account').fadeOut(200, function() {
        $('.groom-account').fadeIn(200);
      });
    }
  });
});

// 텍스트 복사 기능
function fn_copyText(account) {
  navigator.clipboard.writeText(account).then(() => {
  });
}



