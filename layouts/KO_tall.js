var layout_KO = {
  name: "Tall Korean Layout",
  classes: "tall",
  nextHourAt: 45,
  config : [
    [
      //Now, it is
      {
        word: "지금은", 
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "오전", //AM
        hours: [0,1,2,3,4,5,6,7,8,9,10,11]
      }
    ],
    [
      {
        word: "오후", //PM
        hours: [12,13,14,15,16,17,18,19,20,21,22,23]
      },
      {
        word: "열", //10 hour, 11 and 12 are made up of 10+1, 10+2
        hours: [0,10,11,12,22,23]
      },
      {
        word: "한", //1
        hours: [1,11,13,23]
      },
      {
        word: "다섯", //5
        hours: [5,17]
      }
    ],
    [
      {
        word: "여섯", //6
        hours: [6,18]
      },
      {
        word: "두", //2
        hours: [0,2,12,14]
      },
      {
        word: "세", //3
        hours: [3,15]
      },
      {
        word: "네", //4
        hours: [4,16]
      }
    ],
    [
      {
        word: "일곱", //7
        hours: [7,19]
      },
      {
        word: "여덟", //8
        hours: [8,20]
      },
      {
        word: "아홉", //9
        hours: [9,21]
      }
    ],
    [
      {
        word: "시", // "Hour"
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "이", // 2 * (10)
        minutes: [20,25]
      },
      {
        word: "삼", // 3 * (10)
        minutes: [35]
      },
      {
        word: "사", // 4 * (10)
        minutes: [40]
      }
    ],
    [
      {
        word: "십", // (n) * 10
        minutes: [10,15,20,25,35,40,45,50]
      },
      {
        word: "오", // (n) * (10) + 5
        minutes: [5,15,25,35,45,55]
      },
      //Sharp, on the hour
      {
        word: "정각",
        minutes: [0]
      },
      {
        word: "분", // "Minutes"
        minutes: [5,10,15,20,25,35,40,45,50,55]
      }
    ],
    [
      {
        word: "반", //half-past
        minutes: [30]
      },
      {
        word: "전", //minutes before
        minutes: [45,50,55]
      },
      //ending phrase
      {
        word: "입니다.",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      }
    ]
  ]
};
