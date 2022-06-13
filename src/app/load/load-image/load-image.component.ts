import { Component, OnInit } from '@angular/core';
import { ImageSnippet } from 'src/app/model/load-image.model';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {

  url!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
    function click_the_button(btn: any){
      btn.click();
    }
  }




}
