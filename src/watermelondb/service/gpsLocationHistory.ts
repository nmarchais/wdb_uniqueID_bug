import {TableName} from "../schema/tableName";
import GpsLocationHistoryWDB from "../model/GpsLocationHistoryWDB";
import {Database} from "@nozbe/watermelondb";

export const createGpsLocationHistory = async (database: Database) => {
  await database.write(async () => {
    await database.collections
      .get<GpsLocationHistoryWDB>(TableName.GPS_LOCATION_HISTORY)
      .create(gpsLocationHistory => {
        gpsLocationHistory.gpsLocation_latitude = 1;
        gpsLocationHistory.gpsLocation_longitude = 1;
        gpsLocationHistory.recordingDate = new Date();
      });
  });
};
