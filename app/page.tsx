"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, Phone, MessageSquare, Truck, CheckCircle2, 
  AlertTriangle, Plus, Search, ShieldCheck, DollarSign, Wallet,
  User, RefreshCw, Send, ArrowRight
} from "lucide-react";

export default function HomePage() {
  const [role, setRole] = useState<"OWNER" | "MODERATOR">("OWNER");
  const [activeTab, setActiveTab] = useState<"orders" | "new" | "finance">("orders");
  const [rawText, setRawText] = useState("");

  // Orders Mock State
  const [orders, setOrders] = useState([
    {
      id: "ord-1001",
      orderNumber: "NS-2026-1001",
      trackingToken: "tk-sec-9812401",
      customerName: "Tanvir Rahman",
      customerPhone: "01711223344",
      customerAddress: "House 14, Road 5, Dhanmondi, Dhaka",
      jerseyTitle: "Real Madrid 24/25 Home (Player Version)",
      size: "L",
      customName: "BELLINGHAM",
      customNumber: "5",
      codAmount: 1150,
      advanceAmount: 200,
      appStatus: "Delivered",
      courierName: "Steadfast",
      consignmentId: "290891895",
      riskScore: 100,
      moderatorCode: "145974"
    },
    {
      id: "ord-1002",
      orderNumber: "NS-2026-1002",
      trackingToken: "tk-sec-9812402",
      customerName: "Ariful Haque",
      customerPhone: "01822334455",
      customerAddress: "GEC Circle, Nasirabad, Chattogram",
      jerseyTitle: "Argentina 3 Star Home",
      size: "XL",
      customName: "MESSI",
      customNumber: "10",
      codAmount: 1250,
      advanceAmount: 0,
      appStatus: "Sent to Courier",
      courierName: "Steadfast",
      consignmentId: "290891900",
      riskScore: 66.7,
      moderatorCode: "638251"
    }
  ]);

  // Form State
  const [newOrder, setNewOrder] = useState({
    name: "",
    phone: "",
    address: "",
    jersey: "Real Madrid 24/25 Home",
    size: "L",
    namePrint: "",
    numberPrint: "",
    cod: 1150,
    advance: 200
  });

  // AI Smart Parser (Regex fallback)
  const handleSmartPaste = () => {
    const phoneMatch = rawText.match(/(?:\+?88)?01[3-9]\d{8}/);
    const sizeMatch = rawText.match(/\b(3XL|2XL|XL|L|M|S)\b/i);
    const advMatch = rawText.match(/(?:adv|advance|অগ্রিম|paid|bkash)[\s:=-]+([0-9]{2,5})/i);
    const codMatch = rawText.match(/(?:cod|due|বাকি)[\s:=-]+([0-9]{2,5})/i);

    setNewOrder(prev => ({
      ...prev,
      phone: phoneMatch ? phoneMatch[0] : prev.phone,
      size: sizeMatch ? sizeMatch[0].toUpperCase() : prev.size,
      advance: advMatch ? Number(advMatch[1]) : prev.advance,
      cod: codMatch ? Number(codMatch[1]) : prev.cod
    }));
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `ord-${Date.now()}`,
      orderNumber: `NS-2026-${orders.length + 1
