import { DatePipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgClass, NgStyle, DatePipe, DecimalPipe, MovieRatingComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  // movies:any[]=[]
  movies = [
    {
      adult: false,
      backdrop_path: '/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg',
      genre_ids: [10749, 878, 53],
      id: 950396,
      original_language: 'en',
      original_title: 'The Gorge',
      overview:
        'Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.',
      popularity: 1623.512,
      poster_path: '/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',
      release_date: '2025-02-13',
      title: 'The Gorge',
      video: false,
      vote_average: 4.769,
      vote_count: 1673,
    },
    {
      adult: false,
      backdrop_path: '/sGFR4zSOsogo77Wi5XI0P5il0ek.jpg',
      genre_ids: [28, 53, 80],
      id: 1126166,
      original_language: 'en',
      original_title: 'Flight Risk',
      overview:
        "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
      popularity: 1543.187,
      poster_path: '/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg',
      release_date: '2025-01-22',
      title: 'Flight Risk',
      video: true,
      vote_average: 6.1,
      vote_count: 381,
    },
    {
      adult: false,
      backdrop_path: '/kEYWal656zP5Q2Tohm91aw6orlT.jpg',
      genre_ids: [18, 35, 10749],
      id: 1064213,
      original_language: 'en',
      original_title: 'Anora',
      overview:
        'A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.',
      popularity: 1245.622,
      poster_path: '/qh8m8Udz0sCa5gy9VaqfHPh0yPM.jpg',
      release_date: '2024-10-14',
      title: 'Anora',
      video: false,
      vote_average: 7.099,
      vote_count: 1413,
    },
    {
      adult: false,
      backdrop_path: '/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg',
      genre_ids: [28, 53, 878],
      id: 822119,
      original_language: 'en',
      original_title: 'Captain America: Brave New World',
      overview:
        'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
      popularity: 858.521,
      poster_path: '/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
      release_date: '2025-02-12',
      title: 'Captain America: Brave New World',
      video: true,
      vote_average: 5.2,
      vote_count: 873,
    },
    {
      adult: false,
      backdrop_path: '/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg',
      genre_ids: [16, 14, 12],
      id: 823219,
      original_language: 'lv',
      original_title: 'Straume',
      overview:
        'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
      popularity: 804.742,
      poster_path: '/imKSymKBK7o73sajciEmndJoVkR.jpg',
      release_date: '2024-08-29',
      title: 'Flow',
      video: true,
      vote_average: 8.3,
      vote_count: 1333,
    },
    {
      adult: false,
      backdrop_path: '/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg',
      genre_ids: [28, 35],
      id: 1160956,
      original_language: 'zh',
      original_title: '熊猫计划',
      overview:
        'International action star Jackie Chan is invited to the adoption ceremony of a rare baby panda, but after an international crime syndicate attempts to kidnap the bear, Jackie has to save the bear using his stunt work skills.',
      popularity: 559.623,
      poster_path: '/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg',
      release_date: '2024-10-01',
      title: 'Panda Plan',
      video: false,
      vote_average: 3.075,
      vote_count: 147,
    },
    {
      adult: false,
      backdrop_path: '/2P0PUkQ1tNHNYTEmtbBmM8MfXBG.jpg',
      genre_ids: [878, 35, 12],
      id: 696506,
      original_language: 'en',
      original_title: 'Mickey 17',
      overview:
        'Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.',
      popularity: 658.152,
      poster_path: '/lrCcovGRcuv8Z1v3ae1ZH5Ird05.jpg',
      release_date: '2025-02-28',
      title: 'Mickey 17',
      video: false,
      vote_average: 7.2,
      vote_count: 74,
    },
    {
      adult: false,
      backdrop_path: '/sc1abgWNXc29wSBaerrjGBih06l.jpg',
      genre_ids: [27, 878, 53],
      id: 1084199,
      original_language: 'en',
      original_title: 'Companion',
      overview:
        'During a weekend getaway at a secluded lakeside estate, a group of friends finds themselves entangled in a web of secrets, deception, and advanced technology. As tensions rise and loyalties are tested, they uncover unsettling truths about themselves and the world around them.',
      popularity: 592.778,
      poster_path: '/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg',
      release_date: '2025-01-22',
      title: 'Companion',
      video: false,
      vote_average: 7.1,
      vote_count: 656,
    },
    {
      adult: false,
      backdrop_path: '/t98L9uphqBSNn2Mkvdm3xSFCQyi.jpg',
      genre_ids: [27, 878],
      id: 933260,
      original_language: 'en',
      original_title: 'The Substance',
      overview:
        'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',
      popularity: 428.651,
      poster_path: '/cGm2qnmXx9tFabmzEIkJZjCJdQd.jpg',
      release_date: '2024-09-07',
      title: 'The Substance',
      video: false,
      vote_average: 4.1,
      vote_count: 4080,
    },
    {
      adult: false,
      backdrop_path: '/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg',
      genre_ids: [16, 18, 35],
      id: 1064486,
      original_language: 'en',
      original_title: 'Memoir of a Snail',
      overview:
        'Forcibly separated from her twin brother when they are orphaned, a melancholic misfit learns how to find confidence within herself amid the clutter of misfortunes and everyday life.',
      popularity: 399.369,
      poster_path: '/lWh5OlerPR1c1cfn1ZLq0lpqFds.jpg',
      release_date: '2024-10-17',
      title: 'Memoir of a Snail',
      video: false,
      vote_average: 7.813,
      vote_count: 238,
    },
    {
      adult: false,
      backdrop_path: '/iXU87IdtNsYt7n6OigPJBDdbFf1.jpg',
      genre_ids: [10751, 16, 35, 28],
      id: 774370,
      original_language: 'en',
      original_title: 'Dog Man',
      overview:
        'When a faithful police dog and his human police officer owner are injured together on the job, a harebrained but life-saving surgery fuses the two of them together and Dog Man is born. Dog Man is sworn to protect and serve—and fetch, sit and roll over. As Dog Man embraces his new identity and strives to impress his Chief, he must stop the pretty evil plots of feline supervillain Petey the Cat.',
      popularity: 396.014,
      poster_path: '/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg',
      release_date: '2025-01-24',
      title: 'Dog Man',
      video: false,
      vote_average: 7.8,
      vote_count: 141,
    },
    {
      adult: false,
      backdrop_path: '/eZzNdjNDvaSoyywy9ICg2UmFwul.jpg',
      genre_ids: [18, 53, 9648],
      id: 974576,
      original_language: 'en',
      original_title: 'Conclave',
      overview:
        'After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.',
      popularity: 333.275,
      poster_path: '/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg',
      release_date: '2024-10-25',
      title: 'Conclave',
      video: false,
      vote_average: 7.157,
      vote_count: 1536,
    },
    {
      adult: false,
      backdrop_path: '/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg',
      genre_ids: [28, 80, 53],
      id: 1249289,
      original_language: 'en',
      original_title: 'Alarum',
      overview:
        'Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum. Watch Here : https://justwatch.pro/movie/1249289/alarum',
      popularity: 339.811,
      poster_path: '/v313aUGmMNj6yNveaiQXysBmjVS.jpg',
      release_date: '2025-01-16',
      title: 'Alarum',
      video: true,
      vote_average: 5.8,
      vote_count: 218,
    },
    {
      adult: false,
      backdrop_path: '/l2QSVFR5aLcW1Vl4cGKrQkEp6fY.jpg',
      genre_ids: [35, 10749, 28],
      id: 1201012,
      original_language: 'hi',
      original_title: 'धूम धाम',
      overview:
        'On their wedding night, an oddball couple is thrust into a chaotic chase, dodging goons and cops in a frenzied hunt for the mysterious "Charlie."',
      popularity: 307.171,
      poster_path: '/2E7me3rPi8HqaeheuD86YlpNX6k.jpg',
      release_date: '2025-02-13',
      title: 'Dhoom Dhaam',
      video: false,
      vote_average: 6.5,
      vote_count: 22,
    },
    {
      adult: false,
      backdrop_path: '/uKb22E0nlzr914bA9KyA5CVCOlV.jpg',
      genre_ids: [18, 10749, 14],
      id: 402431,
      original_language: 'en',
      original_title: 'Wicked',
      overview:
        "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
      popularity: 307.655,
      poster_path: '/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg',
      release_date: '2024-11-20',
      title: 'Wicked',
      video: false,
      vote_average: 6.9,
      vote_count: 1876,
    },
    {
      adult: false,
      backdrop_path: '/uJK0jjJ8QDOQw5lcNBwu059ht4D.jpg',
      genre_ids: [10749, 18],
      id: 1294203,
      original_language: 'en',
      original_title: 'My Fault: London',
      overview:
        "18-year-old Noah moves from America to London, with her mother who's recently fallen in love with William, a wealthy British businessman. Noah meets William’s son, bad-boy Nick, and soon discovers there is an attraction between them neither can avoid. As Noah spends the summer adjusting to her new life, her devastating past will catch up with her while falling in love for the first time.",
      popularity: 324.688,
      poster_path: '/ttN5D6GKOwKWHmCzDGctAvaNMAi.jpg',
      release_date: '2025-02-12',
      title: 'My Fault: London',
      video: false,
      vote_average: 7.485,
      vote_count: 291,
    },
    {
      adult: false,
      backdrop_path: '/r8YfVJu9OAzWbTAuuc86CIs1DYN.jpg',
      genre_ids: [18, 10402],
      id: 661539,
      original_language: 'en',
      original_title: 'A Complete Unknown',
      overview:
        'New York, early 1960s. Against the backdrop of a vibrant music scene and tumultuous cultural upheaval, an enigmatic 19-year-old from Minnesota arrives in the West Village with his guitar and revolutionary talent, destined to change the course of American music.',
      popularity: 262.139,
      poster_path: '/llWl3GtNoXosbvYboelmoT459NM.jpg',
      release_date: '2024-12-18',
      title: 'A Complete Unknown',
      video: false,
      vote_average: 7.179,
      vote_count: 634,
    },
    {
      adult: false,
      backdrop_path: '/mQZJoIhTEkNhCYAqcHrQqhENLdu.jpg',
      genre_ids: [16, 878, 10751],
      id: 1184918,
      original_language: 'en',
      original_title: 'The Wild Robot',
      overview:
        "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      popularity: 300.801,
      poster_path: '/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg',
      release_date: '2024-09-12',
      title: 'The Wild Robot',
      video: false,
      vote_average: 8.3,
      vote_count: 4458,
    },
    {
      adult: false,
      backdrop_path: '/hmZnqijPaaACjenDkrbWcCmcADI.jpg',
      genre_ids: [18],
      id: 549509,
      original_language: 'en',
      original_title: 'The Brutalist',
      overview:
        'Escaping post-war Europe, visionary architect László Toth arrives in America to rebuild his life. On his own in a strange new country, a wealthy industrialist recognizes his talent. But power and legacy come at a heavy cost...',
      popularity: 340.92,
      poster_path: '/gl16UFazRs5Xv3VS8YKhRqQRY8T.jpg',
      release_date: '2024-12-20',
      title: 'The Brutalist',
      video: false,
      vote_average: 7.1,
      vote_count: 728,
    },
    {
      adult: false,
      backdrop_path: '/hD2SN5bbqxk0kcRmsATJkXObgnZ.jpg',
      genre_ids: [28, 80, 14, 53],
      id: 1405338,
      original_language: 'ja',
      original_title: 'Demon City 鬼ゴロシ',
      overview:
        'Framed for his family\'s murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked "demons" who have taken over his city.',
      popularity: 453.144,
      poster_path: '/fQ9hzto0cUuxjfzqNAiAnNJo8O7.jpg',
      release_date: '2025-02-26',
      title: 'Demon City',
      video: false,
      vote_average: 6.8,
      vote_count: 101,
    },
  ];

  respondToChild(eventData:string) {
    console.log(eventData);
  }
}
