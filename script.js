const qrText = document.getElementById("input");
const sizes = document.getElementById("sizes");
const genrateBtn = document.getElementById("genrate-btn");
const dowenloadBtn = document.getElementById("dowenload-btn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    IsEmptyInput();
});

genrateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    IsEmptyInput();
});

dowenloadBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");
    if (img !== null) {
        let imgATTR = img.getAttribute('src');
        dowenloadBtn.setAttribute("href", imgATTR);
    } else {
        let canvas = document.querySelector("canvas");
        if (canvas) {
            dowenloadBtn.setAttribute("href", canvas.toDataURL());
        }
    }
});

function IsEmptyInput() {
    qrText.value.length > 0 ? genrateQRcode() : alert("Enter text or URL");
}

function genrateQRcode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}
// This script generates a QR code based on user input and allows downloading the generated QR code image.