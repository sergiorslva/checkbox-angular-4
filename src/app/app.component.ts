import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private groceries: any;
  private selectedItens: any;

  constructor() {
    this.groceries = [];
    this.groceries.push({ id: 10, name: 'Eggs', isChecked: true });
    this.groceries.push({ id: 20, name: 'Nuts', isChecked: true });
    this.groceries.push({ id: 30, name: 'Chickpeas', isChecked: false });
    this.groceries.push({ id: 40, name: 'Apples', isChecked: true });
    this.groceries.push({ id: 50, name: 'Banana', isChecked: true });
  }

  setChecked(event) {
    let itemFinded = this.groceries.filter(item => item.id === event.target.value);
    itemFinded.isChecked = event.target.checked;
  }

  listSelected() {
    let selectedItens = this.groceries.filter(
      item => item.isChecked === true
    )

    return selectedItens;
  }

  uncheckAll() {
    this.groceries.forEach(element => {
      element.isChecked = false;
    });
  }

  checkAll() {
    this.groceries.forEach(element => {
      element.isChecked = true;
    });
  }


  checkSome() {
    let itemSearch = [10, 30];

    this.uncheckAll();

    this.groceries.forEach(
      item => {
        if (itemSearch.includes(item.id)) {
          item.isChecked = true;
        }
      }
    }
}
