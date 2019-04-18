import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  values = '';
  result:number =0;

  handleClick(event: any) : void {
    this.values += event.target.value;
  }

  calculate():void
  {
    var add = this.values.split("+");
    var sub = this.values.split("-");
    var mul = this.values.split("*");
    var div = this.values.split("/");
    this.result =0;

    if(add.length>1)
    {
      add.forEach(element => {
        this.result+= Number.parseInt(element);
      });
      add = null;
    }
    else if(sub.length>1)
    {
      
        this.result = Number.parseInt((Number.parseInt(sub[0])-Number.parseInt(sub[1])).toString());
      sub = null;
    }
    else if(mul.length>1)
    {
      this.result=1;
      mul.forEach(element => {
        this.result*= Number.parseInt(element);
      });
      mul = null;
    }
    else if(div.length>1)
    {      
        this.result = Number.parseFloat((Number.parseFloat(div[0]) / Number.parseFloat(div[1])).toString());
      div = null;
    }
    this.values =this.result.toString();    
  }

  delete() : void{
    this.values ='';
    this.result =0;
  }
}
