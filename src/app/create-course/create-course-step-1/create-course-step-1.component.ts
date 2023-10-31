import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const SAMPLE_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit nulla nunc, eget vestibulum enim sodales quis. Donec scelerisque eros sed metus euismod, at tincidunt urna pulvinar. Suspendisse tellus risus, condimentum vel orci non, luctus molestie neque. Etiam justo est, tempus a turpis ultrices, ullamcorper dictum arcu. Fusce mattis dignissim lacus eu iaculis. Nulla elit dui, finibus ut consequat eget, posuere vitae velit. Aenean arcu odio, gravida in fringilla vel, aliquet et lorem. Nullam finibus fermentum ipsum, eget vestibulum risus euismod sit amet. Donec urna nisl, mollis nec laoreet a, suscipit et dui."

@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });


  constructor(private fb: UntypedFormBuilder) {

  }

  dateClass:MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    const date = cellDate.getDate();


    if(view === 'month'){
      return date === 1 ? 'highlight-date' : '';
    }

    return '';

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
