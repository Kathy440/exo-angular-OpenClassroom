import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


    posts = [
        {
            title: 'Mon premier posts',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam animi\n' +
            '    aspernatur, cumque deleniti ex expedita iste magni molestiae mollitia necessitatibus nesciunt\n' +
            '    nulla quam quibusdam quidem sequi tempora voluptatum',
            loveIts: 2,
            created_at:  new Date()
        },

        {
            title: 'Mon deuxième posts',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam animi\n' +
            '    aspernatur, cumque deleniti ex expedita iste magni molestiae mollitia necessitatibus nesciunt\n' +
            '    nulla quam quibusdam quidem sequi tempora voluptatum',
            loveIts: -5,
            created_at:  new Date()
        },

        {
            title: 'Encore un posts',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam animi\n' +
            '    aspernatur, cumque deleniti ex expedita iste magni molestiae mollitia necessitatibus nesciunt\n' +
            '    nulla quam quibusdam quidem sequi tempora voluptatum',
            loveIts: 0,
            created_at:  new Date()

        }

        ];



}
