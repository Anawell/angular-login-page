import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin-feedback',
  templateUrl: './signin-feedback.component.html',
  styleUrls: ['./signin-feedback.component.scss']
})
export class SigninFeedbackComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta) { }

  ngOnInit(): void {
  }

}
