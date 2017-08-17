# MMM-MyWordClock

This a module for <strong>MagicMirror</strong><br>
https://magicmirror.builders/<br>
https://github.com/MichMich/MagicMirror

Inspired by the QLockTwo (http://qlocktwo.com/), this displays the
current time using words when MagicMirror is idle.  It works similar
to a screensaver.  After a timeout your configure, all of your modules are hidden, and the clock is displayed full screen.  Then, when motion is detected, it hides and once again shows all your regular modules.

![Screen Shot](/../screenshots/MMM-MyWordClock_hero.jpg?raw=true "Screen Shot")

It requires the use of paviro's MMM-PIR-Sensor module to detect motion and
cancel the clock display. https://github.com/paviro/MMM-PIR-Sensor

This is baased on the great work done by brobergp on MMM-TextClock.
https://github.com/brobergp/MMM-TextClock.

While not a fork -- this module's code is quite different -- functionally
it behaves very similarly. My reasons for writing a new module that does 
more or less the same thing are as follows:

   * I wanted my word clock to be full screen
   * I wanted my word clock to act like a screensaver, where after a certian
     amount of time, the clock appears, and is cancelled upon notification from
     the PIR Sensor module.
   * My English layout is slightly different, in that the clock reads:
     "It's half past one" instead of "It's half two"
   * Adding other layouts is fairly trivial, and adding multiple
     layouts for any given langauge is possible (e.g.: An English langauge
     version for tall HDTV resolution, another for HDTV wide, a third for German tall, etc).
   * Layouts are not restricted to the same amount of lines or even the same
     amount of words per line as the english version.  This means that
     translations or even other layouts in the same language do not need to follow the same pattern.
   * Each layout name is added to the DOM wrapper as a class name so styling
     each layout specifically is possible while maitaining style inheritance
     from the defaults where applicable.
   * It's fun to learn new things!

## Installation

Navigate into your MagicMirror `modules` folder and execute<br>
`git clone https://github.com/jclarke0000/MMM-MyWordClock.git`.

## Configuration

*NOTE* for this module to work correctly, you need to place it in 
`position: "fullscreen_above"` in your config.js.  Also, don't give
it a header.  See below for an example config entry.

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>showClockTimeOut</code></td>
      <td>How long, in milliseconds, before the clock is displayed after no detection of motion.<br><br><strong>Type</strong> <code>Number</code><br>Defaults to <code>300000</code> (i.e.: 5 minutes)</td>
    </tr>
    <tr>
      <td><code>animationSpeed</code></td>
      <td>How fast, in milliseconds, the hide/show fade animation executes.<br><br><strong>Type</strong> <code>Number</code><br>Defaults to <code>1000</code> (i.e.: 1 second)</td>
    </tr>
    <tr>
      <td><code>layout</code></td>
      <td>which clock layout to use.  See below for available layouts.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>EN_9x16</code> (i.e.: English layout for HDTV screen in vertical orientation)</td>
    </tr>
  </tbody>
</table>

## Example Configuration

```
{
  module: "MMM-MyWordClock",
  position: "fullscreen_above", //this is important!
  disabled: true,
  config: {
    showClockTimeOut: 5 * 60 * 1000, //5 minutes
    layout: "EN_9x16"
  }
}
```

## Layouts

`EN_9x16` English layout for HDTV in tall orientation (default layout)<br>
![EN_9x16](/../screenshots/EN_9x16.jpg?raw=true "EN_9x16")

`EN_16x9` English layout for HDTV in normal wide orientation<br>
![EN_16x9](/../screenshots/EN_16x9.jpg?raw=true "EN_16x9")

`FR_9x16` French layout for HDTV in tall orientation<br>
![FR_9x16](/../screenshots/FR_9x16.jpg?raw=true "FR_9x16")

`FR_16x9` French layout for HDTV in normal wide orientation<br>
![FR_16x9](/../screenshots/FR_16x9.jpg?raw=true "FR_16x9")

`DE_9x16` German layout for HDTV in tall orientation<br>
![DE_9x16](/../screenshots/DE_9x16.jpg?raw=true "DE_9x16")

`DE_16x9` German layout for HDTV in normal wide orientation<br>
![DE_16x9](/../screenshots/DE_16x9.jpg?raw=true "DE_16x9")

`NL_9x16` Dutch layout for HDTV in tall orientation<br>
![NL_9x16](/../screenshots/NL_9x16.jpg?raw=true "NL_9x16")

`NL_16x9` Dutch layout for HDTV in normal wide orientation<br>
![NL_16x9](/../screenshots/NL_16x9.jpg?raw=true "NL_16x9")
