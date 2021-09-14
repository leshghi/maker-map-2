import { Component, Inject, OnInit } from '@angular/core';
import {Location} from './infoStructures';
import {LOCATIONS} from './locationsList';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  

  ngOnInit(): void {
    this.showPopup(LOCATIONS[0]);
  }
  

  open={checked:false};
  selected: string;
  date: string;
  locations = LOCATIONS;
  filteredLocations = LOCATIONS;
  selectedLocation: Location;
  // Filters for the filter menu
  allFilters=[{name: "Lasercutter", checked: false},{name: "3D printer", checked: false}, {name:"Other fabrication tools", checked: false},
  {name: "Arts and craft supplies", checked: false},{name: "Software support", checked: false},
  {name: "Computers", checked: false},{name: "Printing", checked: false},
  {name: "Whiteboard", checked: false}];
  access={name: "All Campus Access Only", checked:false};

  title = 'Smith Makers Map';
  show: boolean = false;
  constructor(public dialog: MatDialog) {}

  showPopup(location: Location){
    this.selectedLocation = location;
  }

  // Handles filters for various locations
  finalFilter(){
    this.filteredLocations=LOCATIONS;
    if(this.access.checked == true){
      this.filteredLocations = this.filteredLocations.filter(location => location.access === true)
    };

    if(this.open.checked === true){
      this.hoursFilterHelper();
    }
    this.allFilters.forEach(element => {
      if(element.checked){this.filteredLocations = this.filteredLocations.filter(location =>
        location.filtResources.includes(element.name) === true);
      }
    });
  }
  

  hoursFilter(){
    if(this.open.checked === true){
     this.hoursFilterHelper();
  } else {
    this.filteredLocations = LOCATIONS;
    this.finalFilter();
  }
  }

  // Logic for filtering by hours for "open now"
  hoursFilterHelper(){
    var registerDate = new Date();
    var day = registerDate.getDay();
    var hour = registerDate.getHours();
    var minute = registerDate.getMinutes();
    this.filteredLocations = this.filteredLocations.filter(location => {
      var openHour = Number(location.filtHours[day].split("-")[0].split(":")[0]);
      var openMinute = Number(location.filtHours[day].split("-")[0].split(":")[1]);
      var closedHour = Number(location.filtHours[day].split("-")[1].split(":")[0]);
      var closedMinute = Number(location.filtHours[day].split("-")[1].split(":")[1]);
      if (openHour < hour && closedHour > hour){
        return location;
      }
      else if (openHour === hour){
        if(openMinute < minute){
          return location;
        }
      } else if (closedHour === hour){
        if(closedMinute > minute){
          return location;
        }
      }
    });
  }

  // Clear all filters
  resetFilter(){
    this.filteredLocations=LOCATIONS;
    this.allFilters.forEach(element =>{
      element.checked = false;
    });
    if(this.open.checked == true){
      this.hoursFilterHelper();
    }

    this.access.checked = false;
  }

  openLocationDialog(location: Location): void {
    this.dialog.open(LocationDialog, {
      width: '60%',
      maxWidth: "400px",
      autoFocus: false,
      data: {location: location}
    });
}

openLearnMoreDialog(): void {
  this.dialog.open(LearnMoreDialog, {
    width: '60%',
    maxWidth: "400px",
    autoFocus: false,
  });
}
}

@Component({
  selector: 'location-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./app.component.css']
})
export class LocationDialog {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {location: Location, mediaStudios: Location[]}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'learn-more-dialog',
  templateUrl: 'learn-more-dialog.html',
  styleUrls: ['./app.component.css']
})
export class LearnMoreDialog {

  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
