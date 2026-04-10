document.addEventListener("DOMContentLoaded", function () {
  const btnLike = document.getElementById("btn-like");
  const likeCountSpan = document.getElementById("like-count");
  let isLiked = false;

  btnLike.addEventListener("click", function () {
    if (isLiked === true) {
      alert("이미 공감한 글입니다.");
      return;
    }
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
    isLiked = true;
    alert("이 글에 공감하셨습니다.");
  });

  const btnScrap = document.getElementById("btn-scrap");
  const scrapCountSpan = document.getElementById("scrap-count");
  let isScrap = false;

  btnScrap.addEventListener("click", function () {
    let currentScrapCount = parseInt(scrapCountSpan.textContent);

    if (isScrap === false) {
      scrapCountSpan.textContent = currentScrapCount + 1;
      btnScrap.innerHTML = "스크랩 취소";
      isScrap = true;
    } else {
      scrapCountSpan.textContent = currentScrapCount - 1;
      btnScrap.innerHTML =
        '<img src="../img/스크랩.png" alt="스크랩" /> 스크랩';
      isScrap = false;
    }
  });
});

function toggleReplyForm(commentId) {
  const replyArea = document.getElementById(`reply-area-${commentId}`);
  const openedReplyForm = replyArea.querySelector(".reply-input-form");
  if (openedReplyForm) {
    openedReplyForm.remove();
    return;
  }

  const replyFormHTML = `
      <div class="reply-input-wrapper">
        <input type="text" id="replyInput-${commentId}" placeholder="대댓글을 입력하세요." />
        <div class="reply-options">
          <label>
            <input type="checkbox" checked /> 익명
          </label>
          <button class="btn-reply-submit" onclick="submitReply(${commentId})">
            <img src="../img/에타 연필.png" alt="대댓글 등록" />
          </button>
        </div>
      </div>
    `;
  replyArea.insertAdjacentHTML("beforeend", replyFormHTML);
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSubmit = document.querySelector(".btn-submit");
  const mainInput = document.getElementById("mainCommentInput");

  btnSubmit.addEventListener("click", function () {
    const commentValue = mainInput.value;

    if (commentValue.trim() === "") {
      alert("댓글 내용을 입력해주세요!");
    } else {
      alert(commentValue);
      mainInput.value = "";
    }
  });
});
function submitReply(commentId) {
  const replyInput = document.getElementById(`replyInput-${commentId}`);
  const replyValue = replyInput.value;

  if (replyValue.trim() === "") {
    alert("대댓글 내용을 입력해주세요!");
  } else {
    alert("작성한 대댓글: " + replyValue);
    replyInput.value = ""; // 전송 후 입력창 비우기

    // (선택) 대댓글 전송 후 창을 자동으로 닫고 싶다면 아래 주석을 해제하세요.
    // document.getElementById(`reply-area-${commentId}`).innerHTML = "";
  }
}
