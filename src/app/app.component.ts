import { Component } from '@angular/core';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';
import { FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public onFiltering: EmitType<FilteringEventArgs>=(args: FilteringEventArgs)=>{
    let dataQuery: Query = new Query();
    dataQuery = (args.text !== '') ? dataQuery.where('FirstName', 'endswith', args.text, false) : dataQuery;
    args.updateData(this.employeeData, dataQuery);
  }

  public fieldSettings: object = { value: 'EmployeeID', text: 'FirstName', groupBy: "Designation"};
  public employeeData: { [key: string]: Object; }[] = [
    {
      "EmployeeID": 1,
      "FirstName": "Ándrew Fuller",
      "Designation": "Team Lead",
      "Country": "England"
    },
    {
      "EmployeeID": 2,
      "FirstName": "Anne Dodsworth",
      "Designation": "Developer",
      "Country": "USA"
    },
    {
      "EmployeeID": 3,
      "FirstName": "Janet Leverling",
      "Designation": "HR",
      "Country": "USA"
    },
    {
      "EmployeeID": 4,
      "FirstName": "Laura Callahan",
      "Designation": "Product Manager",
      "Country": "USA"
    },
    {
      "EmployeeID": 5,
      "FirstName": "Margaret Peacock",
      "Designation": "Developer",
      "Country": "USA"
    },
    {
      "EmployeeID": 6,
      "FirstName": "Michael Suyama",
      "Designation": "Team Lead",
      "Country": "USA"
    },
    {
      "EmployeeID": 7,
      "FirstName": "Nancy Davolio",
      "Designation": "Product Manager",
      "Country": "USA"
    },
    {
      "EmployeeID": 8,
      "FirstName": "Robert King",
      "Designation": "Developer ",
      "Country": "England"
    },
    {
      "EmployeeID": 9,
      "FirstName": "Steven Buchanan",
      "Designation": "CEO",
      "Country": "England"
    }
  ]
}
