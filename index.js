const doan = [];
const doanSo = () => {
  const guessNumber = Math.round(Math.random() * 2);
  console.log(guessNumber);
  const inputNhap = document.getElementById("inputNhap").value;
  let txtKQ = "";
  if (guessNumber < inputNhap) {
    console.log("số nhập vào lớn hơn số cần tìm ");
    txtKQ = "Số nhập vào lớn hơn số cần tìm";

    return (document.getElementById("txtKQ").innerHTML = txtKQ);
  } else if (guessNumber > inputNhap) {
    console.log("số nhập vào nhỏ hơn số cần tìm");
    txtKQ = "Số nhập vào nhỏ hơn số cần tìm";
    return (document.getElementById("txtKQ").innerHTML = txtKQ);
  } else {
    console.log("chúc mừng bạn đã đoán đúng số");
    txtKQ = "Chúc mừng bạn đã đoán đúng số";
    return (document.getElementById("txtKQ").innerHTML = txtKQ);
  }
};

document.getElementById("btnDoan").onclick = (e) => {
  e.preventDefault();
  doanSo();
};
