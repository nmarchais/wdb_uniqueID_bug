import ActivityWDB from "../model/ActivityWDB";
import dayjs from "dayjs";
import {TableName} from "../schema/tableName";
import WorkingDayWDB from "../model/WorkingDayWDB";
import {Database} from "@nozbe/watermelondb";
import {EnumActivityType} from "../../ava";

export const createActivity = async (
  database: Database,
  workingDay: WorkingDayWDB,
  activityType: EnumActivityType,
) => {
  return await database.write<ActivityWDB>(async () => {
    return await database.collections
      .get<ActivityWDB>(TableName.ACTIVITY)
      .create(newActivity => {
        newActivity.beginDate = dayjs().toDate();
        newActivity.startLocation_latitude = 0;
        newActivity.startLocation_longitude = 0;
        newActivity.workingDay.set(workingDay);
        newActivity.activityType = activityType;
      });
  });
};
