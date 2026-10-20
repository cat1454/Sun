# BÁO CÁO THU HOẠCH TỰ HỌC: JAVASCRIPT & TYPESCRIPT
*(Tài liệu tổng hợp kiến thức trọng tâm và minh chứng học tập nộp Giảng viên)*

---

### THÔNG TIN HỌC VIÊN
- **Họ và tên:** Huỳnh Phước Phú
- **Mã số sinh viên (MSSV):** 102230094
- **Thời gian tự học:** 2 ngày (Tự nghiên cứu tài liệu kết hợp viết code thực hành)
- **Tài liệu nghiên cứu:**
  - *TypeScript:* https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html | https://www.w3schools.com/typescript/
  - *JavaScript:* https://developer.mozilla.org/en-US/docs/Web/JavaScript | https://www.w3schools.com/js/

---

## 1. MỤC TIÊU KHÓA HỌC & MỨC ĐỘ HOÀN THÀNH

| STT | Mục tiêu đề ra | Đánh giá | Minh chứng thực tế |
| :---: | :--- | :---: | :--- |
| 1 | Cài đặt và cấu hình Javascript / Typescript | **Đạt** | Đã cài đặt Node.js v22, cấu hình `tsconfig.json` chuẩn strict mode. |
| 2 | Nhận biết cú pháp Javascript / Typescript | **Đạt** | Nắm vững cú pháp ES6+ và hệ thống kiểu dữ liệu tĩnh của TypeScript. |
| 3 | Vận dụng vào các bài toán cụ thể | **Đạt** | Đã viết 2 bài toán thực tế: Xử lý dữ liệu đơn hàng (JS) và Quản lý kho hàng (TS). |
| 4 | Hiểu được những điểm đặc trưng của JS / TS | **Đạt** | Phân tích rõ Event Loop, Closure (JS) và Structural Typing, Type Erasure (TS). |

---

## 2. HƯỚNG DẪN CÀI ĐẶT & CẤU HÌNH MÔI TRƯỜNG

### 2.1. Cài đặt môi trường chạy
- **Bản chất tôi hiểu:** 
  - JavaScript cần **Node.js** làm môi trường thực thi ngoài trình duyệt.
  - TypeScript cần trình biên dịch **`tsc`** để kiểm tra lỗi kiểu dữ liệu và dịch mã nguồn sang JavaScript.
- **Các lệnh thiết lập đã thực hiện:**
  ```powershell
  # Kiểm tra Node.js và npm
  node -v   # v22.20.0
  npm -v    # 10.9.3

  # Cài đặt TypeScript và công cụ chạy trực tiếp ts-node
  npm install -D typescript ts-node @types/node

  # Khởi tạo file cấu hình
  npx tsc --init
  ```

### 2.2. Ý nghĩa cấu hình cốt lõi trong `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",         // Phiên bản JavaScript sinh ra sau khi dịch
    "module": "CommonJS",       // Chuẩn module tương thích trực tiếp với Node.js
    "strict": true,             // Bật toàn bộ các cơ chế kiểm tra kiểu nghiêm ngặt nhất
    "noImplicitAny": true,      // Không cho phép biến tự động nhận kiểu any (ngừa lỗi ngầm)
    "strictNullChecks": true,   // Báo lỗi nếu biến có nguy cơ bị null hoặc undefined
    "esModuleInterop": true     // Hỗ trợ import linh hoạt giữa các định dạng thư viện
  }
}
```

---

## 3. PHẦN JAVASCRIPT: BẢN CHẤT CÁC KHÁI NIỆM & VÍ DỤ

### 3.1. Khai báo biến (`var`, `let`, `const`) và Vùng chết tạm thời (TDZ)
* **Bản chất tôi hiểu:**
  * `const`: Dùng cho giá trị không đổi. Luôn là lựa chọn mặc định.
  * `let`: Dùng khi biến cần gán lại giá trị trong một khối lệnh `{}` (Block scope).
  * `var`: Kiểu cũ, phạm vi toàn hàm (Function scope), dễ phát sinh lỗi ngầm nên cần loại bỏ.
  * **TDZ (Temporal Dead Zone):** Khoảng thời gian từ đầu khối lệnh đến khi biến `let`/`const` được gán giá trị; nếu truy cập trong vùng này sẽ bị lỗi `ReferenceError` thay vì trả về `undefined` như `var`.
* **Ví dụ thực tế:**
  ```javascript
  const PI = 3.14159;
  // PI = 3.14; // Lỗi: Không thể gán lại hằng số

  {
    // console.log(temp); // Lỗi TDZ: Cannot access 'temp' before initialization
    let temp = 100;
    console.log("Trong block:", temp); // 100
  }
  ```

### 3.2. Kiểu dữ liệu & Ép kiểu ngầm định (`==` vs `===`)
* **Bản chất tôi hiểu:**
  * Kiểu nguyên thủy (Primitive: `number`, `string`, `boolean`, `null`, `undefined`): Lưu giá trị độc lập.
  * Kiểu tham chiếu (Reference: `Object`, `Array`): Lưu địa chỉ ô nhớ. Hai biến cùng trỏ vào một ô nhớ thì thay đổi biến này sẽ làm biến kia đổi theo.
  * Toán tử `==` tự ý ép kiểu ngầm định; toán tử `===` so sánh nghiêm ngặt cả kiểu dữ liệu lẫn giá trị (luôn luôn dùng `===`).
* **Ví dụ thực tế:**
  ```javascript
  console.log(5 == "5");    // true (chuỗi "5" bị tự ý ép thành số 5)
  console.log(5 === "5");   // false (khác kiểu dữ liệu)
  console.log(0 == false);  // true (nguy hiểm)
  console.log(0 === false); // false (chính xác)
  ```

### 3.3. Các tính năng hiện đại (ES6+)
* **Bản chất tôi hiểu:** Giúp viết code ngắn gọn, rõ ràng, tránh các cấu trúc vòng lặp thủ công.
  * **Destructuring:** Bóc tách nhanh dữ liệu từ Object/Array.
  * **Spread (`...`):** Trải các phần tử để sao chép nông (shallow copy) mà không sửa đối tượng gốc.
  * **Optional Chaining (`?.`) & Nullish Coalescing (`??`):** `?.` tránh sập chương trình khi gặp null; `??` chỉ lấy giá trị dự phòng khi biến thực sự là `null` hoặc `undefined` (không bị nhầm lẫn khi biến nhận số `0`).
* **Ví dụ thực tế:**
  ```javascript
  const user = { id: 1, name: "Nguyen Van A", settings: { volume: 0 } };

  // Destructuring
  const { name } = user;

  // Optional Chaining & Nullish Coalescing
  const avatar = user.profile?.avatar ?? "default-avatar.png";
  const soundVolume = user.settings?.volume ?? 50; // Đúng: Lấy giá trị 0 (không bị đổi thành 50 như toán tử ||)

  console.log(name, avatar, soundVolume); // Nguyen Van A default-avatar.png 0
  ```

### 3.4. Xử lý Mảng với Higher-Order Functions (`map`, `filter`, `reduce`)
* **Bản chất tôi hiểu:** Thay thế hoàn toàn vòng lặp `for`. Viết code theo hướng khai báo (declarative), dữ liệu đầu vào không bị biến đổi đột ngột (immutable).
* **Ví dụ thực tế:**
  ```javascript
  const cart = [
    { name: "Bàn phím cơ", price: 80, inStock: true },
    { name: "Chuột không dây", price: 30, inStock: false },
    { name: "Lót chuột", price: 15, inStock: true }
  ];

  // 1. Lọc sản phẩm còn hàng
  const available = cart.filter(item => item.inStock);

  // 2. Tính tổng tiền các món còn hàng
  const total = available.reduce((sum, item) => sum + item.price, 0);
  console.log("Tổng tiền:", total); // 95
  ```

### 3.5. Cơ chế Bao đóng (Closure) và Tính đóng gói dữ liệu
* **Bản chất tôi hiểu:** Closure là khả năng của một hàm con ghi nhớ và truy cập được các biến trong phạm vi hàm cha của nó, ngay cả khi hàm cha đã chạy xong. Đây là cách JavaScript tạo ra biến riêng tư (Private variable) mà bên ngoài không can thiệp trực tiếp được.
* **Ví dụ thực tế:**
  ```javascript
  function createAccount(owner, initialBalance) {
    let balance = initialBalance; // Biến được giấu kín (private)

    return {
      deposit(amount) { balance += amount; },
      getBalance() { return balance; }
    };
  }

  const myAcc = createAccount("Nguyen Van A", 500);
  myAcc.deposit(200);
  console.log("Số dư:", myAcc.getBalance()); // 700
  console.log("Truy cập trực tiếp:", myAcc.balance); // undefined (an toàn)
  ```

### 3.6. Mô hình Event Loop & Lập trình Bất đồng bộ (`async` / `await`)
* **Bản chất tôi hiểu:**
  * JavaScript là ngôn ngữ **đơn luồng (Single-threaded)**. Khi gặp tác vụ tốn thời gian (I/O, gọi mạng, timer), tác vụ được chuyển giao cho môi trường nền.
  * Khi xong, kết quả đưa vào hàng đợi: **Microtask Queue** (Promise) được Event Loop ưu tiên giải quyết sạch trước **Macrotask Queue** (`setTimeout`).
  * `async/await` giúp code bất đồng bộ trông mạch lạc như code đồng bộ tuần tự.
* **Ví dụ thực tế:**
  ```javascript
  // Minh họa thứ tự thực thi của Event Loop:
  console.log("1. Đồng bộ");
  setTimeout(() => console.log("4. Macrotask (setTimeout)"), 0);
  Promise.resolve().then(() => console.log("3. Microtask (Promise)"));
  console.log("2. Đồng bộ kết thúc");
  // Kết quả in ra: 1 -> 2 -> 3 -> 4

  // Gọi bất đồng bộ với async / await:
  async function loadData() {
    try {
      const data = await Promise.resolve("Dữ liệu tải về thành công!");
      console.log(data);
    } catch (err) {
      console.error("Lỗi:", err.message);
    }
  }
  loadData();
  ```

---

## 4. PHẦN TYPESCRIPT: BẢN CHẤT CÁC KHÁI NIỆM & VÍ DỤ

### 4.1. Bản chất TypeScript: Superset & Type Erasure
* **Bản chất tôi hiểu:** TypeScript không sinh ra một ngôn ngữ mới, mà cung cấp một lớp bảo vệ tĩnh (Static Typing) ngay lúc gõ code (Compile-time). Khi biên dịch bằng lệnh `tsc`, toàn bộ các định nghĩa kiểu bị lược bỏ hoàn toàn (**Type Erasure**), sinh ra file JavaScript thuần túy nên không gây tốn tài nguyên lúc chạy (**Zero Runtime Overhead**).

### 4.2. Bộ ba đặc biệt: `any` vs `unknown` vs `never`
* **Bản chất tôi hiểu:**
  * `any`: Tắt mọi kiểm tra kiểu (rất nguy hiểm, làm mất ý nghĩa của TypeScript).
  * `unknown`: Kiểu an toàn khi chưa rõ dữ liệu đầu vào. Bắt buộc phải dùng `typeof` để kiểm tra kiểu trước khi gọi phương thức.
  * `never`: Đại diện cho trạng thái không bao giờ xảy ra (hàm luôn throw lỗi hoặc vòng lặp vô hạn).
* **Ví dụ thực tế:**
  ```typescript
  // unknown an toàn hơn any:
  let input: unknown = "Xin chào TypeScript";

  // input.toUpperCase(); // Lỗi biên dịch: TypeScript bắt buộc phải kiểm tra kiểu trước
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // Hợp lệ!
  }
  ```

### 4.3. `type` vs `interface` & Discriminated Unions
* **Bản chất tôi hiểu:**
  * `interface`: Định nghĩa hình dáng đối tượng, có thể kế thừa bằng `extends`.
  * `type`: Dùng cho kiểu hợp Union (`|`), kiểu giao Intersection (`&`), và kiểu nguyên thủy.
  * **Discriminated Union:** Dùng một thuộc tính nhãn (như `kind` hoặc `status`) để TypeScript tự nhận biết chính xác cấu trúc dữ liệu trong câu lệnh rẽ nhánh `switch / case`.
* **Ví dụ thực tế:**
  ```typescript
  interface PhysicalItem {
    kind: "physical"; // Nhãn định danh
    name: string;
    weightKg: number;
  }

  interface DigitalItem {
    kind: "digital"; // Nhãn định danh
    name: string;
    downloadUrl: string;
  }

  type Product = PhysicalItem | DigitalItem;

  function printDetails(p: Product) {
    if (p.kind === "physical") {
      console.log(`Sản phẩm vật lý: ${p.name}, Nặng: ${p.weightKg}kg`);
    } else {
      console.log(`Sản phẩm số: ${p.name}, Tải tại: ${p.downloadUrl}`);
    }
  }
  ```

### 4.4. Generics (`<T>`) - Tham số hóa kiểu dữ liệu
* **Bản chất tôi hiểu:** Cho phép viết các hàm, interface, class dùng chung được cho nhiều kiểu dữ liệu khác nhau mà vẫn giữ trọn an toàn kiểu, không cần phải ép kiểu thủ công.
* **Ví dụ thực tế:**
  ```typescript
  // Hàm tráo đổi vị trí hoặc lấy phần tử đầu tiên của mảng bất kỳ
  function getFirst<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
  }

  const num = getFirst([10, 20, 30]);       // num tự động có kiểu number
  const str = getFirst(["A", "B", "C"]);     // str tự động có kiểu string
  console.log(num, str); // 10 "A"
  ```

### 4.5. Các Utility Types cốt lõi (`Partial`, `Pick`, `Omit`, `Record`)
* **Bản chất tôi hiểu:** Công cụ có sẵn để biến đổi kiểu mà không phải viết lại từ đầu:
  * `Partial<T>`: Biến mọi trường thành tùy chọn (thường dùng cho hàm cập nhật dữ liệu).
  * `Pick<T, K>`: Trích xuất một vài trường cần dùng.
  * `Omit<T, K>`: Loại bỏ bớt một vài trường (như bỏ trường `id` khi thêm mới).
  * `Record<K, T>`: Tạo cấu trúc từ điển Key-Value.
* **Ví dụ thực tế:**
  ```typescript
  interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "member";
  }

  // Omit: Tạo DTO thêm mới không cần id
  type CreateUserDTO = Omit<User, "id">;

  // Partial: DTO cập nhật thông tin một phần
  type UpdateUserDTO = Partial<CreateUserDTO>;

  function updateUser(current: User, changes: UpdateUserDTO): User {
    return { ...current, ...changes };
  }
  ```

---

## 5. VẬN DỤNG VÀO HAI BÀI TOÁN THỰC TẾ

### Bài toán 1 (JavaScript): Đường ống xử lý đơn hàng & Cơ chế tự động thử lại khi mất mạng
- **Vấn đề giải quyết:** Xử lý mạng chập chờn bằng cơ chế Retry tự động; lọc đơn hợp lệ, tính chiết khấu và nhóm doanh thu theo ngành hàng.
- **Minh chứng mã nguồn (File `thuc_hanh_js.js`):**
  ```javascript
  async function fetchWithRetry(apiFn, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await apiFn();
      } catch (err) {
        if (attempt === retries) throw err;
        await new Promise(res => setTimeout(res, 200 * attempt));
      }
    }
  }
  ```
- **Kết quả in ra màn hình:**
  ```text
  [Thử lần 1/4] Thất bại: Mạng chập chờn (503). Đang thử lại...
  [Thử lần 2/4] Thất bại: Mạng chập chờn (503). Đang thử lại...
  [Thành công] Tải về 6 đơn hàng.
  Tổng số đơn hoàn tất: 5
  Tổng doanh thu (sau giảm giá): 2.016,00 US$
  ```

---

### Bài toán 2 (TypeScript): Thiết kế kho dữ liệu an toàn kiểu (Generic Repository Pattern)
- **Vấn đề giải quyết:** Xây dựng lớp quản lý dữ liệu trong bộ nhớ (`InMemoryRepository<T>`) áp dụng cho mọi đối tượng có trường `id`; phân loại sản phẩm bằng Tagged Union và tính phí vận chuyển theo loại sản phẩm.
- **Minh chứng mã nguồn (File `thuc_hanh_ts.ts`):**
  ```typescript
  export interface Identifiable { id: string; }

  export class InMemoryRepository<T extends Identifiable> {
    private items = new Map<string, T>();

    add(item: T): void { this.items.set(item.id, item); }
    getById(id: string): T | undefined { return this.items.get(id); }
    getAll(): T[] { return Array.from(this.items.values()); }
    filter(predicate: (item: T) => boolean): T[] { return this.getAll().filter(predicate); }
  }
  ```
- **Kết quả in ra màn hình:**
  ```text
  [PROD-0001] [Loại: PHYSICAL] MacBook Pro M3 - Giá: $1999 (Phí ship: $8.2)
  [PROD-0002] [Loại: DIGITAL] Khóa học TypeScript - Giá: $49.99 (Phí ship: $0)
  Sau cập nhật giá: MacBook Pro M3 Giá mới: $1850
  ```

---

## 6. ĐÚC KẾT SO SÁNH ĐẶC TRƯNG JAVASCRIPT VS TYPESCRIPT

| Tiêu chí | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Kiểu dữ liệu** | Kiểu động (Dynamic typing), biến có thể tự do đổi kiểu. | Kiểu tĩnh (Static typing), biến được kiểm tra kiểu chặt chẽ. |
| **Bắt lỗi** | Tại thời điểm chạy (Runtime), dễ gặp lỗi crash ứng dụng. | Tại thời điểm viết mã (Compile-time), bắt trọn lỗi logic trước khi chạy. |
| **Cơ chế đặc trưng** | Đơn luồng phi chặn với Event Loop; Kế thừa bằng Prototype. | Kiểm tra kiểu cấu trúc (Duck typing); Lược bỏ kiểu khi dịch (Type erasure). |
| **Hiệu năng** | Chạy trực tiếp. | Không làm chậm ứng dụng, vì mã sinh ra sau cùng là JavaScript nguyên bản. |
| **Ứng dụng tối ưu** | Script nhỏ, tiện ích, prototype nhanh. | Ứng dụng quy mô lớn, làm việc nhóm, bảo trì mã nguồn an toàn. |

---

*Ngày hoàn thành báo cáo: 20/10/2026*

**Người lập báo cáo:**
*(Ký và ghi rõ họ tên)*


**[Điền Họ và tên học viên]**

