export function normalizeBangladeshiPhone(rawPhone: string): string {
  const digits = rawPhone.replace(/[^0-9]/g, "");
  if (digits.startsWith("8801") && digits.length === 13) return digits.substring(2);
  if (digits.startsWith("01") && digits.length === 11) return digits;
  if (digits.startsWith("1") && digits.length === 10) return `0${digits}`;
  return digits;
}

export function parseRawMessageWithRegex(rawText: string) {
  let customerName = "Customer";
  let phone = "";
  let address = "Dhaka, Bangladesh";
  let jerseyTitle = "Real Madrid 24/25 Home";
  let size = "L";
  let customName = "";
  let customNumber = "";
  let codAmount = 1150;
  let advanceAmount = 200;
  let advanceAccount: "Cash" | "Bank" | "bKash" | "Nagad" = "bKash";

  const phoneMatch = rawText.match(/(?:\+?88)?01[3-9]\d{8}/);
  if (phoneMatch) phone = normalizeBangladeshiPhone(phoneMatch[0]);

  const sizeMatch = rawText.match(/\b(3XL|XXXL|2XL|XXL|XL|L|M|S)\b/i);
  if (sizeMatch) size = sizeMatch[0].toUpperCase();

  const advMatch = rawText.match(/(?:adv|advance|অগ্রিম|paid|bkash|nagad)[\s:=-]+([0-9]{2,5})/i);
  if (advMatch) advanceAmount = Number(advMatch[1]);

  const codMatch = rawText.match(/(?:cod|due|বাকি)[\s:=-]+([0-9]{2,5})/i);
  if (codMatch) codAmount = Number(codMatch[1]);

  const low = rawText.toLowerCase();
  if (low.includes("nagad") || low.includes("নগদ")) advanceAccount = "Nagad";
  else if (low.includes("bank") || low.includes("ব্যাংক")) advanceAccount = "Bank";

  const nameMatch = rawText.match(/(?:name|নাম)[\s:=-]+([A-Za-z\s]+?)(?:[,\n\r]|number|no|#|\d)/i);
  if (nameMatch) customName = nameMatch[1].trim().toUpperCase();

  const numMatch = rawText.match(/(?:number|no|#|নম্বর)[\s:=-]+([0-9]{1,2})/i);
  if (numMatch) customNumber = numMatch[1].trim();

  return { customerName, phone, address, jerseyTitle, size, customName, customNumber, codAmount, advanceAmount, advanceAccount };
}