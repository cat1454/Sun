/**
 * TẬP TIN THỰC HÀNH TỔNG HỢP: TYPESCRIPT CHUYÊN SÂU
 * Cách chạy: npx ts-node thuc_hanh_ts.ts
 */

console.log("=========================================");
console.log("PHẦN 1: HỆ THỐNG KIỂU DỮ LIỆU VÀ NARROWING");
console.log("=========================================");

// 1. Phân biệt any và unknown
let dataUnknown: unknown = "Học TypeScript 2 ngày";
// dataUnknown.toUpperCase(); // Lỗi biên dịch: TS bắt buộc kiểm tra kiểu trước
if (typeof dataUnknown === "string") {
  console.log("1. Dữ liệu sau khi kiểm tra kiểu an toàn:", dataUnknown.toUpperCase());
}

// 2. Discriminated Unions (Union có nhãn)
interface PhysicalProduct {
  kind: "physical";
  id: string;
  name: string;
  price: number;
  weightKg: number;
}

interface DigitalProduct {
  kind: "digital";
  id: string;
  name: string;
  price: number;
  downloadUrl: string;
}

type Product = PhysicalProduct | DigitalProduct;

function getShippingCost(p: Product): number {
  switch (p.kind) {
    case "physical":
      return 5 + p.weightKg * 2; // Tự động hiểu có trường weightKg
    case "digital":
      return 0;                  // Sản phẩm số miễn phí ship
  }
}

const laptop: Product = {
  kind: "physical",
  id: "P01",
  name: "Laptop Gaming",
  price: 1500,
  weightKg: 2.2
};
console.log(`2. Phí giao hàng của ${laptop.name}: $${getShippingCost(laptop)}`);

console.log("\n=========================================");
console.log("PHẦN 2: GENERICS VÀ UTILITY TYPES");
console.log("=========================================");

// 3. Generic Function
function getFirstItem<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}
const firstScore = getFirstItem([95, 80, 88]);
const firstCity = getFirstItem(["Hà Nội", "Đà Nẵng", "TP.HCM"]);
console.log(`3. Generic lấy phần tử đầu: Điểm = ${firstScore}, Thành phố = ${firstCity}`);

// 4. Utility Types (Omit, Partial, Record)
type CreateProductDTO = Omit<PhysicalProduct, "id">;
type UpdateProductDTO = Partial<CreateProductDTO>;

function updateProduct(existing: PhysicalProduct, changes: UpdateProductDTO): PhysicalProduct {
  return { ...existing, ...changes };
}
const updatedLaptop = updateProduct(laptop, { price: 1350 });
console.log(`4. Cập nhật giá sản phẩm: $${laptop.price} -> $${updatedLaptop.price}`);

console.log("\n=========================================");
console.log("PHẦN 3: BÀI TOÁN THỰC TẾ - GENERIC REPOSITORY");
console.log("=========================================");

// Lớp Generic Repository quản lý kho hàng an toàn kiểu dữ liệu
interface Identifiable {
  id: string;
}

class InMemoryRepository<T extends Identifiable> {
  private items = new Map<string, T>();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  getById(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  filter(predicate: (item: T) => boolean): T[] {
    return this.getAll().filter(predicate);
  }
}

// Khởi chạy hệ thống kho
const store = new InMemoryRepository<Product>();

store.add(laptop);
store.add({
  kind: "digital",
  id: "D01",
  name: "Khóa học TypeScript Chuyên Sâu (Video)",
  price: 49.99,
  downloadUrl: "https://courses.example.com/ts-advanced.zip"
});

console.log("Danh sách sản phẩm trong kho:");
store.getAll().forEach(item => {
  console.log(` - [${item.id}] [${item.kind.toUpperCase()}] ${item.name}: $${item.price}`);
});

console.log("\nLọc sản phẩm có giá > $100:");
const premium = store.filter(p => p.price > 100);
premium.forEach(p => console.log(` * ${p.name} ($${p.price})`));

