import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/fr";
import {useEffect} from "react";

const configureDayJS = () => {
  dayjs.extend(utc); // permet d'utiliser des date en UTC et avec TimeZone
  dayjs.extend(LocalizedFormat); // permet d'avoir parse/format de date en fonction de la locale
  dayjs.locale("fr"); // use French locale globally
  dayjs.extend(timezone);
  console.log("day.js locale : " + dayjs().locale());
  console.log("day.js plugin UTC activé: " + dayjs.utc().isUTC());
  const currentDate = dayjs();
  console.log("Date courante en UTC: " + currentDate.utc().format("L LT"));
  console.log(
    "Date courante avec le fuseau horaire local: " + currentDate.format("L LT"),
  );
};

export const useConfigureDayjs = () => {
  useEffect(() => {
    configureDayJS();
  }, []);
};
