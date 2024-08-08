export default class orderModel {
    public OrderID!: number;
    public EventId!: string;
    public AccountId!: string;
    public Type!: string;
    public PromoCodeId!: string;
    public PromoCodeName!: string;
    public PromoCodeDiscount!: string;
    public TotalAmount!: any;
    public TotalAmountWithTax!: any;
    public OrderReferenceNo!: string;
    public PaymentReference!: string;
    public OrderNumber!: string;
    public Paid!: boolean;
  }

  export class orderItemModel {
    public OrderItemID!: number;
    public EventId!: string;
    public AccountId!: string;
    public StandSpaceId!: string;
    public OrderId!: string;
    public Quantity!: any;
    public Amount!: any;
    public Name!: string;
    public Unit!: string;
  }