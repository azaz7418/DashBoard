/* ======================
   DASHBOARD OVERVIEW
   ====================== */
export const dashboardOverview = {
  kpis: {
    totalRevenue: 125430,
    totalOrders: 982,
    totalCustomers: 743,
    conversionRate: 3.4,
    averageOrderValue: 127.6,
    pendingOrders: 46,
    returnedOrders: 18,
  },

  recentOrders: [
    {
      id: "ORD-1011",
      customer: "Arafat Rahman",
      amount: 209.97,
      status: "Delivered",
      date: "2025-12-12",
    },
    {
      id: "ORD-1012",
      customer: "Nusrat Jahan",
      amount: 129.99,
      status: "Pending",
      date: "2025-12-13",
    },
  ],

  lowStockAlerts: [
    { productId: "PRD-002", name: "Smart Watch", stock: 3 },
    { productId: "PRD-006", name: "USB Charger", stock: 5 },
  ],
};

/* ======================
   ANALYTICS PAGE
   ====================== */
export const analyticsData = {
  salesOverTime: [
    { id: 1, date: "2025-12-08", revenue: 4200 },
    { id: 2, date: "2025-12-09", revenue: 3900 },
    { id: 3, date: "2025-12-10", revenue: 5100 },
    { id: 4, date: "2025-12-11", revenue: 4600 },
    { id: 5, date: "2025-12-12", revenue: 5800 },
    { id: 6, date: "2025-12-13", revenue: 6100 },
  ],

  revenueByCategory: [
    { id: 1, category: "Electronics", revenue: 45200 },
    { id: 2, category: "Fashion", revenue: 36700 },
    { id: 3, category: "Home & Living", revenue: 21400 },
    { id: 4, category: "Groceries", revenue: 22130 },
  ],

  ordersByStatus: [
    { id: 1, status: "Completed", value: 680 },
    { id: 2, status: "Pending", value: 160 },
    { id: 3, status: "Cancelled", value: 82 },
    { id: 4, status: "Returned", value: 60 },
  ],
};

/* ======================
   ORDERS PAGE
   ====================== */
export const ordersData = [
  {
    id: "ORD-1001",
    customerId: "CUS-001",
    customerName: "Arafat Rahman",
    totalAmount: 209.97,
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    createdAt: "2025-12-03",
    products: ["Wireless Headphone", "Smart Watch"],
  },
  {
    id: "ORD-1002",
    customerId: "CUS-002",
    customerName: "Nusrat Jahan",
    totalAmount: 129.99,
    paymentMethod: "bKash",
    paymentStatus: "Paid",
    orderStatus: "Pending",
    createdAt: "2025-12-06",
    products: ["Men's Jacket"],
  },
  {
    id: "ORD-1003",
    customerId: "CUS-003",
    customerName: "Tanvir Ahmed",
    totalAmount: 79.99,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Unpaid",
    orderStatus: "Cancelled",
    createdAt: "2025-12-07",
    products: ["Kitchen Blender"],
  },
  {
    id: "ORD-1004",
    customerId: "CUS-003",
    customerName: "Tanvir Ahmed",
    totalAmount: 99.99,
    paymentMethod: "bKash",
    paymentStatus: "Paid",
    orderStatus: "Pending",
    createdAt: "2025-10-07",
    products: ["Smart Watch"],
  },
];

/* ======================
   PRODUCTS PAGE
   ====================== */
export const productsData = [
  {
    id: "PRD-001",
    name: "Wireless Headphone",
    category: "Electronics",
    price: 89.99,
    stock: 120,
    status: "Active",
    createdAt: "2025-01-15",
  },
  {
    id: "PRD-002",
    name: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    stock: 3,
    status: "Low Stock",
    createdAt: "2025-02-10",
  },
  {
    id: "PRD-003",
    name: "Men's Jacket",
    category: "Fashion",
    price: 59.99,
    stock: 48,
    status: "Active",
    createdAt: "2025-03-22",
  },
  {
    id: "PRD-004",
    name: "Kitchen Blender",
    category: "Home & Living",
    price: 79.99,
    stock: 0,
    status: "Out of Stock",
    createdAt: "2025-04-18",
  },
];

/* ======================
   CUSTOMERS PAGE
   ====================== */
export const customersData = [
  {
    id: "CUS-001",
    name: "Arafat Rahman",
    email: "arafat@gmail.com",
    city: "Dhaka",
    totalOrders: 12,
    totalSpent: 2140.5,
    status: "Active",
    joinedAt: "2025-03-11",
    lastLogin: "2025-12-15",
  },
  {
    id: "CUS-002",
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    city: "Chattogram",
    totalOrders: 7,
    totalSpent: 1240.75,
    status: "Active",
    joinedAt: "2025-05-19",
    lastLogin: "2025-12-13",
  },
  {
    id: "CUS-003",
    name: "Tanvir Ahmed",
    email: "tanvir@gmail.com",
    city: "Sylhet",
    totalOrders: 3,
    totalSpent: 540.0,
    status: "Inactive",
    joinedAt: "2025-07-02",
    lastLogin: "2025-11-20",
  },
  {
    id: "CUS-004",
    name: "Azaz Ahmed",
    email: "azaz@gmail.com",
    city: "Khulna",
    totalOrders: 3,
    totalSpent: 540.0,
    status: "Inactive",
    joinedAt: "2025-07-02",
    lastLogin: "2025-11-20",
  },
];

/* ======================
   INVENTORY PAGE
   ====================== */
// Fixed: Using 'name' instead of 'product' to keep it consistent with productsData
export const inventoryData = [
  { id: "PRD-001", name: "Wireless Headphone", stock: 120, status: "In Stock" },
  { id: "PRD-002", name: "Smart Watch", stock: 3, status: "Low Stock" },
  { id: "PRD-004", name: "Kitchen Blender", stock: 0, status: "Out of Stock" },
];

/* ======================
   PAYMENTS PAGE
   ====================== */
export const paymentsData = {
  summary: {
    totalReceived: 107230,
    pending: 18200,
    failed: 3400,
  },

  methods: [
    { id: 1, method: "Credit Card", amount: 54200 },
    { id: 2, method: "bKash", amount: 31600 },
    { id: 3, method: "Nagad", amount: 21430 },
    { id: 4, method: "Cash on Delivery", amount: 18200 },
  ],
};

/* ======================
   SHIPPING PAGE
   ====================== */
export const shippingData = {
  summary: {
    delivered: 720,
    inTransit: 130,
    pending: 82,
    failed: 18,
  },

  shipments: [
    {
      orderId: "ORD-1001",
      courier: "Pathao",
      trackingId: "TRK-88921",
      status: "Delivered",
      shippedDate: "2025-12-04",
      expectedDelivery: "2025-12-05",
    },
    {
      orderId: "ORD-1002",
      courier: "Steadfast",
      trackingId: "TRK-88935",
      status: "In Transit",
      shippedDate: "2025-12-12",
      expectedDelivery: "2025-12-15",
    },
  ],
};

/* ======================
   REPORTS PAGE
   ====================== */
export const reportsData = [
  { id: 1, name: "Sales Report", type: "Monthly", format: "CSV", size: "1.2MB" },
  { id: 2, name: "Orders Report", type: "Weekly", format: "Excel", size: "850KB" },
  { id: 3, name: "Inventory Report", type: "Monthly", format: "PDF", size: "2.4MB" },
];

/* ======================
   SETTINGS PAGE
   ====================== */
export const settingsData = {
  storeInfo: {
    storeName: "NextCommerce",
    currency: "BDT",
    taxRate: 5,
    timezone: "Asia/Dhaka",
  },
  adminProfile: {
    name: "Super Admin",
    email: "admin@nextcommerce.com",
    role: "Administrator",
    avatar: "/avatars/admin-default.png",
  },
};
