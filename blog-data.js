/* blog-data.js - Chứa nội dung bài viết đầy đủ */

const blogDatabase = {
    "osi": {
        title: "Mô hình OSI 7 Tầng là gì?",
        category: "Network",
        content: `
            <p>Mô hình OSI (Open Systems Interconnection) là mô hình tham chiếu lý thuyết mô tả cách các hệ thống mạng giao tiếp với nhau. Nó chia quá trình truyền dữ liệu thành 7 tầng riêng biệt.</p>
            <p><strong>Tại sao cần OSI?</strong> Nó giúp các thiết bị từ các hãng khác nhau (Cisco, Juniper, HP...) có thể hiểu và giao tiếp được với nhau bằng cách tuân theo các chuẩn chung tại từng tầng.</p>
            <p>Quy trình đi từ tầng 7 xuống tầng 1 (Encapsulation) và ngược lại (Decapsulation) là cốt lõi của Internet.</p>
            <ul>
                <li><strong>7. Application:</strong> Giao diện người dùng (HTTP, FTP).</li>
                <li><strong>6. Presentation:</strong> Định dạng, mã hóa dữ liệu (SSL/TLS).</li>
                <li><strong>5. Session:</strong> Thiết lập phiên làm việc.</li>
                <li><strong>4. Transport:</strong> Truyền tin cậy/không tin cậy (TCP/UDP).</li>
                <li><strong>3. Network:</strong> Định tuyến đường đi (IP Address).</li>
                <li><strong>2. Data Link:</strong> Địa chỉ vật lý (MAC Address).</li>
                <li><strong>1. Physical:</strong> Dây cáp, tín hiệu điện/quang.</li>
            </ul>
        `,
        codeTitle: "terminal - packet_trace",
        code: `
# Ví dụ quá trình đóng gói dữ liệu:
[Application] Data: "Hello"
[Transport]   TCP Header + "Hello"
[Network]     IP Header + TCP Header + "Hello"
[Data Link]   MAC Header + IP Header + TCP Header + "Hello" + FCS
[Physical]    01001000 01100101 01101100 01101100 01101111 ...
        `
    },
    "dns": {
        title: "DNS: Danh bạ của Internet",
        category: "Network",
        content: `
            <p>DNS (Domain Name System) giống như danh bạ điện thoại. Con người dễ nhớ tên miền (google.com), nhưng máy tính chỉ hiểu địa chỉ IP (142.250.191.46). DNS làm nhiệm vụ phiên dịch giữa hai ngôn ngữ này.</p>
            <p>Khi bạn gõ tên miền vào trình duyệt, một quy trình tìm kiếm đệ quy (Recursive Query) sẽ diễn ra:</p>
            <ol>
                <li>Kiểm tra Cache trình duyệt & máy tính.</li>
                <li>Hỏi DNS Resolver (thường là của ISP hoặc 8.8.8.8).</li>
                <li>Hỏi Root Server (.) -> TLD Server (.com) -> Authoritative Server (google.com).</li>
            </ol>
        `,
        codeTitle: "terminal - nslookup",
        code: `
C:\\Users\\Huy> nslookup google.com

Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
Name:    google.com
Addresses:  2404:6800:4005:800::200e
          142.250.191.46
        `
    },
    "http": {
        title: "HTTP vs HTTPS & SSL/TLS",
        category: "Network / Security",
        content: `
            <p><strong>HTTP</strong> (HyperText Transfer Protocol) truyền dữ liệu dưới dạng văn bản thuần (plaintext). Nếu hacker bắt được gói tin, họ sẽ đọc được toàn bộ nội dung (bao gồm mật khẩu).</p>
            <p><strong>HTTPS</strong> (S = Secure) sử dụng SSL/TLS để mã hóa dữ liệu. Ngay cả khi hacker bắt được gói tin, họ chỉ thấy một chuỗi ký tự vô nghĩa.</p>
            <p>Quá trình thiết lập HTTPS gọi là <strong>TLS Handshake</strong>, nơi Client và Server thống nhất thuật toán mã hóa và trao đổi khóa bí mật.</p>
        `,
        codeTitle: "wireshark - packet capture",
        code: `
// HTTP (Không an toàn):
GET /login.php HTTP/1.1
Host: example.com
Body: user=huy&pass=123456  <-- LỘ PASSWORD!

// HTTPS (Đã mã hóa):
Encrypted Application Data: 
af 23 4c 9a ... (Không thể đọc được)
        `
    },
    "socket": {
        title: "Lập trình Socket TCP Client-Server",
        category: "Network / Java",
        content: `
            <p>Socket là điểm cuối (endpoint) trong liên kết giao tiếp hai chiều giữa hai chương trình chạy trên mạng. TCP Socket đảm bảo dữ liệu truyền đi chính xác và đúng thứ tự.</p>
            <p>Trong Java, gói <code>java.net</code> cung cấp 2 class chính:</p>
            <ul>
                <li><code>ServerSocket</code>: Dùng cho Server, lắng nghe kết nối tại 1 cổng (Port).</li>
                <li><code>Socket</code>: Dùng cho Client để kết nối đến Server.</li>
            </ul>
        `,
        codeTitle: "Java - Server.java",
        code: `
// Server Side
ServerSocket server = new ServerSocket(8888);
System.out.println("Đang chờ kết nối...");
Socket socket = server.accept(); // Chặn cho đến khi có Client

// Client Side
Socket client = new Socket("localhost", 8888);
        `
    },
    "works": {
        title: "It works on my machine!",
        category: "Funny / DevOps",
        content: `
            <p>Đây là câu nói kinh điển nhất trong ngành phần mềm. Nguyên nhân thường do sự khác biệt về môi trường (Environment): phiên bản thư viện, biến môi trường, hệ điều hành...</p>
            <p>Giải pháp hiện đại cho vấn đề này là <strong>Docker</strong>. "Nếu nó chạy trên máy bạn, hãy đóng gói máy bạn lại và giao cho khách hàng" - Đó chính là Containerization.</p>
        `,
        codeTitle: "dev_meme.js",
        code: `
function deployCode() {
    if (environment === 'my_laptop') {
        return "Everything is perfect! 🚀";
    } else {
        throw new Error("500 Internal Server Error 🔥");
    }
}
// Solution: Use Docker!
        `
    },
    "3am": {
        title: "Code lúc 3h sáng vs 9h sáng",
        category: "Funny",
        content: `
            <p>Ban đêm (Ballmer Peak): Cảm giác như một hacker trong phim, gõ phím như máy, logic tuôn trào. Không ai làm phiền.</p>
            <p>Sáng hôm sau: Đọc lại code chính mình viết và tự hỏi "Thằng nào viết cái đống rác này vậy?".</p>
            <p>Lời khuyên: Hãy comment code đầy đủ, hoặc đi ngủ sớm.</p>
        `,
        codeTitle: "legacy_code.c",
        code: `
// Code viết lúc 3:00 AM
// Magic number, đừng sửa nếu không muốn crash
int x = 0x5f3759df; 
y = y * ( 1.5F - ( x * 0.5F * y * y ) );

// Sáng hôm sau debug:
// ??? Tại sao lại dùng số hexa này?
        `
    },
    "class": {
        title: "Class và Object trong OOP",
        category: "Java Core",
        content: `
            <p><strong>Class (Lớp):</strong> Là bản thiết kế, khuôn mẫu. Ví dụ: Bản vẽ thiết kế xe hơi.</p>
            <p><strong>Object (Đối tượng):</strong> Là thực thể cụ thể được tạo ra từ Class. Ví dụ: Chiếc xe BMW biển số 29A-123.45.</p>
            <p>Trong bộ nhớ Heap, Object chiếm không gian lưu trữ thực tế, còn Class chỉ là định nghĩa kiểu dữ liệu.</p>
        `,
        codeTitle: "Java - OOP",
        code: `
class Car {
    String color;
    void run() { 
        System.out.println("Vroom vroom..."); 
    }
}

// Tạo Object
Car myCar = new Car();
myCar.color = "Red";
myCar.run();
        `
    },
    "array": {
        title: "ArrayList vs Array",
        category: "Java Core",
        content: `
            <p><strong>Array (Mảng thường):</strong> Kích thước cố định (Fixed size). Phải biết trước số lượng phần tử. Tốc độ truy xuất nhanh.</p>
            <p><strong>ArrayList:</strong> Kích thước động (Dynamic size). Tự động mở rộng khi thêm phần tử. Hỗ trợ nhiều hàm tiện ích (add, remove, contains...).</p>
            <p>Dùng Array khi hiệu năng là tối thượng và biết rõ kích thước. Dùng ArrayList cho hầu hết các trường hợp còn lại.</p>
        `,
        codeTitle: "Java",
        code: `
// Array
String[] arr = new String[5];
arr[0] = "Java";

// ArrayList
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python"); // Tự mở rộng size
        `
    },
    "inh": {
        title: "Kế thừa (Inheritance)",
        category: "Java Core",
        content: `
            <p>Kế thừa cho phép một Class con (Subclass) sở hữu các thuộc tính và phương thức của Class cha (Superclass). Giúp tái sử dụng mã nguồn (Code Reusability).</p>
            <p>Trong Java, sử dụng từ khóa <code>extends</code>. Lưu ý: Java chỉ hỗ trợ đơn kế thừa (một con chỉ có một cha).</p>
        `,
        codeTitle: "Java",
        code: `
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Gâu gâu!"); }
}

Dog d = new Dog();
d.eat(); // Dùng lại hàm của cha
d.bark(); // Hàm riêng của con
        `
    },
    "interface": {
        title: "Interface trong Java",
        category: "Java Core",
        content: `
            <p>Interface là một bản thiết kế trừu tượng hoàn toàn. Nó chỉ chứa các tên hàm (phương thức trừu tượng) mà không có phần thân.</p>
            <p>Nó được dùng để đạt được tính đa kế thừa (một class có thể <code>implements</code> nhiều interface) và giảm sự phụ thuộc lỏng lẻo (loose coupling).</p>
        `,
        codeTitle: "Java",
        code: `
interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("Chim đang bay...");
    }
}
        `
    },
    "var": {
        title: "Phân biệt Var, Let và Const",
        category: "JavaScript",
        content: `
            <p><strong>var:</strong> Scope là function. Có cơ chế Hoisting (đưa lên đầu). Dễ gây lỗi logic.</p>
            <p><strong>let:</strong> Scope là block {}. Không hoisting. Dùng cho biến cần thay đổi giá trị.</p>
            <p><strong>const:</strong> Scope là block {}. Phải gán giá trị ngay khi khai báo và không được gán lại. Dùng cho hằng số.</p>
        `,
        codeTitle: "JavaScript (ES6)",
        code: `
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // 1 (OK do var)
console.log(b); // Error: b is not defined (Do let scope trong {})

const PI = 3.14;
PI = 5; // TypeError: Assignment to constant variable.
        `
    },
    "arrow": {
        title: "Arrow Function",
        category: "JavaScript",
        content: `
            <p>Arrow Function là cú pháp viết hàm ngắn gọn được giới thiệu trong ES6. Nó cũng xử lý từ khóa <code>this</code> khác với hàm thường (lexical this).</p>
            <p>Rất hữu ích khi dùng làm callback trong các hàm như map, filter, reduce.</p>
        `,
        codeTitle: "JavaScript",
        code: `
// Hàm thường
function sum(a, b) {
    return a + b;
}

// Arrow Function
const sum = (a, b) => a + b;

// Dùng trong callback
[1, 2, 3].map(x => x * 2);
        `
    },
    "template": {
        title: "Template Literals",
        category: "JavaScript",
        content: `
            <p>Thay vì nối chuỗi bằng dấu cộng (+) rất rối mắt, bạn có thể dùng dấu backtick (\`) và cú pháp <code>\${biến}</code> để chèn giá trị trực tiếp vào chuỗi.</p>
            <p>Nó cũng hỗ trợ chuỗi nhiều dòng (multiline string) mà không cần ký tự xuống dòng đặc biệt.</p>
        `,
        codeTitle: "JavaScript",
        code: `
let name = "Huy";
let age = 21;

// Cũ
console.log("Tôi là " + name + ", " + age + " tuổi.");

// Mới (Template Literal)
console.log(\`Tôi là \${name}, \${age} tuổi.\`);
        `
    },
    "dom": {
        title: "DOM Manipulation",
        category: "JavaScript",
        content: `
            <p>DOM (Document Object Model) coi trang HTML như một cây các đối tượng. JavaScript có thể thay đổi, thêm, xóa các phần tử HTML và CSS thông qua DOM.</p>
            <p>Các hàm phổ biến: <code>getElementById</code>, <code>querySelector</code>, <code>addEventListener</code>.</p>
        `,
        codeTitle: "JavaScript",
        code: `
// Thay đổi nội dung
document.querySelector("h1").innerText = "Hello World";

// Thay đổi style
document.body.style.backgroundColor = "black";

// Bắt sự kiện click
btn.addEventListener("click", () => {
    alert("Đã click!");
});
        `
    },
    "list": {
        title: "List Comprehension",
        category: "Python",
        content: `
            <p>Một tính năng "đặc sản" của Python. Cho phép tạo một list mới dựa trên list cũ chỉ bằng một dòng code cực kỳ ngắn gọn và dễ đọc.</p>
            <p>Cú pháp: <code>[expression for item in list if condition]</code></p>
        `,
        codeTitle: "Python",
        code: `
numbers = [1, 2, 3, 4, 5]

# Cách thường
squares = []
for x in numbers:
    squares.append(x**2)

# List Comprehension
squares = [x**2 for x in numbers]
# Output: [1, 4, 9, 16, 25]
        `
    },
    "dict": {
        title: "Dictionary trong Python",
        category: "Python",
        content: `
            <p>Dictionary lưu trữ dữ liệu dưới dạng cặp <code>Key: Value</code>. Nó tương tự như JSON trong JS hay HashMap trong Java.</p>
            <p>Truy xuất dữ liệu bằng Key cực nhanh (độ phức tạp O(1)). Key phải là duy nhất và bất biến (immutable).</p>
        `,
        codeTitle: "Python",
        code: `
info = {
    "name": "Viết Huy",
    "skills": ["Java", "Python", "Network"],
    "is_admin": True
}

print(info["name"]) # Viết Huy
info["age"] = 22    # Thêm mới
        `
    },
    "pointer": {
        title: "Con trỏ (Pointer) trong C",
        category: "C Language",
        content: `
            <p>Con trỏ là biến dùng để lưu <strong>địa chỉ bộ nhớ</strong> của biến khác, thay vì lưu giá trị. Đây là khái niệm khó nhất nhưng mạnh nhất của C/C++.</p>
            <p>Dùng con trỏ cho phép can thiệp trực tiếp vào bộ nhớ, cấp phát động và thao tác mảng/chuỗi hiệu quả.</p>
        `,
        codeTitle: "C Language",
        code: `
int a = 10;
int *ptr = &a; // ptr lưu địa chỉ của a

printf("%d", a);    // In ra 10
printf("%p", ptr);  // In ra địa chỉ (VD: 0x7ffd...)
printf("%d", *ptr); // In ra giá trị tại địa chỉ đó (10)
        `
    }
};

function loadBlogPost(id) {
    const post = blogDatabase[id];
    
    // Nếu không tìm thấy bài viết hoặc không có ID
    if (!post) {
        document.getElementById('detailTitle').innerText = "Không tìm thấy bài viết";
        document.getElementById('detailContent').innerHTML = "<p>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>";
        document.querySelector('.code-window').style.display = 'none';
        return;
    }

    // Đổ dữ liệu vào HTML
    document.getElementById('detailTitle').innerText = post.title;
    document.getElementById('detailCat').innerText = post.category;
    document.getElementById('detailContent').innerHTML = post.content;
    
    // Xử lý phần Code
    if (post.code) {
        document.getElementById('codeTitle').innerText = post.codeTitle || 'terminal';
        document.getElementById('detailCode').innerText = post.code.trim();
        
        // Highlight màu cơ bản (thủ công)
        let codeHtml = document.getElementById('detailCode').innerHTML;
        codeHtml = codeHtml.replace(/\/\/.*/g, '<span class="comment">$&</span>'); // Comment //
        codeHtml = codeHtml.replace(/#.*/g, '<span class="comment">$&</span>');   // Comment #
        codeHtml = codeHtml.replace(/"(.*?)"/g, '<span class="string">"$1"</span>'); // String ""
        document.getElementById('detailCode').innerHTML = codeHtml;
    } else {
        document.querySelector('.code-window').style.display = 'none';
    }
}