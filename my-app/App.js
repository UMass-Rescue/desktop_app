import * as React from 'react';
import {SectionList, TextInput, StyleSheet, Text, View, Dimensions,Switch, Button, SafeAreaView, Alert, Platform, 
TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Marker } from "react-native-maps";
import moment from 'moment';
//import '@mobiscroll/react/dist/css/mobiscroll.min.css';
//import { Datepicker } from '@mobiscroll/react';
import axios from 'axios'; 
import { RectButton } from 'react-native-gesture-handler';
class MyCalendar extends React.Component {
  months = ["January", "February", "March", "April", 
 "May", "June", "July", "August", "September", "October", 
 "November", "December"];

 weekDays = [
     "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
 ]; 
 nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 state = {
  activeDate: new Date()
} 

setMonth = month => {  
  let monthNo = this.months.indexOf(month);// get month number  
  let dateObject = Object.assign({}, this.state.dateObject);  
  dateObject = moment(dateObject).set("month", monthNo); // change month value  
  this.setState({  
  dateObject: dateObject // add to state  
  });  
  };   

  
  render() {
    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay(); 
    var maxDays = this.nDays[month];
    if (month == 1) { // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    } 
    changeMonth = (n) => {
      this.setState(() => {
        this.state.activeDate.setMonth(
          this.state.activeDate.getMonth() + n
        )
        return this.state;
      });
  } 
    props.data.map(data => {  
      months.push(  
      <td  
      key={data}  
      className="calendar-month"  
      onClick={e => {  
      this.setMonth(data);  
      }}  
      >  
      <span>{data}</span>  
      </td>  
      );  
      });   
    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <Text
            style={{
              flex: 1,
              height: 18,
              textAlign: 'center',
              // Highlight header
              backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
              // Highlight Sundays
              color: colIndex == 0 ? '#a00' : '#000',
              // Highlight current date
              fontWeight: item == this.state.activeDate.getDate() 
                                  ? 'bold': ''
            }}
            onPress={() => this._onPress(item)}>
            {item != -1 ? item : ''}
          </Text>
        );
      });
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </View>
      );
    }); 

    return (
      <View>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
      }}>
        {this.months[this.state.activeDate.getMonth()]}  
        {this.state.activeDate.getFullYear()}
      </Text> 
      <Button title="Previous"
         onPress={() => this.changeMonth(-1)}/>
       <Button title="Next"
         onPress={() => this.changeMonth(+1)}/> 


      </View>
    );
  }
} 

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    [children]
  </TouchableWithoutFeedback>
);
const Separator = () => (
  <View style={styles.separator} />
);



const Stack = createNativeStackNavigator();
const num  = 0;

function CaseNumber({ navigation }) {
  const [text, onChangeText] = React.useState("Enter Case Number");
  const [number, onChangeNumber] = React.useState(null);

  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const [showCalendar, stateCalendar] = React.useState(false);
  const [markedDates, setMarkedDates] = React.useState({
    '2022-03-20': {textColor: 'green'},
    '2022-03-22': {startingDay: true, color: 'green'},
    '2022-03-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
    '2022-03-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
  })


  const handleDayPress = (day) => {

    newDates[selectedDate]={selected: true, marked: true, selectedColor: Colors.YELLOW};

    setMarkedDates({

      [day.dateString]: {
        selected: true, marked: true, selectedColor: "blue"
      },

    })
  }


  return (
    
    <SafeAreaView style={styles.container}>
       <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>

          <Text>Start Date:</Text>

          <TextInput placeholder="YYYY-MM-DD" placeholderTextColor="gray" style={styles.input} />
      </View>
      <View style={{flex:1}}>
      <Text>End Date:</Text>
          <TextInput placeholder="YYYY-MM-DD" placeholderTextColor="gray" style={styles.input} />
      </View>
     </View>

     <Button
        title="Submit"
        color="#f194ff"
        onPress={() => stateCalendar(!showCalendar)}
      />

    <Text>
      Case Number:
    </Text>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        num={number}
        placeholderTextColor="gray"
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
  const [showList, state] = React.useState(false);
  const [result, setResult] =  React.useState("Test"); 
  const [address, setAddress] = React.useState('');
  const [id_agents, setID] = React.useState('');
const [listSection, setListSection] = React.useState([{
  title: "Avaliable",
   data: [
    {
      id: "1",
      task: "Agent A: 2345"
    },
    {
      id: "2",
      task: "Agent B: 2373"
    },
   
  ]
}]);


const sendAddress = () => {
  axios.post('http://127.0.0.1:8000/recievedAddress/', {'address': address})
    .then(res => {
      console.log(res)
      console.log(res.data.address)
      console.log("RESULT")

      setID(res.data.address)
      console.log(res.data.address)
      console.log(res.data.address.split(","))
      console.log("RESULT")

      setListSection([{
      title: "Avaliable",
      data: [
        {
          id: "1",
          task: "Agent ID: " + res.data.address.split(",")[0],
        },
        {
          id: "2",
          task: "Agent ID: " + res.data.address.split(",")[1],
        },
       
      ]
  
      }])

      state(!showList)

    }
    
    ).catch(e => {
      console.log(e)
      console.log(address)
    });
/*
    try{
      axios.get('http://127.0.0.1:8000/sentID/')
      .then((response) =>  {
        console.log(response)
        setResult(response.data.message)
      
      }); 
  
      console.log(result)
      //let result = res.data; 
    } catch(e){
      console.log("Here")
      console.log(e)
    }*/
};

  return (
    <View>
     
    <View style={{flexDirection:"row"}}>
      <View style={{flex:1}}>
          <TextInput placeholder="Input Address" 
          placeholderTextColor="gray" 
          onChangeText={newText => setAddress(newText)}
          defaultValue={address}
          style={styles.input} />
      </View>
     </View>
     
     <View style={{flexDirection:"column"}}>
     <View>
     <Text>
        {address} 
      </Text>
     <Button
        title="Available Investigators"
        color="#669fa8"
        onPress={() => sendAddress()}
      />
  

  </View>
     
     <Button
     title="Check Live Location"
     color="#669fa8"
     onPress={() => navigation.navigate('Map')}
   />
     {showList ? (
              <SectionList
          sections={[...listSection]}
          renderItem={({item})=>(
              <Text style={styles.taskItem}>{item.task}</Text>
          )}
          renderSectionHeader={({section})=>(
            <Text style={styles.taskTitle}>{section.title}</Text>
          )}
          keyExtractor={item=>item.id}
          stickySectionHeadersEnabled
        />
        ) : null}

       
   
     </View>



<View>
     
    </View>
  </View>
  );
}
function CustomMarker({ name }) {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>{name}</Text>
    </View>
  );
}

function CustomMarkerAgents({ id }) {
  return (
    <View style={styles.circle}>
      <Text style={styles.pinText}>{id}</Text>
    </View>
  );
}

function MapScreen() {
  const location = {
    latitude: 37.7895,
    longitude: -122.445,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const coordinate1 = {
    latitude: 37.7885,
    longitude: -122.435,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate2 = {
    latitude: 37.75,
    longitude: -122.433,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate3 = {
    latitude: 37.78,
    longitude: -122.431,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate4 = {
    latitude: 37.79,
    longitude: -122.429,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate5 = {
    latitude: 37.7877,
    longitude: -122.427,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate6 = {
    latitude: 37.7875,
    longitude: -122.425,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate7 = {
    latitude: 37.7873,
    longitude: -122.435,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate8 = {
    latitude: 37.7871,
    longitude: -122.435,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate9 = {
    latitude: 37.7869,
    longitude: -122.435,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const coordinate10 = {
    latitude: 37.7867,
    longitude: -122.435,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  


  return (
      <View style={styles.containerMap}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
         <Marker coordinate={location}>
          <CustomMarker name="Location"/>
        </Marker>

        <Marker coordinate={coordinate6}>
          <CustomMarkerAgents id="2373"/>
        </Marker>
        <Marker coordinate={coordinate6} />

        <Marker coordinate={coordinate1}>
          <CustomMarkerAgents id="2345"/>
        </Marker>

         <Marker coordinate={coordinate1} />


      </MapView>

 


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
    textShadowColor: '#000'
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
  },
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inlineSwitchContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  }, 
  
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'yellow',
    //elevation: 10,
},
pinText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10, 
    marginBottom: 5,
    position: "absolute",
},
  text: {
  color: "#fff",   
  },

});