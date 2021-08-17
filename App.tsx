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
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";

import {Colors, Header} from "react-native/Libraries/NewAppScreen";
import {createDatabase} from "./src/watermelondb/database/database";
import {syncDB} from "./src/watermelondb/sync/syncDB";
import {createWorkingDayWDB} from "./src/watermelondb/service/workingDayWDBService";
import {createVisit} from "./src/watermelondb/service/visitService";

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
            <Button
              title={"Créer entités"}
              onPress={async () => {
                const workingDay = await createWorkingDayWDB(database);
                await createVisit(database, workingDay);
              }}
            />
            <Button
              title={"Synchroniser"}
              onPress={() => {
                syncDB(database);
              }}
            />
            <Button
              title={"Vider BDD"}
              onPress={() => {
                database.write(() => database.unsafeResetDatabase());
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </DatabaseProvider>
  );
};

export default App;
