var layout_DE = {
  name: "DE_9x16",
  classes: "tall",
  nextHourAt: 25,
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
        word: "zehn",
        minutes: [10,50] 
      },
    ],
    [
      {
        word: "fünf",
        minutes: [5,25,35,55] 
      },
      {
        word: "zwanzig",
        minutes: [20,40] 
      },
      {
        word: "vor",
        minutes: [25,45,40,50,55] 
      }
    ],
    [
      {
        word: "nach",
        minutes: [5,10,20,15,35] 
      },
      {
        word: "halb",
        minutes: [25,30,35] 
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
      }
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
        word: "sechs",
        hours: [6,18] 
      }
    ],
    [
      {
        word: "vier",
        hours: [4,16] 
      },
      {
        word: "fünf",
        hours: [5,17] 
      },
      {
        word: "sieben",
        hours: [7,19] 
      }
    ],
    [
      {
        word: "elf",
        hours: [11,23] 
      },
      {
        word: "neun",
        hours: [9,21] 
      },
      {
        word: "zehn",
        hours: [10,22] 
      },
    ],
    [
      {
        word: "acht",
        hours: [8,20]
      },
      {
        word: "zwölf",
        hours: [0,12] 
      },
      {
        word: "Uhr",
        minutes: [0]
      }
    ]
  ]
};