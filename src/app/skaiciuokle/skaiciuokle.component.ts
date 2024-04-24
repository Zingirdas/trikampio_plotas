import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skaiciuokle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skaiciuokle.component.html',
  styleUrl: './skaiciuokle.component.css'
})
export class SkaiciuokleComponent {
public x:number|null=null;
public y:number|null=null;
public c:number|null=null;
public suma:number|null=null;

public suskaiciuok(){
  if(this.x!==null && this.y!==null && this.c!==null){
    let s=(this.x+this.y+this.c)/2;
    this.suma=Math.sqrt(s*(s-this.x)*(s-this.y)*(s-this.c));
this.x=null;
this.y=null;
this.c=null;
  }
}

}
