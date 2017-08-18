var layout = {
  name: "DE_16x9",
  classes: "wide",
  nextHourAt: 20,
  config : [
    [
      {
        word: "Es ist",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "Viertel",
        minutes: [15,45] 
      },
      {
        word: "fünf",
        minutes: [5,25,35,55] 
      },
      {
        word: "zehn",
        minutes: [10,20,40,50] 
      },
    ],
    [
      {
        word: "vor",
        minutes: [20,25,45,50,55] 
      },
      {
        word: "nach",
        minutes: [5,10,15,35,40] 
      },
      {
        word: "halb",
        minutes: [20,25,30,35,40] 
      },
      {
        word: "eins",
        hours: [1,13],
        variations: [
          {
            word: "ein",
            hours: [1,13],
            minutes: [0]            
          }
        ] 
      },
    ],
    [
      {
        word: "zwei",
        hours: [2,14] 
      },
      {
        word: "drei",
        hours: [3,15] 
      },
      {
        word: "vier",
        hours: [4,16] 
      },
      {
        word: "fünf",
        hours: [5,17] 
      },
    ],
    [
      {
        word: "sieben",
        hours: [7,19] 
      },
      {
        word: "sechs",
        hours: [6,18] 
      },
      {
        word: "acht",
        hours: [8,20]
      },
      {
        word: "elf",
        hours: [11,23] 
      },
    ],
    [
      {
        word: "neun",
        hours: [9,21] 
      },
      {
        word: "zwölf",
        hours: [0,12] 
      },
      {
        word: "zehn",
        hours: [10,22] 
      },
      {
        word: "Uhr",
        minutes: [0]
      }
    ]
  ]
};