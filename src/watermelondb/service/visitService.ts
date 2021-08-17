import WorkingDayWDB from "../model/WorkingDayWDB";

import VisitWDB from "../model/VisitWDB";
import {TableName} from "../schema/tableName";
import {createActivity} from "./activityService";
import {EnumActivityType} from "../../ava";
import {Database} from "@nozbe/watermelondb";

export const createVisit = async (
  database: Database,
  workingDay: WorkingDayWDB,
) => {
  const activity = await createActivity(
    database,
    workingDay,
    EnumActivityType.VISIT,
  );
  const visit = await database.write<VisitWDB>(async () => {
    const date = Date.now();
    const dirtyRaw = {
      id: activity.id,
      beginIdentificationMode: "NFC",
      beginIdentificationCode: "toto",
      manualIdentificationStartComment: "comment",
      salesCounter: 0,
      created_at: date,
      updated_at: date,
    };
    // @ts-ignore
    const visitRecord = await database.collections.get<VisitWDB>(TableName.VISIT).prepareCreateFromDirtyRaw(dirtyRaw);
    await database.batch(visitRecord);

    return visitRecord;
  });

  return visit;
};
