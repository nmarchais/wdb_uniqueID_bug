/* tslint:disable */
/* eslint-disable */

// Generated using typescript-generator version 2.28.785 on 2021-06-30 10:34:54.

export interface Page<T> extends Slice<T> {
  totalPages: number;
  totalElements: number;
}

export interface Authority extends AbstractEntity<any> {
  id: number;
  name: EnumAuthority;
  users: UserAccount[];
  authorityGroups: AuthorityGroup[];
}

export interface AuthorityGroup extends AbstractEntity<any> {
  id: number;
  name: string;
  authorities: Authority[];
}

export interface AuthorityGroup_ extends AbstractEntity_ {
}

export interface Authority_ extends AbstractEntity_ {
}

export interface AvaDomainConfiguration {
}

export interface BaseCompany extends AbstractUpdatesLoggedEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  companyName: string;
  enable: boolean;
  administrativeContact: Contact;
}

export interface BaseCompany_ extends AbstractUpdatesLoggedEntity_ {
}

export interface CompanySite extends AbstractArchivableEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  company: Customer;
  name: string;
  contact: Contact;
  salePlaceLocations: SalePlaceLocation[];
}

export interface CompanySite_ extends AbstractArchivableEntity_ {
}

export interface Contact extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  firstName: string;
  lastName: string;
  firstNameAndLastName: string;
  civility: EnumContactCivility;
  email: string;
  deskPhoneNumber: string;
  mobilePhoneNumber: string;
  role: string;
  informations: string;
  avatarImagePath: string;
}

export interface Contact_ extends AbstractUpdatesLoggedEntity_ {
}

export interface Setting extends AbstractEntity<any> {
  id: number;
  smartphoneActivationRequestNotificationMails: Tag[];
  userAccountBlockedNotificationMails: Tag[];
}

export interface Setting_ extends AbstractEntity_ {
}

export interface UserAccount extends AbstractUpdatesLoggedEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  login: string;
  firstName: string;
  lastName: string;
  firstNameAndLastName: string;
  email: string;
  phoneNumber: string;
  mobilePhoneNumber: string;
  activated: boolean;
  loginAttempt: number;
  langKey: string;
  imageUrl: string;
}

export interface UserAccount_ extends AbstractUpdatesLoggedEntity_ {
}

export interface AsyncRequest extends AbstractEntity<any> {
  id: number;
  status: EnumRequestStatus;
  startDate: Date;
  endDate: Date;
}

export interface AsyncRequest_ extends AbstractEntity_ {
}

export interface EmailRequest extends AsyncRequest {
  toEmails: string[];
  templateName: string;
  subject: string;
  variables: { [index: string]: string };
}

export interface EmailRequest_ extends AsyncRequest_ {
}

export interface ExportRequest extends AsyncRequest {
  vendorUser: VendorUser;
  requestName: EnumExportRequestName;
  idsToExport: any;
}

export interface ExportRequest_ extends AsyncRequest_ {
}

export interface Customer extends BaseCompany {
  prospect: boolean;
  stars: number;
  companySites: CompanySite[];
}

export interface CustomerAuthorityGroup extends AuthorityGroup {
}

export interface CustomerAuthorityGroup_ extends AuthorityGroup_ {
}

export interface CustomerUser extends UserAccount {
}

export interface CustomerUser_ extends UserAccount_ {
}

export interface Customer_ extends BaseCompany_ {
}

export interface BaseProductDefinition extends AbstractUpdatesLoggedEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  name: string;
  brand: string;
  reference: string;
  code: string;
  productType: ProductType;
  defaultSalePrice: number;
  vatRateForSales: number;
  salable: boolean;
}

export interface BaseProductDefinition_ extends AbstractUpdatesLoggedEntity_ {
}

export interface EndProductDefinition extends ForShippingProductDefinition {
  alsoIngredient: boolean;
  recipeIngredients: RecipeIngredient[];
}

export interface EndProductDefinition_ extends ForShippingProductDefinition_ {
}

export interface ForShippingProductDefinition extends BaseProductDefinition {
  vatRateForPurchases: number;
  packagings: Packaging[];
  stockShouldBeManaged: boolean;
  vehiclePickingRoundCoef: number;
  measureUnit: EnumMeasureUnit;
}

export interface ForShippingProductDefinition_ extends BaseProductDefinition_ {
}

export interface HardwareDefinition extends ForShippingProductDefinition {
}

export interface HardwareDefinition_ extends ForShippingProductDefinition_ {
}

export interface Inventory extends AbstractEntity<any> {
  id: number;
  flowDate: Date;
  vendorUser: VendorUser;
  activity: Activity;
  storageArea: StorageArea;
  enumInventoryType: EnumInventoryType;
  inventoryLines: InventoryLine[];
}

export interface InventoryLine extends AbstractEntity<any> {
  id: number;
  inventory: Inventory;
  storageProductLine: StorageProductLine;
  product: ForShippingProductDefinition;
  quantity: number;
}

export interface InventoryLine_ extends AbstractEntity_ {
}

export interface Inventory_ extends AbstractEntity_ {
}

export interface Packaging extends AbstractUpdatesLoggedEntity<number> {
  id: number;
  name: string;
  product: ForShippingProductDefinition;
  subPackaging: Packaging;
  quantity: number;
  barcode: Barcode;
}

export interface Packaging_ extends AbstractUpdatesLoggedEntity_ {
}

export interface ProductFlow extends AbstractArchivableEntity<string> {
  id: string;
  flowDate: Date;
  vendorUser: VendorUser;
  activity: Activity;
  originStorageArea: StorageArea;
  destinationStorageArea: StorageArea;
  productMovementType: EnumProductMovementType;
  productFlowLines: ProductFlowLine[];
  quantity: number;
}

export interface ProductFlowLine extends AbstractArchivableEntity<string> {
  id: string;
  productFlow: ProductFlow;
  storageProductLine: StorageProductLine;
  product: ForShippingProductDefinition;
  quantity: number;
}

export interface ProductFlowLine_ extends AbstractArchivableEntity_ {
}

export interface ProductFlow_ extends AbstractArchivableEntity_ {
}

export interface ProductType extends AbstractArchivableEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  code: string;
  name: string;
  nameForMobileDisplay: string;
}

export interface ProductType_ extends AbstractArchivableEntity_ {
}

export interface Provider extends AbstractUpdatesLoggedEntity<any>, StorageAreaSupport {
  id: number;
  storageArea: ProviderStorageArea;
  companyName: string;
  administrativeContact: Contact;
}

export interface ProviderProductInformation extends AbstractEntity<any> {
  id: number;
  purchasePrise: number;
}

export interface ProviderProductInformation_ extends AbstractEntity_ {
}

export interface Provider_ extends AbstractUpdatesLoggedEntity_ {
}

export interface RecipeDefinition extends BaseProductDefinition {
  recipeIngredients: RecipeIngredient[];
}

export interface RecipeDefinition_ extends BaseProductDefinition_ {
}

export interface RecipeIngredient extends AbstractEntity<any> {
  id: number;
  recipeDefinition: RecipeDefinition;
  ingredient: EndProductDefinition;
  quantity: number;
}

export interface RecipeIngredient_ extends AbstractEntity_ {
}

export interface SparePartDefinition extends ForShippingProductDefinition {
}

export interface SparePartDefinition_ extends ForShippingProductDefinition_ {
}

export interface VendingMachineDefinition extends ForShippingProductDefinition {
}

export interface VendingMachineDefinition_ extends ForShippingProductDefinition_ {
}

export interface BusinessOrganizationStorageArea extends StorageArea {
  businessOrganization: BusinessOrganization;
}

export interface BusinessOrganizationStorageArea_ extends StorageArea_ {
}

export interface ProviderStorageArea extends StorageArea {
  provider: Provider;
}

export interface ProviderStorageArea_ extends StorageArea_ {
}

export interface RestockingOrder extends AbstractArchivableEntity<any> {
  id: number;
  storageArea: StorageArea;
  restockingOrderStatus: EnumRestockingOrderStatus;
  restockingOrderType: EnumRestockingOrderType;
  restockingOrderLines: RestockingOrderLine[];
}

export interface RestockingOrderLine extends AbstractArchivableEntity<string> {
  id: string;
  restockingOrder: RestockingOrder;
  storageProductLine: StorageProductLine;
  product: ForShippingProductDefinition;
  quantity: number;
}

export interface RestockingOrderLine_ extends AbstractArchivableEntity_ {
}

export interface RestockingOrder_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceStorageArea extends StorageArea {
  salePlace: SalePlace;
}

export interface SalePlaceStorageArea_ extends StorageArea_ {
}

export interface StorageArea extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  trashStorageArea: TrashStorageArea;
  storageProductLines: StorageProductLine[];
}

export interface StorageAreaSupport {
  storageArea: StorageArea;
}

export interface StorageArea_ extends AbstractUpdatesLoggedEntity_ {
}

export interface StorageProductLine extends AbstractArchivableEntity<any> {
  id: number;
  storageArea: StorageArea;
  lineCode: string;
  product: ForShippingProductDefinition;
  capacity: number;
  stock: number;
  standard: boolean;
}

export interface StorageProductLine_ extends AbstractArchivableEntity_ {
}

export interface TrashStorageArea extends StorageArea {
  storageArea: StorageArea;
}

export interface TrashStorageArea_ extends StorageArea_ {
}

export interface VehicleStorageArea extends StorageArea {
  vehicle: Vehicle;
}

export interface VehicleStorageArea_ extends StorageArea_ {
}

export interface AbstractBaseEvent<T> extends AbstractEntity<any> {
  eventDate: Date;
  closeDate: Date;
  relativeEntity: T;
}

export interface AbstractBaseEvent_ extends AbstractEntity_ {
}

export interface Assignment extends AbstractArchivableEntity<any> {
  id: number;
  user: VendorUser;
  assignmentType: EnumAssignmentType;
  cascadedAssignments: Assignment[];
  cascadedInGroup: VendorUserGroup;
  salePlace: SalePlace;
}

export interface Assignment_ extends AbstractArchivableEntity_ {
}

export interface Audit extends AbstractEntity<any> {
  id: string;
  evaDtsText: string;
  evaDtsJson: string;
  salePlace: SalePlace;
  salePlaceEquipment: SalePlaceEquipment;
  visit: Visit;
  auditMedia: AuditMedia;
  auditType: EnumAuditType;
}

export interface AuditMedia extends AbstractArchivableEntity<number> {
  id: number;
  auditMode: EnumAuditMedia;
  youtubeVideoUrl: string;
  image: string;
}

export interface AuditMedia_ extends AbstractArchivableEntity_ {
}

export interface Audit_ extends AbstractEntity_ {
}

export interface SalePlace extends AbstractUpdatesLoggedEntity<any>, StorageAreaSupport, HasExternalId<number> {
  id: number;
  externalId: number;
  installationStatus: EnumInstallationStatus;
  salePlaceType: EnumSalePlaceType;
  code: string;
  identification: string;
  startDate: Date;
  stars: number;
  capacity: number;
  master: boolean;
  closed: boolean;
  storeIsStorage: boolean;
  allowRestockingOrder: boolean;
  productFlowManagedByProductLines: boolean;
  assignedSupplier: VendorUser;
  assignedTechnician: VendorUser;
  assignedSalesman: VendorUser;
  assignedSupervisor: VendorUser;
  capacityCalculationMethod: EnumCapacityCalculationMethod;
  connectable: boolean;
  toDoToday: boolean;
  allowAlertConfigurationByOperator: boolean;
  businessOrganization: BusinessOrganization;
  mostRecentPicture: string;
  salePlaceData: SalePlaceData;
  salePlaceVisitConfiguration: SalePlaceVisitConfiguration;
  salePlaceLocation: SalePlaceLocation;
  fillingRateCriticalThresold: number;
  fillingRateWarningThresold: number;
  outOfStockCriticalThresold: number;
  outOfStockWarningThresold: number;
  daysWithoutVisitCriticalThresold: number;
  daysWithoutVisitWarningThresold: number;
  daysWithoutSaleAlert: number;
  daysWithoutSaleCritical: number;
  storageArea: SalePlaceStorageArea;
}

export interface SalePlaceData extends AbstractArchivableEntity<any> {
  id: number;
  salePlaceState: EnumSalePlaceState;
  lastVisitDate: Date;
  lastSupplierVisitDate: Date;
  lastTechnicianVisitDate: Date;
  nextPlannedFillingVisitDate: Date;
  lastPaiementSystemReplacementDate: Date;
  lastVendingMachineReplacementDate: Date;
  lastSaleDate: Date;
  salesCounter: number;
  last3DaysSalesCounter: number;
  fillingRate: number;
  last3DaysFillingRate: number;
  freshProductFillingRate: number;
  hotProductFillingRate: number;
  stock: number;
  last3DaysSalesTurnover: number;
  turnoverSinceLastVisit: number;
  cashAmountSinceLastVisit: number;
  soldOutCounter: number;
  informations: string;
  salePlace: SalePlace;
}

export interface SalePlaceData_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceEquipment extends AbstractArchivableEntity<number> {
  id: number;
  installationDate: Date;
  removalDate: Date;
  salePlace: SalePlace;
  salePlaceHardware: SalePlaceHardware;
  installationDeclarationAuthor: VendorUser;
  installationStatus: EnumInstallationStatus;
  defaultAuditMedia: AuditMedia;
}

export interface SalePlaceEquipment_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceGroup extends AbstractArchivableEntity<any> {
  id: number;
  name: string;
  description: string;
}

export interface SalePlaceGroup_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceLocation extends AbstractArchivableEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  site: CompanySite;
  locationName: string;
  gpsLocation: GpsLocation;
  locationState: EnumSalePlaceState;
}

export interface SalePlaceLocation_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceStoreLine extends AbstractArchivableEntity<any> {
  id: number;
  code: string;
  salePlace: SalePlace;
  product: BaseProductDefinition;
  productType: ProductType;
  price: number;
}

export interface SalePlaceStoreLine_ extends AbstractArchivableEntity_ {
}

export interface SalePlace_ extends AbstractUpdatesLoggedEntity_ {
}

export interface SaleplaceProducttype extends AbstractArchivableEntity<number> {
  id: number;
  salePlace: SalePlace;
  productType: ProductType;
}

export interface SaleplaceProducttype_ extends AbstractArchivableEntity_ {
}

export interface DaSale extends Sale {
  soldProduct: SoldProduct;
}

export interface DaSale_ extends Sale_ {
}

export interface MarketSale extends Sale {
}

export interface MarketSale_ extends Sale_ {
}

export interface Sale extends AbstractEntity<any> {
  id: number;
  saleDate: Date;
  paymentMethod: EnumPaymentMethod;
  transactionAmount: number;
  numberOfSoldProducts: number;
}

export interface SaleEvent extends AbstractBaseEvent<Sale> {
  id: number;
  relativeEntity: Sale;
}

export interface SaleEvent_ extends AbstractBaseEvent_ {
}

export interface Sale_ extends AbstractEntity_ {
}

export interface SoldProduct extends AbstractEntity<any> {
  id: number;
  product: BaseProductDefinition;
  quantity: number;
  unitSellingPrice: number;
  totalPrice: number;
}

export interface SoldProduct_ extends AbstractEntity_ {
}

export interface TelemetryMessage extends AbstractEntity<number> {
  id: number;
  sqsMessageId: string;
  vendor: Vendor;
  connectorType: EnumTelemetryConnectorType;
  rawMessage: string;
  forwarded: boolean;
  forwardDate: Date;
  integrationDate: Date;
  integrationFailedCounter: number;
  forwardFailedCounter: number;
  forwardError: TelemetryMessageError;
  integrationError: TelemetryMessageError;
}

export interface TelemetryMessageError {
  type: TelemetryErrorType;
  message: string;
  stackTrace: string;
}

export interface TelemetryMessageError_ {
}

export interface TelemetryMessage_ extends AbstractEntity_ {
}

export interface TelemetryVendorConfiguration extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  connectorType: EnumTelemetryConnectorType;
  runningStatus: EnumRunningStatus;
  configuration: string;
  lastActivationDate: Date;
  lastReceivedDatasDate: Date;
}

export interface TelemetryVendorConfiguration_ extends AbstractUpdatesLoggedEntity_ {
}

export interface BusinessOrganization extends AbstractUpdatesLoggedEntity<any>, StorageAreaSupport, HasExternalId<number> {
  id: number;
  externalId: number;
  storageArea: BusinessOrganizationStorageArea;
  name: string;
  contact: Contact;
}

export interface BusinessOrganization_ extends AbstractUpdatesLoggedEntity_ {
}

export interface GpsLocationHistory extends AbstractEntity<string> {
  id: string;
  recordingDate: Date;
  gpsLocation: GpsLocation;
}

export interface GpsLocationHistory_ extends AbstractEntity_ {
}

export interface Message extends AbstractArchivableEntity<number> {
  id: number;
  message: string;
  sendSms: boolean;
  type: EnumMessageType;
  relatedID: string;
  relatedEntityName: string;
  target: string;
  recipient: VendorUser;
  readingDate: Date;
  sendingDate: Date;
}

export interface Message_ extends AbstractArchivableEntity_ {
}

export interface SmartphoneUse extends AbstractEntity<any> {
  id: number;
  smartphone: Smartphone;
  vendorUser: VendorUser;
  startDate: Date;
  endDate: Date;
}

export interface SmartphoneUse_ extends AbstractEntity_ {
}

export interface Vehicle extends AbstractUpdatesLoggedEntity<any>, StorageAreaSupport {
  id: number;
  code: string;
  storageArea: VehicleStorageArea;
  registrationNumber: string;
  brand: string;
  model: string;
}

export interface VehicleUse extends AbstractEntity<any> {
  id: number;
  vehicle: Vehicle;
  vendorUser: VendorUser;
  startDate: Date;
  stopDate: Date;
  startKmCounter: number;
  stopKmCounter: number;
}

export interface VehicleUse_ extends AbstractEntity_ {
}

export interface Vehicle_ extends AbstractUpdatesLoggedEntity_ {
}

export interface Vendor extends BaseCompany {
  orbaFtpTransfertConfiguration: OrbaFtpTransfertConfiguration;
  orbaSqsSynchronizationConfiguration: OrbaSqsSynchronizationConfiguration;
}

export interface VendorAuthorityGroup extends AuthorityGroup {
}

export interface VendorAuthorityGroup_ extends AuthorityGroup_ {
}

export interface VendorUser extends UserAccount {
  administrator: boolean;
  code: string;
  vendorUserVisitConfiguration: VendorUserVisitConfiguration;
  relevantService: EnumRelevantService;
  businessOrganization: BusinessOrganization;
}

export interface VendorUserGroup extends AbstractArchivableEntity<any> {
  id: number;
  name: string;
  description: string;
}

export interface VendorUserGroup_ extends AbstractArchivableEntity_ {
}

export interface VendorUserMemberOfGroup extends AbstractEntity<any> {
  id: number;
  vendorUser: VendorUser;
  vendorUserGroup: VendorUserGroup;
  supervisor: boolean;
}

export interface VendorUserMemberOfGroup_ extends AbstractEntity_ {
}

export interface VendorUser_ extends UserAccount_ {
}

export interface Vendor_ extends BaseCompany_ {
}

export interface Activity extends AbstractArchivableEntity<string> {
  id: string;
  workingDay: WorkingDay;
  vendorUser: VendorUser;
  beginDate: Date;
  endDate: Date;
  activityDuration: number;
  processingPostCloseDone: boolean;
  processingPostCloseFailedCounter: number;
  durationSincePreviousVisit: number;
  startLocation: GpsLocation;
  endLocation: GpsLocation;
  activityType: EnumActivityType;
}

export interface Activity_ extends AbstractArchivableEntity_ {
}

export interface CoinsLoad extends AbstractArchivableEntity<string> {
  id: string;
  activity: Activity;
  value: number;
  quantity: number;
}

export interface CoinsLoad_ extends AbstractArchivableEntity_ {
}

export interface CustomActivity extends Activity {
  customActivityDefinition: CustomActivityDefinition;
  comment: string;
  beginIdentificationMode: EnumIdentificationMode;
  beginIdentificationCode: string;
  endIdentificationMode: EnumIdentificationMode;
  endIdentificationCode: string;
  manualIdentificationStartComment: string;
  manualIdentificationEndComment: string;
}

export interface CustomActivityDefinition extends AbstractArchivableEntity<any> {
  id: number;
  activityName: string;
  commentNeeded: boolean;
  beginIdentificationCodeNeeded: boolean;
  endIdentificationCodeNeeded: boolean;
  endOperatorActionNeeded: boolean;
}

export interface CustomActivityDefinition_ extends AbstractArchivableEntity_ {
}

export interface CustomActivity_ extends Activity_ {
}

export interface ImageVisit extends AbstractArchivableEntity<string> {
  id: string;
  visit: Visit;
  image: string;
  type: EnumVisitImageType;
  lackOfChoice: boolean;
  poorQualityPicture: boolean;
  soldOutProductsCounter: number;
}

export interface ImageVisit_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceVisitConfiguration extends AbstractArchivableEntity<number> {
  id: number;
  mandatoryActions: EnumMandatoryActionType[];
  salePlace: SalePlace;
}

export interface SalePlaceVisitConfiguration_ extends AbstractArchivableEntity_ {
}

export interface VehicleLoading extends Activity {
  sentToOrbaDate: Date;
  tryToSendToOrbaCounter: number;
}

export interface VehicleLoading_ extends Activity_ {
}

export interface VendorUserVisitConfiguration extends AbstractArchivableEntity<any> {
  id: number;
  mandatoryActions: EnumMandatoryActionType[];
  vendorUser: VendorUser;
}

export interface VendorUserVisitConfiguration_ extends AbstractArchivableEntity_ {
}

export interface Visit extends Activity {
  salePlace: SalePlace;
  beginIdentificationMode: EnumIdentificationMode;
  beginIdentificationCode: string;
  endIdentificationMode: EnumIdentificationMode;
  endIdentificationCode: string;
  manualIdentificationStartComment: string;
  manualIdentificationEndComment: string;
  visitComment: string;
  lackOfChoice: boolean;
  poorQualityPicture: boolean;
  salesCounter: number;
  salesCounterWithoutCup: number;
  moneyCarryingBagIdentification: string;
  moneyHasBeenRecovered: boolean;
  ticketHasBeenUpdated: boolean;
  fullProductFilling: boolean;
  productHasBeenLoaded: boolean;
  inventoryHasBeenDone: boolean;
  productFillingCounter: number;
  productRemovedCounter: number;
  productFillingRate: number;
  productFillingRateFromAudit: number;
  salesCounterFromAudit: number;
  salesAmountFromAudit: number;
  payBackAmount: number;
  testCount: number;
  testAmount: number;
  soldOutProductsCounter: number;
  fillingCoinsAmount: number;
  fillingCoinsAmountFromAudit: number;
  salePlaceStateBeforeActivity: EnumSalePlaceState;
}

export interface Visit_ extends Activity_ {
}

export interface WorkingDay extends AbstractArchivableEntity<string> {
  id: string;
  orbaLicence: OrbaLicence;
  vendorUser: VendorUser;
  smartphone: Smartphone;
  vehicle: Vehicle;
  processingPostCloseDone: boolean;
  processingPostCloseFailedCounter: number;
  vehicleStartKm: number;
  vehicleEndKm: number;
  cashRegisterStart: number;
  cashRegisterEnd: number;
  beginDate: Date;
  endDate: Date;
  sentToOrbaDate: Date;
  tryToSendToOrbaCounter: number;
  firstActivityStartDate: Date;
  lastActivityStartDate: Date;
  numberOfActivitiesPerformed: number;
  numberOfVisitsPerformed: number;
  numberOfBreaksPerformed: number;
  numberOfVehicleLoadingsPerformed: number;
}

export interface WorkingDayBreak extends Activity {
}

export interface WorkingDayBreak_ extends Activity_ {
}

export interface WorkingDay_ extends AbstractArchivableEntity_ {
}

export interface Hardware extends AbstractArchivableEntity<any> {
  hardwareDefinition: HardwareDefinition;
  serialNumber: string;
}

export interface Hardware_ extends AbstractArchivableEntity_ {
}

export interface SalePlaceHardware extends Hardware, HasExternalId<number> {
  id: number;
  externalId: number;
  code: string;
}

export interface SalePlaceHardware_ extends Hardware_ {
}

export interface Smartphone extends Hardware {
  id: number;
  registered: boolean;
  androidVersion: string;
  avaMobileAppVersion: string;
  androidId: string;
  fcmToken: string;
}

export interface Smartphone_ extends Hardware_ {
}

export interface MaintenanceAction extends AbstractArchivableEntity<string> {
  id: string;
  maintenanceActionDefinition: MaintenanceActionDefinition;
  visit: Visit;
  maintenanceActionDate: Date;
}

export interface MaintenanceActionData extends AbstractArchivableEntity<string> {
  id: string;
  maintenanceAction: MaintenanceAction;
  maintenanceActionDataDefinition: MaintenanceActionDataDefinition;
  value: string;
}

export interface MaintenanceActionData_ extends AbstractArchivableEntity_ {
}

export interface MaintenanceAction_ extends AbstractArchivableEntity_ {
}

export interface MaintenanceActionDataDefinition extends AbstractUpdatesLoggedEntity<any> {
  selectOptions: string[];
  id: number;
  maintenanceActionDefinition: MaintenanceActionDefinition;
  dataName: string;
  maintenanceActionDataInputType: EnumMaintenanceActionDataInputType;
}

export interface MaintenanceActionDataDefinition_ extends AbstractUpdatesLoggedEntity_ {
}

export interface MaintenanceActionDefinition extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  actionName: string;
  forProvisioner: boolean;
  forTechnician: boolean;
  forSupervisor: boolean;
  notificationMails: Tag[];
}

export interface MaintenanceActionDefinition_ extends AbstractUpdatesLoggedEntity_ {
}

export interface OrbaFtpTransfertConfiguration extends AbstractEntity<any> {
  id: number;
  vendor: Vendor;
  ftpHost: string;
  login: string;
  password: string;
  connectivityStatus: EnumConnectivityStatus;
}

export interface OrbaFtpTransfertConfiguration_ extends AbstractEntity_ {
}

export interface OrbaLicence extends AbstractEntity<any> {
  id: number;
  licenceNumber: string;
}

export interface OrbaLicence_ extends AbstractEntity_ {
}

export interface OrbaRawInputMessage extends AbstractEntity<number> {
  id: number;
  sqsMessageId: string;
  rawMessage: string;
  receiverType: OrbaReceiverType;
  integrated: boolean;
  errorType: OrbaInputErrorType;
  errorMessage: string;
  stackTrace: string;
}

export interface OrbaRawInputMessage_ extends AbstractEntity_ {
}

export interface OrbaSqsSynchronizationConfiguration extends AbstractEntity<any> {
  id: number;
  vendor: Vendor;
  secretKey: string;
  accessKey: string;
  queueUrlForUser: string;
  queueUrlForVehicle: string;
  queueUrlForCashflow: string;
  queueUrlForSalePlace: string;
  vehicleRunningStatus: EnumRunningStatus;
  userRunningStatus: EnumRunningStatus;
  cashflowRunningStatus: EnumRunningStatus;
  salePlaceRunningStatus: EnumRunningStatus;
  enabled: boolean;
}

export interface OrbaSqsSynchronizationConfiguration_ extends AbstractEntity_ {
}

export interface Passage extends AbstractArchivableEntity<number> {
  id: number;
  passageDate: Date;
  previousPassageDate: Date;
  salePlace: SalePlace;
  designatedOperator: VendorUser;
  assignedOperator: VendorUser;
  performed: boolean;
  creator: PassageCreator;
  reasons: PassageReason[];
  importance: EnumImportance;
  fillingRate: number;
  salePlaceState: EnumSalePlaceState;
  salesCountSincePreviousPassage: number;
  cashAmountSincePreviousPassage: number;
  turnoverSincePreviousPassage: number;
  stars: number;
}

export interface PassageConfiguration extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  passageCounterForAverageComputing: number;
  suggestSmoothPassagesByDefault: boolean;
  enumLastPassageDateTrigger: EnumLastPassageDateTrigger;
}

export interface PassageConfiguration_ extends AbstractUpdatesLoggedEntity_ {
}

export interface PassageGenerationRequest extends AbstractUpdatesLoggedEntity<any> {
  id: number;
  requestDate: Date;
  generationDate: Date;
  dateRange: DateRange;
  numberOfGeneratedDays: number;
}

export interface PassageGenerationRequest_ extends AbstractUpdatesLoggedEntity_ {
}

export interface Passage_ extends AbstractArchivableEntity_ {
}

export interface Ticket extends AbstractUpdatesLoggedEntity<string>, HasExternalId<number> {
  id: string;
  externalId: number;
  ticketType: TicketType;
  openDate: Date;
  deadlineDate: Date;
  closeDate: Date;
  openByUser: VendorUser;
  closeByUser: VendorUser;
  affectedToUser: VendorUser;
  description: string;
  salePlace: SalePlace;
  associatedCompany: BaseCompany;
  mischaracterized: boolean;
  mischaracterizedCause: string;
  severity: EnumTicketSeverity;
  priority: EnumTicketPriority;
  relevantService: EnumRelevantService;
  status: EnumTicketStatus;
  associatedContact: Contact;
  ticketEvent: TicketEvent;
}

export interface TicketComment extends AbstractArchivableEntity<string> {
  id: string;
  comment: string;
  commentDate: Date;
  author: UserAccount;
  ticket: Ticket;
}

export interface TicketComment_ extends AbstractArchivableEntity_ {
}

export interface TicketEvent extends AbstractBaseEvent<Ticket> {
  id: string;
  ticket: Ticket;
}

export interface TicketEvent_ extends AbstractBaseEvent_ {
}

export interface TicketType extends AbstractUpdatesLoggedEntity<any>, HasExternalId<number> {
  id: number;
  externalId: number;
  typeName: string;
  systemType: boolean;
  baseType: EnumTicketType;
}

export interface TicketType_ extends AbstractUpdatesLoggedEntity_ {
}

export interface Ticket_ extends AbstractUpdatesLoggedEntity_ {
}

export interface DefaultView extends AbstractEntity<any> {
  id: number;
  view: View;
  viewType: ViewType;
}

export interface DefaultView_ extends AbstractEntity_ {
}

export interface View extends AbstractEntity<any> {
  id: number;
  name: string;
  description: string;
  viewType: ViewType;
  data: string;
  owner: UserAccount;
  shared: boolean;
  preferredDisplay: ViewDisplay;
  defaultViews: DefaultView[];
}

export interface View_ extends AbstractEntity_ {
}

export interface SmartphoneNotRegisteredException extends AbstractThrowableProblem {
}

export interface BadRequestAlertException extends AbstractThrowableProblem {
  entityName: string;
  errorKey: string;
}

export interface TelemetryConfigCryptoException extends BadRequestAlertException {
}

export interface TelemetryConfigException extends BadRequestAlertException {
}

export interface EmailAlreadyUsedException extends BadRequestAlertException {
}

export interface EmailNotFoundException extends AbstractThrowableProblem {
}

export interface InvalidPasswordException extends AbstractThrowableProblem {
}

export interface LoginAlreadyUsedException extends BadRequestAlertException {
}

export interface OrbaSQSConfigException extends BadRequestAlertException {
}

export interface AbstractThrowableProblem extends ThrowableProblem {
}

export interface DefaultProblem extends AbstractThrowableProblem {
}

export interface Exceptional extends Problem {
  cause: Exceptional;
}

export interface ProblemMixIn extends Problem {
  type: string;
}

export interface ThrowableProblem extends RuntimeException, Problem, Exceptional {
  cause: ThrowableProblem;
}

export interface ConstraintViolationProblem extends ThrowableProblem {
  violations: Violation[];
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort;
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
}

export interface AbstractEntity<ID> extends HasId<ID> {
  version: number;
}

export interface AbstractEntity_ {
}

export interface AbstractUpdatesLoggedEntity<ID> extends AbstractArchivableEntity<ID> {
  createdBy: string;
  modifiedBy: string;
}

export interface AbstractUpdatesLoggedEntity_ extends AbstractArchivableEntity_ {
}

export interface AbstractArchivableEntity<ID> extends AbstractEntity<ID> {
  archived: boolean;
}

export interface AbstractArchivableEntity_ extends AbstractEntity_ {
}

export interface Tag {
  tagValue: string;
}

export interface Barcode {
  code: string;
  barcodeType: EnumBarcodeType;
}

export interface GpsLocation {
  latitude: number;
  longitude: number;
}

export interface DateRange {
  fromDate: Date;
  toDate: Date;
  numberOfDays: number;
}

export interface StackTraceElement {
  classLoaderName: string;
  moduleName: string;
  moduleVersion: string;
  methodName: string;
  fileName: string;
  lineNumber: number;
  nativeMethod: boolean;
  className: string;
}

export interface StatusType {
  statusCode: number;
  reasonPhrase: string;
}

export interface Throwable {
  cause: Throwable;
  stackTrace: StackTraceElement[];
  message: string;
  suppressed: Throwable[];
  localizedMessage: string;
}

export interface Problem {
  instance: string;
  type: string;
  parameters: { [index: string]: any };
  detail: string;
  status: StatusType;
  title: string;
}

export interface RuntimeException extends Exception {
}

export interface Violation {
  field: string;
  message: string;
}

export interface Slice<T> {
  size: number;
  content: T[];
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  last: boolean;
  pageable: Pageable;
  empty: boolean;
}

export interface HasExternalId<ID> {
  externalId: ID;
}

export interface Exception extends Throwable {
}

export interface HasId<ID> {
  id: ID;
}

export enum FilterType {
  STRING = "STRING",
  INT = "INT",
  DOUBLE = "DOUBLE",
  BOOL = "BOOL",
  ENUM = "ENUM",
  DATE = "DATE",
}

export enum Expression {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  START_WITH = "START_WITH",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
  EMPTY = "EMPTY",
  NOT_EMPTY = "NOT_EMPTY",
  LT = "LT",
  LTE = "LTE",
  GT = "GT",
  GTE = "GTE",
  BOOL = "BOOL",
  IN = "IN",
  NOT_IN = "NOT_IN",
  IS_WITHIN = "IS_WITHIN",
}

export enum Compose {
  WHERE = "WHERE",
  AND = "AND",
  OR = "OR",
}

export enum AggregationFunction {
  COUNT = "COUNT",
  SUM = "SUM",
  AVG = "AVG",
  MIN = "MIN",
  MAX = "MAX",
}

export enum ViewDisplay {
  DEFAULT = "DEFAULT",
  TABLE = "TABLE",
  MAP = "MAP",
  KANBAN = "KANBAN",
}

export enum ViewType {
  TICKETS = "TICKETS",
  TICKET_COMMENTS = "TICKET_COMMENTS",
  TICKET_TYPE = "TICKET_TYPE",
  USER_SALE_PLACES = "USER_SALE_PLACES",
  TICKET_SALE_PLACES = "TICKET_SALE_PLACES",
  TICKET_VENDOR_USERS = "TICKET_VENDOR_USERS",
  SALE_PLACES = "SALE_PLACES",
  SALE_PLACE_GROUPS = "SALE_PLACE_GROUPS",
  SALE_PLACE_LOCATIONS = "SALE_PLACE_LOCATIONS",
  SALE_PLACE_HARDWARES = "SALE_PLACE_HARDWARES",
  SALE_PLACE_VISITS = "SALE_PLACE_VISITS",
  SALE_PLACE_TICKETS = "SALE_PLACE_TICKETS",
  SALE_PLACE_IMAGE_VISIT = "SALE_PLACE_IMAGE_VISIT",
  VENDOR_USERS = "VENDOR_USERS",
  CUSTOMER_USERS = "CUSTOMER_USERS",
  ACTIVITIES = "ACTIVITIES",
  VISITS = "VISITS",
  CUSTOM_ACTIVITIES = "CUSTOM_ACTIVITIES",
  WORKING_DAYS = "WORKING_DAYS",
  COMPANY_SITES = "COMPANY_SITES",
  VEHICLES = "VEHICLES",
  CUSTOMERS = "CUSTOMERS",
  PRODUCTS = "PRODUCTS",
  RECIPE_INGREDIENTS = "RECIPE_INGREDIENTS",
  RECIPES = "RECIPES",
  STORAGE_PRODUCT_LINES = "STORAGE_PRODUCT_LINES",
  PRODUCT_TYPES = "PRODUCT_TYPES",
  BUSINESS_ORGANIZATIONS = "BUSINESS_ORGANIZATIONS",
  BUSINESS_ORGANIZATION_SALE_PLACES = "BUSINESS_ORGANIZATION_SALE_PLACES",
  SMARTPHONES = "SMARTPHONES",
  SMARTPHONE_USES = "SMARTPHONE_USES",
  PACKAGINGS = "PACKAGINGS",
  MAINTENANCE_ACTION_DEFINITIONS = "MAINTENANCE_ACTION_DEFINITIONS",
  MAINTENANCE_ACTION_DATA_DEFINITIONS = "MAINTENANCE_ACTION_DATA_DEFINITIONS",
  CUSTOM_ACTIVITY_DEFINITIONS = "CUSTOM_ACTIVITY_DEFINITIONS",
  MAINTENANCE_ACTIONS = "MAINTENANCE_ACTIONS",
  MAINTENANCE_ACTION_DATAS = "MAINTENANCE_ACTION_DATAS",
  MESSAGES = "MESSAGES",
  PASSAGES = "PASSAGES",
  PASSAGE_GENERATION_REQUESTS = "PASSAGE_GENERATION_REQUESTS",
  TELEMETRY_VENDOR_CONFIGURATIONS = "TELEMETRY_VENDOR_CONFIGURATIONS",
  SALE_PLACE_EQUIPMENTS = "SALE_PLACE_EQUIPMENTS",
  IMAGE_VISIT = "IMAGE_VISIT",
  VENDOR_USER_GROUPS = "VENDOR_USER_GROUPS",
  GROUP_VENDOR_USERS = "GROUP_VENDOR_USERS",
  AUDIT_MEDIAS = "AUDIT_MEDIAS",
  DA_SALES = "DA_SALES",
  SALE_PLACE_STORE_LINES = "SALE_PLACE_STORE_LINES",
  PRODUCT_FLOWS = "PRODUCT_FLOWS",
  PRODUCT_FLOW_LINES = "PRODUCT_FLOW_LINES",
}

export enum EnumAuthority {
  ROLE_ANONYMOUS = "ROLE_ANONYMOUS",
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_USER = "ROLE_USER",
  SALE_PLACE_WRITE = "SALE_PLACE_WRITE",
  SALE_PLACE = "SALE_PLACE",
  SALE_PLACE_EXPORT = "SALE_PLACE_EXPORT",
  SALE_PLACE_HARDWARE_WRITE = "SALE_PLACE_HARDWARE_WRITE",
  SALE_PLACE_HARDWARE = "SALE_PLACE_HARDWARE",
  SALE_PLACE_HARDWARE_EXPORT = "SALE_PLACE_HARDWARE_EXPORT",
  TICKET_WRITE = "TICKET_WRITE",
  TICKET = "TICKET",
  TICKET_EXPORT = "TICKET_EXPORT",
  WORKING_DAY_WRITE = "WORKING_DAY_WRITE",
  WORKING_DAY = "WORKING_DAY",
  WORKING_DAY_EXPORT = "WORKING_DAY_EXPORT",
  CUSTOMER_SALE_PLACE = "CUSTOMER_SALE_PLACE",
  CUSTOMER_USER = "CUSTOMER_USER",
  CUSTOMER_USER_WRITE = "CUSTOMER_USER_WRITE",
  VENDOR_USER = "VENDOR_USER",
  VENDOR_USER_WRITE = "VENDOR_USER_WRITE",
  VENDOR_USER_EXPORT = "VENDOR_USER_EXPORT",
  VENDOR_USER_AUTHORITIES = "VENDOR_USER_AUTHORITIES",
  VENDOR_USER_AUTHORITIES_WRITE = "VENDOR_USER_AUTHORITIES_WRITE",
  VENDOR_USER_SALE_PLACES = "VENDOR_USER_SALE_PLACES",
  USER_SALE_PLACE_GROUPS = "USER_SALE_PLACE_GROUPS",
  USER_SALE_PLACE_GROUPS_WRITE = "USER_SALE_PLACE_GROUPS_WRITE",
  PRODUCT_WRITE = "PRODUCT_WRITE",
  PRODUCT = "PRODUCT",
  PRODUCT_EXPORT = "PRODUCT_EXPORT",
  PLANNING_WRITE = "PLANNING_WRITE",
  PLANNING = "PLANNING",
  PLANNING_EXPORT = "PLANNING_EXPORT",
  EQUIPMENT_WRITE = "EQUIPMENT_WRITE",
  EQUIPMENT = "EQUIPMENT",
  EQUIPMENT_EXPORT = "EQUIPMENT_EXPORT",
  VUE_WRITE = "VUE_WRITE",
  VUE_CREATE_SHARED = "VUE_CREATE_SHARED",
  SALE_PLACES_PHOTOS = "SALE_PLACES_PHOTOS",
  KEY_NUMBERS = "KEY_NUMBERS",
  TICKET_TYPE_WRITE = "TICKET_TYPE_WRITE",
  TICKET_TYPE = "TICKET_TYPE",
  TICKET_TYPE_EXPORT = "TICKET_TYPE_EXPORT",
  VEHICLE_WRITE = "VEHICLE_WRITE",
  VEHICLE = "VEHICLE",
  VEHICLE_EXPORT = "VEHICLE_EXPORT",
  MOBILE_DEVICE_WRITE = "MOBILE_DEVICE_WRITE",
  MOBILE_DEVICE = "MOBILE_DEVICE",
  MOBILE_DEVICE_EXPORT = "MOBILE_DEVICE_EXPORT",
  BILL_WRITE = "BILL_WRITE",
  BILL = "BILL",
  BILL_EXPORT = "BILL_EXPORT",
  PURCHASE_WRITE = "PURCHASE_WRITE",
  PURCHASE = "PURCHASE",
  PURCHASE_EXPORT = "PURCHASE_EXPORT",
  PROVIDER_WRITE = "PROVIDER_WRITE",
  PROVIDER = "PROVIDER",
  PROVIDER_EXPORT = "PROVIDER_EXPORT",
  CUSTOMER_WRITE = "CUSTOMER_WRITE",
  CUSTOMER = "CUSTOMER",
  CUSTOMER_EXPORT = "CUSTOMER_EXPORT",
  ACTIVITY_WRITE = "ACTIVITY_WRITE",
  ACTIVITY = "ACTIVITY",
  ACTIVITY_EXPORT = "ACTIVITY_EXPORT",
  PRODUCT_FLOW_WRITE = "PRODUCT_FLOW_WRITE",
  PRODUCT_FLOW = "PRODUCT_FLOW",
  PRODUCT_FLOW_EXPORT = "PRODUCT_FLOW_EXPORT",
  PRODUCT_TYPE = "PRODUCT_TYPE",
  PRODUCT_TYPE_WRITE = "PRODUCT_TYPE_WRITE",
  PRODUCT_TYPE_EXPORT = "PRODUCT_TYPE_EXPORT",
  SALE_PLACE_GROUP = "SALE_PLACE_GROUP",
  SALE_PLACE_GROUP_WRITE = "SALE_PLACE_GROUP_WRITE",
  SALE_PLACE_GROUP_EXPORT = "SALE_PLACE_GROUP_EXPORT",
  BUSINESS_ORGANIZATION_WRITE = "BUSINESS_ORGANIZATION_WRITE",
  BUSINESS_ORGANIZATION = "BUSINESS_ORGANIZATION",
  BUSINESS_ORGANIZATION_EXPORT = "BUSINESS_ORGANIZATION_EXPORT",
  COMPANY_SITE = "COMPANY_SITE",
  COMPANY_SITE_WRITE = "COMPANY_SITE_WRITE",
  COMPANY_SITE_EXPORT = "COMPANY_SITE_EXPORT",
  VEHICLE_STORAGE_AREA = "VEHICLE_STORAGE_AREA",
  VEHICLE_STORAGE_AREA_WRITE = "VEHICLE_STORAGE_AREA_WRITE",
  VEHICLE_STORAGE_AREA_EXPORT = "VEHICLE_STORAGE_AREA_EXPORT",
  SALE_PLACE_STORAGE_AREA = "SALE_PLACE_STORAGE_AREA",
  SALE_PLACE_STORAGE_AREA_WRITE = "SALE_PLACE_STORAGE_AREA_WRITE",
  SALE_PLACE_STORAGE_AREA_EXPORT = "SALE_PLACE_STORAGE_AREA_EXPORT",
  SMARTPHONE = "SMARTPHONE",
  SMARTPHONE_WRITE = "SMARTPHONE_WRITE",
  SMARTPHONE_EXPORT = "SMARTPHONE_EXPORT",
  SALE_PLACE_VISIT_CONFIGURATION = "SALE_PLACE_VISIT_CONFIGURATION",
  SALE_PLACE_VISIT_CONFIGURATION_WRITE = "SALE_PLACE_VISIT_CONFIGURATION_WRITE",
  MAINTENANCE_ACTION_DEFINITION = "MAINTENANCE_ACTION_DEFINITION",
  MAINTENANCE_ACTION_DEFINITION_WRITE = "MAINTENANCE_ACTION_DEFINITION_WRITE",
  MAINTENANCE_ACTION_DEFINITION_EXPORT = "MAINTENANCE_ACTION_DEFINITION_EXPORT",
  CUSTOM_ACTIVITY_DEFINITION = "CUSTOM_ACTIVITY_DEFINITION",
  CUSTOM_ACTIVITY_DEFINITION_WRITE = "CUSTOM_ACTIVITY_DEFINITION_WRITE",
  CUSTOM_ACTIVITY_DEFINITION_EXPORT = "CUSTOM_ACTIVITY_DEFINITION_EXPORT",
  MAINTENANCE_ACTION = "MAINTENANCE_ACTION",
  MAINTENANCE_ACTION_WRITE = "MAINTENANCE_ACTION_WRITE",
  MAINTENANCE_ACTION_EXPORT = "MAINTENANCE_ACTION_EXPORT",
  MAINTENANCE_ACTION_DATA = "MAINTENANCE_ACTION_DATA",
  MAINTENANCE_ACTION_DATA_WRITE = "MAINTENANCE_ACTION_DATA_WRITE",
  MAINTENANCE_ACTION_DATA_EXPORT = "MAINTENANCE_ACTION_DATA_EXPORT",
  VENDOR_USER_VISIT_CONFIGURATION = "VENDOR_USER_VISIT_CONFIGURATION",
  VENDOR_USER_VISIT_CONFIGURATION_WRITE = "VENDOR_USER_VISIT_CONFIGURATION_WRITE",
  SETTING = "SETTING",
  MESSAGE = "MESSAGE",
  MESSAGE_WRITE = "MESSAGE_WRITE",
  MESSAGE_EXPORT = "MESSAGE_EXPORT",
  MOBILE_SYNC = "MOBILE_SYNC",
  MOBILE_RESTOCKING_ORDER = "MOBILE_RESTOCKING_ORDER",
  MOBILE_READ_ALL_SALE_PLACES = "MOBILE_READ_ALL_SALE_PLACES",
  NFC_ENCODING_USER = "NFC_ENCODING_USER",
  NFC_ENCODING_VEHICLE = "NFC_ENCODING_VEHICLE",
  NFC_ENCODING_CASHBAG = "NFC_ENCODING_CASHBAG",
  NFC_ENCODING_SALE_PLACE = "NFC_ENCODING_SALE_PLACE",
  NFC_ENCODING_CASHFLOW = "NFC_ENCODING_CASHFLOW",
  PASSAGE = "PASSAGE",
  PASSAGE_WRITE = "PASSAGE_WRITE",
  PASSAGE_EXPORT = "PASSAGE_EXPORT",
  PASSAGE_CONFIGURATION = "PASSAGE_CONFIGURATION",
  PASSAGE_GENERATION_REQUEST = "PASSAGE_GENERATION_REQUEST",
  PASSAGE_GENERATION_REQUEST_WRITE = "PASSAGE_GENERATION_REQUEST_WRITE",
  TELEMETRY_VENDOR_CONFIGURATION = "TELEMETRY_VENDOR_CONFIGURATION",
  TELEMETRY_VENDOR_CONFIGURATION_WRITE = "TELEMETRY_VENDOR_CONFIGURATION_WRITE",
  VENDOR_USER_GROUP = "VENDOR_USER_GROUP",
  VENDOR_USER_GROUP_WRITE = "VENDOR_USER_GROUP_WRITE",
  VENDOR_USER_GROUP_EXPORT = "VENDOR_USER_GROUP_EXPORT",
  AUDIT_MEDIA = "AUDIT_MEDIA",
  AUDIT_MEDIA_WRITE = "AUDIT_MEDIA_WRITE",
  SALE_EXPORT = "SALE_EXPORT",
  SALE = "SALE",
  SALE_PLACE_STORE_LINE = "SALE_PLACE_STORE_LINE",
  SALE_PLACE_STORE_LINE_EXPORT = "SALE_PLACE_STORE_LINE_EXPORT",
  SALE_PLACE_STORE_LINE_WRITE = "SALE_PLACE_STORE_LINE_WRITE",
  ORBA = "ORBA",
  ORBA_WRITE = "ORBA_WRITE",
}

export enum EnumContactCivility {
  MR = "MR",
  MS = "MS",
}

export enum EnumRequestStatus {
  NEW = "NEW",
  RUNNING = "RUNNING",
  DONE = "DONE",
}

export enum EnumExportRequestName {
  ACTIVITY = "ACTIVITY",
  MAINTENANCE_ACTION = "MAINTENANCE_ACTION",
  MAINTENANCE_ACTION_DATA = "MAINTENANCE_ACTION_DATA",
}

export enum EnumMeasureUnit {
  UNIT = "UNIT",
  GRAM = "GRAM",
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  MILLILITER = "MILLILITER",
  CENTILITER = "CENTILITER",
}

export enum EnumInventoryType {
  FULL = "FULL",
  PARTIAL = "PARTIAL",
}

export enum EnumProductMovementType {
  FILLING = "FILLING",
  REMOVAL = "REMOVAL",
  OUT_OF_DATE_REMOVAL = "OUT_OF_DATE_REMOVAL",
}

export enum EnumRestockingOrderStatus {
  REQUESTED = "REQUESTED",
  AVAILABLE = "AVAILABLE",
  LOADED = "LOADED",
}

export enum EnumRestockingOrderType {
  SALE_PLACE = "SALE_PLACE",
  VEHICLE = "VEHICLE",
}

export enum EnumAssignmentType {
  ASSIGNED_SALESMAN = "ASSIGNED_SALESMAN",
  ASSIGNED_SUPPLIER = "ASSIGNED_SUPPLIER",
  ASSIGNED_TECHNICIAN = "ASSIGNED_TECHNICIAN",
  ASSIGNED_SUPERVISOR = "ASSIGNED_SUPERVISOR",
  DESIGNATED_FOR_PASSAGE_ASSIGNMENT = "DESIGNATED_FOR_PASSAGE_ASSIGNMENT",
  CASCADED_ASSIGNMENT = "CASCADED_ASSIGNMENT",
  MANUAL_SALE_PLACE_ASSIGNMENT = "MANUAL_SALE_PLACE_ASSIGNMENT",
  MANUAL_SALE_PLACE_GROUP_ASSIGNMENT = "MANUAL_SALE_PLACE_GROUP_ASSIGNMENT",
  ADMINISTRATOR_ASSIGNMENT = "ADMINISTRATOR_ASSIGNMENT",
}

export enum EnumAuditType {
  AUCUN = "AUCUN",
  AZKOYEN = "AZKOYEN",
  AZTEK_CLEF_PICO_PUCE = "AZTEK_CLEF_PICO_PUCE",
  COGES_CLEF = "COGES_CLEF",
  FAGES_CARTE_CLEF = "FAGES_CARTE_CLEF",
  JOFEMAR_MONNAYEUR = "JOFEMAR_MONNAYEUR",
  MARS_CASHFLOW = "MARS_CASHFLOW",
  NRI_110_TICKET_12 = "NRI_110_TICKET_12",
  UKEY_MICROTRONIC_CLEF = "UKEY_MICROTRONIC_CLEF",
  INFRA_ROUGE_IRDA_ORBA = "INFRA_ROUGE_IRDA_ORBA",
  MARS_16_19 = "MARS_16_19",
  COINCO = "COINCO",
  NRI_1200_TICKET_12 = "NRI_1200_TICKET_12",
  CONPAS_ZIP_NW_RS232_CLEF = "CONPAS_ZIP_NW_RS232_CLEF",
  GIROVEND_CARTE_CLEF = "GIROVEND_CARTE_CLEF",
  UKEY_MICROTRONIC_PAB = "UKEY_MICROTRONIC_PAB",
  EVA_DTS_DDCMP_CORDON = "EVA_DTS_DDCMP_CORDON",
  EVA_DTS_DDCMP_IRDA = "EVA_DTS_DDCMP_IRDA",
  EVA_DTS_DEX_9600_CORDON = "EVA_DTS_DEX_9600_CORDON",
  EVA_DTS_DEX_9600_IRDA = "EVA_DTS_DEX_9600_IRDA",
  JOFEMAR_CARTE = "JOFEMAR_CARTE",
  MONEO_INGENICO = "MONEO_INGENICO",
  MONEO_ASCOM = "MONEO_ASCOM",
  MONEO_ORBA_STANDARD_RS232 = "MONEO_ORBA_STANDARD_RS232",
  ELKEY_SIKEY_CLEF = "ELKEY_SIKEY_CLEF",
  MONEO_ORBA_STANDARD_IRDA = "MONEO_ORBA_STANDARD_IRDA",
  IR35_1200_CODE_CLEF_1 = "IR35_1200_CODE_CLEF_1",
  IRDA_DDCMP_ORBA = "IRDA_DDCMP_ORBA",
  IRDA_2400_ORBA = "IRDA_2400_ORBA",
  AZTEK_MODULO_IRDA_DDCMP_2400_STD = "AZTEK_MODULO_IRDA_DDCMP_2400_STD",
  CONPAS_ZIP_NW_IRDA_CLEF = "CONPAS_ZIP_NW_IRDA_CLEF",
  EVA_DTS_NW_IRDA_CLEF = "EVA_DTS_NW_IRDA_CLEF",
  EVA_DTS_NW_RS232_CLEF = "EVA_DTS_NW_RS232_CLEF",
  COMESTERO_EUROKEY_PLUS = "COMESTERO_EUROKEY_PLUS",
  EVA_DTS_DIRECT_9600_IRDA = "EVA_DTS_DIRECT_9600_IRDA",
  EVA_DTS_DIRECT_9600_RS232 = "EVA_DTS_DIRECT_9600_RS232",
  FAGE_CORDON_RJ45 = "FAGE_CORDON_RJ45",
  COGES_DDCMP_IRDA = "COGES_DDCMP_IRDA",
  MARS_DDCMP_IRDA_2400 = "MARS_DDCMP_IRDA_2400",
  MARS_DDCMP_CABLE_RS232_2400 = "MARS_DDCMP_CABLE_RS232_2400",
  AZTEK_PICO_PUCE_IRDA = "AZTEK_PICO_PUCE_IRDA",
  SANDEN_DEX_RS232 = "SANDEN_DEX_RS232",
  DA_NW_EN_RS323_ZANUSSI = "DA_NW_EN_RS323_ZANUSSI",
  CARTADIS_IRDA = "CARTADIS_IRDA",
  NRI_IRDA = "NRI_IRDA",
  EVA_DTS_UKEY_DIRECT_9600_IRDA = "EVA_DTS_UKEY_DIRECT_9600_IRDA",
  EVA_DTS_UKEY_RS232_DIRECT_9600 = "EVA_DTS_UKEY_RS232_DIRECT_9600",
  DA_NW_EVA_DTS_DDCMP_RS232 = "DA_NW_EVA_DTS_DDCMP_RS232",
  KLIX_AVEC_CABLE_AUDIT_KLIX = "KLIX_AVEC_CABLE_AUDIT_KLIX",
  ALLO_MACHINE = "ALLO_MACHINE",
  SIELAFF_DDCMP_IRDA = "SIELAFF_DDCMP_IRDA",
  KLIX_DIRECT_RJ45_CABLE_GRIS_ORBA = "KLIX_DIRECT_RJ45_CABLE_GRIS_ORBA",
  COGES_DDCMP_RS232 = "COGES_DDCMP_RS232",
  AUDIT_BLUETOOTH_ORBA = "AUDIT_BLUETOOTH_ORBA",
  IR35_1200_JOFEMAR_AZKOYEN_CODE_CLEF_2 = "IR35_1200_JOFEMAR_AZKOYEN_CODE_CLEF_2",
  IR35_MEI1900_MEI190X = "IR35_MEI1900_MEI190X",
  IR35_MARS_CASHFLOW = "IR35_MARS_CASHFLOW",
  IR35_KLIX_ADPATATEUR_KLIX = "IR35_KLIX_ADPATATEUR_KLIX",
  THOR_ELKEY_ALYXIA = "THOR_ELKEY_ALYXIA",
  NRI_CURRENZA_IRDA = "NRI_CURRENZA_IRDA",
  AZTEK_MODULOPLUS_IRDA_DDCMP_38400 = "AZTEK_MODULOPLUS_IRDA_DDCMP_38400",
  MARS_IRDA_DDCMP_AUTO_NEGOCIATION = "MARS_IRDA_DDCMP_AUTO_NEGOCIATION",
  MARS_RS232_DDCMP_AUTO_NEGOCIATION = "MARS_RS232_DDCMP_AUTO_NEGOCIATION",
  EVA_DTS_UKEY_AUTO_NEGOCIATION_IRDA = "EVA_DTS_UKEY_AUTO_NEGOCIATION_IRDA",
  EVA_DTS_UKEY_RS232_AUTO_NEGOCIATION = "EVA_DTS_UKEY_RS232_AUTO_NEGOCIATION",
  DA_NW_EVA_DTS_IRDA_DDCMP = "DA_NW_EVA_DTS_IRDA_DDCMP",
  NRI_1200_TICKET_24 = "NRI_1200_TICKET_24",
  EVA_DTS_DDCMP_IRDA_SANS_AUTO_NEGOCIATION = "EVA_DTS_DDCMP_IRDA_SANS_AUTO_NEGOCIATION",
  KLIX_DIRECT_RJ45_CABLE_JAUNE_ORBA = "KLIX_DIRECT_RJ45_CABLE_JAUNE_ORBA",
  LECTEUR_DIVA_552_DDCMP_CABLE_SPECIFIQUE = "LECTEUR_DIVA_552_DDCMP_CABLE_SPECIFIQUE",
  EVA_DTS_UKEY_TTL_DIRECT_9600_RJ45_CABLE_ORANGE = "EVA_DTS_UKEY_TTL_DIRECT_9600_RJ45_CABLE_ORANGE",
  EVA_DTS_UKEY_TTL_AUTO_NEGOCIATION_RJ45_CABLE_ORANGE = "EVA_DTS_UKEY_TTL_AUTO_NEGOCIATION_RJ45_CABLE_ORANGE",
  RESERVE_CODE_AUDIT_ORBA = "RESERVE_CODE_AUDIT_ORBA",
  MIZIP_NW_IRDA = "MIZIP_NW_IRDA",
  MIZIP_NW_CABLE = "MIZIP_NW_CABLE",
  COGES_IRDA_KEY = "COGES_IRDA_KEY",
  AZTEK_LUXEO = "AZTEK_LUXEO",
  LM_CONTROL_AZTEK_IUC180_DEX_UCS = "LM_CONTROL_AZTEK_IUC180_DEX_UCS",
  MEI_PAY_9600_RS232 = "MEI_PAY_9600_RS232",
  MEI_PAY_9600_IRDA = "MEI_PAY_9600_IRDA",
  MEI_PAY_AUTO_NEGOCIATION_RS232 = "MEI_PAY_AUTO_NEGOCIATION_RS232",
  MEI_PAY_AUTO_NEGOCIATION_IRDA = "MEI_PAY_AUTO_NEGOCIATION_IRDA",
  IRDA_AUTRES_1 = "IRDA_AUTRES_1",
  IRDA_AUTRES_2 = "IRDA_AUTRES_2",
  AUTRES = "AUTRES",
}

export enum EnumAuditMedia {
  NONE = "NONE",
  COGES_BTDATAKEY = "COGES_BTDATAKEY",
  COGES_BUTTON = "COGES_BUTTON",
  NAYAX_BUTTON = "NAYAX_BUTTON",
  USB_KEY = "USB_KEY",
  AUDIO_CABLE = "AUDIO_CABLE",
  MODULO_CARD = "MODULO_CARD",
  LUXEO_CARD = "LUXEO_CARD",
  EASY_CUBE_DDCMP = "EASY_CUBE_DDCMP",
  EASY_CUBE_TICKET = "EASY_CUBE_TICKET",
  HYDRA_IRDA = "HYDRA_IRDA"
}

export enum EnumInstallationStatus {
  PENDING = "PENDING",
  AVAILABLE = "AVAILABLE",
  INSTALLED = "INSTALLED",
  REMOVED = "REMOVED",
  SYSTEM = "SYSTEM",
}

export enum EnumSalePlaceType {
  AUTOMATIC = "AUTOMATIC",
  MARKET = "MARKET",
  DELIVERY_POINT = "DELIVERY_POINT",
  SYSTEM = "SYSTEM",
}

export enum EnumCapacityCalculationMethod {
  MANUAL = "MANUAL",
  FROM_MODEL = "FROM_MODEL",
  FROM_PRODUCT_LINES = "FROM_PRODUCT_LINES",
}

export enum EnumSalePlaceState {
  SYSTEM = "SYSTEM",
  OK = "OK",
  ALERT = "ALERT",
  CRITICAL = "CRITICAL",
  OUT_OF_ORDER = "OUT_OF_ORDER",
}

export enum EnumPaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  CASH = "CASH",
  PHONE_APP = "PHONE_APP",
  TAG = "TAG",
  ISLY = "ISLY",
  OTHER = "OTHER",
}

export enum EnumTelemetryConnectorType {
  NAYAX_SQS_SALES = "NAYAX_SQS_SALES",
  NAYAX_SQS_AUDITS = "NAYAX_SQS_AUDITS",
  NAYAX_SQS_EVENTS = "NAYAX_SQS_EVENTS",
  NEBULAR = "NEBULAR",
  MATIPAY_SQS_SALES = "MATIPAY_SQS_SALES",
  MATIPAY_SQS_AUDITS = "MATIPAY_SQS_AUDITS",
  MATIPAY_SQS_EVENTS = "MATIPAY_SQS_EVENTS",
  IUC180_SQS_SALES = "IUC180_SQS_SALES",
  IUC180_SQS_AUDITS = "IUC180_SQS_AUDITS",
  IUC180_SQS_EVENTS = "IUC180_SQS_EVENTS",
}

export enum TelemetryErrorType {
  CONNECTOR_INTEGRATION_FAILED_TO_PUSH = "CONNECTOR_INTEGRATION_FAILED_TO_PUSH",
  CONNECTOR_FORWARD_FAILED_TO_PUSH = "CONNECTOR_FORWARD_FAILED_TO_PUSH",
  CONNECTOR_UNKNOW_ERROR = "CONNECTOR_UNKNOW_ERROR",
  INTEGRATION_ID_NOT_IN_DATABASE = "INTEGRATION_ID_NOT_IN_DATABASE",
  INTEGRATION_RAW_MESSAGE_UNREACHEABLE = "INTEGRATION_RAW_MESSAGE_UNREACHEABLE",
  INTEGRATION_ID_NOT_A_NUMBER = "INTEGRATION_ID_NOT_A_NUMBER",
  INTEGRATION_UNKOWN_ERROR = "INTEGRATION_UNKOWN_ERROR",
  FORWARD_ID_NOT_IN_DATABASE = "FORWARD_ID_NOT_IN_DATABASE",
  FORWARD_RAW_MESSAGE_UNREACHEABLE = "FORWARD_RAW_MESSAGE_UNREACHEABLE",
  FORWARD_ID_NOT_A_NUMBER = "FORWARD_ID_NOT_A_NUMBER",
  FORWARD_UNKNOW_ERROR = "FORWARD_UNKNOW_ERROR",
}

export enum EnumRunningStatus {
  STARTED = "STARTED",
  STOPPED = "STOPPED",
  CREATION_REQUESTED = "CREATION_REQUESTED",
  UPDATE_REQUESTED = "UPDATE_REQUESTED",
  START_FAILED = "START_FAILED",
}

export enum EnumMessageType {
  TICKET_ASSIGNATION = "TICKET_ASSIGNATION",
  MESSAGE = "MESSAGE",
}

export enum EnumRelevantService {
  CUSTOMER_SERVICE = "CUSTOMER_SERVICE",
  TECHNICAL_SERVICE = "TECHNICAL_SERVICE",
  PROVISIONER_SERVICE = "PROVISIONER_SERVICE",
  COMMERCIAL_SERVICE = "COMMERCIAL_SERVICE",
  SUPERVISOR_SERVICE = "SUPERVISOR_SERVICE",
  ADMINISTRATIVE_SERVICE = "ADMINISTRATIVE_SERVICE",
}

export enum EnumActivityType {
  VISIT = "VISIT",
  WORKING_DAY_BREAK = "WORKING_DAY_BREAK",
  VEHICLE_LOADING = "VEHICLE_LOADING",
  CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
}

export enum EnumIdentificationMode {
  NFC = "NFC",
  BARCODE = "BARCODE",
  TEXT = "TEXT",
}

export enum EnumVisitImageType {
  BEFORE = "BEFORE",
  DURING = "DURING",
  AFTER = "AFTER",
}

export enum EnumMandatoryActionType {
  COLLECT_CASH = "COLLECT_CASH",
  PUT_CHANGE = "PUT_CHANGE",
  DO_AN_AUDIT = "DO_AN_AUDIT",
  BEFORE_VISIT_PICTURE = "BEFORE_VISIT_PICTURE",
  AFTER_VISIT_CLOSED_DOOR_PICTURE = "AFTER_VISIT_CLOSED_DOOR_PICTURE",
  AFTER_VISIT_WHOLE_PLACE_PICTURE = "AFTER_VISIT_WHOLE_PLACE_PICTURE",
}

export enum EnumMaintenanceActionDataInputType {
  SCAN = "SCAN",
  TEXT = "TEXT",
  INTEGER = "INTEGER",
  DOUBLE = "DOUBLE",
  BOOLEAN = "BOOLEAN",
  SELECT = "SELECT",
  SCORE = "SCORE",
  CHRONO = "CHRONO",
  PHOTO = "PHOTO",
}

export enum EnumConnectivityStatus {
  NOT_CHECKED = "NOT_CHECKED",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export enum OrbaReceiverType {
  VEHICLE = "VEHICLE",
  USER = "USER",
  CASH_FLOW = "CASH_FLOW",
  SALE_PLACE = "SALE_PLACE",
}

export enum OrbaInputErrorType {
  DESERIALIZATION = "DESERIALIZATION",
  PARSE = "PARSE",
}

export enum PassageCreator {
  PREDICTION = "PREDICTION",
  HUMAN = "HUMAN",
  PREDICTION_AND_HUMAN = "PREDICTION_AND_HUMAN",
}

export enum PassageReason {
  FixedDateToday = "FixedDateToday",
  FixedDateNextDay = "FixedDateNextDay",
  RepeatedPeriodCriticalThresholdToday = "RepeatedPeriodCriticalThresholdToday",
  RepeatedPeriodCriticalThresholdNextDay = "RepeatedPeriodCriticalThresholdNextDay",
  RepeatedPeriodWarningThresholdToday = "RepeatedPeriodWarningThresholdToday",
  RepeatedPeriodWarningThresholdNextDay = "RepeatedPeriodWarningThresholdNextDay",
  FillingRateCriticalThreshold = "FillingRateCriticalThreshold",
  FillingRateWarningThreshold = "FillingRateWarningThreshold",
  OutOfStockCriticalThreshold = "OutOfStockCriticalThreshold",
  OutOfStockWarningThreshold = "OutOfStockWarningThreshold",
  Neighborhood = "Neighborhood",
}

export enum EnumImportance {
  MANDATORY = "MANDATORY",
  SUGGESTED = "SUGGESTED",
}

export enum EnumLastPassageDateTrigger {
  PASSAGE = "PASSAGE",
  PASSAGE_WITH_PRODUCT = "PASSAGE_WITH_PRODUCT",
  SUPPLIER_PASSAGE = "SUPPLIER_PASSAGE",
  SUPPLIER_PASSAGE_WITH_PRODUCT = "SUPPLIER_PASSAGE_WITH_PRODUCT",
  TECHNICAL_PASSAGE = "TECHNICAL_PASSAGE",
  TECHNICAL_PASSAGE_WITH_PRODUCT = "TECHNICAL_PASSAGE_WITH_PRODUCT",
}

export enum EnumTicketSeverity {
  OUT_OF_ORDER = "OUT_OF_ORDER",
  NOT_CRITICAL = "NOT_CRITICAL",
}

export enum EnumTicketPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum EnumTicketStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export enum EnumTicketType {
  INTERNAL_REQUEST = "INTERNAL_REQUEST",
  CUSTOMER_REQUEST = "CUSTOMER_REQUEST",
}

export enum EnumBarcodeType {
  EAN_13 = "EAN_13",
  EAN_8 = "EAN_8",
  CODE_39 = "CODE_39",
}


// Added by 'TSEnumToKeyArrayMapper' extension
export const FilterTypeKeys = {
  STRING: 'STRING',
  INT: 'INT',
  DOUBLE: 'DOUBLE',
  BOOL: 'BOOL',
  ENUM: 'ENUM',
  DATE: 'DATE'
};
export const ExpressionKeys = {
  EQUALS: 'EQUALS',
  NOT_EQUALS: 'NOT_EQUALS',
  START_WITH: 'START_WITH',
  CONTAINS: 'CONTAINS',
  NOT_CONTAINS: 'NOT_CONTAINS',
  EMPTY: 'EMPTY',
  NOT_EMPTY: 'NOT_EMPTY',
  LT: 'LT',
  LTE: 'LTE',
  GT: 'GT',
  GTE: 'GTE',
  BOOL: 'BOOL',
  IN: 'IN',
  NOT_IN: 'NOT_IN',
  IS_WITHIN: 'IS_WITHIN'
};
export const ComposeKeys = {WHERE: 'WHERE', AND: 'AND', OR: 'OR'};
export const AggregationFunctionKeys = {
  COUNT: 'COUNT',
  SUM: 'SUM',
  AVG: 'AVG',
  MIN: 'MIN',
  MAX: 'MAX'
};
export const ViewDisplayKeys = {DEFAULT: 'DEFAULT', TABLE: 'TABLE', MAP: 'MAP', KANBAN: 'KANBAN'};
export const ViewTypeKeys = {
  TICKETS: 'TICKETS',
  TICKET_COMMENTS: 'TICKET_COMMENTS',
  TICKET_TYPE: 'TICKET_TYPE',
  USER_SALE_PLACES: 'USER_SALE_PLACES',
  TICKET_SALE_PLACES: 'TICKET_SALE_PLACES',
  TICKET_VENDOR_USERS: 'TICKET_VENDOR_USERS',
  SALE_PLACES: 'SALE_PLACES',
  SALE_PLACE_GROUPS: 'SALE_PLACE_GROUPS',
  SALE_PLACE_LOCATIONS: 'SALE_PLACE_LOCATIONS',
  SALE_PLACE_HARDWARES: 'SALE_PLACE_HARDWARES',
  SALE_PLACE_VISITS: 'SALE_PLACE_VISITS',
  SALE_PLACE_TICKETS: 'SALE_PLACE_TICKETS',
  SALE_PLACE_IMAGE_VISIT: 'SALE_PLACE_IMAGE_VISIT',
  VENDOR_USERS: 'VENDOR_USERS',
  CUSTOMER_USERS: 'CUSTOMER_USERS',
  ACTIVITIES: 'ACTIVITIES',
  VISITS: 'VISITS',
  CUSTOM_ACTIVITIES: 'CUSTOM_ACTIVITIES',
  WORKING_DAYS: 'WORKING_DAYS',
  COMPANY_SITES: 'COMPANY_SITES',
  VEHICLES: 'VEHICLES',
  CUSTOMERS: 'CUSTOMERS',
  PRODUCTS: 'PRODUCTS',
  RECIPE_INGREDIENTS: 'RECIPE_INGREDIENTS',
  RECIPES: 'RECIPES',
  STORAGE_PRODUCT_LINES: 'STORAGE_PRODUCT_LINES',
  PRODUCT_TYPES: 'PRODUCT_TYPES',
  BUSINESS_ORGANIZATIONS: 'BUSINESS_ORGANIZATIONS',
  BUSINESS_ORGANIZATION_SALE_PLACES: 'BUSINESS_ORGANIZATION_SALE_PLACES',
  SMARTPHONES: 'SMARTPHONES',
  SMARTPHONE_USES: 'SMARTPHONE_USES',
  PACKAGINGS: 'PACKAGINGS',
  MAINTENANCE_ACTION_DEFINITIONS: 'MAINTENANCE_ACTION_DEFINITIONS',
  MAINTENANCE_ACTION_DATA_DEFINITIONS: 'MAINTENANCE_ACTION_DATA_DEFINITIONS',
  CUSTOM_ACTIVITY_DEFINITIONS: 'CUSTOM_ACTIVITY_DEFINITIONS',
  MAINTENANCE_ACTIONS: 'MAINTENANCE_ACTIONS',
  MAINTENANCE_ACTION_DATAS: 'MAINTENANCE_ACTION_DATAS',
  MESSAGES: 'MESSAGES',
  PASSAGES: 'PASSAGES',
  PASSAGE_GENERATION_REQUESTS: 'PASSAGE_GENERATION_REQUESTS',
  TELEMETRY_VENDOR_CONFIGURATIONS: 'TELEMETRY_VENDOR_CONFIGURATIONS',
  SALE_PLACE_EQUIPMENTS: 'SALE_PLACE_EQUIPMENTS',
  IMAGE_VISIT: 'IMAGE_VISIT',
  VENDOR_USER_GROUPS: 'VENDOR_USER_GROUPS',
  GROUP_VENDOR_USERS: 'GROUP_VENDOR_USERS',
  AUDIT_MEDIAS: 'AUDIT_MEDIAS',
  DA_SALES: 'DA_SALES',
  SALE_PLACE_STORE_LINES: 'SALE_PLACE_STORE_LINES',
  PRODUCT_FLOWS: 'PRODUCT_FLOWS',
  PRODUCT_FLOW_LINES: 'PRODUCT_FLOW_LINES'
};
export const EnumAuthorityKeys = {
  ROLE_ANONYMOUS: 'ROLE_ANONYMOUS',
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_USER: 'ROLE_USER',
  SALE_PLACE_WRITE: 'SALE_PLACE_WRITE',
  SALE_PLACE: 'SALE_PLACE',
  SALE_PLACE_EXPORT: 'SALE_PLACE_EXPORT',
  SALE_PLACE_HARDWARE_WRITE: 'SALE_PLACE_HARDWARE_WRITE',
  SALE_PLACE_HARDWARE: 'SALE_PLACE_HARDWARE',
  SALE_PLACE_HARDWARE_EXPORT: 'SALE_PLACE_HARDWARE_EXPORT',
  TICKET_WRITE: 'TICKET_WRITE',
  TICKET: 'TICKET',
  TICKET_EXPORT: 'TICKET_EXPORT',
  WORKING_DAY_WRITE: 'WORKING_DAY_WRITE',
  WORKING_DAY: 'WORKING_DAY',
  WORKING_DAY_EXPORT: 'WORKING_DAY_EXPORT',
  CUSTOMER_SALE_PLACE: 'CUSTOMER_SALE_PLACE',
  CUSTOMER_USER: 'CUSTOMER_USER',
  CUSTOMER_USER_WRITE: 'CUSTOMER_USER_WRITE',
  VENDOR_USER: 'VENDOR_USER',
  VENDOR_USER_WRITE: 'VENDOR_USER_WRITE',
  VENDOR_USER_EXPORT: 'VENDOR_USER_EXPORT',
  VENDOR_USER_AUTHORITIES: 'VENDOR_USER_AUTHORITIES',
  VENDOR_USER_AUTHORITIES_WRITE: 'VENDOR_USER_AUTHORITIES_WRITE',
  VENDOR_USER_SALE_PLACES: 'VENDOR_USER_SALE_PLACES',
  USER_SALE_PLACE_GROUPS: 'USER_SALE_PLACE_GROUPS',
  USER_SALE_PLACE_GROUPS_WRITE: 'USER_SALE_PLACE_GROUPS_WRITE',
  PRODUCT_WRITE: 'PRODUCT_WRITE',
  PRODUCT: 'PRODUCT',
  PRODUCT_EXPORT: 'PRODUCT_EXPORT',
  PLANNING_WRITE: 'PLANNING_WRITE',
  PLANNING: 'PLANNING',
  PLANNING_EXPORT: 'PLANNING_EXPORT',
  EQUIPMENT_WRITE: 'EQUIPMENT_WRITE',
  EQUIPMENT: 'EQUIPMENT',
  EQUIPMENT_EXPORT: 'EQUIPMENT_EXPORT',
  VUE_WRITE: 'VUE_WRITE',
  VUE_CREATE_SHARED: 'VUE_CREATE_SHARED',
  SALE_PLACES_PHOTOS: 'SALE_PLACES_PHOTOS',
  KEY_NUMBERS: 'KEY_NUMBERS',
  TICKET_TYPE_WRITE: 'TICKET_TYPE_WRITE',
  TICKET_TYPE: 'TICKET_TYPE',
  TICKET_TYPE_EXPORT: 'TICKET_TYPE_EXPORT',
  VEHICLE_WRITE: 'VEHICLE_WRITE',
  VEHICLE: 'VEHICLE',
  VEHICLE_EXPORT: 'VEHICLE_EXPORT',
  MOBILE_DEVICE_WRITE: 'MOBILE_DEVICE_WRITE',
  MOBILE_DEVICE: 'MOBILE_DEVICE',
  MOBILE_DEVICE_EXPORT: 'MOBILE_DEVICE_EXPORT',
  BILL_WRITE: 'BILL_WRITE',
  BILL: 'BILL',
  BILL_EXPORT: 'BILL_EXPORT',
  PURCHASE_WRITE: 'PURCHASE_WRITE',
  PURCHASE: 'PURCHASE',
  PURCHASE_EXPORT: 'PURCHASE_EXPORT',
  PROVIDER_WRITE: 'PROVIDER_WRITE',
  PROVIDER: 'PROVIDER',
  PROVIDER_EXPORT: 'PROVIDER_EXPORT',
  CUSTOMER_WRITE: 'CUSTOMER_WRITE',
  CUSTOMER: 'CUSTOMER',
  CUSTOMER_EXPORT: 'CUSTOMER_EXPORT',
  ACTIVITY_WRITE: 'ACTIVITY_WRITE',
  ACTIVITY: 'ACTIVITY',
  ACTIVITY_EXPORT: 'ACTIVITY_EXPORT',
  PRODUCT_FLOW_WRITE: 'PRODUCT_FLOW_WRITE',
  PRODUCT_FLOW: 'PRODUCT_FLOW',
  PRODUCT_FLOW_EXPORT: 'PRODUCT_FLOW_EXPORT',
  PRODUCT_TYPE: 'PRODUCT_TYPE',
  PRODUCT_TYPE_WRITE: 'PRODUCT_TYPE_WRITE',
  PRODUCT_TYPE_EXPORT: 'PRODUCT_TYPE_EXPORT',
  SALE_PLACE_GROUP: 'SALE_PLACE_GROUP',
  SALE_PLACE_GROUP_WRITE: 'SALE_PLACE_GROUP_WRITE',
  SALE_PLACE_GROUP_EXPORT: 'SALE_PLACE_GROUP_EXPORT',
  BUSINESS_ORGANIZATION_WRITE: 'BUSINESS_ORGANIZATION_WRITE',
  BUSINESS_ORGANIZATION: 'BUSINESS_ORGANIZATION',
  BUSINESS_ORGANIZATION_EXPORT: 'BUSINESS_ORGANIZATION_EXPORT',
  COMPANY_SITE: 'COMPANY_SITE',
  COMPANY_SITE_WRITE: 'COMPANY_SITE_WRITE',
  COMPANY_SITE_EXPORT: 'COMPANY_SITE_EXPORT',
  VEHICLE_STORAGE_AREA: 'VEHICLE_STORAGE_AREA',
  VEHICLE_STORAGE_AREA_WRITE: 'VEHICLE_STORAGE_AREA_WRITE',
  VEHICLE_STORAGE_AREA_EXPORT: 'VEHICLE_STORAGE_AREA_EXPORT',
  SALE_PLACE_STORAGE_AREA: 'SALE_PLACE_STORAGE_AREA',
  SALE_PLACE_STORAGE_AREA_WRITE: 'SALE_PLACE_STORAGE_AREA_WRITE',
  SALE_PLACE_STORAGE_AREA_EXPORT: 'SALE_PLACE_STORAGE_AREA_EXPORT',
  SMARTPHONE: 'SMARTPHONE',
  SMARTPHONE_WRITE: 'SMARTPHONE_WRITE',
  SMARTPHONE_EXPORT: 'SMARTPHONE_EXPORT',
  SALE_PLACE_VISIT_CONFIGURATION: 'SALE_PLACE_VISIT_CONFIGURATION',
  SALE_PLACE_VISIT_CONFIGURATION_WRITE: 'SALE_PLACE_VISIT_CONFIGURATION_WRITE',
  MAINTENANCE_ACTION_DEFINITION: 'MAINTENANCE_ACTION_DEFINITION',
  MAINTENANCE_ACTION_DEFINITION_WRITE: 'MAINTENANCE_ACTION_DEFINITION_WRITE',
  MAINTENANCE_ACTION_DEFINITION_EXPORT: 'MAINTENANCE_ACTION_DEFINITION_EXPORT',
  CUSTOM_ACTIVITY_DEFINITION: 'CUSTOM_ACTIVITY_DEFINITION',
  CUSTOM_ACTIVITY_DEFINITION_WRITE: 'CUSTOM_ACTIVITY_DEFINITION_WRITE',
  CUSTOM_ACTIVITY_DEFINITION_EXPORT: 'CUSTOM_ACTIVITY_DEFINITION_EXPORT',
  MAINTENANCE_ACTION: 'MAINTENANCE_ACTION',
  MAINTENANCE_ACTION_WRITE: 'MAINTENANCE_ACTION_WRITE',
  MAINTENANCE_ACTION_EXPORT: 'MAINTENANCE_ACTION_EXPORT',
  MAINTENANCE_ACTION_DATA: 'MAINTENANCE_ACTION_DATA',
  MAINTENANCE_ACTION_DATA_WRITE: 'MAINTENANCE_ACTION_DATA_WRITE',
  MAINTENANCE_ACTION_DATA_EXPORT: 'MAINTENANCE_ACTION_DATA_EXPORT',
  VENDOR_USER_VISIT_CONFIGURATION: 'VENDOR_USER_VISIT_CONFIGURATION',
  VENDOR_USER_VISIT_CONFIGURATION_WRITE: 'VENDOR_USER_VISIT_CONFIGURATION_WRITE',
  SETTING: 'SETTING',
  MESSAGE: 'MESSAGE',
  MESSAGE_WRITE: 'MESSAGE_WRITE',
  MESSAGE_EXPORT: 'MESSAGE_EXPORT',
  MOBILE_SYNC: 'MOBILE_SYNC',
  MOBILE_RESTOCKING_ORDER: 'MOBILE_RESTOCKING_ORDER',
  MOBILE_READ_ALL_SALE_PLACES: 'MOBILE_READ_ALL_SALE_PLACES',
  NFC_ENCODING_USER: 'NFC_ENCODING_USER',
  NFC_ENCODING_VEHICLE: 'NFC_ENCODING_VEHICLE',
  NFC_ENCODING_CASHBAG: 'NFC_ENCODING_CASHBAG',
  NFC_ENCODING_SALE_PLACE: 'NFC_ENCODING_SALE_PLACE',
  NFC_ENCODING_CASHFLOW: 'NFC_ENCODING_CASHFLOW',
  PASSAGE: 'PASSAGE',
  PASSAGE_WRITE: 'PASSAGE_WRITE',
  PASSAGE_EXPORT: 'PASSAGE_EXPORT',
  PASSAGE_CONFIGURATION: 'PASSAGE_CONFIGURATION',
  PASSAGE_GENERATION_REQUEST: 'PASSAGE_GENERATION_REQUEST',
  PASSAGE_GENERATION_REQUEST_WRITE: 'PASSAGE_GENERATION_REQUEST_WRITE',
  TELEMETRY_VENDOR_CONFIGURATION: 'TELEMETRY_VENDOR_CONFIGURATION',
  TELEMETRY_VENDOR_CONFIGURATION_WRITE: 'TELEMETRY_VENDOR_CONFIGURATION_WRITE',
  VENDOR_USER_GROUP: 'VENDOR_USER_GROUP',
  VENDOR_USER_GROUP_WRITE: 'VENDOR_USER_GROUP_WRITE',
  VENDOR_USER_GROUP_EXPORT: 'VENDOR_USER_GROUP_EXPORT',
  AUDIT_MEDIA: 'AUDIT_MEDIA',
  AUDIT_MEDIA_WRITE: 'AUDIT_MEDIA_WRITE',
  SALE_EXPORT: 'SALE_EXPORT',
  SALE: 'SALE',
  SALE_PLACE_STORE_LINE: 'SALE_PLACE_STORE_LINE',
  SALE_PLACE_STORE_LINE_EXPORT: 'SALE_PLACE_STORE_LINE_EXPORT',
  SALE_PLACE_STORE_LINE_WRITE: 'SALE_PLACE_STORE_LINE_WRITE',
  ORBA: 'ORBA',
  ORBA_WRITE: 'ORBA_WRITE'
};
export const EnumContactCivilityKeys = {MR: 'MR', MS: 'MS'};
export const EnumRequestStatusKeys = {NEW: 'NEW', RUNNING: 'RUNNING', DONE: 'DONE'};
export const EnumExportRequestNameKeys = {
  ACTIVITY: 'ACTIVITY',
  MAINTENANCE_ACTION: 'MAINTENANCE_ACTION',
  MAINTENANCE_ACTION_DATA: 'MAINTENANCE_ACTION_DATA'
};
export const EnumMeasureUnitKeys = {
  UNIT: 'UNIT',
  GRAM: 'GRAM',
  KILOGRAM: 'KILOGRAM',
  LITER: 'LITER',
  MILLILITER: 'MILLILITER',
  CENTILITER: 'CENTILITER'
};
export const EnumInventoryTypeKeys = {FULL: 'FULL', PARTIAL: 'PARTIAL'};
export const EnumProductMovementTypeKeys = {
  FILLING: 'FILLING',
  REMOVAL: 'REMOVAL',
  OUT_OF_DATE_REMOVAL: 'OUT_OF_DATE_REMOVAL'
};
export const EnumRestockingOrderStatusKeys = {
  REQUESTED: 'REQUESTED',
  AVAILABLE: 'AVAILABLE',
  LOADED: 'LOADED'
};
export const EnumRestockingOrderTypeKeys = {SALE_PLACE: 'SALE_PLACE', VEHICLE: 'VEHICLE'};
export const EnumAssignmentTypeKeys = {
  ASSIGNED_SALESMAN: 'ASSIGNED_SALESMAN',
  ASSIGNED_SUPPLIER: 'ASSIGNED_SUPPLIER',
  ASSIGNED_TECHNICIAN: 'ASSIGNED_TECHNICIAN',
  ASSIGNED_SUPERVISOR: 'ASSIGNED_SUPERVISOR',
  DESIGNATED_FOR_PASSAGE_ASSIGNMENT: 'DESIGNATED_FOR_PASSAGE_ASSIGNMENT',
  CASCADED_ASSIGNMENT: 'CASCADED_ASSIGNMENT',
  MANUAL_SALE_PLACE_ASSIGNMENT: 'MANUAL_SALE_PLACE_ASSIGNMENT',
  MANUAL_SALE_PLACE_GROUP_ASSIGNMENT: 'MANUAL_SALE_PLACE_GROUP_ASSIGNMENT',
  ADMINISTRATOR_ASSIGNMENT: 'ADMINISTRATOR_ASSIGNMENT'
};
export const EnumAuditTypeKeys = {
  AUCUN: 'AUCUN',
  AZKOYEN: 'AZKOYEN',
  AZTEK_CLEF_PICO_PUCE: 'AZTEK_CLEF_PICO_PUCE',
  COGES_CLEF: 'COGES_CLEF',
  FAGES_CARTE_CLEF: 'FAGES_CARTE_CLEF',
  JOFEMAR_MONNAYEUR: 'JOFEMAR_MONNAYEUR',
  MARS_CASHFLOW: 'MARS_CASHFLOW',
  NRI_110_TICKET_12: 'NRI_110_TICKET_12',
  UKEY_MICROTRONIC_CLEF: 'UKEY_MICROTRONIC_CLEF',
  INFRA_ROUGE_IRDA_ORBA: 'INFRA_ROUGE_IRDA_ORBA',
  MARS_16_19: 'MARS_16_19',
  COINCO: 'COINCO',
  NRI_1200_TICKET_12: 'NRI_1200_TICKET_12',
  CONPAS_ZIP_NW_RS232_CLEF: 'CONPAS_ZIP_NW_RS232_CLEF',
  GIROVEND_CARTE_CLEF: 'GIROVEND_CARTE_CLEF',
  UKEY_MICROTRONIC_PAB: 'UKEY_MICROTRONIC_PAB',
  EVA_DTS_DDCMP_CORDON: 'EVA_DTS_DDCMP_CORDON',
  EVA_DTS_DDCMP_IRDA: 'EVA_DTS_DDCMP_IRDA',
  EVA_DTS_DEX_9600_CORDON: 'EVA_DTS_DEX_9600_CORDON',
  EVA_DTS_DEX_9600_IRDA: 'EVA_DTS_DEX_9600_IRDA',
  JOFEMAR_CARTE: 'JOFEMAR_CARTE',
  MONEO_INGENICO: 'MONEO_INGENICO',
  MONEO_ASCOM: 'MONEO_ASCOM',
  MONEO_ORBA_STANDARD_RS232: 'MONEO_ORBA_STANDARD_RS232',
  ELKEY_SIKEY_CLEF: 'ELKEY_SIKEY_CLEF',
  MONEO_ORBA_STANDARD_IRDA: 'MONEO_ORBA_STANDARD_IRDA',
  IR35_1200_CODE_CLEF_1: 'IR35_1200_CODE_CLEF_1',
  IRDA_DDCMP_ORBA: 'IRDA_DDCMP_ORBA',
  IRDA_2400_ORBA: 'IRDA_2400_ORBA',
  AZTEK_MODULO_IRDA_DDCMP_2400_STD: 'AZTEK_MODULO_IRDA_DDCMP_2400_STD',
  CONPAS_ZIP_NW_IRDA_CLEF: 'CONPAS_ZIP_NW_IRDA_CLEF',
  EVA_DTS_NW_IRDA_CLEF: 'EVA_DTS_NW_IRDA_CLEF',
  EVA_DTS_NW_RS232_CLEF: 'EVA_DTS_NW_RS232_CLEF',
  COMESTERO_EUROKEY_PLUS: 'COMESTERO_EUROKEY_PLUS',
  EVA_DTS_DIRECT_9600_IRDA: 'EVA_DTS_DIRECT_9600_IRDA',
  EVA_DTS_DIRECT_9600_RS232: 'EVA_DTS_DIRECT_9600_RS232',
  FAGE_CORDON_RJ45: 'FAGE_CORDON_RJ45',
  COGES_DDCMP_IRDA: 'COGES_DDCMP_IRDA',
  MARS_DDCMP_IRDA_2400: 'MARS_DDCMP_IRDA_2400',
  MARS_DDCMP_CABLE_RS232_2400: 'MARS_DDCMP_CABLE_RS232_2400',
  AZTEK_PICO_PUCE_IRDA: 'AZTEK_PICO_PUCE_IRDA',
  SANDEN_DEX_RS232: 'SANDEN_DEX_RS232',
  DA_NW_EN_RS323_ZANUSSI: 'DA_NW_EN_RS323_ZANUSSI',
  CARTADIS_IRDA: 'CARTADIS_IRDA',
  NRI_IRDA: 'NRI_IRDA',
  EVA_DTS_UKEY_DIRECT_9600_IRDA: 'EVA_DTS_UKEY_DIRECT_9600_IRDA',
  EVA_DTS_UKEY_RS232_DIRECT_9600: 'EVA_DTS_UKEY_RS232_DIRECT_9600',
  DA_NW_EVA_DTS_DDCMP_RS232: 'DA_NW_EVA_DTS_DDCMP_RS232',
  KLIX_AVEC_CABLE_AUDIT_KLIX: 'KLIX_AVEC_CABLE_AUDIT_KLIX',
  ALLO_MACHINE: 'ALLO_MACHINE',
  SIELAFF_DDCMP_IRDA: 'SIELAFF_DDCMP_IRDA',
  KLIX_DIRECT_RJ45_CABLE_GRIS_ORBA: 'KLIX_DIRECT_RJ45_CABLE_GRIS_ORBA',
  COGES_DDCMP_RS232: 'COGES_DDCMP_RS232',
  AUDIT_BLUETOOTH_ORBA: 'AUDIT_BLUETOOTH_ORBA',
  IR35_1200_JOFEMAR_AZKOYEN_CODE_CLEF_2: 'IR35_1200_JOFEMAR_AZKOYEN_CODE_CLEF_2',
  IR35_MEI1900_MEI190X: 'IR35_MEI1900_MEI190X',
  IR35_MARS_CASHFLOW: 'IR35_MARS_CASHFLOW',
  IR35_KLIX_ADPATATEUR_KLIX: 'IR35_KLIX_ADPATATEUR_KLIX',
  THOR_ELKEY_ALYXIA: 'THOR_ELKEY_ALYXIA',
  NRI_CURRENZA_IRDA: 'NRI_CURRENZA_IRDA',
  AZTEK_MODULOPLUS_IRDA_DDCMP_38400: 'AZTEK_MODULOPLUS_IRDA_DDCMP_38400',
  MARS_IRDA_DDCMP_AUTO_NEGOCIATION: 'MARS_IRDA_DDCMP_AUTO_NEGOCIATION',
  MARS_RS232_DDCMP_AUTO_NEGOCIATION: 'MARS_RS232_DDCMP_AUTO_NEGOCIATION',
  EVA_DTS_UKEY_AUTO_NEGOCIATION_IRDA: 'EVA_DTS_UKEY_AUTO_NEGOCIATION_IRDA',
  EVA_DTS_UKEY_RS232_AUTO_NEGOCIATION: 'EVA_DTS_UKEY_RS232_AUTO_NEGOCIATION',
  DA_NW_EVA_DTS_IRDA_DDCMP: 'DA_NW_EVA_DTS_IRDA_DDCMP',
  NRI_1200_TICKET_24: 'NRI_1200_TICKET_24',
  EVA_DTS_DDCMP_IRDA_SANS_AUTO_NEGOCIATION: 'EVA_DTS_DDCMP_IRDA_SANS_AUTO_NEGOCIATION',
  KLIX_DIRECT_RJ45_CABLE_JAUNE_ORBA: 'KLIX_DIRECT_RJ45_CABLE_JAUNE_ORBA',
  LECTEUR_DIVA_552_DDCMP_CABLE_SPECIFIQUE: 'LECTEUR_DIVA_552_DDCMP_CABLE_SPECIFIQUE',
  EVA_DTS_UKEY_TTL_DIRECT_9600_RJ45_CABLE_ORANGE: 'EVA_DTS_UKEY_TTL_DIRECT_9600_RJ45_CABLE_ORANGE',
  EVA_DTS_UKEY_TTL_AUTO_NEGOCIATION_RJ45_CABLE_ORANGE: 'EVA_DTS_UKEY_TTL_AUTO_NEGOCIATION_RJ45_CABLE_ORANGE',
  RESERVE_CODE_AUDIT_ORBA: 'RESERVE_CODE_AUDIT_ORBA',
  MIZIP_NW_IRDA: 'MIZIP_NW_IRDA',
  MIZIP_NW_CABLE: 'MIZIP_NW_CABLE',
  COGES_IRDA_KEY: 'COGES_IRDA_KEY',
  AZTEK_LUXEO: 'AZTEK_LUXEO',
  LM_CONTROL_AZTEK_IUC180_DEX_UCS: 'LM_CONTROL_AZTEK_IUC180_DEX_UCS',
  MEI_PAY_9600_RS232: 'MEI_PAY_9600_RS232',
  MEI_PAY_9600_IRDA: 'MEI_PAY_9600_IRDA',
  MEI_PAY_AUTO_NEGOCIATION_RS232: 'MEI_PAY_AUTO_NEGOCIATION_RS232',
  MEI_PAY_AUTO_NEGOCIATION_IRDA: 'MEI_PAY_AUTO_NEGOCIATION_IRDA',
  IRDA_AUTRES_1: 'IRDA_AUTRES_1',
  IRDA_AUTRES_2: 'IRDA_AUTRES_2',
  AUTRES: 'AUTRES'
};
export const EnumAuditMediaKeys = {
  NONE: 'NONE',
  COGES_BTDATAKEY: 'COGES_BTDATAKEY',
  COGES_BUTTON: 'COGES_BUTTON',
  NAYAX_BUTTON: 'NAYAX_BUTTON',
  USB_KEY: 'USB_KEY',
  AUDIO_CABLE: 'AUDIO_CABLE',
  MODULO_CARD: 'MODULO_CARD',
  LUXEO_CARD: 'LUXEO_CARD',
  EASY_CUBE_DDCMP: 'EASY_CUBE_DDCMP',
  EASY_CUBE_TICKET: 'EASY_CUBE_TICKET'
};
export const EnumInstallationStatusKeys = {
  PENDING: 'PENDING',
  AVAILABLE: 'AVAILABLE',
  INSTALLED: 'INSTALLED',
  REMOVED: 'REMOVED',
  SYSTEM: 'SYSTEM'
};
export const EnumSalePlaceTypeKeys = {
  AUTOMATIC: 'AUTOMATIC',
  MARKET: 'MARKET',
  DELIVERY_POINT: 'DELIVERY_POINT',
  SYSTEM: 'SYSTEM'
};
export const EnumCapacityCalculationMethodKeys = {
  MANUAL: 'MANUAL',
  FROM_MODEL: 'FROM_MODEL',
  FROM_PRODUCT_LINES: 'FROM_PRODUCT_LINES'
};
export const EnumSalePlaceStateKeys = {
  SYSTEM: 'SYSTEM',
  OK: 'OK',
  ALERT: 'ALERT',
  CRITICAL: 'CRITICAL',
  OUT_OF_ORDER: 'OUT_OF_ORDER'
};
export const EnumPaymentMethodKeys = {
  CREDIT_CARD: 'CREDIT_CARD',
  CASH: 'CASH',
  PHONE_APP: 'PHONE_APP',
  TAG: 'TAG',
  ISLY: 'ISLY',
  OTHER: 'OTHER'
};
export const EnumTelemetryConnectorTypeKeys = {
  NAYAX_SQS_SALES: 'NAYAX_SQS_SALES',
  NAYAX_SQS_AUDITS: 'NAYAX_SQS_AUDITS',
  NAYAX_SQS_EVENTS: 'NAYAX_SQS_EVENTS',
  NEBULAR: 'NEBULAR',
  MATIPAY_SQS_SALES: 'MATIPAY_SQS_SALES',
  MATIPAY_SQS_AUDITS: 'MATIPAY_SQS_AUDITS',
  MATIPAY_SQS_EVENTS: 'MATIPAY_SQS_EVENTS',
  IUC180_SQS_SALES: 'IUC180_SQS_SALES',
  IUC180_SQS_AUDITS: 'IUC180_SQS_AUDITS',
  IUC180_SQS_EVENTS: 'IUC180_SQS_EVENTS'
};
export const TelemetryErrorTypeKeys = {
  CONNECTOR_INTEGRATION_FAILED_TO_PUSH: 'CONNECTOR_INTEGRATION_FAILED_TO_PUSH',
  CONNECTOR_FORWARD_FAILED_TO_PUSH: 'CONNECTOR_FORWARD_FAILED_TO_PUSH',
  CONNECTOR_UNKNOW_ERROR: 'CONNECTOR_UNKNOW_ERROR',
  INTEGRATION_ID_NOT_IN_DATABASE: 'INTEGRATION_ID_NOT_IN_DATABASE',
  INTEGRATION_RAW_MESSAGE_UNREACHEABLE: 'INTEGRATION_RAW_MESSAGE_UNREACHEABLE',
  INTEGRATION_ID_NOT_A_NUMBER: 'INTEGRATION_ID_NOT_A_NUMBER',
  INTEGRATION_UNKOWN_ERROR: 'INTEGRATION_UNKOWN_ERROR',
  FORWARD_ID_NOT_IN_DATABASE: 'FORWARD_ID_NOT_IN_DATABASE',
  FORWARD_RAW_MESSAGE_UNREACHEABLE: 'FORWARD_RAW_MESSAGE_UNREACHEABLE',
  FORWARD_ID_NOT_A_NUMBER: 'FORWARD_ID_NOT_A_NUMBER',
  FORWARD_UNKNOW_ERROR: 'FORWARD_UNKNOW_ERROR'
};
export const EnumRunningStatusKeys = {
  STARTED: 'STARTED',
  STOPPED: 'STOPPED',
  CREATION_REQUESTED: 'CREATION_REQUESTED',
  UPDATE_REQUESTED: 'UPDATE_REQUESTED',
  START_FAILED: 'START_FAILED'
};
export const EnumMessageTypeKeys = {TICKET_ASSIGNATION: 'TICKET_ASSIGNATION', MESSAGE: 'MESSAGE'};
export const EnumRelevantServiceKeys = {
  CUSTOMER_SERVICE: 'CUSTOMER_SERVICE',
  TECHNICAL_SERVICE: 'TECHNICAL_SERVICE',
  PROVISIONER_SERVICE: 'PROVISIONER_SERVICE',
  COMMERCIAL_SERVICE: 'COMMERCIAL_SERVICE',
  SUPERVISOR_SERVICE: 'SUPERVISOR_SERVICE',
  ADMINISTRATIVE_SERVICE: 'ADMINISTRATIVE_SERVICE'
};
export const EnumActivityTypeKeys = {
  VISIT: 'VISIT',
  WORKING_DAY_BREAK: 'WORKING_DAY_BREAK',
  VEHICLE_LOADING: 'VEHICLE_LOADING',
  CUSTOM_ACTIVITY: 'CUSTOM_ACTIVITY'
};
export const EnumIdentificationModeKeys = {NFC: 'NFC', BARCODE: 'BARCODE', TEXT: 'TEXT'};
export const EnumVisitImageTypeKeys = {BEFORE: 'BEFORE', DURING: 'DURING', AFTER: 'AFTER'};
export const EnumMandatoryActionTypeKeys = {
  COLLECT_CASH: 'COLLECT_CASH',
  PUT_CHANGE: 'PUT_CHANGE',
  DO_AN_AUDIT: 'DO_AN_AUDIT',
  BEFORE_VISIT_PICTURE: 'BEFORE_VISIT_PICTURE',
  AFTER_VISIT_CLOSED_DOOR_PICTURE: 'AFTER_VISIT_CLOSED_DOOR_PICTURE',
  AFTER_VISIT_WHOLE_PLACE_PICTURE: 'AFTER_VISIT_WHOLE_PLACE_PICTURE'
};
export const EnumMaintenanceActionDataInputTypeKeys = {
  SCAN: 'SCAN',
  TEXT: 'TEXT',
  INTEGER: 'INTEGER',
  DOUBLE: 'DOUBLE',
  BOOLEAN: 'BOOLEAN',
  SELECT: 'SELECT',
  SCORE: 'SCORE',
  CHRONO: 'CHRONO',
  PHOTO: 'PHOTO'
};
export const EnumConnectivityStatusKeys = {
  NOT_CHECKED: 'NOT_CHECKED',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};
export const OrbaReceiverTypeKeys = {
  VEHICLE: 'VEHICLE',
  USER: 'USER',
  CASH_FLOW: 'CASH_FLOW',
  SALE_PLACE: 'SALE_PLACE'
};
export const OrbaInputErrorTypeKeys = {DESERIALIZATION: 'DESERIALIZATION', PARSE: 'PARSE'};
export const PassageCreatorKeys = {
  PREDICTION: 'PREDICTION',
  HUMAN: 'HUMAN',
  PREDICTION_AND_HUMAN: 'PREDICTION_AND_HUMAN'
};
export const PassageReasonKeys = {
  FixedDateToday: 'FixedDateToday',
  FixedDateNextDay: 'FixedDateNextDay',
  RepeatedPeriodCriticalThresholdToday: 'RepeatedPeriodCriticalThresholdToday',
  RepeatedPeriodCriticalThresholdNextDay: 'RepeatedPeriodCriticalThresholdNextDay',
  RepeatedPeriodWarningThresholdToday: 'RepeatedPeriodWarningThresholdToday',
  RepeatedPeriodWarningThresholdNextDay: 'RepeatedPeriodWarningThresholdNextDay',
  FillingRateCriticalThreshold: 'FillingRateCriticalThreshold',
  FillingRateWarningThreshold: 'FillingRateWarningThreshold',
  OutOfStockCriticalThreshold: 'OutOfStockCriticalThreshold',
  OutOfStockWarningThreshold: 'OutOfStockWarningThreshold',
  Neighborhood: 'Neighborhood'
};
export const EnumImportanceKeys = {MANDATORY: 'MANDATORY', SUGGESTED: 'SUGGESTED'};
export const EnumLastPassageDateTriggerKeys = {
  PASSAGE: 'PASSAGE',
  PASSAGE_WITH_PRODUCT: 'PASSAGE_WITH_PRODUCT',
  SUPPLIER_PASSAGE: 'SUPPLIER_PASSAGE',
  SUPPLIER_PASSAGE_WITH_PRODUCT: 'SUPPLIER_PASSAGE_WITH_PRODUCT',
  TECHNICAL_PASSAGE: 'TECHNICAL_PASSAGE',
  TECHNICAL_PASSAGE_WITH_PRODUCT: 'TECHNICAL_PASSAGE_WITH_PRODUCT'
};
export const EnumTicketSeverityKeys = {OUT_OF_ORDER: 'OUT_OF_ORDER', NOT_CRITICAL: 'NOT_CRITICAL'};
export const EnumTicketPriorityKeys = {LOW: 'LOW', MEDIUM: 'MEDIUM', HIGH: 'HIGH'};
export const EnumTicketStatusKeys = {OPEN: 'OPEN', CLOSED: 'CLOSED'};
export const EnumTicketTypeKeys = {
  INTERNAL_REQUEST: 'INTERNAL_REQUEST',
  CUSTOMER_REQUEST: 'CUSTOMER_REQUEST'
};
export const EnumBarcodeTypeKeys = {EAN_13: 'EAN_13', EAN_8: 'EAN_8', CODE_39: 'CODE_39'};


// Added by 'TSClassToTableDefMapper' extension
export const authorityColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumAuthority"
  },
};
export const authorityGroupColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const baseCompanyColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  companyName: {
    id: "companyName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  enable: {
    id: "enable",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const companySiteColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const contactColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  firstName: {
    id: "firstName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  lastName: {
    id: "lastName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  firstNameAndLastName: {
    id: "firstNameAndLastName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  civility: {
    id: "civility",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumContactCivility"
  },
  email: {
    id: "email",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  deskPhoneNumber: {
    id: "deskPhoneNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  mobilePhoneNumber: {
    id: "mobilePhoneNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  role: {
    id: "role",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  informations: {
    id: "informations",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  avatarImagePath: {
    id: "avatarImagePath",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const settingColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const userAccountColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  login: {
    id: "login",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  firstName: {
    id: "firstName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  lastName: {
    id: "lastName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  firstNameAndLastName: {
    id: "firstNameAndLastName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  email: {
    id: "email",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  phoneNumber: {
    id: "phoneNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  mobilePhoneNumber: {
    id: "mobilePhoneNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  activated: {
    id: "activated",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  loginAttempt: {
    id: "loginAttempt",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  langKey: {
    id: "langKey",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  imageUrl: {
    id: "imageUrl",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const asyncRequestColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  status: {
    id: "status",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRequestStatus"
  },
  startDate: {
    id: "startDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  endDate: {
    id: "endDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const emailRequestColumnStateDef = {
  templateName: {
    id: "templateName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  subject: {
    id: "subject",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const exportRequestColumnStateDef = {
  requestName: {
    id: "requestName",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumExportRequestName"
  },
};
export const customerColumnStateDef = {
  prospect: {
    id: "prospect",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  stars: {
    id: "stars",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const customerAuthorityGroupColumnStateDef = {};
export const customerUserColumnStateDef = {};
export const baseProductDefinitionColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  brand: {
    id: "brand",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  reference: {
    id: "reference",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  defaultSalePrice: {
    id: "defaultSalePrice",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  vatRateForSales: {
    id: "vatRateForSales",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  salable: {
    id: "salable",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const endProductDefinitionColumnStateDef = {
  alsoIngredient: {
    id: "alsoIngredient",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const forShippingProductDefinitionColumnStateDef = {
  vatRateForPurchases: {
    id: "vatRateForPurchases",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  stockShouldBeManaged: {
    id: "stockShouldBeManaged",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  vehiclePickingRoundCoef: {
    id: "vehiclePickingRoundCoef",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  measureUnit: {
    id: "measureUnit",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumMeasureUnit"
  },
};
export const hardwareDefinitionColumnStateDef = {};
export const inventoryColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  flowDate: {
    id: "flowDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  enumInventoryType: {
    id: "enumInventoryType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumInventoryType"
  },
};
export const inventoryLineColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const packagingColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const productFlowColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  flowDate: {
    id: "flowDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  productMovementType: {
    id: "productMovementType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumProductMovementType"
  },
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const productFlowLineColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const productTypeColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  nameForMobileDisplay: {
    id: "nameForMobileDisplay",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const providerColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  companyName: {
    id: "companyName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const providerProductInformationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  purchasePrise: {
    id: "purchasePrise",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
};
export const recipeDefinitionColumnStateDef = {};
export const recipeIngredientColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const sparePartDefinitionColumnStateDef = {};
export const vendingMachineDefinitionColumnStateDef = {};
export const businessOrganizationStorageAreaColumnStateDef = {};
export const providerStorageAreaColumnStateDef = {};
export const restockingOrderColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  restockingOrderStatus: {
    id: "restockingOrderStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRestockingOrderStatus"
  },
  restockingOrderType: {
    id: "restockingOrderType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRestockingOrderType"
  },
};
export const restockingOrderLineColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const salePlaceStorageAreaColumnStateDef = {};
export const storageAreaColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const storageProductLineColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  lineCode: {
    id: "lineCode",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  capacity: {
    id: "capacity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  stock: {
    id: "stock",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  standard: {
    id: "standard",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const trashStorageAreaColumnStateDef = {};
export const vehicleStorageAreaColumnStateDef = {};
export const abstractBaseEventColumnStateDef = {
  eventDate: {
    id: "eventDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  closeDate: {
    id: "closeDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const assignmentColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  assignmentType: {
    id: "assignmentType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumAssignmentType"
  },
};
export const auditColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  evaDtsText: {
    id: "evaDtsText",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  evaDtsJson: {
    id: "evaDtsJson",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  auditType: {
    id: "auditType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumAuditType"
  },
};
export const auditMediaColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  auditMode: {
    id: "auditMode",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumAuditMedia"
  },
  youtubeVideoUrl: {
    id: "youtubeVideoUrl",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  image: {
    id: "image",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const salePlaceColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  installationStatus: {
    id: "installationStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumInstallationStatus"
  },
  salePlaceType: {
    id: "salePlaceType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumSalePlaceType"
  },
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  identification: {
    id: "identification",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  startDate: {
    id: "startDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  stars: {
    id: "stars",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  capacity: {
    id: "capacity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  master: {
    id: "master",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  closed: {
    id: "closed",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  storeIsStorage: {
    id: "storeIsStorage",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  allowRestockingOrder: {
    id: "allowRestockingOrder",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  productFlowManagedByProductLines: {
    id: "productFlowManagedByProductLines",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  capacityCalculationMethod: {
    id: "capacityCalculationMethod",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumCapacityCalculationMethod"
  },
  connectable: {
    id: "connectable",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  toDoToday: {
    id: "toDoToday",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  allowAlertConfigurationByOperator: {
    id: "allowAlertConfigurationByOperator",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  mostRecentPicture: {
    id: "mostRecentPicture",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  fillingRateCriticalThresold: {
    id: "fillingRateCriticalThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  fillingRateWarningThresold: {
    id: "fillingRateWarningThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  outOfStockCriticalThresold: {
    id: "outOfStockCriticalThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  outOfStockWarningThresold: {
    id: "outOfStockWarningThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  daysWithoutVisitCriticalThresold: {
    id: "daysWithoutVisitCriticalThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  daysWithoutVisitWarningThresold: {
    id: "daysWithoutVisitWarningThresold",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  daysWithoutSaleAlert: {
    id: "daysWithoutSaleAlert",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  daysWithoutSaleCritical: {
    id: "daysWithoutSaleCritical",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const salePlaceDataColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  salePlaceState: {
    id: "salePlaceState",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumSalePlaceState"
  },
  lastVisitDate: {
    id: "lastVisitDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastSupplierVisitDate: {
    id: "lastSupplierVisitDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastTechnicianVisitDate: {
    id: "lastTechnicianVisitDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  nextPlannedFillingVisitDate: {
    id: "nextPlannedFillingVisitDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastPaiementSystemReplacementDate: {
    id: "lastPaiementSystemReplacementDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastVendingMachineReplacementDate: {
    id: "lastVendingMachineReplacementDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastSaleDate: {
    id: "lastSaleDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  salesCounter: {
    id: "salesCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  last3DaysSalesCounter: {
    id: "last3DaysSalesCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  fillingRate: {
    id: "fillingRate",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  last3DaysFillingRate: {
    id: "last3DaysFillingRate",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  freshProductFillingRate: {
    id: "freshProductFillingRate",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  hotProductFillingRate: {
    id: "hotProductFillingRate",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  stock: {
    id: "stock",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  last3DaysSalesTurnover: {
    id: "last3DaysSalesTurnover",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  turnoverSinceLastVisit: {
    id: "turnoverSinceLastVisit",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  cashAmountSinceLastVisit: {
    id: "cashAmountSinceLastVisit",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  soldOutCounter: {
    id: "soldOutCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  informations: {
    id: "informations",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const salePlaceEquipmentColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  installationDate: {
    id: "installationDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  removalDate: {
    id: "removalDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  installationStatus: {
    id: "installationStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumInstallationStatus"
  },
};
export const salePlaceGroupColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  description: {
    id: "description",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const salePlaceLocationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  locationName: {
    id: "locationName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  locationState: {
    id: "locationState",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumSalePlaceState"
  },
};
export const salePlaceStoreLineColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  price: {
    id: "price",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const saleplaceProducttypeColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const daSaleColumnStateDef = {};
export const marketSaleColumnStateDef = {};
export const saleColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  saleDate: {
    id: "saleDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  paymentMethod: {
    id: "paymentMethod",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumPaymentMethod"
  },
  transactionAmount: {
    id: "transactionAmount",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  numberOfSoldProducts: {
    id: "numberOfSoldProducts",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const saleEventColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const soldProductColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  unitSellingPrice: {
    id: "unitSellingPrice",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  totalPrice: {
    id: "totalPrice",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const telemetryMessageColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  sqsMessageId: {
    id: "sqsMessageId",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  connectorType: {
    id: "connectorType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTelemetryConnectorType"
  },
  rawMessage: {
    id: "rawMessage",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  forwarded: {
    id: "forwarded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  forwardDate: {
    id: "forwardDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  integrationDate: {
    id: "integrationDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  integrationFailedCounter: {
    id: "integrationFailedCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  forwardFailedCounter: {
    id: "forwardFailedCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const telemetryVendorConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  connectorType: {
    id: "connectorType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTelemetryConnectorType"
  },
  runningStatus: {
    id: "runningStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRunningStatus"
  },
  configuration: {
    id: "configuration",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  lastActivationDate: {
    id: "lastActivationDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastReceivedDatasDate: {
    id: "lastReceivedDatasDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const businessOrganizationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const gpsLocationHistoryColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  recordingDate: {
    id: "recordingDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const messageColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  message: {
    id: "message",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  sendSms: {
    id: "sendSms",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  type: {
    id: "type",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumMessageType"
  },
  relatedID: {
    id: "relatedID",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  relatedEntityName: {
    id: "relatedEntityName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  target: {
    id: "target",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  readingDate: {
    id: "readingDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  sendingDate: {
    id: "sendingDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const smartphoneUseColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  startDate: {
    id: "startDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  endDate: {
    id: "endDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const vehicleColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  registrationNumber: {
    id: "registrationNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  brand: {
    id: "brand",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  model: {
    id: "model",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const vehicleUseColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  startDate: {
    id: "startDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  stopDate: {
    id: "stopDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  startKmCounter: {
    id: "startKmCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  stopKmCounter: {
    id: "stopKmCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const vendorColumnStateDef = {};
export const vendorAuthorityGroupColumnStateDef = {};
export const vendorUserColumnStateDef = {
  administrator: {
    id: "administrator",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  relevantService: {
    id: "relevantService",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRelevantService"
  },
};
export const vendorUserGroupColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  description: {
    id: "description",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const vendorUserMemberOfGroupColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  supervisor: {
    id: "supervisor",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const activityColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  beginDate: {
    id: "beginDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  endDate: {
    id: "endDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  activityDuration: {
    id: "activityDuration",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  processingPostCloseDone: {
    id: "processingPostCloseDone",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  processingPostCloseFailedCounter: {
    id: "processingPostCloseFailedCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  durationSincePreviousVisit: {
    id: "durationSincePreviousVisit",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  activityType: {
    id: "activityType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumActivityType"
  },
};
export const coinsLoadColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  value: {
    id: "value",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  quantity: {
    id: "quantity",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const customActivityColumnStateDef = {
  comment: {
    id: "comment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  beginIdentificationMode: {
    id: "beginIdentificationMode",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumIdentificationMode"
  },
  beginIdentificationCode: {
    id: "beginIdentificationCode",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  endIdentificationMode: {
    id: "endIdentificationMode",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumIdentificationMode"
  },
  endIdentificationCode: {
    id: "endIdentificationCode",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  manualIdentificationStartComment: {
    id: "manualIdentificationStartComment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  manualIdentificationEndComment: {
    id: "manualIdentificationEndComment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const customActivityDefinitionColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  activityName: {
    id: "activityName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  commentNeeded: {
    id: "commentNeeded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  beginIdentificationCodeNeeded: {
    id: "beginIdentificationCodeNeeded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  endIdentificationCodeNeeded: {
    id: "endIdentificationCodeNeeded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  endOperatorActionNeeded: {
    id: "endOperatorActionNeeded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const imageVisitColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  image: {
    id: "image",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  type: {
    id: "type",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumVisitImageType"
  },
  lackOfChoice: {
    id: "lackOfChoice",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  poorQualityPicture: {
    id: "poorQualityPicture",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  soldOutProductsCounter: {
    id: "soldOutProductsCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const salePlaceVisitConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const vehicleLoadingColumnStateDef = {
  sentToOrbaDate: {
    id: "sentToOrbaDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  tryToSendToOrbaCounter: {
    id: "tryToSendToOrbaCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const vendorUserVisitConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
};
export const visitColumnStateDef = {
  beginIdentificationMode: {
    id: "beginIdentificationMode",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumIdentificationMode"
  },
  beginIdentificationCode: {
    id: "beginIdentificationCode",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  endIdentificationMode: {
    id: "endIdentificationMode",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumIdentificationMode"
  },
  endIdentificationCode: {
    id: "endIdentificationCode",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  manualIdentificationStartComment: {
    id: "manualIdentificationStartComment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  manualIdentificationEndComment: {
    id: "manualIdentificationEndComment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  visitComment: {
    id: "visitComment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  lackOfChoice: {
    id: "lackOfChoice",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  poorQualityPicture: {
    id: "poorQualityPicture",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  salesCounter: {
    id: "salesCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  salesCounterWithoutCup: {
    id: "salesCounterWithoutCup",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  moneyCarryingBagIdentification: {
    id: "moneyCarryingBagIdentification",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  moneyHasBeenRecovered: {
    id: "moneyHasBeenRecovered",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  ticketHasBeenUpdated: {
    id: "ticketHasBeenUpdated",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  fullProductFilling: {
    id: "fullProductFilling",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  productHasBeenLoaded: {
    id: "productHasBeenLoaded",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  inventoryHasBeenDone: {
    id: "inventoryHasBeenDone",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  productFillingCounter: {
    id: "productFillingCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  productRemovedCounter: {
    id: "productRemovedCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  productFillingRate: {
    id: "productFillingRate",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  productFillingRateFromAudit: {
    id: "productFillingRateFromAudit",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  salesCounterFromAudit: {
    id: "salesCounterFromAudit",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  salesAmountFromAudit: {
    id: "salesAmountFromAudit",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  payBackAmount: {
    id: "payBackAmount",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  testCount: {
    id: "testCount",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  testAmount: {
    id: "testAmount",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  soldOutProductsCounter: {
    id: "soldOutProductsCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  fillingCoinsAmount: {
    id: "fillingCoinsAmount",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  fillingCoinsAmountFromAudit: {
    id: "fillingCoinsAmountFromAudit",
    isVisible: true,
    filterType: FilterType.DOUBLE,
    filterExpression: Expression.EQUALS
  },
  salePlaceStateBeforeActivity: {
    id: "salePlaceStateBeforeActivity",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumSalePlaceState"
  },
};
export const workingDayColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  processingPostCloseDone: {
    id: "processingPostCloseDone",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  processingPostCloseFailedCounter: {
    id: "processingPostCloseFailedCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  vehicleStartKm: {
    id: "vehicleStartKm",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  vehicleEndKm: {
    id: "vehicleEndKm",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  cashRegisterStart: {
    id: "cashRegisterStart",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  cashRegisterEnd: {
    id: "cashRegisterEnd",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  beginDate: {
    id: "beginDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  endDate: {
    id: "endDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  sentToOrbaDate: {
    id: "sentToOrbaDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  tryToSendToOrbaCounter: {
    id: "tryToSendToOrbaCounter",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  firstActivityStartDate: {
    id: "firstActivityStartDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  lastActivityStartDate: {
    id: "lastActivityStartDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  numberOfActivitiesPerformed: {
    id: "numberOfActivitiesPerformed",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  numberOfVisitsPerformed: {
    id: "numberOfVisitsPerformed",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  numberOfBreaksPerformed: {
    id: "numberOfBreaksPerformed",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  numberOfVehicleLoadingsPerformed: {
    id: "numberOfVehicleLoadingsPerformed",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const workingDayBreakColumnStateDef = {};
export const hardwareColumnStateDef = {
  serialNumber: {
    id: "serialNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const salePlaceHardwareColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  code: {
    id: "code",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const smartphoneColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  registered: {
    id: "registered",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  androidVersion: {
    id: "androidVersion",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  avaMobileAppVersion: {
    id: "avaMobileAppVersion",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  androidId: {
    id: "androidId",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  fcmToken: {
    id: "fcmToken",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const maintenanceActionColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  maintenanceActionDate: {
    id: "maintenanceActionDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const maintenanceActionDataColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  value: {
    id: "value",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const maintenanceActionDataDefinitionColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  dataName: {
    id: "dataName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  maintenanceActionDataInputType: {
    id: "maintenanceActionDataInputType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumMaintenanceActionDataInputType"
  },
};
export const maintenanceActionDefinitionColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  actionName: {
    id: "actionName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  forProvisioner: {
    id: "forProvisioner",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  forTechnician: {
    id: "forTechnician",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  forSupervisor: {
    id: "forSupervisor",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const orbaFtpTransfertConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  ftpHost: {
    id: "ftpHost",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  login: {
    id: "login",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  password: {
    id: "password",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  connectivityStatus: {
    id: "connectivityStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumConnectivityStatus"
  },
};
export const orbaLicenceColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  licenceNumber: {
    id: "licenceNumber",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const orbaRawInputMessageColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  sqsMessageId: {
    id: "sqsMessageId",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  rawMessage: {
    id: "rawMessage",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  receiverType: {
    id: "receiverType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "OrbaReceiverType"
  },
  integrated: {
    id: "integrated",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  errorType: {
    id: "errorType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "OrbaInputErrorType"
  },
  errorMessage: {
    id: "errorMessage",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  stackTrace: {
    id: "stackTrace",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const orbaSqsSynchronizationConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  secretKey: {
    id: "secretKey",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  accessKey: {
    id: "accessKey",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  queueUrlForUser: {
    id: "queueUrlForUser",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  queueUrlForVehicle: {
    id: "queueUrlForVehicle",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  queueUrlForCashflow: {
    id: "queueUrlForCashflow",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  queueUrlForSalePlace: {
    id: "queueUrlForSalePlace",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  vehicleRunningStatus: {
    id: "vehicleRunningStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRunningStatus"
  },
  userRunningStatus: {
    id: "userRunningStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRunningStatus"
  },
  cashflowRunningStatus: {
    id: "cashflowRunningStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRunningStatus"
  },
  salePlaceRunningStatus: {
    id: "salePlaceRunningStatus",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRunningStatus"
  },
  enabled: {
    id: "enabled",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};
export const passageColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  passageDate: {
    id: "passageDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  previousPassageDate: {
    id: "previousPassageDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  performed: {
    id: "performed",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  creator: {
    id: "creator",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "PassageCreator"
  },
  importance: {
    id: "importance",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumImportance"
  },
  fillingRate: {
    id: "fillingRate",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  salePlaceState: {
    id: "salePlaceState",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumSalePlaceState"
  },
  salesCountSincePreviousPassage: {
    id: "salesCountSincePreviousPassage",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  cashAmountSincePreviousPassage: {
    id: "cashAmountSincePreviousPassage",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  turnoverSincePreviousPassage: {
    id: "turnoverSincePreviousPassage",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  stars: {
    id: "stars",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const passageConfigurationColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  passageCounterForAverageComputing: {
    id: "passageCounterForAverageComputing",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  suggestSmoothPassagesByDefault: {
    id: "suggestSmoothPassagesByDefault",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  enumLastPassageDateTrigger: {
    id: "enumLastPassageDateTrigger",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumLastPassageDateTrigger"
  },
};
export const passageGenerationRequestColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  requestDate: {
    id: "requestDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  generationDate: {
    id: "generationDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  numberOfGeneratedDays: {
    id: "numberOfGeneratedDays",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const ticketColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  openDate: {
    id: "openDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  deadlineDate: {
    id: "deadlineDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  closeDate: {
    id: "closeDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
  description: {
    id: "description",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  mischaracterized: {
    id: "mischaracterized",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  mischaracterizedCause: {
    id: "mischaracterizedCause",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  severity: {
    id: "severity",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTicketSeverity"
  },
  priority: {
    id: "priority",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTicketPriority"
  },
  relevantService: {
    id: "relevantService",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumRelevantService"
  },
  status: {
    id: "status",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTicketStatus"
  },
};
export const ticketCommentColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  comment: {
    id: "comment",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  commentDate: {
    id: "commentDate",
    isVisible: true,
    filterType: FilterType.DATE,
    filterExpression: Expression.EQUALS
  },
};
export const ticketEventColumnStateDef = {
  id: {
    id: "id",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const ticketTypeColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  externalId: {
    id: "externalId",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
  typeName: {
    id: "typeName",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  systemType: {
    id: "systemType",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  baseType: {
    id: "baseType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "EnumTicketType"
  },
};
export const defaultViewColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  viewType: {
    id: "viewType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "ViewType"
  },
};
export const viewColumnStateDef = {
  id: {id: "id", isVisible: true, filterType: FilterType.INT, filterExpression: Expression.EQUALS},
  name: {
    id: "name",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  description: {
    id: "description",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  viewType: {
    id: "viewType",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "ViewType"
  },
  data: {
    id: "data",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  shared: {
    id: "shared",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
  preferredDisplay: {
    id: "preferredDisplay",
    isVisible: true,
    filterType: FilterType.ENUM,
    filterExpression: Expression.IN,
    enumName: "ViewDisplay"
  },
};
export const abstractEntityColumnStateDef = {
  version: {
    id: "version",
    isVisible: true,
    filterType: FilterType.INT,
    filterExpression: Expression.EQUALS
  },
};
export const abstractUpdatesLoggedEntityColumnStateDef = {
  createdBy: {
    id: "createdBy",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
  modifiedBy: {
    id: "modifiedBy",
    isVisible: true,
    filterType: FilterType.STRING,
    filterExpression: Expression.START_WITH
  },
};
export const abstractArchivableEntityColumnStateDef = {
  archived: {
    id: "archived",
    isVisible: true,
    filterType: FilterType.BOOL,
    filterExpression: Expression.BOOL
  },
};


// Added by 'TSClassToFormDefMapper' extension
export const authorityFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  users: {id: "users"},
  authorityGroups: {id: "authorityGroups"},
};
export const authorityGroupFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  authorities: {id: "authorities"},
};
export const baseCompanyFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  companyName: {id: "companyName"},
  enable: {id: "enable"},
  administrativeContact: {id: "administrativeContact"},
};
export const companySiteFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  company: {id: "company"},
  name: {id: "name"},
  contact: {id: "contact"},
  salePlaceLocations: {id: "salePlaceLocations"},
};
export const contactFormStateDef = {
  id: {id: "id"},
  firstName: {id: "firstName"},
  lastName: {id: "lastName"},
  firstNameAndLastName: {id: "firstNameAndLastName"},
  civility: {id: "civility"},
  email: {id: "email"},
  deskPhoneNumber: {id: "deskPhoneNumber"},
  mobilePhoneNumber: {id: "mobilePhoneNumber"},
  role: {id: "role"},
  informations: {id: "informations"},
  avatarImagePath: {id: "avatarImagePath"},
};
export const settingFormStateDef = {
  id: {id: "id"},
  smartphoneActivationRequestNotificationMails: {id: "smartphoneActivationRequestNotificationMails"},
  userAccountBlockedNotificationMails: {id: "userAccountBlockedNotificationMails"},
};
export const userAccountFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  login: {id: "login"},
  firstName: {id: "firstName"},
  lastName: {id: "lastName"},
  firstNameAndLastName: {id: "firstNameAndLastName"},
  email: {id: "email"},
  phoneNumber: {id: "phoneNumber"},
  mobilePhoneNumber: {id: "mobilePhoneNumber"},
  activated: {id: "activated"},
  loginAttempt: {id: "loginAttempt"},
  langKey: {id: "langKey"},
  imageUrl: {id: "imageUrl"},
};
export const asyncRequestFormStateDef = {
  id: {id: "id"},
  status: {id: "status"},
  startDate: {id: "startDate"},
  endDate: {id: "endDate"},
};
export const emailRequestFormStateDef = {
  toEmails: {id: "toEmails"},
  templateName: {id: "templateName"},
  subject: {id: "subject"},
  variables: {id: "variables"},
};
export const exportRequestFormStateDef = {
  vendorUser: {id: "vendorUser"},
  requestName: {id: "requestName"},
  idsToExport: {id: "idsToExport"},
};
export const customerFormStateDef = {
  prospect: {id: "prospect"},
  stars: {id: "stars"},
  companySites: {id: "companySites"},
};
export const customerAuthorityGroupFormStateDef = {};
export const customerUserFormStateDef = {};
export const baseProductDefinitionFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  name: {id: "name"},
  brand: {id: "brand"},
  reference: {id: "reference"},
  code: {id: "code"},
  productType: {id: "productType"},
  defaultSalePrice: {id: "defaultSalePrice"},
  vatRateForSales: {id: "vatRateForSales"},
  salable: {id: "salable"},
};
export const endProductDefinitionFormStateDef = {
  alsoIngredient: {id: "alsoIngredient"},
  recipeIngredients: {id: "recipeIngredients"},
};
export const forShippingProductDefinitionFormStateDef = {
  vatRateForPurchases: {id: "vatRateForPurchases"},
  packagings: {id: "packagings"},
  stockShouldBeManaged: {id: "stockShouldBeManaged"},
  vehiclePickingRoundCoef: {id: "vehiclePickingRoundCoef"},
  measureUnit: {id: "measureUnit"},
};
export const hardwareDefinitionFormStateDef = {};
export const inventoryFormStateDef = {
  id: {id: "id"},
  flowDate: {id: "flowDate"},
  vendorUser: {id: "vendorUser"},
  activity: {id: "activity"},
  storageArea: {id: "storageArea"},
  enumInventoryType: {id: "enumInventoryType"},
  inventoryLines: {id: "inventoryLines"},
};
export const inventoryLineFormStateDef = {
  id: {id: "id"},
  inventory: {id: "inventory"},
  storageProductLine: {id: "storageProductLine"},
  product: {id: "product"},
  quantity: {id: "quantity"},
};
export const packagingFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  product: {id: "product"},
  subPackaging: {id: "subPackaging"},
  quantity: {id: "quantity"},
  barcode: {id: "barcode"},
};
export const productFlowFormStateDef = {
  id: {id: "id"},
  flowDate: {id: "flowDate"},
  vendorUser: {id: "vendorUser"},
  activity: {id: "activity"},
  originStorageArea: {id: "originStorageArea"},
  destinationStorageArea: {id: "destinationStorageArea"},
  productMovementType: {id: "productMovementType"},
  productFlowLines: {id: "productFlowLines"},
  quantity: {id: "quantity"},
};
export const productFlowLineFormStateDef = {
  id: {id: "id"},
  productFlow: {id: "productFlow"},
  storageProductLine: {id: "storageProductLine"},
  product: {id: "product"},
  quantity: {id: "quantity"},
};
export const productTypeFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  code: {id: "code"},
  name: {id: "name"},
  nameForMobileDisplay: {id: "nameForMobileDisplay"},
};
export const providerFormStateDef = {
  id: {id: "id"},
  storageArea: {id: "storageArea"},
  companyName: {id: "companyName"},
  administrativeContact: {id: "administrativeContact"},
};
export const providerProductInformationFormStateDef = {
  id: {id: "id"},
  purchasePrise: {id: "purchasePrise"},
};
export const recipeDefinitionFormStateDef = {
  recipeIngredients: {id: "recipeIngredients"},
};
export const recipeIngredientFormStateDef = {
  id: {id: "id"},
  recipeDefinition: {id: "recipeDefinition"},
  ingredient: {id: "ingredient"},
  quantity: {id: "quantity"},
};
export const sparePartDefinitionFormStateDef = {};
export const vendingMachineDefinitionFormStateDef = {};
export const businessOrganizationStorageAreaFormStateDef = {
  businessOrganization: {id: "businessOrganization"},
};
export const providerStorageAreaFormStateDef = {
  provider: {id: "provider"},
};
export const restockingOrderFormStateDef = {
  id: {id: "id"},
  storageArea: {id: "storageArea"},
  restockingOrderStatus: {id: "restockingOrderStatus"},
  restockingOrderType: {id: "restockingOrderType"},
  restockingOrderLines: {id: "restockingOrderLines"},
};
export const restockingOrderLineFormStateDef = {
  id: {id: "id"},
  restockingOrder: {id: "restockingOrder"},
  storageProductLine: {id: "storageProductLine"},
  product: {id: "product"},
  quantity: {id: "quantity"},
};
export const salePlaceStorageAreaFormStateDef = {
  salePlace: {id: "salePlace"},
};
export const storageAreaFormStateDef = {
  id: {id: "id"},
  trashStorageArea: {id: "trashStorageArea"},
  storageProductLines: {id: "storageProductLines"},
};
export const storageProductLineFormStateDef = {
  id: {id: "id"},
  storageArea: {id: "storageArea"},
  lineCode: {id: "lineCode"},
  product: {id: "product"},
  capacity: {id: "capacity"},
  stock: {id: "stock"},
  standard: {id: "standard"},
};
export const trashStorageAreaFormStateDef = {
  storageArea: {id: "storageArea"},
};
export const vehicleStorageAreaFormStateDef = {
  vehicle: {id: "vehicle"},
};
export const abstractBaseEventFormStateDef = {
  eventDate: {id: "eventDate"},
  closeDate: {id: "closeDate"},
  relativeEntity: {id: "relativeEntity"},
};
export const assignmentFormStateDef = {
  id: {id: "id"},
  user: {id: "user"},
  assignmentType: {id: "assignmentType"},
  cascadedAssignments: {id: "cascadedAssignments"},
  cascadedInGroup: {id: "cascadedInGroup"},
  salePlace: {id: "salePlace"},
};
export const auditFormStateDef = {
  id: {id: "id"},
  evaDtsText: {id: "evaDtsText"},
  evaDtsJson: {id: "evaDtsJson"},
  salePlace: {id: "salePlace"},
  salePlaceEquipment: {id: "salePlaceEquipment"},
  visit: {id: "visit"},
  auditMedia: {id: "auditMedia"},
  auditType: {id: "auditType"},
};
export const auditMediaFormStateDef = {
  id: {id: "id"},
  auditMode: {id: "auditMode"},
  youtubeVideoUrl: {id: "youtubeVideoUrl"},
  image: {id: "image"},
};
export const salePlaceFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  installationStatus: {id: "installationStatus"},
  salePlaceType: {id: "salePlaceType"},
  code: {id: "code"},
  identification: {id: "identification"},
  startDate: {id: "startDate"},
  stars: {id: "stars"},
  capacity: {id: "capacity"},
  master: {id: "master"},
  closed: {id: "closed"},
  storeIsStorage: {id: "storeIsStorage"},
  allowRestockingOrder: {id: "allowRestockingOrder"},
  productFlowManagedByProductLines: {id: "productFlowManagedByProductLines"},
  assignedSupplier: {id: "assignedSupplier"},
  assignedTechnician: {id: "assignedTechnician"},
  assignedSalesman: {id: "assignedSalesman"},
  assignedSupervisor: {id: "assignedSupervisor"},
  capacityCalculationMethod: {id: "capacityCalculationMethod"},
  connectable: {id: "connectable"},
  toDoToday: {id: "toDoToday"},
  allowAlertConfigurationByOperator: {id: "allowAlertConfigurationByOperator"},
  businessOrganization: {id: "businessOrganization"},
  mostRecentPicture: {id: "mostRecentPicture"},
  salePlaceData: {id: "salePlaceData"},
  salePlaceVisitConfiguration: {id: "salePlaceVisitConfiguration"},
  salePlaceLocation: {id: "salePlaceLocation"},
  fillingRateCriticalThresold: {id: "fillingRateCriticalThresold"},
  fillingRateWarningThresold: {id: "fillingRateWarningThresold"},
  outOfStockCriticalThresold: {id: "outOfStockCriticalThresold"},
  outOfStockWarningThresold: {id: "outOfStockWarningThresold"},
  daysWithoutVisitCriticalThresold: {id: "daysWithoutVisitCriticalThresold"},
  daysWithoutVisitWarningThresold: {id: "daysWithoutVisitWarningThresold"},
  daysWithoutSaleAlert: {id: "daysWithoutSaleAlert"},
  daysWithoutSaleCritical: {id: "daysWithoutSaleCritical"},
  storageArea: {id: "storageArea"},
};
export const salePlaceDataFormStateDef = {
  id: {id: "id"},
  salePlaceState: {id: "salePlaceState"},
  lastVisitDate: {id: "lastVisitDate"},
  lastSupplierVisitDate: {id: "lastSupplierVisitDate"},
  lastTechnicianVisitDate: {id: "lastTechnicianVisitDate"},
  nextPlannedFillingVisitDate: {id: "nextPlannedFillingVisitDate"},
  lastPaiementSystemReplacementDate: {id: "lastPaiementSystemReplacementDate"},
  lastVendingMachineReplacementDate: {id: "lastVendingMachineReplacementDate"},
  lastSaleDate: {id: "lastSaleDate"},
  salesCounter: {id: "salesCounter"},
  last3DaysSalesCounter: {id: "last3DaysSalesCounter"},
  fillingRate: {id: "fillingRate"},
  last3DaysFillingRate: {id: "last3DaysFillingRate"},
  freshProductFillingRate: {id: "freshProductFillingRate"},
  hotProductFillingRate: {id: "hotProductFillingRate"},
  stock: {id: "stock"},
  last3DaysSalesTurnover: {id: "last3DaysSalesTurnover"},
  turnoverSinceLastVisit: {id: "turnoverSinceLastVisit"},
  cashAmountSinceLastVisit: {id: "cashAmountSinceLastVisit"},
  soldOutCounter: {id: "soldOutCounter"},
  informations: {id: "informations"},
  salePlace: {id: "salePlace"},
};
export const salePlaceEquipmentFormStateDef = {
  id: {id: "id"},
  installationDate: {id: "installationDate"},
  removalDate: {id: "removalDate"},
  salePlace: {id: "salePlace"},
  salePlaceHardware: {id: "salePlaceHardware"},
  installationDeclarationAuthor: {id: "installationDeclarationAuthor"},
  installationStatus: {id: "installationStatus"},
  defaultAuditMedia: {id: "defaultAuditMedia"},
};
export const salePlaceGroupFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  description: {id: "description"},
};
export const salePlaceLocationFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  site: {id: "site"},
  locationName: {id: "locationName"},
  gpsLocation: {id: "gpsLocation"},
  locationState: {id: "locationState"},
};
export const salePlaceStoreLineFormStateDef = {
  id: {id: "id"},
  code: {id: "code"},
  salePlace: {id: "salePlace"},
  product: {id: "product"},
  productType: {id: "productType"},
  price: {id: "price"},
};
export const saleplaceProducttypeFormStateDef = {
  id: {id: "id"},
  salePlace: {id: "salePlace"},
  productType: {id: "productType"},
};
export const daSaleFormStateDef = {
  soldProduct: {id: "soldProduct"},
};
export const marketSaleFormStateDef = {};
export const saleFormStateDef = {
  id: {id: "id"},
  saleDate: {id: "saleDate"},
  paymentMethod: {id: "paymentMethod"},
  transactionAmount: {id: "transactionAmount"},
  numberOfSoldProducts: {id: "numberOfSoldProducts"},
};
export const saleEventFormStateDef = {
  id: {id: "id"},
  relativeEntity: {id: "relativeEntity"},
};
export const soldProductFormStateDef = {
  id: {id: "id"},
  product: {id: "product"},
  quantity: {id: "quantity"},
  unitSellingPrice: {id: "unitSellingPrice"},
  totalPrice: {id: "totalPrice"},
};
export const telemetryMessageFormStateDef = {
  id: {id: "id"},
  sqsMessageId: {id: "sqsMessageId"},
  vendor: {id: "vendor"},
  connectorType: {id: "connectorType"},
  rawMessage: {id: "rawMessage"},
  forwarded: {id: "forwarded"},
  forwardDate: {id: "forwardDate"},
  integrationDate: {id: "integrationDate"},
  integrationFailedCounter: {id: "integrationFailedCounter"},
  forwardFailedCounter: {id: "forwardFailedCounter"},
  forwardError: {id: "forwardError"},
  integrationError: {id: "integrationError"},
};
export const telemetryMessageErrorFormStateDef = {
  type: {id: "type"},
  message: {id: "message"},
  stackTrace: {id: "stackTrace"},
};
export const telemetryVendorConfigurationFormStateDef = {
  id: {id: "id"},
  connectorType: {id: "connectorType"},
  runningStatus: {id: "runningStatus"},
  configuration: {id: "configuration"},
  lastActivationDate: {id: "lastActivationDate"},
  lastReceivedDatasDate: {id: "lastReceivedDatasDate"},
};
export const businessOrganizationFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  storageArea: {id: "storageArea"},
  name: {id: "name"},
  contact: {id: "contact"},
};
export const gpsLocationHistoryFormStateDef = {
  id: {id: "id"},
  recordingDate: {id: "recordingDate"},
  gpsLocation: {id: "gpsLocation"},
};
export const messageFormStateDef = {
  id: {id: "id"},
  message: {id: "message"},
  sendSms: {id: "sendSms"},
  type: {id: "type"},
  relatedID: {id: "relatedID"},
  relatedEntityName: {id: "relatedEntityName"},
  target: {id: "target"},
  recipient: {id: "recipient"},
  readingDate: {id: "readingDate"},
  sendingDate: {id: "sendingDate"},
};
export const smartphoneUseFormStateDef = {
  id: {id: "id"},
  smartphone: {id: "smartphone"},
  vendorUser: {id: "vendorUser"},
  startDate: {id: "startDate"},
  endDate: {id: "endDate"},
};
export const vehicleFormStateDef = {
  id: {id: "id"},
  code: {id: "code"},
  storageArea: {id: "storageArea"},
  registrationNumber: {id: "registrationNumber"},
  brand: {id: "brand"},
  model: {id: "model"},
};
export const vehicleUseFormStateDef = {
  id: {id: "id"},
  vehicle: {id: "vehicle"},
  vendorUser: {id: "vendorUser"},
  startDate: {id: "startDate"},
  stopDate: {id: "stopDate"},
  startKmCounter: {id: "startKmCounter"},
  stopKmCounter: {id: "stopKmCounter"},
};
export const vendorFormStateDef = {
  orbaFtpTransfertConfiguration: {id: "orbaFtpTransfertConfiguration"},
  orbaSqsSynchronizationConfiguration: {id: "orbaSqsSynchronizationConfiguration"},
};
export const vendorAuthorityGroupFormStateDef = {};
export const vendorUserFormStateDef = {
  administrator: {id: "administrator"},
  code: {id: "code"},
  vendorUserVisitConfiguration: {id: "vendorUserVisitConfiguration"},
  relevantService: {id: "relevantService"},
  businessOrganization: {id: "businessOrganization"},
};
export const vendorUserGroupFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  description: {id: "description"},
};
export const vendorUserMemberOfGroupFormStateDef = {
  id: {id: "id"},
  vendorUser: {id: "vendorUser"},
  vendorUserGroup: {id: "vendorUserGroup"},
  supervisor: {id: "supervisor"},
};
export const activityFormStateDef = {
  id: {id: "id"},
  workingDay: {id: "workingDay"},
  vendorUser: {id: "vendorUser"},
  beginDate: {id: "beginDate"},
  endDate: {id: "endDate"},
  activityDuration: {id: "activityDuration"},
  processingPostCloseDone: {id: "processingPostCloseDone"},
  processingPostCloseFailedCounter: {id: "processingPostCloseFailedCounter"},
  durationSincePreviousVisit: {id: "durationSincePreviousVisit"},
  startLocation: {id: "startLocation"},
  endLocation: {id: "endLocation"},
  activityType: {id: "activityType"},
};
export const coinsLoadFormStateDef = {
  id: {id: "id"},
  activity: {id: "activity"},
  value: {id: "value"},
  quantity: {id: "quantity"},
};
export const customActivityFormStateDef = {
  customActivityDefinition: {id: "customActivityDefinition"},
  comment: {id: "comment"},
  beginIdentificationMode: {id: "beginIdentificationMode"},
  beginIdentificationCode: {id: "beginIdentificationCode"},
  endIdentificationMode: {id: "endIdentificationMode"},
  endIdentificationCode: {id: "endIdentificationCode"},
  manualIdentificationStartComment: {id: "manualIdentificationStartComment"},
  manualIdentificationEndComment: {id: "manualIdentificationEndComment"},
};
export const customActivityDefinitionFormStateDef = {
  id: {id: "id"},
  activityName: {id: "activityName"},
  commentNeeded: {id: "commentNeeded"},
  beginIdentificationCodeNeeded: {id: "beginIdentificationCodeNeeded"},
  endIdentificationCodeNeeded: {id: "endIdentificationCodeNeeded"},
  endOperatorActionNeeded: {id: "endOperatorActionNeeded"},
};
export const imageVisitFormStateDef = {
  id: {id: "id"},
  visit: {id: "visit"},
  image: {id: "image"},
  type: {id: "type"},
  lackOfChoice: {id: "lackOfChoice"},
  poorQualityPicture: {id: "poorQualityPicture"},
  soldOutProductsCounter: {id: "soldOutProductsCounter"},
};
export const salePlaceVisitConfigurationFormStateDef = {
  id: {id: "id"},
  mandatoryActions: {id: "mandatoryActions"},
  salePlace: {id: "salePlace"},
};
export const vehicleLoadingFormStateDef = {
  sentToOrbaDate: {id: "sentToOrbaDate"},
  tryToSendToOrbaCounter: {id: "tryToSendToOrbaCounter"},
};
export const vendorUserVisitConfigurationFormStateDef = {
  id: {id: "id"},
  mandatoryActions: {id: "mandatoryActions"},
  vendorUser: {id: "vendorUser"},
};
export const visitFormStateDef = {
  salePlace: {id: "salePlace"},
  beginIdentificationMode: {id: "beginIdentificationMode"},
  beginIdentificationCode: {id: "beginIdentificationCode"},
  endIdentificationMode: {id: "endIdentificationMode"},
  endIdentificationCode: {id: "endIdentificationCode"},
  manualIdentificationStartComment: {id: "manualIdentificationStartComment"},
  manualIdentificationEndComment: {id: "manualIdentificationEndComment"},
  visitComment: {id: "visitComment"},
  lackOfChoice: {id: "lackOfChoice"},
  poorQualityPicture: {id: "poorQualityPicture"},
  salesCounter: {id: "salesCounter"},
  salesCounterWithoutCup: {id: "salesCounterWithoutCup"},
  moneyCarryingBagIdentification: {id: "moneyCarryingBagIdentification"},
  moneyHasBeenRecovered: {id: "moneyHasBeenRecovered"},
  ticketHasBeenUpdated: {id: "ticketHasBeenUpdated"},
  fullProductFilling: {id: "fullProductFilling"},
  productHasBeenLoaded: {id: "productHasBeenLoaded"},
  inventoryHasBeenDone: {id: "inventoryHasBeenDone"},
  productFillingCounter: {id: "productFillingCounter"},
  productRemovedCounter: {id: "productRemovedCounter"},
  productFillingRate: {id: "productFillingRate"},
  productFillingRateFromAudit: {id: "productFillingRateFromAudit"},
  salesCounterFromAudit: {id: "salesCounterFromAudit"},
  salesAmountFromAudit: {id: "salesAmountFromAudit"},
  payBackAmount: {id: "payBackAmount"},
  testCount: {id: "testCount"},
  testAmount: {id: "testAmount"},
  soldOutProductsCounter: {id: "soldOutProductsCounter"},
  fillingCoinsAmount: {id: "fillingCoinsAmount"},
  fillingCoinsAmountFromAudit: {id: "fillingCoinsAmountFromAudit"},
  salePlaceStateBeforeActivity: {id: "salePlaceStateBeforeActivity"},
};
export const workingDayFormStateDef = {
  id: {id: "id"},
  orbaLicence: {id: "orbaLicence"},
  vendorUser: {id: "vendorUser"},
  smartphone: {id: "smartphone"},
  vehicle: {id: "vehicle"},
  processingPostCloseDone: {id: "processingPostCloseDone"},
  processingPostCloseFailedCounter: {id: "processingPostCloseFailedCounter"},
  vehicleStartKm: {id: "vehicleStartKm"},
  vehicleEndKm: {id: "vehicleEndKm"},
  cashRegisterStart: {id: "cashRegisterStart"},
  cashRegisterEnd: {id: "cashRegisterEnd"},
  beginDate: {id: "beginDate"},
  endDate: {id: "endDate"},
  sentToOrbaDate: {id: "sentToOrbaDate"},
  tryToSendToOrbaCounter: {id: "tryToSendToOrbaCounter"},
  firstActivityStartDate: {id: "firstActivityStartDate"},
  lastActivityStartDate: {id: "lastActivityStartDate"},
  numberOfActivitiesPerformed: {id: "numberOfActivitiesPerformed"},
  numberOfVisitsPerformed: {id: "numberOfVisitsPerformed"},
  numberOfBreaksPerformed: {id: "numberOfBreaksPerformed"},
  numberOfVehicleLoadingsPerformed: {id: "numberOfVehicleLoadingsPerformed"},
};
export const workingDayBreakFormStateDef = {};
export const hardwareFormStateDef = {
  hardwareDefinition: {id: "hardwareDefinition"},
  serialNumber: {id: "serialNumber"},
};
export const salePlaceHardwareFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  code: {id: "code"},
};
export const smartphoneFormStateDef = {
  id: {id: "id"},
  registered: {id: "registered"},
  androidVersion: {id: "androidVersion"},
  avaMobileAppVersion: {id: "avaMobileAppVersion"},
  androidId: {id: "androidId"},
  fcmToken: {id: "fcmToken"},
};
export const maintenanceActionFormStateDef = {
  id: {id: "id"},
  maintenanceActionDefinition: {id: "maintenanceActionDefinition"},
  visit: {id: "visit"},
  maintenanceActionDate: {id: "maintenanceActionDate"},
};
export const maintenanceActionDataFormStateDef = {
  id: {id: "id"},
  maintenanceAction: {id: "maintenanceAction"},
  maintenanceActionDataDefinition: {id: "maintenanceActionDataDefinition"},
  value: {id: "value"},
};
export const maintenanceActionDataDefinitionFormStateDef = {
  selectOptions: {id: "selectOptions"},
  id: {id: "id"},
  maintenanceActionDefinition: {id: "maintenanceActionDefinition"},
  dataName: {id: "dataName"},
  maintenanceActionDataInputType: {id: "maintenanceActionDataInputType"},
};
export const maintenanceActionDefinitionFormStateDef = {
  id: {id: "id"},
  actionName: {id: "actionName"},
  forProvisioner: {id: "forProvisioner"},
  forTechnician: {id: "forTechnician"},
  forSupervisor: {id: "forSupervisor"},
  notificationMails: {id: "notificationMails"},
};
export const orbaFtpTransfertConfigurationFormStateDef = {
  id: {id: "id"},
  vendor: {id: "vendor"},
  ftpHost: {id: "ftpHost"},
  login: {id: "login"},
  password: {id: "password"},
  connectivityStatus: {id: "connectivityStatus"},
};
export const orbaLicenceFormStateDef = {
  id: {id: "id"},
  licenceNumber: {id: "licenceNumber"},
};
export const orbaRawInputMessageFormStateDef = {
  id: {id: "id"},
  sqsMessageId: {id: "sqsMessageId"},
  rawMessage: {id: "rawMessage"},
  receiverType: {id: "receiverType"},
  integrated: {id: "integrated"},
  errorType: {id: "errorType"},
  errorMessage: {id: "errorMessage"},
  stackTrace: {id: "stackTrace"},
};
export const orbaSqsSynchronizationConfigurationFormStateDef = {
  id: {id: "id"},
  vendor: {id: "vendor"},
  secretKey: {id: "secretKey"},
  accessKey: {id: "accessKey"},
  queueUrlForUser: {id: "queueUrlForUser"},
  queueUrlForVehicle: {id: "queueUrlForVehicle"},
  queueUrlForCashflow: {id: "queueUrlForCashflow"},
  queueUrlForSalePlace: {id: "queueUrlForSalePlace"},
  vehicleRunningStatus: {id: "vehicleRunningStatus"},
  userRunningStatus: {id: "userRunningStatus"},
  cashflowRunningStatus: {id: "cashflowRunningStatus"},
  salePlaceRunningStatus: {id: "salePlaceRunningStatus"},
  enabled: {id: "enabled"},
};
export const passageFormStateDef = {
  id: {id: "id"},
  passageDate: {id: "passageDate"},
  previousPassageDate: {id: "previousPassageDate"},
  salePlace: {id: "salePlace"},
  designatedOperator: {id: "designatedOperator"},
  assignedOperator: {id: "assignedOperator"},
  performed: {id: "performed"},
  creator: {id: "creator"},
  reasons: {id: "reasons"},
  importance: {id: "importance"},
  fillingRate: {id: "fillingRate"},
  salePlaceState: {id: "salePlaceState"},
  salesCountSincePreviousPassage: {id: "salesCountSincePreviousPassage"},
  cashAmountSincePreviousPassage: {id: "cashAmountSincePreviousPassage"},
  turnoverSincePreviousPassage: {id: "turnoverSincePreviousPassage"},
  stars: {id: "stars"},
};
export const passageConfigurationFormStateDef = {
  id: {id: "id"},
  passageCounterForAverageComputing: {id: "passageCounterForAverageComputing"},
  suggestSmoothPassagesByDefault: {id: "suggestSmoothPassagesByDefault"},
  enumLastPassageDateTrigger: {id: "enumLastPassageDateTrigger"},
};
export const passageGenerationRequestFormStateDef = {
  id: {id: "id"},
  requestDate: {id: "requestDate"},
  generationDate: {id: "generationDate"},
  dateRange: {id: "dateRange"},
  numberOfGeneratedDays: {id: "numberOfGeneratedDays"},
};
export const ticketFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  ticketType: {id: "ticketType"},
  openDate: {id: "openDate"},
  deadlineDate: {id: "deadlineDate"},
  closeDate: {id: "closeDate"},
  openByUser: {id: "openByUser"},
  closeByUser: {id: "closeByUser"},
  affectedToUser: {id: "affectedToUser"},
  description: {id: "description"},
  salePlace: {id: "salePlace"},
  associatedCompany: {id: "associatedCompany"},
  mischaracterized: {id: "mischaracterized"},
  mischaracterizedCause: {id: "mischaracterizedCause"},
  severity: {id: "severity"},
  priority: {id: "priority"},
  relevantService: {id: "relevantService"},
  status: {id: "status"},
  associatedContact: {id: "associatedContact"},
  ticketEvent: {id: "ticketEvent"},
};
export const ticketCommentFormStateDef = {
  id: {id: "id"},
  comment: {id: "comment"},
  commentDate: {id: "commentDate"},
  author: {id: "author"},
  ticket: {id: "ticket"},
};
export const ticketEventFormStateDef = {
  id: {id: "id"},
  ticket: {id: "ticket"},
};
export const ticketTypeFormStateDef = {
  id: {id: "id"},
  externalId: {id: "externalId"},
  typeName: {id: "typeName"},
  systemType: {id: "systemType"},
  baseType: {id: "baseType"},
};
export const defaultViewFormStateDef = {
  id: {id: "id"},
  view: {id: "view"},
  viewType: {id: "viewType"},
};
export const viewFormStateDef = {
  id: {id: "id"},
  name: {id: "name"},
  description: {id: "description"},
  viewType: {id: "viewType"},
  data: {id: "data"},
  owner: {id: "owner"},
  shared: {id: "shared"},
  preferredDisplay: {id: "preferredDisplay"},
  defaultViews: {id: "defaultViews"},
};
export const abstractEntityFormStateDef = {
  version: {id: "version"},
};
export const abstractUpdatesLoggedEntityFormStateDef = {
  createdBy: {id: "createdBy"},
  modifiedBy: {id: "modifiedBy"},
};
export const abstractArchivableEntityFormStateDef = {
  archived: {id: "archived"},
};
export const tagFormStateDef = {
  tagValue: {id: "tagValue"},
};
export const barcodeFormStateDef = {
  code: {id: "code"},
  barcodeType: {id: "barcodeType"},
};
export const gpsLocationFormStateDef = {
  latitude: {id: "latitude"},
  longitude: {id: "longitude"},
};
export const dateRangeFormStateDef = {
  fromDate: {id: "fromDate"},
  toDate: {id: "toDate"},
  numberOfDays: {id: "numberOfDays"},
};


// Added by 'TSAllEnumNamesAsUnionTypeMapper' extension
export type EnumName =
  "FilterType"
  | "Expression"
  | "Compose"
  | "AggregationFunction"
  | "ViewDisplay"
  | "ViewType"
  | "EnumAuthority"
  | "EnumContactCivility"
  | "EnumRequestStatus"
  | "EnumExportRequestName"
  | "EnumMeasureUnit"
  | "EnumInventoryType"
  | "EnumProductMovementType"
  | "EnumRestockingOrderStatus"
  | "EnumRestockingOrderType"
  | "EnumAssignmentType"
  | "EnumAuditType"
  | "EnumAuditMedia"
  | "EnumInstallationStatus"
  | "EnumSalePlaceType"
  | "EnumCapacityCalculationMethod"
  | "EnumSalePlaceState"
  | "EnumPaymentMethod"
  | "EnumTelemetryConnectorType"
  | "TelemetryErrorType"
  | "EnumRunningStatus"
  | "EnumMessageType"
  | "EnumRelevantService"
  | "EnumActivityType"
  | "EnumIdentificationMode"
  | "EnumVisitImageType"
  | "EnumMandatoryActionType"
  | "EnumMaintenanceActionDataInputType"
  | "EnumConnectivityStatus"
  | "OrbaReceiverType"
  | "OrbaInputErrorType"
  | "PassageCreator"
  | "PassageReason"
  | "EnumImportance"
  | "EnumLastPassageDateTrigger"
  | "EnumTicketSeverity"
  | "EnumTicketPriority"
  | "EnumTicketStatus"
  | "EnumTicketType"
  | "EnumBarcodeType"


// Added by 'TSAllEnumNamesKeysMapMapper' extension
export const enumNamesKeysMap = new Map<EnumName, Array<string>>([["FilterType", Object.keys(FilterTypeKeys)], ["Expression", Object.keys(ExpressionKeys)], ["Compose", Object.keys(ComposeKeys)], ["AggregationFunction", Object.keys(AggregationFunctionKeys)], ["ViewDisplay", Object.keys(ViewDisplayKeys)], ["ViewType", Object.keys(ViewTypeKeys)], ["EnumAuthority", Object.keys(EnumAuthorityKeys)], ["EnumContactCivility", Object.keys(EnumContactCivilityKeys)], ["EnumRequestStatus", Object.keys(EnumRequestStatusKeys)], ["EnumExportRequestName", Object.keys(EnumExportRequestNameKeys)], ["EnumMeasureUnit", Object.keys(EnumMeasureUnitKeys)], ["EnumInventoryType", Object.keys(EnumInventoryTypeKeys)], ["EnumProductMovementType", Object.keys(EnumProductMovementTypeKeys)], ["EnumRestockingOrderStatus", Object.keys(EnumRestockingOrderStatusKeys)], ["EnumRestockingOrderType", Object.keys(EnumRestockingOrderTypeKeys)], ["EnumAssignmentType", Object.keys(EnumAssignmentTypeKeys)], ["EnumAuditType", Object.keys(EnumAuditTypeKeys)], ["EnumAuditMedia", Object.keys(EnumAuditMediaKeys)], ["EnumInstallationStatus", Object.keys(EnumInstallationStatusKeys)], ["EnumSalePlaceType", Object.keys(EnumSalePlaceTypeKeys)], ["EnumCapacityCalculationMethod", Object.keys(EnumCapacityCalculationMethodKeys)], ["EnumSalePlaceState", Object.keys(EnumSalePlaceStateKeys)], ["EnumPaymentMethod", Object.keys(EnumPaymentMethodKeys)], ["EnumTelemetryConnectorType", Object.keys(EnumTelemetryConnectorTypeKeys)], ["TelemetryErrorType", Object.keys(TelemetryErrorTypeKeys)], ["EnumRunningStatus", Object.keys(EnumRunningStatusKeys)], ["EnumMessageType", Object.keys(EnumMessageTypeKeys)], ["EnumRelevantService", Object.keys(EnumRelevantServiceKeys)], ["EnumActivityType", Object.keys(EnumActivityTypeKeys)], ["EnumIdentificationMode", Object.keys(EnumIdentificationModeKeys)], ["EnumVisitImageType", Object.keys(EnumVisitImageTypeKeys)], ["EnumMandatoryActionType", Object.keys(EnumMandatoryActionTypeKeys)], ["EnumMaintenanceActionDataInputType", Object.keys(EnumMaintenanceActionDataInputTypeKeys)], ["EnumConnectivityStatus", Object.keys(EnumConnectivityStatusKeys)], ["OrbaReceiverType", Object.keys(OrbaReceiverTypeKeys)], ["OrbaInputErrorType", Object.keys(OrbaInputErrorTypeKeys)], ["PassageCreator", Object.keys(PassageCreatorKeys)], ["PassageReason", Object.keys(PassageReasonKeys)], ["EnumImportance", Object.keys(EnumImportanceKeys)], ["EnumLastPassageDateTrigger", Object.keys(EnumLastPassageDateTriggerKeys)], ["EnumTicketSeverity", Object.keys(EnumTicketSeverityKeys)], ["EnumTicketPriority", Object.keys(EnumTicketPriorityKeys)], ["EnumTicketStatus", Object.keys(EnumTicketStatusKeys)], ["EnumTicketType", Object.keys(EnumTicketTypeKeys)], ["EnumBarcodeType", Object.keys(EnumBarcodeTypeKeys)]])
