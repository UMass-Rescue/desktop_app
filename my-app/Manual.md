# desktop_app

# Motivation 
To help law enforcement with investigations, this desktop application was created. Creating features that will be located in one place, it will help with investigations keep track of all information pertaining the case and it will be avalaible in real time for all investigators to use. We have created 3 features that will be used by the investigators. It is in the preliminary stages and can be improved upon. 

# Features 
## Canvas
This feature includes a calendar and a text input that allows you to input a number. There may be many investigations happening at the same time, therefore, having this feature will allow you to be able to pick the right investigation. The Calendar also has a feature where you can select multiple dates. This way, if you have a certain deadline, or a certain days you need to allocate an invesigator to, this calendar will be the best way to see what days the investigator is needed and for what case. 

## Location Tracker
After looking at the canvas page, the user has the option to go to the second page which is the location tracker. Here, the user can input an address of interest, and we will use our Algo22 algorithm to find the two closest investigators. It will output a list of avalible investigators who are the closest and some unavalible investigators. 

## Maps
This section is the map section and it is powered by Google Maps. I went with Google Maps because it has a lot of userful features and it can be used on both desktop, web and mobile applications. This will show the location of the two agents and the address of the point of interest. 

# Tech Stack 
All the tech needed for the Algo22 is given in its description located [here](https://github.com/sne21star/Algo_S22/blob/main/Manual.md)

As for the application itself, please check the package.json file to see all the libraries and dependencies that you need. 

In general these are the things that are absolutely necessay: 
* Expo 
* node version: 9.4.146.19-node.13
* react native 
* nodemon 
* react google maps (you will need an API key)
* axios 

You will need other libraries to, so be sure to check thee package.json files. 

Some other things that can be helpful is: 
* Xcode 
* iOS Simulator (this takes up a lot of space, be prepared for if you want)

# Improvements 
## General 
The user interface can be much better. The purpose this semester was to get things working and to link backends to front ends. We have created the channel needed to connect everything. Now we can improve on each component seperately. 

## Canvas
Even though the user can input numbers and select calendar dates, there are no consequences for these actions. The input from the user is not used. The next developer can start using this information for other purposes and also make sure users can only input correct values or handle erronous values given by the user. 

## Location Tracker
This can do with a change in the user interface. It might also be best just to combine the location tracker and map in one section. For now they are on different pages. 

## Maps
Creating extra features and buttons might be better to navigate through this section. This will also change according to the needed features in the future. 

# How to use 

1. Clone the repo 
2. cd into my-app
3. yard add all the libraries in the package.json file.
4. Somtimes when adding libraries, it may ask you to update. Ensure that the library you are updating does not interfer with the features in the code right now 
5. After installing the libraries, run the application use expo start 
6. It will open up a qr code and other information. You can type d to open up the developer mode in your window. You can also type w and open the application itself on the web 
7. The first page to open is the home page. 
8. Go to the next page by clicking the canvas button 
9. Now that you are here you need to run the Algo22 algorithm. 
10. cd into Algo22 and then run the line given below. In order for this to run make sure you have a Google maps API key. 

> uvicorn interviewFlask:app --reload

11. You can now input an address and a language (English or Spanish) and then click on the avaliable investigators button. 

* You can try these address: 
* 31 N Pleasant st,Amherst,MA 01002
* 16G Brandywine, Amherst, MA 01002
* 666 N Pleasant Street, Amherst, MA 01003
* 163 Sunderland Rd, Amherst, MA 01002
* Stadium Dr, Amherst, MA 01003
* 70 University Dr, Amherst, MA 01002
* 175 University Dr,Amherst, MA 01002
* 363 Main St, Amherst, MA 01002
* 475 Amherst Rd, Sunderland, MA 01375


12. Click on check live location button to see the Google Maps function. You will also have to input the corresponding input the API key too each place in the code. There are two spots and it is located in the Googlemaps file and maps file. 

