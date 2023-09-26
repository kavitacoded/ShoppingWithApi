import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { FakeProductContract } from '../FakeProductContract';

@Component({
  selector: 'app-fake-store-component',
  templateUrl: './fake-store-component.component.html',
  styleUrls: ['./fake-store-component.component.css']
})
export class FakeStoreComponentComponent implements OnInit {

  constructor(private service: FakeService) { }

  public products :FakeProductContract[]=[];


  ngOnInit(): void {
    this.service.getProducts().subscribe(
      data =>{
      this.products=data
    },
    error =>{
      console.log(error);
      
    },
    () =>{
      console.log('Execution completed');
    }
     )
  }

}
