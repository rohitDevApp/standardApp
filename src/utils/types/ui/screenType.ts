import {ReactNode} from 'react';

//LayoutType
export interface layoutScreenType {
  children: ReactNode;
}

//notificationFlatList Props
export interface notificationFlatListProps {
  notificationStore: any;
  refreshControl: any;
  handlerLoading: () => void;
}

//Interface
export interface singleNotificationProps {
  item: {
    message: string;
    createdAt: string;
    jobApplyId: string;
    profileUrl: string;
  };
}
