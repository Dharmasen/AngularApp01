import { Component, OnInit } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
private selectedId:number;
private selectedData:any = []

  constructor(
    private http: HttpClient,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getSelectedItemDetails( this.selectedId)
  }

  getSelectedItemDetails(id){
    const url ='http://localhost:3000/users'
    this.http.get(url+'/'+id).subscribe((res)=>{
      this.selectedData = res
      console.log(this.selectedData)
    })
  }

}
