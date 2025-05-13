

export interface StudentUserProfileType {
    _id?: string;
    fullName: string;
    class: string;
    classId: string;
    roll: number;
    section: string;
    profilePhoto: string;
    schoolId?: string;
    user: {
        _id: string
        email: string,
        status: "active" | "inactive" | "deleted" | "blocked";
    }
  }