import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  public name = 'Nonsoglobal';
  public age = '40';

  public first_name: string = 'Godwin';
  public ages: number = 12;
  public has_paid: boolean = true;
  public arrow:Array<object> = [{name: "Godwin"}, {city: "Aba"}, {age: "100"}]
  public info:Array<string> = ["Daniel", "Jolo", "Man", "Dodo"]
  public obj:object = {paid: true};
  public arrNumber: Array<number> = [2,3,5,8,9]
  public idk:any = null
  // item: any;
}
