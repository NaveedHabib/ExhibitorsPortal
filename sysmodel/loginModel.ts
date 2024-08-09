export default class loginModel {
    public id!: number;
    public type!: string;
    public itemGuid!: string;
    public name!: string;
    public email!: string;
    public exhibitorId!: string;
    public eventid!: string;
    public success!: boolean;
    public standUpload!: boolean;
    public approve!: boolean;
    public notPaid!: boolean;
    public reject!: boolean;
  }

  export class loggedModel {
    public id!: number;
    public type!: string;
    public itemGuid!: string;
    public exhibitorId!: string;
    public standUpload!: boolean;
    public name!: string;
    public email!: string;
    public eventid!: string;
  }