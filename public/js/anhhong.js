// DOM
const popUpMessDaddy = document.querySelector(".popup__message__daddy");
const popUpMessEmail = document.querySelector(".popup__message__email");
const popUpMessBtn = document.querySelector(".popup__message__btn");

const mainInputReq = document.querySelector(".main__input__req");
const mainInputReqBtn = document.querySelector(".main__input__req__btn");

// Danh sách các câu hỏi
const questions = document.querySelectorAll(
  ".main__req__1, .main__req__2, .main__req__3, .main__req__4, .main__req__5"
);

// Biến để lưu câu hỏi hoặc nội dung nhập vào
let selectedQuestion = "";

// Khi người dùng nhấn vào câu hỏi có sẵn
questions.forEach((question) => {
  question.addEventListener("click", () => {
    selectedQuestion = question.innerText.trim();
    popUpMessDaddy.style.display = "flex";
  });
});

// Khi người dùng nhập câu hỏi vào input và nhấn nút
mainInputReqBtn.addEventListener("click", () => {
  selectedQuestion = mainInputReq.value.trim(); // Lưu giá trị nhập vào
  popUpMessDaddy.style.display = "flex";
});

// Khi người dùng nhấn nút gửi
popUpMessBtn.addEventListener("click", () => {
  if (!selectedQuestion) {
    alert("Vui lòng chọn hoặc nhập câu hỏi trước khi gửi!");
    return;
  }

  let data = {
    req: selectedQuestion,
    infor: popUpMessEmail.value.trim(),
  };

  //   Gửi mail về backend
  fetch("/api/send-email", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({data})
  })

  .then((res) => res.json())
  .then((data) => console.log("Gửi dữ liệu thành công: " + data))
  .catch((error) => console.log("Gửi dữ liệu bị lỗi: " + error));

 

  // Ẩn popup và reset dữ liệu
  // DOM popup__message

  const messSucsses = document.querySelector(".popup__message");
  messSucsses.innerHTML =
    "<h4> Chúng tôi sẽ sớm trả lời câu hỏi của bạn !</h4>";
  setTimeout(() => {
   location.reload();
    popUpMessDaddy.style.display = "none";
  }, 1500);
  selectedQuestion = "";
  mainInputReq.value = ""; // Xóa nội dung input sau khi gửi
  popUpMessEmail.value = ""; // Xóa email sau khi gửi
});

// đoạn code fix lỗi hiển thị layout
let lastScrollTop = 0;
const elements = document.querySelectorAll(
  ".main__req__3, .main__req__4, .main__req__5"
);

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Nếu cuộn xuống → Ẩn đi
    elements.forEach((el) => (el.style.opacity = "1"));
  } else {
    // Nếu cuộn lên → Hiện lại
    elements.forEach((el) => (el.style.opacity = "0"));
  }

  lastScrollTop = scrollTop;
});


// Cập nhật js, để co dãn thanh nhập dữ liệu textarea
const textarea = document.querySelector(".main__input__req");

textarea.addEventListener("input", function() {
    this.style.height = "auto"; // Đặt lại chiều cao về auto trước
    this.style.height = this.scrollHeight + "px"; // Cập nhật chiều cao theo nội dung
});