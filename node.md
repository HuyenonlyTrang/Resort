## Kien thuc

-   useParams truy xuất các tham số (params) từ URL trong React
-   scrollY In ra vị trí cuộn theo chiều dọc
-   window.scrollBy(x, y); Cuộn một khoảng tương đối so với vị trí hiện tại.
-   windown.scrollTo()
-   Cuộn đến một phần tử cụ thể
    vd: const element = document.getElementById("mySection");
    element.scrollIntoView({ behavior: "smooth" });

-   thư viện Litepicker (date)
-   position: sticky là một kiểu định vị trong CSS giúp một phần tử cuộn theo trang nhưng dừng lại ở một vị trí cố định khi đạt đến một giới hạn cụ thể.

-   const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0, // Không hiển thị số thập phân nếu không cần
    }).format(amount);
    };

-   import { useLocation } from 'react-router-dom';
    --> để kiểm tra đường dẫn hiện tại và ẩn phần ... nếu location.pathname === '/user'
    const location = useLocation();
-   import { useParams } from 'react-router-dom';
    const { id } = useParams(); // Lấy ID từ URL

-   truyền roomData bằng cách dùng state trong <Link>
    const location = useLocation();
    const { roomData } = location.state || {}; // Lấy dữ liệu từ state

-   const reader = new FileReader();
    --> reader.readAsDataURL(file);
    --> reader.readAsText(file, "UTF-8");
    --> reader.readAsArrayBuffer(file);

-   Framer Motion là một thư viện giúp tạo hiệu ứng động trong React một cách mượt mà và dễ dàng.

    -   initial → Trạng thái ban đầu
    -   animate → Trạng thái sau khi animation chạy.
    -   transition → Điều chỉnh kiểu hiệu ứng (tốc độ, độ mượt, kiểu chuyển động).
    -   whileTap là một thuộc tính trong Framer Motion giúp tạo hiệu ứng khi người dùng nhấn (click) vào phần tử.

###

Thuộc tính Chức năng
initial Trạng thái ban đầu của phần tử
animate Trạng thái sau khi render (hoạt ảnh)
exit Trạng thái khi phần tử bị gỡ khỏi DOM
whileHover Hiệu ứng khi rê chuột vào
whileTap Hiệu ứng khi nhấn (click)

//
onMouseUp sẽ được gọi khi người dùng nhấn và giữ chuột trên phần tử (ví dụ: thanh trượt), sau đó thả chuột ra.



//
?.
?? 