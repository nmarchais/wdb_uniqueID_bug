/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import DatabaseProvider from "@nozbe/watermelondb/DatabaseProvider";
import React, {useMemo} from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {Colors, Header} from "react-native/Libraries/NewAppScreen";
import {createDatabase} from "./src/watermelondb/database/database";
import {syncDB} from "./src/watermelondb/sync/syncDB";
import {createWorkingDayWDB} from "./src/watermelondb/service/workingDayWDBService";
import {createVisit} from "./src/watermelondb/service/visitService";
import {Database} from "@nozbe/watermelondb";

const clearDatabase = (database: Database) => () => {
  database.write(() => database.unsafeResetDatabase());
};

const createRecords = (database: Database) => async () => {
  const workingDay = await createWorkingDayWDB(database);
  await createVisit(database, workingDay);
  console.log("Records created !")
};

const App = () => {
  const database = useMemo(() => createDatabase(), []);

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <DatabaseProvider database={database}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Pressable onPress={createRecords(database)} style={styles.button}>
              <Text style={styles.text}>Create records</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                syncDB(database);
              }}>
              <Text style={styles.text}>Synchronize</Text>
            </Pressable>
            <Pressable onPress={clearDatabase(database)} style={styles.button}>
              <Text style={styles.text}>Clear Database</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </DatabaseProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#2588FF",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default App;
