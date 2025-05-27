  export interface Conversation {
    _id: string
    isGroup: boolean;
    participants: string[];
    name?: string;
    subjectId: string;
    lastMessage?: Message;
    createdBy: string; 
    createdAt: Date;
  }


  export interface Message {
  content: string;
  messageType: "text" | "file",
  createdAt: Date;
}


  export interface MessageListType {
    _id: string;
    conversationId: string;
    senderId: {
        _id: string;
        email: string;
        role: 'superadmin' | 'admin' | 'teacher' | 'student';
    };
    status: "active" | "deleted"
    messageType: "text" | "file" | "file-text";
    content?: string;
    fileUrl?: string;
    createdAt: Date;
    updatedAt: Date;
  }