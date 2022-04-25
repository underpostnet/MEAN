import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  public artist = {
    name: 'Deftones',
    discs: [
      {
        name: 'White Pony',
        songs: [
          { song: 'Digital Bath', plays: 39, duration: '4:15' },
          { song: 'Knife Prty', plays: 20, duration: '4:49' },
          { song: 'Passenger', plays: 49, duration: '6:08' },
          {
            song: 'Change (In the House of Flies)',
            plays: 121,
            duration: '4:59',
          },
        ],
      },
      {
        name: 'Koi No Yokan',
        songs: [
          { song: 'Swerve City', plays: 29, duration: '2:44' },
          { song: 'Tempest', plays: 15, duration: '6:05' },
          { song: 'Gauze', plays: 4, duration: '4:41' },
          { song: 'Rosemay', plays: 13, duration: '6:53' },
        ],
      },
      {
        name: 'Eros',
        songs:[]
      }
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
