var layout_ZH = {
  name: "Tall Simplified Chinese Layout",
  classes: "tall",
  nextHourAt: 99, //don't reference the next hour
  config : [
    [
      //Now, it is
      {
        word: "现", 
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word: "在", 
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      //AM, PM
      {
        word: "上", //First part of AM
        hours: [0,1,2,3,4,5,6,7,8,9,10,11]
      },
      {
        word: "午", //Second part of AM
        hours: [0,1,2,3,4,5,6,7,8,9,10,11]
      },
      {
        word: "下", //First part of PM
        hours: [12,13,14,15,16,17,18,19,20,21,22,23]
      },
      {
        word: "午", //Second part of PM
        hours: [12,13,14,15,16,17,18,19,20,21,22,23]
      }
    ],
    [
      {
        word: "十", //10 hour, 11 is up of 10+1
        hours: [10,11,22,23]
      },
      {
        word: "一", //1
        hours: [1,11,13,23]
      },
      {
        word: "十", //10 hour for use with 12
        hours: [0,12]
      },
      {
        word: "二", //2 (for use with 12)
        hours: [0,12]
      },
      {
        word: "两", //2
        hours: [2,14]
      },
      {
        word: "三", //3
        hours: [3,15]
      }
    ],
    [
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
        word: "点", // "Hour"
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
        word: "五", // 5 * (10)
        minutes: [50,55]
      },
      {
        word: "十", // (n) * 10
        minutes: [10,20,25,35,40,50,55]
      }
    ],
    [
      {
        word: "五", // (n) * (10) + 5
        minutes: [5,25,35,55]
      },
      //Sharp, on the hour
      {
        word: "钟",
        minutes: [0]
      },
      {
        word: "分", // "Minutes"
        minutes: [5,10,20,25,35,40,50,55]
      },
      {
        word: "半", //half-past
        minutes: [30]
      },
      //quarter past
      {
        word: "一", // "Minutes"
        minutes: [15]
      },
      {
        word: "刻", // "Minutes"
        minutes: [15]
      }
    ],
    [
      //quarter to
      {
        word: "三", // "Minutes"
        minutes: [45]
      },
      {
        word: "刻", // "Minutes"
        minutes: [45]
      },

      //ending phrase
      {
        word: "。",
        minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
      }
    ]
  ]
};
