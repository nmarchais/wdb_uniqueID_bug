import dayjs from "dayjs";
import {TableName} from "../schema/tableName";
import WorkingDayWDB from "../model/WorkingDayWDB";
import {Database} from "@nozbe/watermelondb";
import VehicleWDB from "../model/VehicleWDB";

export const createWorkingDayWDB = async (
  database: Database
) => {
  const vehicle = await database.write(async () => {
    return await database.collections
      .get<VehicleWDB>(TableName.VEHICLE)
      .create(vehicle => {
        vehicle.brand = "Peugeot";
        vehicle.registrationNumber = "123456AZE";
        vehicle.model = "000";
      });
  });
  return await database.write(async () => {
    return await database.collections
      .get<WorkingDayWDB>(TableName.WORKING_DAY)
      .create(workingDay => {
        workingDay.beginDate = dayjs().toDate();
        workingDay.vehicleStartKm = 0;
        workingDay.cashRegisterStart = 0;
        workingDay.vehicle.set(vehicle);
      });
  });
};
