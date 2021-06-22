import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputComponent {

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  profileForm = this.fb.group({
    discount_companies: this.fb.array([
      this.fb.control('')
    ]),
    discount_codes: this.fb.array([
      this.fb.control('')
    ]),
    influencers: this.fb.array([
      this.fb.control('')
    ])
  });

  get discount_companies() {
    return this.profileForm.get('discount_companies') as FormArray;
  }

  get discount_codes() {
    return this.profileForm.get('discount_codes') as FormArray;
  }

  get influencers() {
    return this.profileForm.get('influencers') as FormArray;
  }

  addDiscountCompany() {
    this.discount_companies.push(this.fb.control(''));
  }

  addDiscountCode() {
    this.discount_codes.push(this.fb.control(''));
  }

  addInfluencer() {
    this.influencers.push(this.fb.control(''));
  }

  addAll() {
    this.discount_companies.push(this.fb.control(''));
    this.discount_codes.push(this.fb.control(''));
    this.influencers.push(this.fb.control(''));
  }

  getDiscountCompany(index) {
    var formArray = this.profileForm.get('discount_companies') as FormArray;
    return formArray.at(index).value;
  }

  getDiscountCode(index) {
    var formArray = this.profileForm.get('discount_codes') as FormArray;
    return formArray.at(index).value;
  }

  getInfluencer(index) {
    var formArray = this.profileForm.get('influencers') as FormArray;
    return formArray.at(index).value;
  }

  getDate() {
    return new Date().toISOString().slice(0, 10);
  }

  deleteRow(index) {
    this.discount_companies.removeAt(index);
    this.discount_codes.removeAt(index);
    this.influencers.removeAt(index);
  }

  printData() {
    var influencers = this.profileForm.get('influencers') as FormArray;
    var companies = this.profileForm.get('discount_companies') as FormArray;
    var codes = this.profileForm.get('discount_codes') as FormArray;

    var toPrint = "";

    for (var i = 0; i < influencers.length; i++) {
      toPrint = toPrint + "{\n" +
                        "\"company\": \"" + companies.at(i).value + "\",\n" +
                        "\"code\": \"" + codes.at(i).value + "\",\n" +
                        "\"via\": \"" + influencers.at(i).value + "\",\n" +
                        "\"date\": \"2021-06-14\",\n" +
                        "},\n";
    }

    console.log(toPrint);
  }

  readAndPrintTextfile() {
    this.http.get('assets/testtext.txt', {responseType: 'text'}).subscribe(data => {
       console.log(data);
    })
  }

  removeDuplicateCodes() {
    var influencers = this.profileForm.get('influencers') as FormArray;
    var companies = this.profileForm.get('discount_companies') as FormArray;
    var codes = this.profileForm.get('discount_codes') as FormArray;

    var existing = this.getExistingCodesWithoutDate();

    for(var i = 0; i < influencers.length; i++) {
      var fullNewCodeEntry = companies.at(i).value + ", " + codes.at(i).value + ", " + influencers.at(i).value;

      if(existing.includes(fullNewCodeEntry)) {
        alert(fullNewCodeEntry);
      } else {
        alert("prrt " + fullNewCodeEntry);
      }
    }
  }

  getExistingCodesWithoutDate() {
    var existingCodesNoDate = [];

    for(var i = 0; i < this.existingCodeEntries.length; i++) {
      var lineWithoutDate = this.existingCodeEntries[i].substring(0, this.existingCodeEntries[i].lastIndexOf(", "));

      if(lineWithoutDate.replace(/\s/g, '').length) {
        existingCodesNoDate.push(lineWithoutDate);
      }
    }

    return existingCodesNoDate;
  }


  existingCodeEntries = [
    "@amebalance, FLORIANNE20, florianne.charlotte, 2021-06-10",
    "@famousstore, Annefloor10, annefloorx, 2021-06-10",
    "@editedofficial, ROOS20JUNE, moderosaofficial, 2021-06-10"
  ];
}
