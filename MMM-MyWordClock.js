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
     layouts for any given language is possible (e.g.: An English language
     version for tall HDTV resolution, another for HDTV wide, a third for German tall HDTV, etc).
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
    language: "EN",
    orientation: "tall"
  },

  layouts: {},


  languages: ["EN","DA","DE","DE_CH","FR","JA","KO","NL","ZH"],

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  start: function() {
    console.log("Starting module: " + this.name);
    var self = this;

    var cLang = this.config.language;
    if (cLang == "*") {
      //load all language layouts into an array
      for (var i = 0; i < this.languages.length; i++) {
        this.layouts[this.languages[i]] = eval("layout_" + this.languages[i]);
      }
    } else {
      //We just need one language
      this.layouts[cLang] = eval("layout_" + cLang);
    }


    //set some defaults
    this.colorCounter = 0;
    this.languageCounter = 1;
    this.hourSegment = Math.floor(moment().minutes() / 5) * 5;
    this.showTimer = null;
    this.curLanguage = this.config.language;
    
    //generate random colours and language (if configured to "*"")
    this.updateCounters();

    //start update timer
    setInterval(function() {
      self.updateDom(1000);
    }, 5 * 1000);



  },

  //imports the layout from a file of the same name
  getScripts: function() {

    var cLang = this.config.language;

    var scriptsToLoad = ["moment.js"];
    if (cLang == "*") {
      for (var i = 0; i < this.languages.length; i++) {
        scriptsToLoad.push(this.file("layouts/" + this.languages[i] + "_" + this.config.orientation + ".js"));
      }
    } else {
      scriptsToLoad.push(this.file("layouts/" + cLang + "_" + this.config.orientation + ".js"));
    }

    return scriptsToLoad;
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

  updateCounters: function() {
    this.colorCounter = this.getRandomInt(1,6);

    if (this.config.language == "*") {
      this.languageCounter = this.getRandomInt(0,this.languages.length - 1);
      this.curLanguage = this.languages[this.languageCounter];
    }
  },

  getDom: function() {


    var theTime = moment();

    var minuteVal = Math.floor(theTime.minutes()/5) * 5; //round down to the nearest 5

    // For every in 5-minute value, we change the colour of highlighted text, and language if configured
    if (minuteVal != this.hourSegment) {
      this.hourSegment = minuteVal;
      this.updateCounters();
    }

    var layout = this.layouts[this.curLanguage];
    if (theTime.minutes() >= layout.nextHourAt ) {
      theTime.add(1, "hours");
    }
    var hourVal = theTime.hours();

    var wrapper = document.createElement("div");
    wrapper.classList.add("clock-grid", "c" + this.colorCounter, this.curLanguage, layout.classes);

    layout.config.forEach(function(wordGroup) {
      var div = document.createElement("div");
      wordGroup.forEach(function(word) {
        var span = document.createElement("span");

        var spanContent = word.word;

        if (word.minutes && word.minutes.indexOf(minuteVal) != -1) {
          span.classList.add("highlighted");
        } else if (word.hours && word.hours.indexOf(hourVal) != -1) {
          span.classList.add("highlighted");
        }

        //test for variations
        if (word.variations) {
          word.variations.forEach(function(variation) {

            // Variations must specify combinations of hours
            // AND minutes for it to be used
            if (variation.hours &&
              variation.minutes &&
              variation.hours.indexOf(hourVal) != -1 &&
              variation.minutes.indexOf(minuteVal) != -1 ) {

              spanContent = variation.word;
            }


          });
        }

        span.innerHTML = spanContent;

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

  }

});

