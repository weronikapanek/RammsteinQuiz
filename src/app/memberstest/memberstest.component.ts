import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, NgForm} from '@angular/forms';


@Component({
  selector: 'app-memberstest',
  templateUrl: './memberstest.component.html',
  styleUrls: ['./memberstest.component.css']
})
export class MemberstestComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.quizForm = formBuilder.group({
      name: ['', [Validators.required],
                [Validators.minLength(2)],
                [Validators.maxLength(10)]],
      freeTime: ['', Validators.required],
      instrument: ['', Validators.required],
      RammsteinAge: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }

}
