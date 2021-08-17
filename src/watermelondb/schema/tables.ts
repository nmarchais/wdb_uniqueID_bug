import {TableName} from "./tableName";

export const tables = [
  {
    name: TableName.WORKING_DAY,
    columns: [
      {name: 'vendor_user_id', type: 'string', isIndexed: true},
      {name: 'vehicle_id', type: 'string', isIndexed: true},
      {name: 'vehicleStartKm', type: 'number'},
      {name: 'vehicleEndKm', type: 'number'},
      {name: 'cashRegisterStart', type: 'number'},
      {name: 'cashRegisterEnd', type: 'number'},
      {name: 'beginDate', type: 'number'},
      {name: 'endDate', type: 'number'},
      {name: 'firstActivityStartDate', type: 'number'},
      {name: 'lastActivityStartDate', type: 'number'},
      {name: 'numberOfActivitiesPerformed', type: 'number'},
      {name: 'numberOfVisitsPerformed', type: 'number'},
      {name: 'numberOfBreaksPerformed', type: 'number'},
      {name: 'numberOfVehicleLoadingsPerformed', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_VISIT_CONFIGURATION,
    columns: [
      {name: 'mandatoryActionList', type: 'string'},
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VISIT,
    columns: [
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'beginIdentificationMode', type: 'string'},
      {name: 'beginIdentificationCode', type: 'string'},
      {name: 'endIdentificationMode', type: 'string'},
      {name: 'endIdentificationCode', type: 'string'},
      {name: 'manualIdentificationStartComment', type: 'string'},
      {name: 'manualIdentificationEndComment', type: 'string'},
      {name: 'visitComment', type: 'string'},
      {name: 'lackOfChoice', type: 'boolean'},
      {name: 'poorQualityPicture', type: 'boolean'},
      {name: 'salesCounter', type: 'number'},
      {name: 'salesCounterWithoutCup', type: 'number'},
      {name: 'moneyCarryingBagIdentification', type: 'string'},
      {name: 'moneyHasBeenRecovered', type: 'boolean'},
      {name: 'ticketHasBeenUpdated', type: 'boolean'},
      {name: 'fullProductFilling', type: 'boolean'},
      {name: 'productHasBeenLoaded', type: 'boolean'},
      {name: 'inventoryHasBeenDone', type: 'boolean'},
      {name: 'productFillingCounter', type: 'number'},
      {name: 'productRemovedCounter', type: 'number'},
      {name: 'productRemovedToTrashCounter', type: 'number'},
      {name: 'productFillingRate', type: 'number'},
      {name: 'productFillingRateFromAudit', type: 'number'},
      {name: 'salesCounterFromAudit', type: 'number'},
      {name: 'salesAmountFromAudit', type: 'number'},
      {name: 'payBackAmount', type: 'number'},
      {name: 'testCount', type: 'number'},
      {name: 'testAmount', type: 'number'},
      {name: 'soldOutProductsCounter', type: 'number'},
      {name: 'fillingCoinsAmount', type: 'number'},
      {name: 'fillingCoinsAmountFromAudit', type: 'number'},
      {name: 'salePlaceStateBeforeActivity', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.END_PRODUCT_DEFINITION,
    columns: [
      {name: 'alsoIngredient', type: 'boolean'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.CONTACT,
    columns: [
      {name: 'firstName', type: 'string'},
      {name: 'lastName', type: 'string'},
      {name: 'firstNameAndLastName', type: 'string'},
      {name: 'civility', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'deskPhoneNumber', type: 'string'},
      {name: 'mobilePhoneNumber', type: 'string'},
      {name: 'role', type: 'string'},
      {name: 'informations', type: 'string'},
      {name: 'avatarImagePath', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.RESTOCKING_ORDER,
    columns: [
      {name: 'storage_area_id', type: 'string', isIndexed: true},
      {name: 'restockingOrderStatus', type: 'string'},
      {name: 'restockingOrderType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.ACTIVITY,
    columns: [
      {name: 'working_day_id', type: 'string', isIndexed: true},
      {name: 'vendor_user_id', type: 'string', isIndexed: true},
      {name: 'beginDate', type: 'number'},
      {name: 'endDate', type: 'number'},
      {name: 'startLocation_latitude', type: 'number'},
      {name: 'startLocation_longitude', type: 'number'},
      {name: 'endLocation_latitude', type: 'number'},
      {name: 'endLocation_longitude', type: 'number'},
      {name: 'activityType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.TICKET,
    columns: [
      {name: 'codeForUnknownSalePlace', type: 'string'},
      {name: 'externalId', type: 'number'},
      {name: 'ticket_type_id', type: 'string', isIndexed: true},
      {name: 'openDate', type: 'number'},
      {name: 'deadlineDate', type: 'number'},
      {name: 'closeDate', type: 'number'},
      {name: 'open_by_user_id', type: 'string', isIndexed: true},
      {name: 'close_by_user_id', type: 'string', isIndexed: true},
      {name: 'affected_to_user_id', type: 'string', isIndexed: true},
      {name: 'description', type: 'string'},
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'associated_company_id', type: 'string', isIndexed: true},
      {name: 'mischaracterized', type: 'boolean'},
      {name: 'mischaracterizedCause', type: 'string'},
      {name: 'severity', type: 'string'},
      {name: 'priority', type: 'string'},
      {name: 'relevantService', type: 'string'},
      {name: 'status', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_EQUIPMENT,
    columns: [
      {name: 'installationDate', type: 'number'},
      {name: 'removalDate', type: 'number'},
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'sale_place_hardware_id', type: 'string', isIndexed: true},
      {name: 'default_audit_media_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VEHICLE_STORAGE_AREA,
    columns: [
      {name: 'vehicle_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_DATA,
    columns: [
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'salePlaceState', type: 'string'},
      {name: 'lastVisitDate', type: 'number'},
      {name: 'lastSupplierVisitDate', type: 'number'},
      {name: 'lastTechnicianVisitDate', type: 'number'},
      {name: 'nextPlannedFillingVisitDate', type: 'number'},
      {name: 'lastPaiementSystemReplacementDate', type: 'number'},
      {name: 'lastVendingMachineReplacementDate', type: 'number'},
      {name: 'lastSaleDate', type: 'number'},
      {name: 'salesCounter', type: 'number'},
      {name: 'last3DaysSalesCounter', type: 'number'},
      {name: 'fillingRate', type: 'number'},
      {name: 'last3DaysFillingRate', type: 'number'},
      {name: 'freshProductFillingRate', type: 'number'},
      {name: 'hotProductFillingRate', type: 'number'},
      {name: 'stock', type: 'number'},
      {name: 'last3DaysSalesTurnover', type: 'number'},
      {name: 'turnoverSinceLastVisit', type: 'number'},
      {name: 'cashAmountSinceLastVisit', type: 'number'},
      {name: 'soldOutCounter', type: 'number'},
      {name: 'informations', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.HARDWARE_DEFINITION,
    columns: [
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_HARDWARE,
    columns: [
      {name: 'hardware_definition_id', type: 'string', isIndexed: true},
      {name: 'code', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.IMAGE_VISIT,
    columns: [
      {name: 'visit_id', type: 'string', isIndexed: true},
      {name: 'image', type: 'string'},
      {name: 'type', type: 'string'},
      {name: 'lackOfChoice', type: 'boolean'},
      {name: 'poorQualityPicture', type: 'boolean'},
      {name: 'soldOutProductsCounter', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.MAINTENANCE_ACTION_DATA_DEFINITION,
    columns: [
      {name: 'pickerItems', type: 'string'},
      {
        name: 'maintenance_action_definition_id',
        type: 'string',
        isIndexed: true,
      },
      {name: 'dataName', type: 'string'},
      {name: 'maintenanceActionDataInputType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.MAINTENANCE_ACTION_DATA,
    columns: [
      {name: 'maintenance_action_id', type: 'string', isIndexed: true},
      {
        name: 'maintenance_action_data_definition_id',
        type: 'string',
        isIndexed: true,
      },
      {name: 'value', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.PRODUCT_TYPE,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'code', type: 'string'},
      {name: 'name', type: 'string'},
      {name: 'nameForMobileDisplay', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VENDOR_USER,
    columns: [
      {name: 'administrator', type: 'boolean'},
      {name: 'relevantService', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.FOR_SHIPPING_PRODUCT_DEFINITION,
    columns: [
      {name: 'vatRateForPurchases', type: 'number'},
      {name: 'stockShouldBeManaged', type: 'boolean'},
      {name: 'vehiclePickingRoundCoef', type: 'number'},
      {name: 'measureUnit', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.BASE_PRODUCT_DEFINITION,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'name', type: 'string'},
      {name: 'brand', type: 'string'},
      {name: 'reference', type: 'string'},
      {name: 'product_type_id', type: 'string', isIndexed: true},
      {name: 'defaultSalePrice', type: 'number'},
      {name: 'vatRateForSales', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALEPLACE_PRODUCTTYPE,
    columns: [
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'product_type_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE,
    columns: [
      {name: 'notAffectedToUser', type: 'boolean'},
      {name: 'externalId', type: 'number'},
      {name: 'storage_area_id', type: 'string', isIndexed: true},
      {name: 'installationStatus', type: 'string'},
      {name: 'salePlaceType', type: 'string'},
      {name: 'code', type: 'string'},
      {name: 'identification', type: 'string'},
      {name: 'startDate', type: 'number'},
      {name: 'stars', type: 'number'},
      {name: 'capacity', type: 'number'},
      {name: 'master', type: 'boolean'},
      {name: 'closed', type: 'boolean'},
      {name: 'allowRestockingOrder', type: 'boolean'},
      {name: 'productFlowManagedByProductLines', type: 'boolean'},
      {name: 'assigned_supplier_id', type: 'string', isIndexed: true},
      {name: 'assigned_technician_id', type: 'string', isIndexed: true},
      {name: 'assigned_salesman_id', type: 'string', isIndexed: true},
      {name: 'assigned_supervisor_id', type: 'string', isIndexed: true},
      {name: 'capacityCalculationMethod', type: 'string'},
      {name: 'connectable', type: 'boolean'},
      {name: 'toDoToday', type: 'boolean'},
      {name: 'allowAlertConfigurationByOperator', type: 'boolean'},
      {name: 'mostRecentPicture', type: 'string'},
      {name: 'sale_place_location_id', type: 'string', isIndexed: true},
      {name: 'fillingRateWarningThresold', type: 'number'},
      {name: 'daysWithoutVisitWarningThresold', type: 'number'},
      {name: 'daysWithoutSaleAlert', type: 'number'},
      {name: 'daysWithoutSaleCritical', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.STORAGE_PRODUCT_LINE,
    columns: [
      {name: 'storage_area_id', type: 'string', isIndexed: true},
      {name: 'lineCode', type: 'string'},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'capacity', type: 'number'},
      {name: 'stock', type: 'number'},
      {name: 'standard', type: 'boolean'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_STORAGE_AREA,
    columns: [
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.PACKAGING,
    columns: [
      {name: 'name', type: 'string'},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'sub_packaging_id', type: 'string', isIndexed: true},
      {name: 'quantity', type: 'number'},
      {name: 'barcode_code', type: 'string'},
      {name: 'barcode_barcodeType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.PASSAGE,
    columns: [
      {name: 'passageDate', type: 'number'},
      {name: 'previousPassageDate', type: 'number'},
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'designated_operator_id', type: 'string', isIndexed: true},
      {name: 'assigned_operator_id', type: 'string', isIndexed: true},
      {name: 'performed', type: 'boolean'},
      {name: 'performed_visit_id', type: 'string', isIndexed: true},
      {name: 'creator', type: 'string'},
      {name: 'importance', type: 'string'},
      {name: 'fillingRate', type: 'number'},
      {name: 'salePlaceState', type: 'string'},
      {name: 'salesCountSincePreviousPassage', type: 'number'},
      {name: 'cashAmountSincePreviousPassage', type: 'number'},
      {name: 'turnoverSincePreviousPassage', type: 'number'},
      {name: 'stars', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.AUDIT_MEDIA,
    columns: [
      {name: 'auditMode', type: 'string'},
      {name: 'youtubeVideoUrl', type: 'string'},
      {name: 'image', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.INVENTORY_LINE,
    columns: [
      {name: 'inventory_id', type: 'string', isIndexed: true},
      {name: 'storage_product_line_id', type: 'string', isIndexed: true},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'quantity', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.STORAGE_AREA,
    columns: [
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.CUSTOM_ACTIVITY_DEFINITION,
    columns: [
      {name: 'activityName', type: 'string'},
      {name: 'commentNeeded', type: 'boolean'},
      {name: 'beginIdentificationCodeNeeded', type: 'boolean'},
      {name: 'endIdentificationCodeNeeded', type: 'boolean'},
      {name: 'endOperatorActionNeeded', type: 'boolean'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.INVENTORY,
    columns: [
      {name: 'flowDate', type: 'number'},
      {name: 'vendor_user_id', type: 'string', isIndexed: true},
      {name: 'activity_id', type: 'string', isIndexed: true},
      {name: 'storage_area_id', type: 'string', isIndexed: true},
      {name: 'enumInventoryType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.SALE_PLACE_LOCATION,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'site_id', type: 'string', isIndexed: true},
      {name: 'locationName', type: 'string'},
      {name: 'gpsLocation_latitude', type: 'number'},
      {name: 'gpsLocation_longitude', type: 'number'},
      {name: 'locationState', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.COINS_LOAD,
    columns: [
      {name: 'activity_id', type: 'string', isIndexed: true},
      {name: 'value', type: 'number'},
      {name: 'quantity', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.BASE_COMPANY,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'companyName', type: 'string'},
      {name: 'enable', type: 'boolean'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.PRODUCT_FLOW_LINE,
    columns: [
      {name: 'product_flow_id', type: 'string', isIndexed: true},
      {name: 'storage_product_line_id', type: 'string', isIndexed: true},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'quantity', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.WORKING_DAY_BREAK,
    columns: [
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.RESTOCKING_ORDER_LINE,
    columns: [
      {name: 'restocking_order_id', type: 'string', isIndexed: true},
      {name: 'storage_product_line_id', type: 'string', isIndexed: true},
      {name: 'product_id', type: 'string', isIndexed: true},
      {name: 'quantity', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VENDOR_USER_VISIT_CONFIGURATION,
    columns: [
      {name: 'mandatoryActionList', type: 'string'},
      {name: 'vendor_user_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.MAINTENANCE_ACTION,
    columns: [
      {
        name: 'maintenance_action_definition_id',
        type: 'string',
        isIndexed: true,
      },
      {name: 'visit_id', type: 'string', isIndexed: true},
      {name: 'maintenanceActionDate', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.USER_ACCOUNT,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'login', type: 'string'},
      {name: 'firstName', type: 'string'},
      {name: 'lastName', type: 'string'},
      {name: 'firstNameAndLastName', type: 'string'},
      {name: 'email', type: 'string'},
      {name: 'langKey', type: 'string'},
      {name: 'imageUrl', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.AUDIT,
    columns: [
      {name: 'evaDtsText', type: 'string'},
      {name: 'sale_place_id', type: 'string', isIndexed: true},
      {name: 'sale_place_equipment_id', type: 'string', isIndexed: true},
      {name: 'visit_id', type: 'string', isIndexed: true},
      {name: 'audit_media_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.TICKET_COMMENT,
    columns: [
      {name: 'comment', type: 'string'},
      {name: 'commentDate', type: 'number'},
      {name: 'author_id', type: 'string', isIndexed: true},
      {name: 'ticket_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VEHICLE_LOADING,
    columns: [
      {name: 'vehicle_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.VEHICLE,
    columns: [
      {name: 'registrationNumber', type: 'string'},
      {name: 'brand', type: 'string'},
      {name: 'model', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.TICKET_TYPE,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'typeName', type: 'string'},
      {name: 'systemType', type: 'boolean'},
      {name: 'baseType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.CUSTOMER,
    columns: [
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.MESSAGE,
    columns: [
      {name: 'message', type: 'string'},
      {name: 'sendSms', type: 'boolean'},
      {name: 'type', type: 'string'},
      {name: 'relatedID', type: 'string'},
      {name: 'relatedEntityName', type: 'string'},
      {name: 'target', type: 'string'},
      {name: 'recipient_id', type: 'string', isIndexed: true},
      {name: 'readingDate', type: 'number'},
      {name: 'sendingDate', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.PRODUCT_FLOW,
    columns: [
      {name: 'flowDate', type: 'number'},
      {name: 'vendor_user_id', type: 'string', isIndexed: true},
      {name: 'activity_id', type: 'string', isIndexed: true},
      {name: 'origin_storage_area_id', type: 'string', isIndexed: true},
      {name: 'destination_storage_area_id', type: 'string', isIndexed: true},
      {name: 'productMovementType', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.CUSTOM_ACTIVITY,
    columns: [
      {name: 'custom_activity_definition_id', type: 'string', isIndexed: true},
      {name: 'comment', type: 'string'},
      {name: 'beginIdentificationMode', type: 'string'},
      {name: 'beginIdentificationCode', type: 'string'},
      {name: 'endIdentificationMode', type: 'string'},
      {name: 'endIdentificationCode', type: 'string'},
      {name: 'manualIdentificationStartComment', type: 'string'},
      {name: 'manualIdentificationEndComment', type: 'string'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.MAINTENANCE_ACTION_DEFINITION,
    columns: [
      {name: 'actionName', type: 'string'},
      {name: 'forProvisioner', type: 'boolean'},
      {name: 'forTechnician', type: 'boolean'},
      {name: 'forSupervisor', type: 'boolean'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.COMPANY_SITE,
    columns: [
      {name: 'externalId', type: 'number'},
      {name: 'company_id', type: 'string', isIndexed: true},
      {name: 'name', type: 'string'},
      {name: 'contact_id', type: 'string', isIndexed: true},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
  {
    name: TableName.GPS_LOCATION_HISTORY,
    columns: [
      {name: 'recordingDate', type: 'number'},
      {name: 'gpsLocation_latitude', type: 'number'},
      {name: 'gpsLocation_longitude', type: 'number'},
      // WDB special columns
      {name: 'created_at', type: 'number'},
      {name: 'updated_at', type: 'number'},
    ],
  },
];
