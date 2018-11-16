import { Component, Input, OnInit } from '@angular/core';
import { City, CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() city: City;
  imageToShow: any;
  isImageLoading: boolean;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getImageFromService();
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.cityService.getCityImage(this.city.id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      console.log(error);
    });
  }
}
