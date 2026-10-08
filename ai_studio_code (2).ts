import { Moderator, Order, Customer, FinancialAccount } from "@/types";

export const FIXED_MODERATORS: Moderator[] = [
  { code: "OWNER", name: "Tawhidur Rahman (Owner)", role: "OWNER", commissionRate: 0, isActive: true },
  { code: "145974", name: "Tanvir Ahmed", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "638251", name: "Sadik Hasan", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "924716", name: "Rafiqul Islam", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "317845", name: "Zubair Hossain", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "751392", name: "Mahmudul Haque", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "486203", name: "Shahriar Kabir", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "829561", name: "Naimur Rahman", role: "MODERATOR", commissionRate: 60, isActive: true },
  { code: "563728", name: "Farhan Sakib", role: "MODERATOR", commissionRate: 60, isActive: true },
];

export const INITIAL_ACCOUNTS: FinancialAccount[] = [
  { id: "Cash", currentBalance: 18500 },
  { id: "Bank", currentBalance: 85000 },
  { id: "bKash", currentBalance: 14200 },
  { id: "Nagad", currentBalance: 7800 },
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: "cust-1",
    name: "Tanvir Rahman",
    phone: "01711223344",
    normalizedPhone: "01711223344",
    address: "House 14, Road 5, Dhanmondi, Dhaka",
    totalOrders: 5,
    deliveredOrders: 5,
    returnedOrders: 0,
    riskScore: 100,
  },
  {
    id: "cust-2",
    name: "Ariful Haque",
    phone: "01822334455",
    normalizedPhone: "01822334455",
    address: "GEC Circle, Nasirabad, Chattogram",
    totalOrders: 3,
    deliveredOrders: 2,
    returnedOrders: 1,
    riskScore: 66.7,
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: "ord-1001",
    orderNumber: "NS-2026-1001",
    trackingToken: "tk-sec-9812401",
    customerName: "Tanvir Rahman",
    customerPhone: "01711223344",
    customerAddress: "House 14, Road 5, Dhanmondi, Dhaka",
    customerDistrict: "Dhaka",
    moderatorCode: "145974",
    jerseyTitle: "Real Madrid 24/25 Home",
    jerseyCategory: "Player Version",
    size: "L",
    customName: "BELLINGHAM",
    customNumber: "5",
    quantity: 1,
    codAmount: 1150,
    advanceAmount: 200,
    advanceAccount: "bKash",
    appStatus: "Delivered",
    courierName: "Steadfast",
    consignmentId: "290891895",
    trackingCode: "SFR772918",
    isExchange: false,
    commissionRate: 60,
    earnedCommission: 60,
    createdAt: Date.now() - 86400000 * 2,
    deliveredAt: Date.now() - 86400000,
  },
];