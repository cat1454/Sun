/**
 * TẬP TIN THỰC HÀNH TỔNG HỢP: JAVASCRIPT HIỆN ĐẠI
 * Cách chạy: node thuc_hanh_js.js
 */

console.log("=========================================");
console.log("PHẦN 1: CÚ PHÁP CƠ BẢN VÀ TÍNH NĂNG ES6+");
console.log("=========================================");

// 1. Phân biệt const, let, Block Scope
const APP_NAME = "Shop Online";
let currentStep = 1;
{
  let insideBlock = "Biến nội bộ";
  console.log("1. Trong khối lệnh:", insideBlock);
}

// 2. Destructuring, Spread và Rest
const originalUser = { id: 101, username: "alex", role: "admin" };
const { username, role } = originalUser;
const clonedUser = { ...originalUser, role: "superadmin" };
console.log(`2. Bóc tách: ${username} [${role}] | Sao chép mới: ${clonedUser.role}`);

// 3. Optional Chaining (?.) & Nullish Coalescing (??)
const config = { sound: 0, theme: null };
const soundValue = config.sound ?? 50; // Giữ nguyên giá trị 0 hợp lệ
const themeValue = config.theme ?? "light";
console.log(`3. Cấu hình: Âm lượng = ${soundValue}, Giao diện = ${themeValue}`);

// 4. Các phương thức mảng (filter, map, reduce)
const products = [
  { name: "Bàn phím cơ", price: 80, active: true },
  { name: "Chuột quang", price: 25, active: false },
  { name: "Lót chuột", price: 15, active: true }
];
const activeItems = products.filter(p => p.active);
const totalCost = activeItems.reduce((sum, p) => sum + p.price, 0);
console.log(`4. Tổng tiền hàng còn hoạt động: $${totalCost}`);

console.log("\n=========================================");
console.log("PHẦN 2: CLOSURE VÀ BẤT ĐỒNG BỘ (EVENT LOOP)");
console.log("=========================================");

// 5. Closure tạo biến Private
function createCounter(start = 0) {
  let count = start;
  return {
    increment() { return ++count; },
    get() { return count; }
  };
}
const counter = createCounter(10);
console.log("5. Closure đếm:", counter.increment(), "| Giá trị trực tiếp:", counter.count); // count là undefined

// 6. Mô phỏng Event Loop
console.log("6.1. Đồng bộ bắt đầu");
setTimeout(() => console.log("6.4. Hẹn giờ setTimeout (Macrotask)"), 0);
Promise.resolve().then(() => console.log("6.3. Lời hứa Promise (Microtask)"));
console.log("6.2. Đồng bộ kết thúc");

console.log("\n=========================================");
console.log("PHẦN 3: BÀI TOÁN THỰC TẾ - RETRY VÀ PIPELINE");
console.log("=========================================");

// Hàm tự động gọi lại khi mạng chập chờn
async function fetchWithRetry(apiFn, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await apiFn();
    } catch (err) {
      console.log(`[Thử lần ${attempt}/${retries}] Thất bại: ${err.message}. Đang thử lại...`);
      if (attempt === retries) throw err;
      await new Promise(res => setTimeout(res, 150 * attempt));
    }
  }
}

// Giả lập gọi API
let attempts = 0;
function mockApiCall() {
  return new Promise((resolve, reject) => {
    attempts++;
    if (attempts < 3) {
      reject(new Error("Mạng chập chờn (503 Service Unavailable)"));
    } else {
      resolve([
        { id: "ORD-1", category: "Electronics", amount: 1200, status: "COMPLETED" },
        { id: "ORD-2", category: "Books", amount: 50, status: "COMPLETED" },
        { id: "ORD-3", category: "Electronics", amount: 300, status: "CANCELLED" }
      ]);
    }
  });
}

// Chạy pipeline xử lý
async function runMiniProject() {
  try {
    const orders = await fetchWithRetry(mockApiCall, 4);
    console.log(`[Thành công] Tải về ${orders.length} đơn hàng.`);

    const completed = orders.filter(o => o.status === "COMPLETED");
    const totalRevenue = completed.reduce((sum, o) => sum + o.amount * 0.9, 0); // Giảm giá 10%
    console.log(`-> Doanh thu thực tế sau chiết khấu: $${totalRevenue.toFixed(2)}`);
  } catch (err) {
    console.error("Lỗi:", err.message);
  }
}

runMiniProject();

