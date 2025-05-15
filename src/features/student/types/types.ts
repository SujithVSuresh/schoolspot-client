


export interface StudentSigninFormType {
    email: string;
    password: string;
}

export interface AnnouncementType {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
  }

  export type AnnouncementDetailsType = AnnouncementType & {
    isPinned: boolean
  }

  export interface FeeItem {
    feeType: string;
    amount: number;
  }

  export interface InvoiceType {
    _id: string;
    title: string;
    student: string;
    class: string;
    school: string;
    invoiceNumber: string;
    dueDate: Date;
    feeBreakdown: FeeItem[];
    totalAmount: number;
    status: 'Unpaid' | 'Paid';
    remarks?: string;
    createdAt: Date;
    updatedAt: Date;
  }

  
export interface InvoiceDetailsType {
  _id: string;
  title: string;
  student: {
    _id: string;
    fullName: string;
    email: string;
    contactNumber: string;
  };
  school: {
    _id: string;
    schoolName: string;
    address: {
      city: string;
      state: string;
    }
  };
  class: {
    _id: string;
    name: string;
    section: string;
  };
  invoiceNumber: string;
  dueDate: Date;
  feeBreakdown?: {
    feeType: string;
    amount: number;
  }[];
  status: 'Unpaid' | 'Paid';
  totalAmount: number;
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}
  
  export interface PaymentType {
    _id: string;
    student: string;
    invoice: string;
    amountPaid: number;
    paymentMethod: 'Cash' | 'Card' | 'UPI' | 'Online' | 'Bank Transfer';
    transactionId?: string;
    paymentDate: Date;
    status: 'Success' | 'Failed' | 'Pending';
    createdAt: Date;
    updatedAt: Date;
  }


  export interface NotificationType {
    _id: string;
    notificationType: string; 
    message: string; 
    createdAt: Date;
}