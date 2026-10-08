export type UserRole = "OWNER" | "MODERATOR";

export interface Moderator {
  code: string;
  name: string;
  role: UserRole;
  commissionRate: number;
  isActive: boolean;
}

export type OrderStatus =
  | "New"
  | "Call Pending"
  | "Confirmed"
  | "Packing"
  | "Packed"
  | "Sent to Courier"
  | "Courier Active"
  | "Delivered"
  | "Hold"
  | "Cancelled"
  | "Returned"
  | "Exchange";

export type AdvanceAccount = "Cash" | "Bank" | "bKash" | "Nagad";

export interface Order {
  id: string;
  orderNumber: string;
  trackingToken: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerDistrict: string;
  moderatorCode: string;
  jerseyTitle: string;
  jerseyCategory: "Retro" | "Replica" | "BD Premium" | "Fan Version" | "Player Version";
  size: "S" | "M" | "L" | "XL" | "2XL" | "3XL";
  customName: string;
  customNumber: string;
  quantity: number;
  codAmount: number;
  advanceAmount: number;
  advanceAccount?: AdvanceAccount;
  appStatus: OrderStatus;
  holdReason?: string;
  holdExpectedDate?: string;
  courierName: "Steadfast" | "Pathao" | "Manual";
  consignmentId?: string;
  trackingCode?: string;
  isExchange: boolean;
  commissionRate: number;
  earnedCommission: number;
  createdAt: number;
  deliveredAt?: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  normalizedPhone: string;
  address: string;
  totalOrders: number;
  deliveredOrders: number;
  returnedOrders: number;
  riskScore: number;
}

export interface FinancialAccount {
  id: AdvanceAccount;
  currentBalance: number;
}