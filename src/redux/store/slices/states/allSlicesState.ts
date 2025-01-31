//Resource Type
export interface resourceType {
  items?: any;
  isLoading: boolean;
  isError: boolean;
  data?: any;
  initialLoading?: boolean;
}

//Interface Aplicants
export interface applicantStateType {
  applicants: resourceType;
  applicantData: resourceType;
  myApplicants: resourceType;
}

export const initialApplicantState: applicantStateType = {
  applicants: {
    items: [],
    isLoading: false,
    isError: false,
  },
  myApplicants: {
    items: [],
    isLoading: false,
    isError: false,
  },
  applicantData: {
    items: [],
    isLoading: false,
    isError: false,
  },
};

//jobs States
export interface jobStateType {
  counts: resourceType;
  recentJobs: resourceType;
  alljobs: resourceType;
  jobData: resourceType;
  skills: resourceType;
}

export const initialJobState: jobStateType = {
  counts: {
    data: [],
    isLoading: false,
    isError: false,
    initialLoading: true,
  },
  recentJobs: {
    data: [],
    isLoading: false,
    isError: false,
    initialLoading: true,
  },
  alljobs: {
    data: [],
    isLoading: false,
    isError: false,
    initialLoading: true,
  },
  jobData: {
    data: [],
    isLoading: false,
    isError: false,
  },
  skills: {
    data: [],
    isLoading: false,
    isError: false,
  },
};

//interface Notification
interface notificationStateType {
  notification: resourceType;
}

export const initialNotificationState: notificationStateType = {
  notification: {
    items: [],
    isLoading: false,
    isError: false,
    initialLoading: true,
  },
};

//interface Profile
interface profileStateType {
  userData: resourceType;
}

export const initialProfileState: profileStateType = {
  userData: {
    data: [],
    isLoading: false,
    isError: false,
  },
};

//View Analytics
interface analyticStateType {
  piChart: resourceType;
  graph: resourceType;
}
export const initialAnalyticsState: analyticStateType = {
  piChart: {
    items: [],
    isLoading: false,
    isError: false,
  },
  graph: {
    items: [],
    isLoading: false,
    isError: false,
  },
};
