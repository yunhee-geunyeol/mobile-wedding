$(document).ready(function() {
  console.log("jQuery : DOM is ready!");
});

function copyAccount(account) {
  navigator.clipboard.writeText(account).then(() => {
    alert("계좌번호가 복사되었습니다: " + account);
  });
}