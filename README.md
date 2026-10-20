# KHÓA HỌC TỰ HỌC JAVASCRIPT & TYPESCRIPT (2 NGÀY)

> **Thông tin sinh viên:**
> - Họ và tên: [Điền Họ và tên của bạn]
> - Mã số sinh viên: [Điền MSSV]
> - Thời gian thực hiện: 2 ngày (Hoàn thành ngày 20/10/2026)
> - Tài liệu chi tiết nộp giáo viên: [BAO_CAO_HOC_TAP_JS_TS.md](BAO_CAO_HOC_TAP_JS_TS.md)

---

## 🎯 1. MỤC TIÊU KHÓA HỌC

1. **Cài đặt & Cấu hình:** Biết cách thiết lập môi trường Node.js và cấu hình dự án TypeScript với `tsconfig.json`.
2. **Cú pháp:** Nhận biết và làm chủ toàn bộ cú pháp hiện đại của JavaScript (ES6+) và hệ thống kiểu dữ liệu của TypeScript.
3. **Vận dụng thực tế:** Áp dụng giải quyết các bài toán cụ thể về xử lý dữ liệu, bất đồng bộ và kiến trúc kho lưu trữ an toàn kiểu.
4. **Hiểu điểm đặc trưng:** Phân biệt rõ cơ chế hoạt động cốt lõi của hai ngôn ngữ (Event Loop, Closure của JS; Duck Typing, Type Erasure của TS).

---

## 📚 2. NỘI DUNG CHI TIẾT TỪNG PHẦN HỌC

### PHẦN 1: CÀI ĐẶT VÀ CẤU HÌNH MÔI TRƯỜNG
- **Node.js runtime:** Môi trường thực thi JavaScript độc lập ngoài trình duyệt.
- **Trình biên dịch TypeScript (`tsc`):** Bộ công cụ kiểm tra lỗi lúc viết mã và chuyển đổi TypeScript sang JavaScript thuần.
- **Chi tiết cấu hình `tsconfig.json`:**
  - `"target": "ES2022"`: Chuẩn JavaScript đầu ra.
  - `"module": "CommonJS"`: Chuẩn module tương thích với Node.js.
  - `"strict": true`: Bật kiểm tra lỗi nghiêm ngặt nhất.
  - `"noImplicitAny": true`: Không cho phép biến tự động nhận kiểu `any`.
  - `"strictNullChecks": true`: Kiểm soát chặt chẽ giá trị `null` và `undefined`.

---

### PHẦN 2: JAVASCRIPT CỐT LÕI & TÍNH NĂNG HIỆN ĐẠI (ES6+)
- **1. Biến & Phạm vi (Scope):** Phân biệt `var` (Function scope), `let` và `const` (Block scope); cơ chế Hoisting và vùng chết tạm thời **Temporal Dead Zone (TDZ)**.
- **2. Kiểu dữ liệu & Phép so sánh:**
  - Kiểu nguyên thủy (Primitive: `number`, `string`, `boolean`, `null`, `undefined`) so với kiểu tham chiếu (Reference: `Object`, `Array`).
  - Sự nguy hiểm của ép kiểu ngầm định khi dùng toán tử `==` và lý do luôn phải dùng toán tử nghiêm ngặt `===`.
- **3. Cú pháp hiện đại (ES6+):**
  - **Destructuring:** Bóc tách dữ liệu mảng và đối tượng nhanh chóng.
  - **Spread / Rest (`...`):** Sao chép nông (shallow copy) an toàn và gom tham số hàm.
  - **Optional Chaining (`?.`) & Nullish Coalescing (`??`):** Tránh lỗi sập chương trình khi truy cập thuộc tính `null/undefined`; phân biệt chính xác `??` với toán tử `||` khi xử lý số `0`.
- **4. Phương thức mảng hàm bậc cao (Higher-Order Functions):**
  - Thay thế vòng lặp thủ công bằng `map()` (biến đổi), `filter()` (lọc dữ liệu), `reduce()` (tính toán tích lũy).
- **5. Cơ chế Bao đóng (Closure):**
  - Cách hàm con ghi nhớ phạm vi hàm cha để đóng gói biến riêng tư (Private variable) và lập bộ nhớ đệm (Memoization).
- **6. Event Loop & Lập trình Bất đồng bộ:**
  - Bản chất đơn luồng (Single-threaded) của JavaScript.
  - Thứ tự ưu tiên của hàng đợi: **Microtask Queue** (Promise) luôn chạy trước **Macrotask Queue** (`setTimeout`).
  - Xử lý bất đồng bộ tuần tự, sạch sẽ với `async` / `await` và cấu trúc `try / catch`.

---

### PHẦN 3: TYPESCRIPT & HỆ THỐNG KIỂU DỮ LIỆU TĨNH (STATIC TYPING)
- **1. Bản chất TypeScript:**
  - Là siêu tập hợp (Superset) của JavaScript.
  - **Kiểm tra kiểu lúc viết mã (Compile-time):** Bắt lỗi trước khi ứng dụng chạy.
  - **Type Erasure:** Mọi khai báo kiểu bị xóa sạch khi biên dịch ra JS, đảm bảo **Zero Runtime Overhead** (không làm nặng ứng dụng lúc chạy).
- **2. Hệ thống kiểu dữ liệu:**
  - Kiểu nguyên thủy, mảng, bộ giá trị (Tuples).
  - Phân biệt bộ ba: `any` (tắt kiểm tra - nguy hiểm) vs `unknown` (buộc phải kiểm tra kiểu trước khi dùng - an toàn) vs `never` (giá trị không bao giờ xảy ra).
- **3. Cấu trúc kiểu phức hợp:**
  - So sánh `interface` (hướng đối tượng, kế thừa `extends`) và `type` (hợp Union `|`, giao Intersection `&`).
  - **Discriminated Unions (Tagged Unions):** Dùng thuộc tính nhãn định danh (`kind`) để TypeScript tự nhận biết chính xác cấu trúc dữ liệu trong `switch / case`.
- **4. Kỹ thuật kiểm soát kiểu:**
  - Thu hẹp kiểu (Type Narrowing) bằng `typeof`, `instanceof`.
  - Viết Custom Type Guard bằng từ khóa `is`.
- **5. Generics (`<T>`):**
  - Tham số hóa kiểu dữ liệu, cho phép viết các hàm và lớp tái sử dụng linh hoạt mà vẫn giữ nguyên 100% Type Safety.
- **6. Utility Types thông dụng:**
  - `Partial<T>`: Biến toàn bộ thuộc tính thành tùy chọn.
  - `Pick<T, K>`: Chỉ lấy ra một vài thuộc tính cần thiết.
  - `Omit<T, K>`: Loại bỏ bớt một vài thuộc tính.
  - `Record<K, T>`: Tạo cấu trúc từ điển Key - Value.

---

### PHẦN 4: VẬN DỤNG VÀO HAI BÀI TOÁN THỰC TẾ
- **Bài toán 1 (JavaScript - file `thuc_hanh_js.js`):**
  - Xây dựng cơ chế tự động thử lại khi mất mạng (**Retry mechanism** với Promise).
  - Đường ống phân tích đơn hàng: Lọc đơn thanh toán, tính chiết khấu và nhóm doanh thu.
- **Bài toán 2 (TypeScript - file `thuc_hanh_ts.ts`):**
  - Xây dựng lớp kho lưu trữ bộ nhớ **Generic Repository Pattern** (`InMemoryRepository<T>`).
  - Phân loại sản phẩm bằng Tagged Union (`PhysicalProduct` vs `DigitalProduct`), tính phí vận chuyển an toàn bằng Custom Type Guard.

---

### PHẦN 5: TỔNG KẾT ĐẶC TRƯNG SO SÁNH JAVASCRIPT VS TYPESCRIPT

| Tiêu chí | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Kiểu dữ liệu** | Kiểu động (Dynamic typing), biến có thể tự do gán lại kiểu khác. | Kiểu tĩnh (Static typing), kiểm tra chặt chẽ cấu trúc dữ liệu. |
| **Bắt lỗi** | Khi chạy chương trình (Runtime). | Ngay khi viết mã (Compile-time). |
| **Cơ chế đặc trưng** | Đơn luồng phi chặn với Event Loop; Kế thừa bằng Prototype. | Kiểm tra kiểu cấu trúc (Duck typing); Lược bỏ kiểu khi dịch (Type erasure). |
| **Hiệu năng** | Chạy trực tiếp. | Tương đương 100% JavaScript (không có runtime overhead). |
| **Phù hợp nhất** | Script ngắn, tiện ích nhỏ, prototype nhanh. | Dự án lớn, làm việc nhóm, bảo trì hệ thống lâu dài. |

---

## 🛠️ 3. HƯỚNG DẪN CHẠY THỰC HÀNH

### Cài đặt thư viện:
```powershell
npm install
```

### Chạy mã nguồn JavaScript:
```powershell
node thuc_hanh_js.js
```

### Chạy mã nguồn TypeScript:
```powershell
npx ts-node thuc_hanh_ts.ts
```

### Biên dịch TypeScript ra JavaScript:
```powershell
npm run build
```

---

## 📂 4. CẤU TRÚC KHO LƯU TRỮ

```text
├── README.md                 # Tài liệu giới thiệu tổng quan và nội dung từng phần học
├── BAO_CAO_HOC_TAP_JS_TS.md  # Báo cáo kết quả tự học chi tiết nộp giảng viên
├── thuc_hanh_js.js           # Toàn bộ mã nguồn thực hành JavaScript
├── thuc_hanh_ts.ts           # Toàn bộ mã nguồn thực hành TypeScript
├── tsconfig.json             # File cấu hình trình biên dịch TypeScript
├── package.json              # File quản lý dự án và các câu lệnh chạy
└── .gitignore                # Bỏ qua thư mục node_modules khi đẩy lên GitHub
```

---

## 🔗 5. TÀI LIỆU THAM KHẢO CHÍNH THỨC
- [TypeScript Official Handbook (5 Minutes)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [W3Schools TypeScript Tutorial](https://www.w3schools.com/typescript/typescript_intro.php)
- [MDN Web Docs - JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
