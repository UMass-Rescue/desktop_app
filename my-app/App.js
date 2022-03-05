import * as React from 'react';
import {SectionList, TextInput, StyleSheet, Text, View, Dimensions, Button, SafeAreaView, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Separator = () => (
  <View style={styles.separator} />
);

const newTaskData = [{
  title: "New Tasks",
  data: [
    {
      id: "1",
      task: "Buy groceries"
    },
    {
      id: "2",
      task: "Feed Cat"
    },
    {
      id: "3",
      task: "Sleep for 3 hours"
    },
    {
      id: "4",
      task: "Water Plants"
    },
    {
      id: "5",
      task: "Drink Water"
    },
  ]
}];
const completedTaskData = [{
  title: "Completed Tasks",
  data: [
    {
      id: "6",
      task: "Make a section list tutorial"
    },
    {
      id: "7",
      task: "Share this tutorial"
    },
    {
      id: "8",
      task: "Ask doubt in the Comments"
    },
    {
      id: "9",
      task: "Subscribe to logrocket"
    },
    {
      id: "10",
      task: "Read next Article"
    },
    {
      id: "11",
      task: "Read next Article 2"
    },
    {
      id: "12",
      task: "Read next Article 3"
    },
    {
      id: "13",
      task: "Read next Article 4"
    },
    {
      id: "14",
      task: "Read next Article 5"
    },
    {
      id: "15",
      task: "Read next Article 6"
    },
    {
      id: "16",
      task: "Read next Article 7"
    },
    {
      id: "17",
      task: "Read next Article 8"
    },
    {
      id: "18",
      task: "Read next Article 9"
    },
    {
      id: "19",
      task: "Read next Article 10"
    },
  ]
}];

const Stack = createNativeStackNavigator();
const num  = 0;

function CaseNumber({ navigation }) {
  const [text, onChangeText] = React.useState("Enter Case Number");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
    <Text>
      Case Number:
    </Text>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        num={number}
        placeholder="Enter Case Number"
        keyboardType="numeric"
      />

    <Separator />
    <View>
      <Button
        title="Canvas"
        color="#f194ff"
        onPress={() => navigation.navigate('Canvas')}
      />
    </View>
    <Separator />
  </SafeAreaView>
  );
}


function InvestigatorCanvas({ navigation }) {
  const [text, onChangeText] = React.useState("Enter Case Number");
  const [number, onChangeNumber] = React.useState(null);
 
  return (
    <View>
    <Calendar
          // Initially visible month. Default = Date()
          current={'2022-03-05'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2032-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2032-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
    <Button
      title="Available Investigators"
      color="#669fa8"
    />
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
          <TextInput placeholder="Latitude" style={styles.input} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="Longitude" style={styles.input} />
      </View>
  </View>
  <Button
      title="Submit"
      color="#669fa8"
    />
      <SectionList
        sections={[...newTaskData, ...completedTaskData]}
        renderItem={({item})=>(
            <Text style={styles.taskItem}>{item.task}</Text>
        )}
        renderSectionHeader={({section})=>(
          <Text style={styles.taskTitle}>{section.title}</Text>
        )}
        keyExtractor={item=>item.id}
        stickySectionHeadersEnabled
      />
  </View>
  );
}

function MapScreen() {
  return (
      <View style={styles.containerMap}>
        <MapView style={styles.map} />
      </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="Home" component={CaseNumber} />
        <Stack.Screen name="Canvas" component={InvestigatorCanvas} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container_scroll: {
    flex: 1,
    backgroundColor: '#eafffe'
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   taskItem:{
    padding: 10,
    marginVertical: 15,
    fontSize: 16
  },
  taskTitle:{
    backgroundColor: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10
  }

});