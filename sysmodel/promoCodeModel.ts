export default class promoCodeModel {
    public PromoCodeID!:number;
      public EventId!: string;
      public Name!: string;
      public Discount!: number;
      public MaximumCodes!: number;
      public UsedCodes!: number;
      public ExpiryDate!: Date;
      public ExpiryDate_string!: string;
      public Active!: boolean;
    }