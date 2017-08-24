var layout_JA = {
  name: "Tall Japanese Layout",
  classes: "tall",
  nextHourAt: 45,
  config : [
    [
      //Now, it is
      {
        word: "今", 
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "は", 
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      //AM, PM
      {
        word: "午", //First part of both AM and PM
        hours: [0,1,2,3,4,5,6,7,8,9,10,11]
      },
      {
        word: "前", //Second part of AM
        hours: [0,1,2,3,4,5,6,7,8,9,10,11]
      },
      {
        word: "午", //First part of both AM and PM
        hours: [12,13,14,15,16,17,18,19,20,21,22,23]
      },
      {
        word: "後", //Second part of PM
        hours: [12,13,14,15,16,17,18,19,20,21,22,23]
      },
      {
        word: "十", //10 hour, 11 and 12 are made up of 10+1, 10+2
        hours: [0,10,11,12,22,23]
      },
      {
        word: "一", //1
        hours: [1,11,13,23]
      }
    ],
    [
      {
        word: "二", //2
        hours: [0,2,12,14]
      },
      {
        word: "三", //3
        hours: [3,15]
      },
      {
        word: "四", //4
        hours: [4,16]
      },
      {
        word: "五", //5
        hours: [5,17]
      },
      {
        word: "六", //6
        hours: [6,18]
      },
      {
        word: "七", //7
        hours: [7,19]
      },
      {
        word: "八", //8
        hours: [8,20]
      },
      {
        word: "九", //9
        hours: [9,21]
      }
    ],
    [
      {
        word: "時", // "Hour"
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "二", // 2 * (10)
        minutes: [20,25]
      },
      {
        word: "三", // 3 * (10)
        minutes: [35]
      },
      {
        word: "四", // 4 * (10)
        minutes: [40]
      },
      {
        word: "十", // (n) * 10
        minutes: [10,15,20,25,35,40,45,50]
      },
      {
        word: "五", // (n) * (10) + 5
        minutes: [5,15,25,35,45,55]
      },
      //Sharp, on the hour
      {
        word: "定",
        minutes: [0]
      },
      {
        word: "刻",
        minutes: [0]
      }
    ],
    [
      {
        word: "分", // "Minutes"
        minutes: [5,10,15,20,25,35,40,45,50,55]
      },
      {
        word: "半", //half-past
        minutes: [30]
      },
      {
        word: "前", //minutes before
        minutes: [45,50,55]
      },
      //ending phrase
      {
        word: "で",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "す",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "。",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      }
    ]
  ]
};
