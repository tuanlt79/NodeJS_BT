let count = 1;
const doanSo = () => {
  const guessNumber = Math.round(Math.random() * 100);
  console.log(guessNumber);
  const inputNhap = document.getElementById("inputNhap").value;
  let txtKQ = "";
  let txtKQ1 = "Số nhập vào lớn hơn số cần tìm";
  let txtKQ2 = "Số nhập vào nhỏ hơn số cần tìm";

  if (guessNumber < inputNhap) {
    txtKQ = txtKQ1;
    console.log(txtKQ);
  } else if (guessNumber > inputNhap) {
    txtKQ = txtKQ2;
    console.log(txtKQ);
  } else {
    txtKQ = "Chúc mừng bạn đã đoán đúng số";
    console.log(txtKQ);
  }
  document.getElementById("txtKQ").innerHTML = txtKQ;
  if (count >= 0) {
    let divTag = document.createElement("div");
    divTag.id = "historyCount";
    divTag.innerHTML = `Lần ${count}: ${inputNhap}`;
    document.body.appendChild(divTag);
  }
  count++;
};

document.getElementById("btnDoan").onclick = (e) => {
  e.preventDefault();
  doanSo();
};
