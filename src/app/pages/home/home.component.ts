import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  trainers=[]
  constructor(public trainerService: TrainerService) { }

  ngOnInit() {
  	this.trainerService.getTrainer().subscribe(res=>{
  		console.log(res);
  		for(let i = 0; i < res.data.length; i++)
  			this.trainers.push(res.data[i]);
  	});

}

  }


