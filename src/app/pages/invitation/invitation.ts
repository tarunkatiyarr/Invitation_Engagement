import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  imports: [CommonModule],
  templateUrl: './invitation.html',
  styleUrl: './invitation.scss',
  standalone:true
})
export class Invitation {

    hearts = Array(20);

}
