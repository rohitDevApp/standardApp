//All Type create a Namespace
export namespace ReduxType {

  //loginArg
  export interface loginArg {
    username: string;
    password: string;
    notificationToken: string | undefined;
  }

   //SignUpArg
  export interface SignUpArg {
    username: string;
    password: string;
  }

  //saveNotifyArg
  export interface saveNotifyArg {
    userId: string | null;
    isAllowed: boolean | undefined;
    notificationToken: string | null;
  }


  //Interface deleteArg
  export interface deleteArg {
    id: string;
    token?: string | null;
  }

  //Interface editPostArg
  export interface updateArg {
    updateData: any;
    id: string | null;
    token?: string | null;
  }


  //Intreface Change Profile
  export interface changeProfileArg {
    profileUrl: string;
    userId: string;
    token: string | null;
  }

  //Intreface logOut
  export interface logOutArg {
    notificationToken: string;
  }

  //Interface for Search
  export interface PaginationType{
    page: Number,
    search?:string,
  }
}

export default ReduxType;
