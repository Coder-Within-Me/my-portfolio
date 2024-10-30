import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface certification{
  certificationName : string;
  img : string;
  flip : boolean;
  issuedBy : string;
  issuedDate : string;
  credentialID : string;
  credentialLink : string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger('flipAnimation', [
      state('default', style({
        transform: 'rotateY(0)'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default <=> flipped', [
        animate('500ms')
      ]),
    ])
  ]
})
export class CardComponent {

  certifications : certification[] = [
    { certificationName: 'AZ204', img: 'assets/Certification Badge/AZ204.png', flip:false, issuedBy:'Microsoft', issuedDate:'Oct 2024',credentialID:'961BC360AE46BF1D',credentialLink:'https://learn.microsoft.com/api/credentials/share/en-us/MayurGurav/961BC360AE46BF1D?sharingId=12C8FE60A7AFAFC' },
    { certificationName: 'AZ900', img: 'assets/Certification Badge/az 900.png', flip:false, issuedBy:'Microsoft', issuedDate:'Jan 2024',credentialID:'6906D7332CFD4F09',credentialLink:'https://learn.microsoft.com/api/credentials/share/en-us/MayurGurav/6906D7332CFD4F09?sharingId=12C8FE60A7AFAFC' },
    { certificationName: 'Junior Angular Developer', img: 'assets/Certification Badge/Angular level 1.png', flip:false, issuedBy:'Certificates.dev', issuedDate:'Jul 2024',credentialID:'CJAD-002178',credentialLink:'https://certificates.dev/c/f6e8b28c-b226-43be-971c-b9bf6e87c032' },
  ];

  toggleFlip(certification : certification,state: boolean) {
    this.certifications.filter(x => x.certificationName == certification.certificationName)[0].flip = state;
  }

}
