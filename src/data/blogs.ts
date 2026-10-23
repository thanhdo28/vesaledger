export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  readTime: { en: string; vi: string };
  category: { en: string; vi: string };
  title: { en: string; vi: string };
  summary: { en: string; vi: string };
  author: { en: string; vi: string };
  content: {
    en: string;
    vi: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-small-vlms-beat-ocr',
    date: '2026-10-18',
    readTime: { en: '6 min read', vi: '6 phút đọc' },
    category: { en: 'AI Architecture', vi: 'Kiến trúc AI' },
    title: {
      en: 'Why Small VLMs Outperform Generalist LLMs for Financial Document Reconciliation',
      vi: 'Tại sao Small VLM vượt trội hơn LLM tổng quát trong đối soát chứng từ tài chính'
    },
    summary: {
      en: 'Benchmarking extraction latency, compute economics, and mathematical precision across complex multi-page invoices and nested tables.',
      vi: 'So sánh độ trễ trích xuất, chi phí tính toán và độ chính xác toán học trên bảng biểu phức tạp và hóa đơn nhiều trang.'
    },
    author: {
      en: 'VeraLedger Applied AI & Finance Team',
      vi: 'Đội ngũ Ứng dụng AI & Tài chính VeraLedger'
    },
    content: {
      en: `
### The Core Problem with Generalist LLMs in Financial Auditing

When finance engineering teams first experiment with automated invoice extraction, the default instinct is often to send raw document images or OCR text dumps into massive frontier models (e.g. 70B+ parameter generalist vision models). 

In production across thousands of monthly documents, this architecture encounters three critical bottlenecks:

1. **Inference Latency & Queue Stalls:** Generalist multimodal models typically require **3.5 to 8.2 seconds** per page. When an enterprise accounts payable team ingests an end-of-month batch of 1,200 invoices (many containing 4–10 itemized pages), total processing time stretches into hours.
2. **Floating Point & Tabular Hallucinations:** Large autoregressive language models do not perform native deterministic arithmetic. When parsing nested discount structures, multiple tax sub-rates (e.g. 5%, 8%, and 10% statutory VAT on the same bill), or multi-currency conversions, generalist models occasionally hallucinate rounding differences of $0.01 to $1.20—an immediate audit failure in enterprise general ledgers.
3. **Prohibitive Unit Economics:** Pushing high-resolution document pages through frontier API tokens costs approximately **$0.02 to $0.06 per page**. At 50,000 monthly invoices, software margin degrades rapidly.

---

### The Small VLM Alternative: Spatial Coordinate Grounding

VeraLedger deploys specialized compact Vision-Language Models (< 3 Billion parameters) fine-tuned exclusively on financial document geometry, tax schemas, and cross-border bank wire receipts.

\`\`\`
[Document Ingestion]
       │
       ▼
[Small VLM Spatial Grounding (<850ms)]
  ├── Bounding Box Coordinate Mapping (x, y, w, h)
  ├── 42 Structured Financial Attributes
  └── Table Grid Tensor Extraction
       │
       ▼
[Deterministic Arithmetic Validator]
  ├── Subtotal + VAT Rate ≡ Line Item Sum Check
  └── Currency FX Settled Rate Cross-Verification
       │
       ▼
[Straight-Through ERP Journal Entry]
\`\`\`

#### Key Architectural Advantages:

* **Sub-Second Throughput:** Because the model weights are compact and memory-pinned, inference executes in **< 850ms per page** on standard cloud inference chips.
* **Deterministic Coordinate Traceability:** Every extracted field—from the vendor's Tax ID to individual SKU unit prices—is anchored to exact pixel coordinates. An auditor clicking any ledger line item can inspect the highlighted source bounding box immediately.
* **Zero Token Inflation on Tabular Data:** Rather than transcribing entire pages into conversational text, the model directly maps spatial document blocks into structured ISO 20022 and ERP JSON schemas.

### Key Takeaway for CFOs and Controllers

For mission-critical financial automation, model size does not equal financial reliability. Dedicated Small VLMs paired with deterministic mathematical verification rules provide the sub-second speed, audit defensibility, and cost efficiency required for true straight-through ledger closing.
      `,
      vi: `
### Vấn đề cốt lõi của LLM tổng quát trong kiểm toán tài chính

Khi các đội ngũ công nghệ tài chính bắt đầu tự động hóa quy trình bóc tách hóa đơn, phản xạ tự nhiên thường là gửi ảnh hóa đơn hoặc chuỗi văn bản OCR vào các mô hình ngôn ngữ lớn tổng quát (như các mô hình thị giác trên 70 tỷ tham số).

Tuy nhiên, trong môi trường vận hành thực tế xử lý hàng nghìn chứng từ mỗi tháng, kiến trúc này nhanh chóng bộc lộ 3 rào cản nghiêm trọng:

1. **Độ trễ xử lý cao & Tắc nghẽn hàng đợi:** Các mô hình tổng quát thường mất từ **3,5 đến 8,2 giây** cho mỗi trang tài liệu. Khi phòng kế toán nạp đợt quyết toán cuối tháng gồm 1.200 hóa đơn (nhiều hóa đơn dài 4–10 trang bảng kê), thời gian xử lý kéo dài nhiều giờ đồng hồ.
2. **Ảo giác số học & Sai lệch làm tròn:** Các mô hình ngôn ngữ lớn hoạt động theo cơ chế dự đoán từ tiếp theo, không thực hiện phép tính số học tất định. Khi xử lý các hóa đơn có chiết khấu phức tạp, nhiều mức thuế suất GTGT (như 5%, 8% và 10% trên cùng một hóa đơn), LLM thường xuyên làm tròn sai từ 1.000 đ đến hàng chục nghìn đồng—điều tối kỵ khi vào sổ cái kế toán.
3. **Chi phí token quá lớn:** Việc gửi ảnh chứng từ độ phân giải cao vào các API lớn tiêu tốn từ **0,02$ đến 0,06$ mỗi trang**. Với quy mô 50.000 chứng từ/tháng, chi phí này trở thành gánh nặng lớn.

---

### Giải pháp Small VLM: Tối ưu hóa theo tọa độ không gian chứng từ

VeraLedger áp dụng kiến trúc Vision-Language Model tinh gọn (< 3 tỷ tham số) được huấn luyện chuyên sâu cho cấu trúc chứng từ tài chính, bảng kê hóa đơn điện tử và chứng từ thanh toán ngân hàng.

\`\`\`
[Nạp chứng từ đa kênh]
       │
       ▼
[Small VLM Định vị Tọa độ (<850ms)]
  ├── Bản đồ tọa độ Bounding Box (x, y, w, h)
  ├── 42 trường thuộc tính tài chính chuẩn hóa
  └── Bóc tách ma trận bảng kê chi tiết
       │
       ▼
[Bộ kiểm tra toán học tất định]
  ├── Tổng tiền + Thuế suất ≡ Tổng cộng từng dòng hàng
  └── Đối soát tỷ giá ngoại tệ & thanh toán thực tế
       │
       ▼
[Tự động ghi sổ cái ERP (STP)]
\`\`\`

#### Các ưu thế kỹ thuật vượt trội:

* **Tốc độ dưới 1 giây:** Nhờ mô hình tinh gọn được nạp sẵn vào bộ nhớ RAM GPU, thời gian xử lý đạt **< 850ms mỗi trang**.
* **Vết kiểm toán minh bạch:** Mỗi trường dữ liệu trích xuất—từ Mã số thuế nhà cung cấp đến đơn giá từng mặt hàng—đều gắn liền với tọa độ pixel gốc trên hóa đơn. Kế toán trưởng có thể nhấp chuột để xem ngay vị trí chứng từ gốc.
* **Không bịa đặt số liệu:** Thay vì diễn giải văn bản tự do, mô hình trích xuất thẳng vào cấu trúc JSON kế toán theo chuẩn ERP và quy định thuế hiện hành.

### Kết luận cho Giám đốc Tài chính và Kế toán trưởng

Trong tự động hóa tài chính, mô hình càng lớn không đồng nghĩa với độ tin cậy càng cao. Small VLM chuyên biệt kết hợp cùng hệ thống luật kiểm tra toán học chặt chẽ là chìa khóa mang lại tốc độ, sự an tâm kiểm toán và chi phí tối ưu cho doanh nghiệp.
      `
    }
  },
  {
    id: 'post-2',
    slug: 'ap-fraud-iban-tampering',
    date: '2026-10-14',
    readTime: { en: '5 min read', vi: '5 phút đọc' },
    category: { en: 'Security & Risk', vi: 'Bảo mật & Rủi ro' },
    title: {
      en: 'Accounts Payable Fraud Defense: Intercepting Vendor Impersonation & Account Tampering',
      vi: 'Phòng thủ gian lận công nợ phải trả: Chặn đứng giả mạo nhà cung cấp & sửa đổi tài khoản'
    },
    summary: {
      en: 'How automated 4-way cross-verification stops phantom invoices, altered payment coordinates, and unapproved bank wire instructions before payment execution.',
      vi: 'Cách hệ thống đối soát 4 chiều phát hiện hóa đơn ma, sửa đổi tài khoản thanh toán và ủy nhiệm chi không hợp lệ trước khi giải ngân.'
    },
    author: {
      en: 'VeraLedger Applied AI & Finance Team',
      vi: 'Đội ngũ Ứng dụng AI & Tài chính VeraLedger'
    },
    content: {
      en: `
### The $2.7 Billion Enterprise Vulnerability: Invoice Tampering

Business Email Compromise (BEC) and accounts payable fraud remain the single largest vector of direct financial loss for mid-market and enterprise organizations.

The standard attack vector rarely involves sophisticated malware. Instead, threat actors execute a simple administrative exploit:
1. Intercept an email thread between an approved vendor and the procurement department.
2. Modify the **bank remittance account / IBAN / Beneficiary Name** on an otherwise authentic-looking PDF invoice.
3. Rely on tired AP clerks to cross-check only the invoice total and PO number, while overlooking the changed payment destination.

When manual clerks process hundreds of bills weekly, spotting an altered account number on page 4 of a vendor statement is virtually impossible.

---

### How VeraLedger's Forensic Guard Works

Rather than treating invoice processing as a simple OCR text extraction task, VeraLedger's engine treats accounts payable as a **cryptographic trust chain**.

\`\`\`
[Incoming Bill PDF / XML] 
          │
          ▼
┌────────────────────────────────────────────────────────┐
│ 1. Entity Registry Verification                        │
│    Cross-check Tax ID & Vendor Name against Tax Master │
├────────────────────────────────────────────────────────┤
│ 2. Remittance Coordinate Hash Check                    │
│    Match Bank Account / IBAN against approved vault    │
├────────────────────────────────────────────────────────┤
│ 3. Dual-Approval Threshold Gate                        │
│    Account change detected? Require signed token       │
└────────────────────────────────────────────────────────┘
          │
     ┌────┴────┐
     ▼         ▼
  [Pass]    [INTERCEPT & FREEZE]
     │         │
     ▼         ▼
[Auto-Post]  [Alert Chief Accountant & CFO]
\`\`\`

#### Three Pillars of Automated Defense:

1. **Beneficiary Account Fingerprinting:** Every approved vendor profile maintains a cryptographically signed list of authorized settlement accounts. If an incoming invoice specifies a new account, the bill is automatically quarantined.
2. **Vendor Operational Status Lookup:** In markets like Vietnam, the engine queries authorized tax status data in real time. If a vendor was suspended or dissolved by tax authorities prior to the invoice date, the bill is blocked immediately.
3. **Historical Wire Slippage Alerts:** If payment instructions deviate from historical clearing patterns (e.g., unexpected intermediary banks, unusual currency routing), the system generates an audit flag before the bank payment order (UNC) is released.

### Practical Recommendation for Finance Teams

Never allow single-person approval on vendor bank detail updates. Automated cross-referencing between historical ERP vendor masters, real-time tax registries, and incoming invoice metadata eliminates the human fatigue vulnerability entirely.
      `,
      vi: `
### Lỗ hổng gian lận công nợ phổ biến trong doanh nghiệp

Giả mạo email doanh nghiệp (BEC) và gian lận trong quy trình công nợ phải trả (AP) là nguyên nhân gây thất thoát tài chính trực tiếp lớn nhất đối với các doanh nghiệp vừa và lớn.

Kịch bản tấn công nguy hiểm nhất hiện nay không đòi hỏi mã độc phức tạp, mà khai thác chính sơ hở quy trình hành chính:
1. Kẻ gian theo dõi chuỗi email trao đổi giữa nhà cung cấp và phòng mua hàng.
2. Thay đổi **số tài khoản thụ hưởng / tên ngân hàng** trên file hóa đơn PDF hoặc đề nghị thanh toán.
3. Lợi dụng việc nhân viên kế toán thanh toán chỉ đối chiếu số tiền tổng cộng và số đơn đặt hàng (PO) mà không kiểm tra chéo từng ký tự số tài khoản ngân hàng.

Khi một nhân viên kế toán phải duyệt hàng trăm chứng từ mỗi tuần, việc phát hiện một số tài khoản bị thay đổi trên trang 4 của hợp đồng là điều rất khó khăn nếu chỉ làm thủ công.

---

### Cơ chế hoạt động của Lá chắn Forensic Guard VeraLedger

Thay vì chỉ coi hóa đơn là tệp văn bản cần OCR, VeraLedger tiếp cận quy trình thanh toán như một **chuỗi xác thực mật mã đa chiều**.

\`\`\`
[Hóa đơn / Đề nghị thanh toán]
          │
          ▼
┌────────────────────────────────────────────────────────┐
│ 1. Xác thực Danh tính Pháp nhân Doanh nghiệp          │
│    Đối chiếu MST & Tên người bán với CSDL Thuế         │
├────────────────────────────────────────────────────────┤
│ 2. Kiểm tra Dấu vân tay Tài khoản Thụ hưởng           │
│    Khớp số tài khoản ngân hàng với danh bạ đã phê duyệt│
├────────────────────────────────────────────────────────┤
│ 3. Cổng kiểm soát Thay đổi Thông tin                   │
│    Phát hiện đổi tài khoản? Yêu cầu chữ ký xác nhận 2 lớp│
└────────────────────────────────────────────────────────┘
          │
     ┌────┴────┐
     ▼         ▼
  [Hợp lệ]   [CHẶN TỨC THÌ & ĐÓNG BĂNG]
     │         │
     ▼         ▼
[Vào sổ cái] [Báo động khẩn cấp Kế toán trưởng & CFO]
\`\`\`

#### 3 lớp phòng thủ tự động:

1. **Định danh tài khoản ngân hàng chính thức:** Mỗi nhà cung cấp trong hệ thống đều có danh sách tài khoản thụ hưởng đã được phê duyệt. Nếu hóa đơn mới xuất hiện tài khoản lạ, chứng từ lập tức bị tạm dừng.
2. **Rà soát trạng thái hoạt động người bán:** Hệ thống đối chiếu thời gian thực với cơ sở dữ liệu cơ quan thuế. Nếu doanh nghiệp xuất hóa đơn đã đóng mã số thuế hoặc ngừng hoạt động trước ngày phát hành, hóa đơn sẽ bị chặn ngay.
3. **Cảnh báo bất thường luồng thanh toán:** Khi ủy nhiệm chi có dấu hiệu lệch tên đơn vị thụ hưởng so với pháp nhân xuất hóa đơn, hệ thống sẽ gắn cờ cảnh báo rủi ro loại trừ thuế GTGT trước khi chuyển tiền.

### Lời khuyên thiết thực cho Kế toán trưởng

Tuyệt đối không để việc thay đổi thông tin tài khoản thanh toán của nhà cung cấp phụ thuộc vào xác nhận email đơn lẻ. Tự động hóa đối chiếu chéo giữa dữ liệu ERP, trạng thái pháp lý của cơ quan thuế và chứng từ thanh toán là giải pháp an toàn nhất để bảo vệ dòng tiền.
      `
    }
  },
  {
    id: 'post-3',
    slug: '4-way-matching-erp-automation',
    date: '2026-10-08',
    readTime: { en: '7 min read', vi: '7 phút đọc' },
    category: { en: 'ERP & Workflows', vi: 'ERP & Quy trình' },
    title: {
      en: 'Engineering 4-Way Matching: Connecting Purchase Orders, Warehouse Slips, Invoices, and Bank Wires',
      vi: 'Kỹ thuật đối soát 4 chiều: Kết nối Đơn đặt hàng, Phiếu nhập kho, Hóa đơn và Sao kê ngân hàng'
    },
    summary: {
      en: 'A technical blueprint for achieving straight-through processing (STP) into NetSuite, SAP, and local ERP systems with zero human intervention on compliant batches.',
      vi: 'Khung kiến trúc tự động hóa quy trình quyết toán (STP) vào NetSuite, SAP và ERP doanh nghiệp mà không cần can thiệp thủ công.'
    },
    author: {
      en: 'VeraLedger Applied AI & Finance Team',
      vi: 'Đội ngũ Ứng dụng AI & Tài chính VeraLedger'
    },
    content: {
      en: `
### Moving Beyond Fragile 2-Way Invoice Matching

In standard bookkeeping, "two-way matching" simply confirms that the total on a vendor's bill equals the total on an issued purchase order. 

In enterprise manufacturing, wholesale, and multi-warehouse operations, 2-way matching leaves massive financial exposure:
* **Goods Not Received:** An invoice arrives and gets paid, but the physical pallets at the regional depot never passed quality inspection or were short-shipped.
* **Price Variance on Partial Deliveries:** A vendor bills for 100 units at the contracted unit price, but only 40 units were accepted into inventory, creating unbalanced liability accounts.
* **Missing Statutory Bank Settlement Proof:** In regulated jurisdictions (such as Vietnam under tax administration decrees for purchases >= 20M VND), payment must be executed via documented bank transfer matching the registered tax entity, or input tax deductibility is completely lost.

---

### The 4-Way Equation: What True Straight-Through Processing Requires

VeraLedger implements a strict **4-Way Balance Equation** before generating balanced debit/credit journal entries into your general ledger:

$$\\text{PO Line Quantity} \\equiv \\text{Warehouse Receipt Quantity} \\equiv \\text{Invoice Item Qty} \\equiv \\text{Settled Bank Outflow}$$

\`\`\`
┌──────────────────┐       ┌────────────────────────┐
│ Purchase Order   │ <───> │ Warehouse Goods Receipt│
│ (NetSuite/SAP)   │       │ (Depot Physical Count) │
└────────┬─────────┘       └───────────┬────────────┘
         │                             │
         └──────────────┬──────────────┘
                        │
                        ▼
         ┌─────────────────────────────┐
         │ 4-Way Variance Rule Engine  │
         └──────────────┬──────────────┘
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
┌──────────────────┐       ┌────────────────────────┐
│ Vendor E-Invoice │ <───> │ Bank Payment Slip (UNC)│
│ (Decree 123 XML) │       │ (Settled Bank Feeds)   │
└──────────────────┘       └────────────────────────┘
\`\`\`

#### How the 4-Way Pipeline Executes:

1. **PO Ingestion:** Pulls approved purchase orders via ERP API (NetSuite SuiteTalk, SAP OData, or MISA webhooks) including line-item SKU codes, quantity caps, and delivery schedules.
2. **Receiving Slip Correlation:** Ingests barcode scans, warehouse intake receipts, and bill of lading slips from regional distribution hubs.
3. **Invoice Itemization & Tax Check:** Parses vendor XML/PDF invoices, verifies statutory VAT rates, and checks math sums across line items.
4. **Bank Settlement Reconciliation:** Cross-references wire transfer confirmation numbers (UNC / MT940), payee account ownership, and settlement timestamps.

### Quantifiable Business Outcome

When all four data points match within pre-configured enterprise tolerance thresholds (e.g. 0.00% price variance and 100% quantity parity), the bill is marked as **STP (Straight-Through Processed)** and posted directly to the general ledger.

Human reviewers only touch the 2–4% exception queue where real discrepancies exist—reducing quarterly audit closing preparation from days to under one hour.
      `,
      vi: `
### Tại sao đối soát 2 chiều truyền thống không còn đủ an toàn?

Trong kế toán cơ bản, "đối soát 2 chiều" (2-way matching) chỉ đơn giản là so sánh số tiền trên hóa đơn người bán gửi về có bằng số tiền trên đơn đặt hàng (PO) hay không.

Tuy nhiên, trong các doanh nghiệp sản xuất, thương mại bán buôn và chuỗi phân phối nhiều kho, đối soát 2 chiều để lộ những rủi ro rất lớn:
* **Chưa thực nhận hàng:** Hóa đơn đã về và được thanh toán, nhưng thực tế hàng hóa tại kho chi nhánh chưa được kiểm định chất lượng hoặc giao thiếu số lượng.
* **Chênh lệch giá khi giao nhiều đợt:** Nhà cung cấp xuất hóa đơn cho toàn bộ 100 sản phẩm theo hợp đồng, nhưng kho chỉ mới tiếp nhận 40 sản phẩm, dẫn đến mất cân đối tài khoản công nợ và kho.
* **Thiếu chứng từ thanh toán ngân hàng bắt buộc:** Tại Việt Nam, theo quy định quản lý thuế với các giao dịch mua hàng từ 20 triệu đồng trở lên, doanh nghiệp bắt buộc phải có chứng từ thanh toán không dùng tiền mặt (Ủy nhiệm chi ngân hàng) chuyển đúng vào tài khoản nhà cung cấp, nếu không sẽ bị loại toàn bộ thuế GTGT đầu vào và chi phí được trừ khi tính thuế TNDN.

---

### Phương trình Đối soát 4 Chiều Toàn diện

VeraLedger áp dụng **Phương trình Cân đối 4 Chiều** nghiêm ngặt trước khi tự động hạch toán định khoản Nợ/Có vào sổ cái ERP:

$$\\text{Số lượng Đơn PO} \\equiv \\text{Số lượng Phiếu Nhập Kho} \\equiv \\text{Số lượng trên Hóa đơn} \\equiv \\text{Dòng tiền Ủy nhiệm chi}$$

\`\`\`
┌──────────────────┐       ┌────────────────────────┐
│ Đơn đặt hàng PO  │ <───> │ Phiếu nhập kho thực tế │
│ (ERP NetSuite/SAP)│       │ (Kiểm đếm tại kho bãi) │
└────────┬─────────┘       └───────────┬────────────┘
         │                             │
         └──────────────┬──────────────┘
                        │
                        ▼
         ┌─────────────────────────────┐
         │ Engine Đối soát 4 Chiều     │
         └──────────────┬──────────────┘
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
┌──────────────────┐       ┌────────────────────────┐
│ Hóa đơn điện tử  │ <───> │ Chứng từ ngân hàng UNC │
│ (XML Nghị định 123)│     │ (Sao kê Techcombank/VCB)│
└──────────────────┘       └────────────────────────┘
\`\`\`

#### Quy trình xử lý tự động 4 bước:

1. **Thu thập đơn PO:** Kết nối trực tiếp qua API với ERP (SAP, NetSuite, MISA, FAST, Bravo) để lấy thông tin chi tiết từng mã SKU, đơn giá phê duyệt và hạn mức ngân sách.
2. **Khớp phiếu nhập kho:** Đối chiếu dữ liệu xuất/nhập thực tế từ hệ thống quản lý kho (WMS) hoặc phiếu nhập kho đã ký nhận.
3. **Bóc tách hóa đơn & Rà soát thuế:** Đọc file XML hóa đơn điện tử chuẩn Nghị định 123, kiểm tra tính hợp lệ của thuế suất GTGT và phép tính thành tiền.
4. **Đối chiếu ủy nhiệm chi (UNC):** So khớp mã giao dịch ngân hàng, tên đơn vị thụ hưởng và ngày trích nợ thực tế trên sao kê.

### Hiệu quả thực tế cho doanh nghiệp

Khi cả 4 nguồn chứng từ đều khớp hoàn toàn theo ngưỡng dung sai cho phép (chênh lệch 0,00%), hóa đơn sẽ được hệ thống tự động ghi sổ cái (Straight-Through Processing). 

Đội ngũ kế toán chỉ cần tập trung xử lý 2–4% các trường hợp ngoại lệ phát sinh chênh lệch thực tế—giảm thời gian chốt sổ và chuẩn bị hồ sơ quyết toán thuế từ nhiều ngày xuống dưới 45 phút.
      `
    }
  }
];
