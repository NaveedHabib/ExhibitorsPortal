export default class StandSpaceModel {
    public StandSpaceID!: number;
    public EventId!: string;
    public Name!: string;
    public ContractorRequired!: boolean;
    public PerformanceBond!: boolean;
    public ElectricalGridPlan!: boolean;
    public RiggingGridPaln!: boolean;
  }

  export class StandSpaceCategoryModel {
    public StandSpaceCategoryID!: number;
    public EventId!: string;
    public Image!: string;
    public StandSpaceId!: string;
    public Name!: string;
  }

  export class StandSpaceItemModel {
    public StandSpaceItemID!: number;
    public EventId!: string;
    public StandSpaceId!: string;
    public StandSpaceCategoryId!: string;
    public Name!: string;
    public Description!: string;
    public Image!: string;
    public Amount!: any;
    public Quantity!: any;
    public Unit!: string;
  }

  export class AddStandSpace {
    public Quantity!: any;
    public StandSpaceItemID!: number;
  }