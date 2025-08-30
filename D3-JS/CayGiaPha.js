//---------
// app init
//---------
const wordWrap = (str, max, br = '\n') => str.replace(
  new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), `$1${br}`
);
app.config.debug = false;
var app = new app({
  el: "#app",

  data: {
    productsData: [

      {
        id: 1,
        product: "THÔNG TIN",
		
        image: "D3-JS/AboutMe.png",

		
		click: "Xem chi tiết",

        description: "Chào Bạn đến với trang Website Tạo cây Gia Phả !",
        details: "- Website Gia Phả là nền tảng trực tuyến giúp lưu trữ, tổ chức, và chia sẻ thông tin về lịch sử dòng họ, kết nối các thành viên qua nhiều thế hệ để tìm về cội nguồn và lan tỏa giá trị truyền thống gia đình một cách hiệu quả và bền vững. \n - Trang Website này cung cấp các tính năng: như tạo cây Gia Phả, nhập thông tin cá nhân, tải lên hình ảnh, và tìm kiếm dễ dàng, đồng thời đảm bảo tính bảo mật và dễ sử dụng trên nhiều thiết bị. Tạo cầu nối giữa các thế hệ, giúp con cháu trong dòng họ tìm hiểu về tổ tiên, cội nguồn và duy trì sự liên kết gia tộc."

      },
      {
        id: 2,
        product: "TẠO CÂY GIA PHẢ",
		
        image: "D3-JS/MyFamily.png",

		
		click: "Xem chi tiết",

        description: "Chào Bạn đến với trang Website Tạo cây Gia Phả !",
        details: "- Website Gia Phả là nền tảng trực tuyến giúp lưu trữ, tổ chức, và chia sẻ thông tin về lịch sử dòng họ, kết nối các thành viên qua nhiều thế hệ để tìm về cội nguồn và lan tỏa giá trị truyền thống gia đình một cách hiệu quả và bền vững. \n - Trang Website này cung cấp các tính năng: như tạo cây Gia Phả, nhập thông tin cá nhân, tải lên hình ảnh, và tìm kiếm dễ dàng, đồng thời đảm bảo tính bảo mật và dễ sử dụng trên nhiều thiết bị. Tạo cầu nối giữa các thế hệ, giúp con cháu trong dòng họ tìm hiểu về tổ tiên, cội nguồn và duy trì sự liên kết gia tộc."

      },
      {
        id: 3,
        product: "HƯỚNG DẪN TẠO CÂY GIA PHẢ",
		
        image: "D3-JS/MyFamily.png",		

		click: "Xem chi tiết",
        description: "Đài Viễn thông Đông Hà Thuộc Trung Tâm Hạ Tầng Miền Trung Khu Vực III. Địa Chỉ: 18 Trần Hưng Đạo, TP Đông Hà, Tỉnh Quảng Trị",
        details: "Quản lý Cáp Quang - Đài Viễn thông Đông Hà."
      }	  
    ],

    ship: 10000,
    checkoutBool: false,
    cart: [],
    cartSubTotal: 0,
    	
    cartTotal: 0
  },
  

  events: {
    "checkoutRequest": function() {
      app.$broadcast("checkoutRequest");
    }
  }
});