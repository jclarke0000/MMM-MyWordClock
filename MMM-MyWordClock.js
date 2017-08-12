/*
  MMM-MyWordClock
  By Jeff Clarke

  Based on MMM-TextClock by Pierre Broberg
  
  MIT Licensed

  This is not a fork per se, as the code is quite different.  Functionally,
  however, it is quite similar to MMM-TextClock's field layout. My reasons
  for building a new module that does more or the same thing are as follows:

   - I wanted my word clock to be full screen
   - I wanted my word clock to act like a screensaver, where after a certian
     amount of time, the clock appears, and is cancelled upon notification from
     the PIR Sensor module.
   - My English layout is slightly different, in that the clock reads:
     "It's half past one" instead of "It's half two"
   - Adding other layouts is fairly trivial, and adding multiple
     layouts for any given langauge is possible (e.g.: An English langauge
     version for tall 1080p resolution, another for 1080p wide, a third for DE_1080p tall, etc).
   - Layouts are not restricted to the same amount of lines or even the same
     amount of words per line as the english version.  This means that
     translations or even other layouts in the same language need to follow
     the same pattern.
   - Each layout name is added to the DOM wrapper as a class name so styling
     each layout specifically is possible while maitaining style inheritance
     from the defaults where applicable.
*/

Module.register("MMM-MyWordClock", {

  defaults: {
    showClockTimeOut: 5 * 60 * 1000, //5 minutes
    animationSpeed: 1000,
    layout: "EN_9x16"
  },

  start: function() {
    console.log("Starting module: " + this.name);
    var self = this;

    setInterval(function() {
      self.updateDom(1000);
    }, 5 * 1000);

    this.colorCounter = 1;
    this.hourSegment = 0;

    this.showTimer = null;

  },

  getScripts: function() {
    return ["moment.js"];
  },

  getStyles: function() {
    return ["MMM-MyWordClock.css"];
  },

  resetTimers: function() {
    var self = this;
    clearTimeout(this.showTimer);
    this.showTimer = setTimeout(function() {
      self.showClock(self);
    }, this.config.showClockTimeOut);
  },

  showClock: function(instance) {

    clearTimeout(instance.showTimer);

    //hide all current modules
    var modules = MM.getModules();
    modules.enumerate(function(module) {
      module.hide(instance.config.animationSpeed, {lockString: instance.identifier});
    });

    //show this module
    setTimeout(function() {
      instance.show(instance.config.animationSpeed, {lockString: instance.identifier});
    }, instance.config.animationSpeed);

  },

  hideClock: function(instance) {

    instance.hide(instance.config.animationSpeed);

    setTimeout(function() {
      //show all current modules
      var modules = MM.getModules();
      modules.enumerate(function(module) {
        if (module.identifier != instance.identifier) {
          module.show(instance.config.animationSpeed, {lockString: instance.identifier});
        }
      });

      instance.resetTimers();

    }, instance.config.animationSpeed);      


  },

  incrementColorCounter: function() {
    this.colorCounter += 1;
    if (this.colorCounter == 7) {
      this.colorCounter = 1;
    }
  },

  getDom: function() {

    var theTime = moment();
    if (theTime.minutes() >= 35 ) {
      theTime.add(1, "hours");
    }

    var hourVal = theTime.hour();
    var minuteVal = Math.floor(theTime.minutes()/5) * 5; //round down to the nearest 5

    // For every in 5-minute value, we change the colour of highlighted text
    if (minuteVal != this.hourSegment) {
      this.hourSegment = minuteVal;
      this.incrementColorCounter();
    }

    var wrapper = document.createElement("div");
    wrapper.classList.add("clock-grid", "c" + this.colorCounter, this.config.layout);

    this.layouts[this.config.layout].forEach(function(wordGroup) {
      var div = document.createElement("div");
      wordGroup.forEach(function(word) {
        var span = document.createElement("span");
        span.innerHTML = word.word;

        if (word.minutes && word.minutes.indexOf(minuteVal) != -1) {
          span.classList.add("highlighted");
        } else if (word.hours && word.hours.indexOf(hourVal) != -1) {
          span.classList.add("highlighted");
        }

        div.appendChild(span);
      });
      wrapper.appendChild(div);
    });


    return(wrapper);

  },

  notificationReceived: function (notification, payload) {
    
    if (notification === "DOM_OBJECTS_CREATED") {
      //clock module is hidden by default
      this.hide();
      this.resetTimers();

    } else if (notification === "USER_PRESENCE" && payload === true) {
      if (this.hidden) {
        this.resetTimers();
      } else {
        this.hideClock(this);
      }
    }

  },

  /*
    Layouts are specified here
  */
  layouts: {
    "EN_9x16" : [
      [
        {
          word: "It's",
          minutes: [0,5,10,15,20,25,30,35,40,45,50,55,60]
        },
        {
          word: "half",
          minutes: [30] 
        },
        {
          word: "ten",
          minutes: [10,50] 
        }
      ],
      [
        {
          word: "quarter",
          minutes: [15,45] 
        },
        {
          word: "twenty",
          minutes: [20,25,35,40] 
        }
      ],
      [
        {
          word: "five",
          minutes: [5,25,35,55] 
        },
        {
          word: "minutes",
          minutes: [5,10,20,25,35,40,50,55] 
        },
        {
          word: "to",
          minutes: [35,40,45,50,55] 
        }
      ],
      [
        {
          word: "past",
          minutes: [5,10,15,20,25,30] 
        },
        {
          word: "two",
          hours: [2,14] 
        },
        {
          word: "three",
          hours: [3,15] 
        }
      ],
      [
        {
          word: "one",
          hours: [1,13] 
        },
        {
          word: "four",
          hours: [4,16] 
        },
        {
          word: "five",
          hours: [5,17] 
        }
      ],
      [
        {
          word: "six",
          hours: [6,18] 
        },
        {
          word: "seven",
          hours: [7,19] 
        },
        {
          word: "eight",
          hours: [8,20] 
        }
      ],
      [
        {
          word: "nine",
          hours: [9,21] 
        },
        {
          word: "ten",
          hours: [10,22] 
        },
        {
          word: "eleven",
          hours: [11,23] 
        }
      ],
      [
        {
          word: "twelve",
          hours: [0,12] 
        },
        {
          word: "o'clock",
          minutes: [0] 
        }
      ]
    ],
    "EN_16x9" : [
      [
        {
          word: "It's",
          minutes: [0,5,10,15,20,25,30,35,40,45,50,55,60]
        },
        {
          word: "half",
          minutes: [30] 
        },
        {
          word: "ten",
          minutes: [10,50] 
        },
        {
          word: "quarter",
          minutes: [15,45] 
        }
      ],
      [
        {
          word: "twenty",
          minutes: [20,25,35,40] 
        },
        {
          word: "five",
          minutes: [5,25,35,55] 
        },
        {
          word: "minutes",
          minutes: [5,10,20,25,35,40,50,55] 
        },
        {
          word: "to",
          minutes: [35,40,45,50,55] 
        }
      ],
      [
        {
          word: "past",
          minutes: [5,10,15,20,25,30] 
        },
        {
          word: "two",
          hours: [2,14] 
        },
        {
          word: "three",
          hours: [3,15] 
        },
        {
          word: "one",
          hours: [1,13] 
        },
        {
          word: "four",
          hours: [4,16] 
        },
      ],
      [
        {
          word: "five",
          hours: [5,17] 
        },
        {
          word: "six",
          hours: [6,18] 
        },
        {
          word: "seven",
          hours: [7,19] 
        },
        {
          word: "eight",
          hours: [8,20] 
        },
        {
          word: "nine",
          hours: [9,21] 
        },
      ],
      [
        {
          word: "ten",
          hours: [10,22] 
        },
        {
          word: "eleven",
          hours: [11,23] 
        },
        {
          word: "twelve",
          hours: [0,12] 
        },
        {
          word: "o'clock",
          minutes: [0] 
        }
      ]
    ]

  },  

});

