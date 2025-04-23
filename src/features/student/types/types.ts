


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