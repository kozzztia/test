export const generateRandomData = (number: number): ItemType[] => {
  const statuses: Status[] = ["success", "fail", "pending"];

  return Array.from({ length: number }, (_, i) => {
    const randomId = i;
    const randomUser = `User${Math.floor(Math.random() * 10)}`;
    const randomDate = `${Math.floor(Math.random() * 31)}/${Math.floor(Math.random() * 12)}/${Math.floor(Math.random() * 22) + 2000}`;
    const randomTime = parseFloat((Math.random() * 24).toFixed(2));
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomAmount = Math.floor(Math.random() * 1000) + 1;
    const randomPayCode = generatePayCode();

    const randomDetails: DetailsType = {
      seller: `Seller${i}`,
      sellerMail: `seller${i}@example.com`,
      buyer: `Buyer${i}`,
      buyerMail: `buyer${i}@example.com`,
      code: `${Math.floor(Math.random() * 9000) + 1000}DEF${Math.floor(Math.random() * 9000) + 1000}ZZXCE3`,
      method: "Credit card",
      type: "Sell product",
      status: randomStatus,
    };

    return {
      payCode : randomPayCode,
      id: randomId,
      user: randomUser,
      date: randomDate,
      time: randomTime,
      status: randomStatus,
      amount: randomAmount,
      details: randomDetails,
    };
  });
};

const generatePayCode = (): string => {
  return `DSWC-${generateRandomHexSegment()}-${generateRandomHexSegment()}-${generateRandomHexSegment()}-${generateRandomHexSegment()}`;
};

const generateRandomHexSegment = (): string => {
  return Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16).toUpperCase();
};


type Status = "success" | "fail" | "pending";

export interface DetailsType {
  seller: string;
  sellerMail: string;
  buyer: string;
  buyerMail: string;
  code: string;
  method: string;
  type: string;
  status: Status;
}

export interface ItemType {
  payCode: string;
  id: number;
  user: string;
  date: string;
  time: number;
  status: Status;
  amount: number;
  details: DetailsType;
}
  