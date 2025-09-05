// ===== CHÚ Ý MÃ HÓA TRƯỚC KHI UPLOAD ===========
// Hàm tạo IV cố định (phải giống với GAS)
function taoIV() {
    var rawIV = "0123456789abcdef"; // 16-byte IV cố định
    return CryptoJS.enc.Utf8.parse(rawIV);
}

// Hàm mã hóa AES-CBC (Client) giống GAS
function maHoaAES_CBC(duLieu, khoa) {
    var khoaMaHoa = CryptoJS.enc.Utf8.parse(khoa);
    var iv = taoIV(); // Lấy IV cố định

    var maHoa = CryptoJS.AES.encrypt(duLieu, khoaMaHoa, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // Mã hóa IV thành Base64
    var ivBase64 = CryptoJS.enc.Base64.stringify(iv);
    var ciphertextBase64 = maHoa.ciphertext.toString(CryptoJS.enc.Base64);

    return ivBase64 + ":" + ciphertextBase64; // Trả về IV + CipherText
}

// Hàm giải mã AES-CBC (tương ứng với GAS)
function giaiMaAES_CBC(duLieuMaHoa, khoa) {
	var iv = taoIV(); // Lấy IV cố định
    var khoaMaHoa = CryptoJS.enc.Utf8.parse(khoa);    

    var ciphertext = CryptoJS.enc.Base64.parse(duLieuMaHoa);

    var bytes = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, khoaMaHoa, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    var duLieuGoc = bytes.toString(CryptoJS.enc.Utf8);

    return duLieuGoc;
}
//======================HMAC SHA-256=============================
// 🛠 Dùng Hàm tạo HMAC SHA-256 trên client
function taoHMAC_SHA256(data, key) {
    var hash = CryptoJS.HmacSHA256(data, key);
    return CryptoJS.enc.Base64.stringify(hash);
}
//======================HMAC SHA-256=============================
Date.prototype.yyyymmdd = function() {
  var yyyy = this.getFullYear();
  var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
  var dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
  return "".concat(yyyy).concat(mm).concat(dd);
};

Date.prototype.yyyymmddhhmm = function() {
  var yyyymmdd = this.yyyymmdd();
  var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
  var min = (this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes())*60;
  return "".concat(yyyymmdd).concat(hh).concat(min);
};

Date.prototype.yyyymmddhhmmss = function() {
  var yyyymmddhhmm = this.yyyymmddhhmm();
  var ss = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
  return "".concat(yyyymmddhhmm)+ss;
};

var d = new Date();
//document.getElementById("ngay").value = d.yyyymmddhhmmss().toString();