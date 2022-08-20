/*
(function () {
  // Var:
  let str = "";

  // Events:
  document.addEventListener("click", function (e) {
    const trgt = e.target;
    if (trgt.classList.contains("btn-clear")) {
      clearDisplay();
    } else if (trgt.classList.contains("btn-eq")) {
      calculate();
    } else if (trgt.classList.contains("btn-del")) {
      deleteLast();
    } else if (trgt.classList.contains("btn-num")) {
      addNumber(trgt);
    }
  });

  // Functions:

  function updateStr() {
    document.querySelector(".display").value = str;
  }

  function addNumber(trgt) {
    str += trgt.textContent;
    updateStr();
  }

  function clearDisplay() {
    str = "";
    updateStr();
  }

  function deleteLast() {
    str = str.slice(0, -1);
    updateStr();
  }

  function calculate() {
    str = eval(str);
    updateStr();
  }
})();
*/