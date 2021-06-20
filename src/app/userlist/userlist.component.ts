import { Component, OnInit } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  searchText;
  private data:any = []
  constructor( private http: HttpClient,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(){
     const url ='http://localhost:3000/users'
     this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  selectedRow(data){
    this.router.navigate(['/userdetail', data.id]);
  }

}
