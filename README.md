# UBND TỈNH TÂY NINH
# TRƯỜNG CAO ĐẲNG LONG AN
## KHOA: KINH TẾ - CÔNG NGHỆ THÔNG TIN

***

# BÁO CÁO THỰC TẬP TỐT NGHIỆP
## NGHỀ: CÔNG NGHỆ THÔNG TIN (ỨNG DỤNG PHẦN MỀM)

**Đề tài:** Xây dựng và triển khai hệ thống quản lý hạ tầng mạng nội bộ sử dụng Active Directory và Group Policy

* **GIẢNG VIÊN HƯỚNG DẪN:** CAO THỊ THÙY LINH
* **HỌC SINH THỰC HIỆN:** * TRẦN ĐÌNH LONG - MSSV 1: CNT24T1043
  * ĐẶNG NGUYỄN HỒNG HẠNH - MSSV 2: CNT24T1037
  * DƯƠNG VĂN HIẾU - MSSV 3: CNT24T1039
* **LỚP:** TA.TC.CNT.2.24
* **THỜI GIAN THỰC TẬP:** Tây Ninh, Tháng Năm 2026

***

## NHẬN XÉT CỦA GIẢNG VIÊN HƯỚNG DẪN

*(Phần dành cho giảng viên ghi nhận xét)*

***

## TÓM TẮT NỘI DUNG

### 1. Những nội dung sẽ được trình bày trong bài báo cáo
* Đề xuất xây dựng và triển khai hệ thống quản lí thiết bị máy tính thông qua Active Directory Domain Services.
* Quản lí & phân quyền tài khoản người dùng.
* Cảnh báo bảo mật khi nhân viên truy cập vào các trang web trong Deny List.
* Cấm sử dụng USB, nếu cắm vào sẽ cảnh báo bảo mật đến nhân viên.
* Không cho nhân viên chỉnh sửa hình nền nhưng administrator có quyền đổi hình nền hàng loạt.
* Không cho Users tự cài các phần mềm lạ.
* Share máy in khi User trong mạng.
* Báo cáo về quá trình để xây dựng các module của hệ thống.
* Đưa ra một phần mềm hoàn thiện và đánh giá về các kết quả thực nghiệm.

### 2. Cấu trúc của báo cáo
* **Chương 1:** Cơ sở lý thuyết.
* **Chương 2:** Thiết kế và xây dựng mô hình hệ thống trên VMWARE.
* **Chương 3:** Triển khai ACTIVE DIRECTORY và GROUP POLICY.
* **Chương 4:** Kết quả thực hiện và đánh giá.
* **Kết luận.**
* **Tài liệu tham khảo và kiến nghị.**

***

## DANH MỤC HÌNH ẢNH
* Hình 2.1: Sơ đồ mạng (Trang 3)
* Hình 2.2: Chuẩn bị môi trường VMware (Trang 3)
* Hình 2.3: Cài đặt hệ điều hành (Trang 4)
* Hình 2.4: Setup VMWare Tools (Trang 5)
* Hình 2.5: Giao diện cài đặt (Trang 5)
* Hình 2.6: Chọn ổ đĩa để cài windows (Trang 7)
* Hình 2.7: Cài tự động phân vùng ổ cứng (Trang 7)
* Hình 2.8: Đặt password (Trang 9)
* Hình 2.9: Cài driver máy ảo qua VMWare Tools (Trang 10)
* Hình 3.1: Server Manager (Trang 11)
* Hình 3.2: Nâng cấp máy chủ thành Domain Controller (Trang 13)
* Hình 3.3: Đặt tên miền và mật khẩu khôi phục cho AD DS (Trang 15)
* Hình 3.4: Cài đặt ip tĩnh và DNS sever cho máy Client (Trang 19)
* Hình 3.5: Tạo user người dùng (Trang 21)
* Hình 3.6: Tạo cấu trúc Organization Unit (Trang 26)
* Hình 3.7: Tạo Group User (Trang 28)
* Hình 3.8: Tạo 3 máy in ảo (Trang 34)
* Hình 3.9: Phân quyền máy in ảo (Trang 38)

***

## DANH MỤC CÁC KÝ HIỆU VIẾT TẮT

| Từ viết tắt | Giải nghĩa |
| :--- | :--- |
| **CPU** | Central Processor Unit: bộ xử lý trung tâm |
| **RAM** | Random Access Memory: bộ nhớ truy cập ngẫu nhiên |
| **NAT** | Network Access Translator |
| **AD DS** | Active Directory and Domain Services |
| **AD UC** | Active Directory Users and Computer |
| **GPO** | Group Policy |
| **Rc** | Right click: Chuột phải |
| **Lc** | Left Click: Chuột trái |
| **DHCP** | Dynamic Host Configuration Protocol: giao thức cấu hình IP tự động |
| **DC** | Domain Controllers |
| **DNS** | Domain Name Servers |
| **DdoS** | Distributed Denial of Service: Tấn công trùng lặp gây tắc nghẽn gói tin |
| **OU** | Organizational Unit |
| **GPMC** | Group Policy Management |

***

## MỤC LỤC

* **CHƯƠNG 1: CƠ SỞ LÝ THUYẾT (Trang 1)**
  * 1. Tổng quan về công nghệ ảo hóa VMware (Trang 1)
  * 2. Tổng quan về Windows Server (Trang 1)
  * 3. Hệ thống Active Directory (AD) (Trang 1)
    * 3.1 Cấu trúc logic (Trang 2)
    * 3.2 Cấu trúc vật lý (Trang 2)
  * 4. Group Policy (GPO) (Trang 2)
* **CHƯƠNG 2: THIẾT KẾ VÀ XÂY DỰNG MÔ HÌNH HỆ THỐNG (Trang 3)**
  * 1. Sơ đồ logic và vật lý của hệ thống mạng (Trang 3)
  * 2. Chuẩn bị môi trường VMware (Trang 3)
  * 3. Cài đặt hệ điều hành (Trang 4)
* **CHƯƠNG 3: TRIỂN KHAI ACTIVE DIRECTORY VÀ GROUP POLICY (Trang 11)**
  * 1. Triển khai Active Directory Domain Services (Trang 11)
  * 2. Quản lý tài nguyên và người dùng (Trang 26)
  * 3. Xây dựng và áp dụng các chính sách Group Policy (GPO) (Trang 40)
    * 3.1. Chính sách quản lý máy trạm: Chặn sử dụng USB (ngừa virus) (Trang 40)
    * 3.2. Tự động map ổ đĩa mạng (File Server) cho từng phòng ban (Trang 43)
    * 3.3. Đồng bộ hình nền (Trang 46)
* **CHƯƠNG 4: KẾT QUẢ THỰC HIỆN VÀ ĐÁNH GIÁ (Trang 49)**
  * 1. Kết quả kiểm thử (Kèm hình ảnh minh họa) (Trang 49)
  * 2. Đánh giá ưu và nhược điểm (Trang 51)
* **KẾT LUẬN (Trang 52)**
  * 1. Kết quả đạt được (Trang 52)
  * 2. Hướng phát triển đề tài (Trang 52)

***

## LỜI MỞ ĐẦU

Trong thời đại bùng nổ công nghệ thông tin như hiện nay, việc tìm kiếm thông tin một sản phẩm trên Internet là điều rất dễ dàng. Từ đó đưa ra những gợi ý về sản phẩm phù hợp với người dùng nhất.

Chính vì lý do trên nên trong bài báo cáo thực tập, nhóm em chọn đề tài **“Xây dựng và triển khai hệ thống quản lý hạ tầng mạng nội bộ sử dụng Active Directory và Group Policy”**. 

Mục tiêu của đề tài là tìm hiểu được các kỹ thuật tư vấn sản phẩm và ứng dụng các kỹ thuật tư vấn đó để xây dựng hệ tư vấn sản phẩm cho người dùng. Để thực hiện được đề tài này thì cần thực hiện các công việc sau:
* Tìm hiểu các phương pháp tư vấn đã có, từ đó chọn ra phương pháp tư vấn sản phẩm phù hợp nhất để nghiên cứu và phát triển.
* Thu thập dữ liệu đánh giá thực tế từ người dùng để phục vụ việc đánh giá thuật toán.
* Thực nghiệm và đánh giá kết quả đạt được.

Qua đây, chúng em xin chân thành cảm ơn cô Cao Thị Thùy Linh đã tận tình hướng dẫn chúng em thực hiện đề tài này. Chúng em xin cảm ơn thầy cô khoa Kinh Tế - Công Nghệ Thông Tin, các bạn cùng khoá và các anh chị khoá trước đã giúp đỡ chúng em tìm tài liệu và góp ý cho chúng em hoàn thành tốt bài khóa luận tốt nghiệp này!

***

## NỘI DUNG

## CHƯƠNG 1: CƠ SỞ LÝ THUYẾT

### 1. Tổng quan về công nghệ ảo hóa VMware
* **Khái niệm và lợi ích của ảo hóa:** Ảo hóa là công nghệ cho phép tạo ra nhiều máy tính ảo (Virtual Machine - VM) chạy độc lập trên cùng một máy tính vật lý (Host).
* **Lợi ích:** Giúp tối ưu hóa tài nguyên phần cứng, tiết kiệm chi phí mua sắm thiết bị, dễ dàng sao lưu/phục hồi, và tạo môi trường an toàn để thử nghiệm (lab) mà không ảnh hưởng đến máy thật.
* **Các chế độ mạng trong VMware (Bridged, NAT, Host-only):** Trong bài lab này, tôi chọn Host-only. Host-only (VMNet1) là một Switch ảo, dùng để kết nối các thiết bị với nhau nhưng không ra Internet.

### 2. Tổng quan về Windows Server
Đây là dòng hệ điều hành chuyên dụng của Microsoft được thiết kế để cung cấp các dịch vụ mạng, quản lý người dùng, dữ liệu và ứng dụng ở quy mô doanh nghiệp. Các phiên bản phổ biến hiện nay (2016, 2019, 2022) ngày càng được cải tiến mạnh mẽ về bảo mật, hiệu suất và khả năng tích hợp điện toán đám mây (hybrid cloud).
* **Roles và Features:**
  * **Roles (Vai trò):** Xác định chức năng chính của máy chủ trong mạng. Ví dụ: Active Directory Domain Services (AD DS) để quản lý danh bạ mạng, DNS Server để phân giải tên miền, DHCP Server để cấp phát IP tự động.
  * **Features (Tính năng):** Các phần mềm hỗ trợ bổ sung, có thể cài đặt độc lập hoặc đi kèm để hỗ trợ cho một Role nào đó. Ví dụ: BitLocker để mã hóa ổ đĩa, Windows Server Backup để sao lưu dữ liệu.

### 3. Hệ thống Active Directory (AD)
* **Định nghĩa và vai trò:** AD DS là một dịch vụ thư mục tập trung (Directory Service) của Microsoft. Nó lưu trữ thông tin về các đối tượng trên mạng (User, Computer, Group...) và giúp quản trị viên quản lý, cấp quyền truy cập, cũng như áp dụng chính sách bảo mật từ một nơi duy nhất.

#### 3.1 Cấu trúc logic
* **Domain:** Đơn vị quản trị cốt lõi, tập hợp các đối tượng chia sẻ chung một cơ sở dữ liệu AD.
* **Tree:** Bao gồm nhiều Domain có chung một không gian tên (namespace) liên kết với nhau theo dạng cha-con.
* **Forest:** Mức độ cao nhất, chứa một hoặc nhiều Tree không chung không gian tên nhưng có sự tin cậy (trust) lẫn nhau.
* **OU (Organizational Unit):** Đơn vị tổ chức nhỏ nhất trong một Domain, giống như các thư mục dùng để phân loại User/Computer (ví dụ: OU Kế toán, OU IT) để dễ dàng ủy quyền và áp dụng Group Policy.

#### 3.2 Cấu trúc vật lý:
* **Domain Controller (DC):** Máy chủ trực tiếp chạy dịch vụ AD DS và lưu trữ bản sao cơ sở dữ liệu AD. Một mạng thường có nhiều DC để dự phòng.
* **Sites:** Đại diện cho cấu trúc liên kết mạng vật lý (thường gắn với vị trí địa lý hoặc các dải mạng subnet khác nhau). Cấu hình Site giúp tối ưu hóa băng thông khi đồng bộ dữ liệu giữa các DC.

### 4. Group Policy (GPO)
* **Khái niệm:** Group Policy là một bộ công cụ quyền lực giúp quản trị viên tự động hóa việc cấu hình hệ thống, cài đặt phần mềm, và thiết lập chính sách bảo mật cho hàng loạt thiết bị và người dùng trong môi trường Active Directory.
* **Thứ tự áp dụng GPO (LSDOU):** Đây là nguyên tắc cực kỳ quan trọng để giải quyết xung đột khi có nhiều chính sách áp dụng lên cùng một đối tượng. Chính sách được áp dụng theo thứ tự từ dưới lên, và cái nào áp dụng **sau cùng** sẽ được ưu tiên cao nhất (ghi đè cái trước):
  1. **Local** (Máy cục bộ) - *Ưu tiên thấp nhất*
  2. **Site** (Vị trí mạng)
  3. **Domain** (Mức toàn miền)
  4. **OU** (Đơn vị tổ chức) - *Ưu tiên cao nhất*

***

## CHƯƠNG 2: THIẾT KẾ VÀ XÂY DỰNG MÔ HÌNH HỆ THỐNG

### 1. Sơ đồ logic và vật lý của hệ thống mạng
* Vẽ sơ đồ mạng (Topology) bao gồm máy Server và các máy Client.
* Quy hoạch dải địa chỉ IP cho Server và các Client:
  * **Server:** 192.168.1.2 - Subnet Mask: 255.255.255.0
  * **Client-1:** 192.168.1.3 - Subnet Mask: 255.255.255.0
  * **Default Gateway:** 192.168.1.1

### 2. Chuẩn bị môi trường VMware
* Tạo và cấp phát tài nguyên cho các máy ảo (CPU, RAM, Ổ cứng).

### 3. Cài đặt hệ điều hành
* Cài đặt Windows Server (quy định tên máy, IP tĩnh).
  * **Tên Máy:** Server
  * **IP:** 192.168.1.2
* Với Windows Server 2022 Datacenter, việc cài đặt được diễn ra tự động sau khi gắn file ISO và khởi động máy ảo. Ấn PowerON để khởi động.
* VMWare Tools sẽ được cài tự động trên Windows Server 2022. Khi hoàn tất, chọn Restart chọn Yes.

* **Cài đặt máy trạm Windows Client (Windows 10):**
  * Sau khi cấp phát tài nguyên cho máy Client, click vào PowerOn và ấn phím bất kỳ để vào giao diện cài đặt.
  * Xuất hiện giao diện cài đặt, ấn **Next** -> Ấn **Install Now**.
  * Xuất hiện bảng Điều Khoản & Điều Kiện (*Applicable notices and license terms*), đọc kỹ nếu chấp nhận điều khoản thì tick vào ô *"I Accept the License Terms"*.
  * Đến phần chọn phương thức cài, chọn **Custom: Install Windows Only (Advanced)**.
  * Chọn ổ đĩa để cài windows lên. Chọn **Next** để bộ cài tự động phân vùng ổ cứng và đẩy windows từ bộ cài vào máy.
  * Sau khi hoàn tất, ấn **R** để khởi động lại.
  * Sau khi reboot, hiện ra giao diện thiết lập ban đầu, ấn tổ hợp phím **Shift + F10**. Sau khi cửa sổ Command Prompt hiện ra, gõ:
    ```cmd
    Start ms-cxh:localonly
    ```
    Ấn **Enter**.
  * Tạo tài khoản với **Username:** labclient1, **Password:** 1234.
  * **THỰC HIỆN TƯƠNG TỰ VỚI MÁY CLIENT-2** với **Username:** labclient2, **Password:** 1234.
  * **Cài driver máy ảo qua VMWare Tools:** Ấn **Next** 2 lần sau đó ấn **Install** cho VMWare tools tự động cài. Sau khi cài xong ấn **Finish**. Khi máy yêu cầu restart, ấn **Yes**.

***

## CHƯƠNG 3: TRIỂN KHAI ACTIVE DIRECTORY VÀ GROUP POLICY

### 1. Triển khai dịch vụ Domain Name Server (DNS)
* **Xuôi (Forward Lookup Zone):**
  * **B1:** Mở Server Manager, vào menu Tools, chọn DNS.
  * **B2:** Chuột phải Forward Lookup Zones, chọn New Zone.
  * **B3:** Màn hình Welcome to the New Zone Wizard, chọn Next.
  * **B4:** Màn hình Zone Type, chọn Primary Zone, chọn Next.
  * **B5:** Màn hình Zone Name, đặt tên `labserver.local`, chọn Next 2 lần.
  * **B6:** Màn hình Dynamic Update, chọn *Allow both nonsecure and secure dynamic updates*, sau đó chọn Next.
  * **B7:** Màn hình Completing to the New Zone Wizard, chọn Finish.
* **Ngược (Reverse Lookup Zone):**
  * **B1:** Chuột phải Reverse Lookup Zones, chọn New Zone.
  * **B2:** Màn hình Welcome to the New Zone Wizard, chọn Next.
  * **B3:** Màn hình Zone Type, chọn Primary Zone, chọn Next.
  * **B4:** Màn hình Reverse Lookup Zone Name, chọn IPv4 Reverse Lookup Zone, chọn Next.
  * **B5:** Mục Network ID, nhập `192.168.1`, chọn Next 2 lần.
  * **B6:** Màn hình Dynamic Update, chọn *Allow both nonsecure and secure dynamic updates*, sau đó chọn Next.
  * **B7:** Màn hình Completing to the New Zone Wizard, chọn Finish.
* **Tạo bản ghi Pointer (PTR):**
  * **B1:** Bung mục Forward Lookup Zones, chuột phải `labserver.local`, chọn New Host (A or AAAA).
  * **B2:** Khai báo thông tin sau: Name: để trống; IP Address: 192.168.1.2. Sau đó tích chọn *Create associated pointer (PTR) record*. Tiếp tục chọn Add Host, chọn OK, chọn Done.
  * **B3:** Bung mục Reverse Lookup Zones, chọn `1.168.192.in-addr.arpa`, kiểm tra Pointer(PTR) đã được tạo thành công cho máy SERVER.

### 2. Triển khai Active Directory Domain Services
* **Cài đặt role AD DS và DNS Server:**
  * Khi Windows Server khởi động, cửa sổ Server Manager tự động bật ra. Mở Server Manager, vào Menu Manage – chọn **Add Roles And Features**.
  * Cửa sổ Before you begin – chọn **Next**.
  * Tiếp đến cửa sổ Select installation type – Chọn **Role-based or feature-based installation**. Sau đó ấn Next.
  * Ở cửa sổ Select destination server để mặc định và ấn **Next**.
  * Tại bước này tích chọn dịch vụ **Active Directory Domain Services** và **DNS Server** – chọn Next.
  * Cửa sổ Select features, chọn (bật) **Group Policy Management** -> Ấn Next.
  * Ấn Next 3 lần -> Ấn **Install**.
* **Nâng cấp máy chủ thành Domain Controller (Promote to Domain Controller):**
  * Ấn vào biểu tượng cờ thông báo trên thanh công cụ: Chọn vào dòng *Promote this server to a domain controller* để nâng server lên DC.
  * Tick chọn **Add a new forest**, nhập tên miền: `labserver.local`, chọn Next.
  * Cửa sổ Domain Controller Options, nhập mật khẩu cho chế độ khôi phục của AD DS (DSRM): `Labserver1@`. Sau khi nhập mật khẩu xong chọn Next.
  * Bỏ click vào *Create DNS delegation*. Ấn Next.
  * Ở cửa sổ Additional Options hệ thống tự động điền các thông tin NetBIOS. Ấn Next.
  * Tiếp tục ấn Next. Sau khi quá trình Prerequisites Check kiểm tra điều kiện tiên quyết hoàn tất, chọn **INSTALL**. Hệ thống tự động cài đặt và Restart.

* **Cài đặt IP tĩnh và DNS server cho máy Client:**
  * Bật hộp thoại Run (Windows + R) và gõ `ncpa.cpl`, sau đó nhấn OK.
  * Click chuột phải vào Card Mạng, chọn Properties. Double Click vào *Internet Protocol Version 4 (TCP/IP) – IPv4*.
  * Thiết lập Client với: **IP Address:** 192.168.1.3, **Subnet Mask:** 255.255.255.0, **Preferred DNS Server:** 192.168.1.2.
* **Join các máy Client vào Domain:**
  * Trên Server, vào ô tìm kiếm tìm **Active Directory Users and Computers** và mở lên. Tại giao diện quản lý, sổ phần forest tên miền ra, truy cập vào mục Users.
  * Click vào biểu tượng tạo mới User, nhập các thông tin cơ bản và ấn Next. Đặt password `Clientlab1@` cho User. Ấn Next và ấn Finish.
  * Trên máy Client: Bật Windows Explorer, click chuột phải vào *This PC* chọn Properties. Cửa sổ System hiện ra, chọn *Advanced system settings* hoặc *Change Settings*. Tại cửa sổ Computer Name, chọn nút **Change**. Cửa sổ Computer Name/Domain Changes hiện ra, phần *Member of* chọn vào **Domain**.
  * Nhập vào domain vừa tạo bên Server: `labserver.local`, ấn OK.
  * Cửa sổ yêu cầu tài khoản hiện ra, thực hiện đăng nhập bằng user và password vừa tạo bên AD UC. Ấn OK và tiến hành khởi động lại máy trạm. Sau khi khởi động lại, chọn *Other Users* và đăng nhập bằng tài khoản domain để kiểm tra (Join Domain thành công).

### 3. Quản lý tài nguyên và người dùng
* **Tạo cấu trúc Organization Unit (OU) theo sơ đồ tổ chức công ty:**
  * Ban Giám Đốc (ADM)
  * Phòng Nhân sự (HRD)
  * Phòng Công nghệ thông tin (ITD)
  * Phòng Chăm Sóc Đời Sống Công Nhân (SHED)
  * Phòng Kế Toán (ACCD)
  * **Cách làm:** Truy cập vào Active Directory Users & Computers -> Click chuột phải vào Domain -> **New** -> **Organizational Unit**. Cửa sổ New Object – Organizational Unit hiện ra, đặt tên cho OU theo tên viết tắt quy định trên. Ấn OK. Thực hiện tương tự với các OU khác.
* **Tạo User, Group và phân quyền cơ bản:**
  * Trong Active Directory Users & Computers, vào OU ITD, Chọn **New** -> **Group**. Đặt tên GROUP là `NhanVien`, phần group scope chọn *Domain Local*; Group type chọn *Distribution*, ấn OK. Thực hiện tương tự với Group `CanBo`.
  * Tạo User mới: Chọn **New** -> **User**. Đặt tên: `Truong Van A`, User Logon Name: `a.tv`. Ấn Next. Nhập Password: `Labhrd@123`, ấn Finish.
  * Chuột phải vào user cần thêm vào Group -> Chọn **Add to Group**. Phần *Enter the object names to select*, nhập tên nhóm và ấn *Check Names*. Chọn OK.
  * Thực hiện tương tự với các User và Group trong các OU khác để tạo ra Group Ban lãnh đạo, Group Cán bộ, Group Nhân viên.

* **Quản trị và share máy in trong Domain (Sử dụng máy in ảo để thực hành):**
  * *Tạo 3 máy in ảo:*
    * `ACCD PRINTER`: Trong phòng kế toán
    * `GENERAL PRINTER`: Máy in chung toàn đơn vị
    * `ITD PRINTER`: Trong phòng IT
  * *Các bước thực hiện:* Mở Control Panel -> Chọn *View Devices and Printers* -> Ấn **Add a printer** -> Chọn *The printer I want isn’t listed* -> Chọn *Add a local printer or network printer with manual settings*, ấn Next. Chọn cổng kết nối mặc định LPT1 và ấn Next. Chọn driver *Generic / IBM Graphics 9-pin*, ấn Next. Đặt tên tương ứng cho máy in và ấn Next. Chọn *Share this printer* để chia sẻ máy in qua mạng, ấn Next rồi Finish. Thực hiện tương tự với 2 máy in còn lại.
  * *Phân quyền máy in:* Chuột phải vào `ACCD PRINTER` -> Chọn **Printer Properties** -> Qua tab **Security**, loại bỏ cấu hình phân quyền mặc định của nhóm *Everyone*, thực hiện thêm group `ACCD` vào và cấp toàn quyền. Sau đó chọn Apply và OK. Đối với máy in `GENERAL PRINTER`, thực hiện thêm group *Domain Computers*. Máy in `ITD PRINTER`, thực hiện thêm group `ITD`. Kết quả kiểm tra hệ thống ghi nhận chính xác.

### 4. Xây dựng và áp dụng các chính sách Group Policy (GPO)

#### 4.1. Chính sách quản lý máy trạm: Chặn sử dụng USB (ngừa virus)
* Ấn tổ hợp phím **Windows + R**, nhập lệnh `gpmc.msc` vào hộp thoại Run và nhấn Enter. Cửa sổ Group Policy Management hiện ra.
* Tìm đến OU `NHANVIEN` (đây là OU chứa tất cả các phòng ban nhân viên trừ ban lãnh đạo).
* Chuột phải vào OU đó chọn **Create a GPO in this domain, and Link it here...**. Đặt tên cho GPO và ấn OK.
* Chuột phải vào GPO vừa tạo, chọn **Edit**. 
* Điều hướng theo đường dẫn: `Computer Configuration` -> `Policies` -> `Administrative Templates` -> `System` -> `Removable Storage Access`.
* Chuột phải vào chính sách *Removable Disks: Deny execute access*, chọn Properties. Chọn **Enabled**, ấn Apply.
* Thực hiện hoàn toàn tương tự với chính sách *Removable Disks: Deny write access* và *Removable Disks: Deny read access* để chặn toàn diện quyền ghi/đọc/thực thi của USB ngoại vi.

#### 4.2. Tự động map ổ đĩa mạng (File Server) cho từng phòng ban
* Mở Group Policy Management, chuột phải vào OU `NHANVIEN` chọn **Create a GPO in this domain, and Link it here...**. Đặt tên cho GPO là `MAP DRIVE`, ấn OK.
* Chuột phải vào GPO vừa tạo, chọn **Edit**.
* Truy cập theo đường dẫn sau: `User Configuration` -> `Preferences` -> `Windows Settings` -> `Drive Maps`.
* Chuột phải vào vùng trống bên phải, chọn **New** -> **Mapped Drive**.
  * **Action:** Chọn **Update**.
  * **Location:** Điền đường dẫn mạng định dạng UNC của thư mục được chia sẻ (Ví dụ: `\\192.168.1.2\DU_LIEU_CONG_TY`).
  * **Reconnect:** Tích chọn (để ổ đĩa tự kết nối lại sau mỗi lần máy trạm khởi động lại hoặc người dùng đăng nhập lại).
  * **Label as:** Đặt tên hiển thị cho ổ đĩa trên máy Client (Ví dụ: `O Dia Du Lieu`).
  * **Drive Letter:** Chọn *Use* và quy định một ký tự chữ cái cho ổ đĩa (Ví dụ: ổ Z:, X:, S:...). Nên chọn các ký tự ở cuối bảng chữ cái để tránh trùng lặp với ổ đĩa vật lý hoặc thiết bị ngoại vi trên máy client.
  * **Connect as:** Để trống (mặc định hệ thống sẽ dùng chính tài khoản user đang đăng nhập để kết nối, đảm bảo user đó đã được phân quyền NTFS thích hợp trên file server).
  * **Hide/Show this drive:** Chọn **Show this drive**.
  * Ấn Apply và chọn OK.

#### 4.3. Đồng bộ hình nền
* Tạo một thư mục lưu trữ ảnh nền trên Server (Ví dụ tên thư mục là `wal`), tiến hành phân quyền share cho nhóm *Everyone* với quyền hạn là **Read**. Sau đó copy file ảnh nền cần thiết lập vào thư mục này.
* Mở giao diện GPMC, tìm đến OU `NHANVIEN`, chuột phải chọn **Create a GPO in this domain...**. Đặt tên cho chính sách là `WALLPAPER`.
* Chuột phải vào GPO vừa tạo chọn **Edit**. 
* Truy cập theo đường dẫn: `User Configuration` -> `Policies` -> `Administrative Templates` -> `Desktop` -> `Desktop`.
* Chuột phải vào mục chính sách **Desktop Wallpaper** chọn **Edit**.
* Tick chọn ô **Enabled**. Tại mục *Wallpaper Name*, nhập chính xác đường dẫn mạng UNC trỏ trực tiếp đến file ảnh nền: `\\192.168.1.2\wal\truong.img`.
* Chọn Apply, nhấn OK. Thực hiện đăng xuất và đăng nhập lại trên máy trạm Client để kiểm tra kết quả đồng bộ.

***

## CHƯƠNG 4: KẾT QUẢ THỰC HIỆN VÀ ĐÁNH GIÁ

### 1. Kết quả kiểm thử
* Hệ thống ghi nhận các máy Client đã thực hiện đăng nhập thành công bằng tài khoản Domain.
* Kiểm chứng thực tế các chính sách GPO đã cấu hình:
  * **Cấm sử dụng USB:** Hệ thống máy trạm hoàn toàn từ chối và hiển thị cảnh báo bảo mật khi kết nối thiết bị USB ngoại vi.
  * **Tự động map ổ đĩa mạng:** Ngay khi user đăng nhập, ổ đĩa mạng dùng chung được tự động gắn thành công với đúng ký tự và tên gọi đã chỉ định sẵn.
  * **Cấu hình đồng bộ hình nền:** Ảnh nền máy tính của toàn bộ nhân viên thuộc OU áp dụng được tự động thay đổi đồng loạt theo ảnh mẫu của Administrator và khóa quyền tự thay đổi của người dùng thông thường.

### 2. Đánh giá ưu và nhược điểm
* **Ưu điểm:** Hệ thống hoạt động ổn định, quản lý người dùng và tài nguyên tập trung cao. Tăng cường tính bảo mật, ngăn ngừa lây nhiễm virus qua USB và tự động hóa tối đa các thao tác cấu hình máy trạm cho quản trị viên mạng.
* **Nhược điểm / Khó khăn:** Quá trình triển khai giả lập hệ thống trên môi trường máy ảo VMware đôi khi gặp lỗi xung đột card mạng ảo (Host-only) khiến máy Client khó nhận diện được Domain Controller trong lần cấu hình đầu tiên, tuy nhiên đã được khắc phục kịp thời bằng cách reset và cấu hình IP tĩnh thủ công một cách đồng bộ.

***

## KẾT LUẬN

### 1. Kết quả đạt được
Sau một thời gian nghiên cứu lý thuyết và tiến hành cấu hình thực nghiệm, đề tài **"Xây dựng và Triển khai hệ thống quản lý thiết bị trong mạng nội bộ sử dụng Active Directory và Group Policy"** đã hoàn thành đầy đủ các mục tiêu đề ra ban đầu. Cụ thể:
* **Về mặt lý thuyết:** Nắm vững cơ chế hoạt động của dịch vụ thư mục Active Directory Domain Services (AD DS) và kiến trúc điều hành của Group Policy Management (GPM). Hiểu rõ các nguyên tắc phân cấp đơn vị tổ chức (OU), quản lý tài khoản người dùng (User), nhóm (Group) và máy trạm (Computer) trong môi trường doanh nghiệp.
* **Về mặt triển khai thực nghiệm:**
  * **Xây dựng hạ tầng lõi:** Triển khai thành công Domain Controller trên nền tảng Windows Server, tích hợp cấu hình các dịch vụ mạng nền tảng như DNS để đảm bảo hệ thống định danh phân giải mượt mà.
  * **Quản lý tập trung:** Tổ chức cây thư mục OU một cách khoa học, phản ánh đúng sơ đồ tổ chức phòng ban thực tế của đơn vị; thực hiện join các máy trạm (Client) chạy Windows vào Domain an toàn.
  * **Áp dụng chính sách bảo mật (GPO):** Triển khai thành công các chính sách Group Policy để kiểm soát thiết bị một cách tự động xuống các máy trạm qua mạng, bao gồm: Quản lý quyền hạn sử dụng thiết bị ngoại vi (chặn USB), tự động map ổ đĩa mạng và máy in theo từng phòng ban, tối ưu hóa bảo mật hệ thống (yêu cầu độ phức tạp mật khẩu, giới hạn quyền truy cập Control Panel/Command Prompt).

### 2. Hướng phát triển đề tài
Mặc dù hệ thống đã đáp ứng tốt các nhu cầu quản lý cơ bản trong mạng LAN, tuy nhiên để tối ưu hóa hạ tầng mạng quy mô lớn hơn, đề tài có thể tiếp tục mở rộng theo các hướng sau:
* **Tích hợp giải pháp giám sát và phân tích Logs trung tâm:** Triển khai thêm các hệ thống như Syslog Server hoặc các giải pháp SIEM (ví dụ: Wazuh, Splunk) để thu thập và phân tích Logs tập trung từ Active Directory, giúp phát hiện sớm các hành vi đăng nhập bất thường hoặc thay đổi chính sách trái phép.
* **Triển khai giải pháp Dự phòng (Fault Tolerance):** Nâng cấp hạ tầng lên mô hình Multiple Domain Controllers (Additional Domain Controller - ADC) để đảm bảo tính sẵn sàng cao (High Availability), tránh tình trạng gián đoạn toàn bộ hệ thống khi Single Point of Failure (Primary DC) gặp sự cố.
* **Mở rộng quản lý thiết bị di động và làm việc từ xa (MDM / Hybrid Cloud):** Nghiên cứu giải pháp Microsoft Intune hoặc cấu hình Hybrid Azure AD để quản lý không chỉ máy tính Windows trong LAN, mà cả các thiết bị di động (Laptop, Smartphone) của nhân viên khi làm việc từ xa (Work From Home).
* **Áp dụng kiến trúc bảo mật Zero Trust:** Tích hợp xác thực đa yếu tố (MFA) đối với các tài khoản quản trị và áp dụng chính sách kiểm soát truy cập nghiêm ngặt dựa trên trạng thái an toàn của thiết bị trước khi cho phép kết nối vào hệ thống mạng nội bộ.

***

## TÀI LIỆU THAM KHẢO
1. Ingo Rammer, *Advanced .Net Remoting (C# Edition)*, Impressions Book and Journal Services, Inc (2002).
2. Andrew Krowczyk, Vinod Kumar, Nauman Laghari, Tim Parker, Srinivasa Sivakumar, *Professional .NET Network Programming*, Wrox Press Ltd.
3. Nguyễn Huy Khánh, *Mã nguồn phần mềm chat trong mạng Lan*, Đồ án tốt nghiệp.
