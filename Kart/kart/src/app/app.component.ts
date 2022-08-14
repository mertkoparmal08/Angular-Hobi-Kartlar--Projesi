import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'mkdag',
      content: 'Çok iyi sürdüm'
    },
    {
      title:'Tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mkuludağ',
      content: 'Hergün daha yükseğe'
    },
    {
      title:'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'mkdoga',
      content: 'Biraz nefes alalım'
    }

  ]
}
