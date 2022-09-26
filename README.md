# MMM-MyWordClock

This a module for <strong>MagicMirror</strong><br>
https://magicmirror.builders/<br>
https://github.com/MichMich/MagicMirror

Inspired by the QLockTwo (http://qlocktwo.com/), this displays the
current time using words when MagicMirror is idle.  It works similar
to a screensaver.  After a timeout you configure, all of your modules are hidden, and the clock is displayed full screen.  Then, when motion is detected, it hides and once again shows all your regular modules.

![Screen Shot](/../screenshots/MMM-MyWordClock_hero.jpg?raw=true "Screen Shot")

This requires the use of another module to provide a message to cancel the
screensaver. It defaults to the message "USER_PRESENSE" as provided by paviro's
MMM-PIR-Sensor module to detect motion. https://github.com/paviro/MMM-PIR-Sensor

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

*NOTE* Configuration for this module has changed with the most recent update.  If you
are updating, besure to read below.

For this module to work correctly, you need to place it in 
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
      <td><code>language</code></td>
      <td>The display language. Specify `*` to have the clock pick a langauge at random each time it updates.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>EN</code> (English).<br>See below for the list of supported languages.</td>
    </tr>
    <tr>
      <td><code>orientation</code></td>
      <td>Your screen orientation, e.g.: <code>tall</code> or <code>wide</code>.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>tall</code> (English).</td>
    </tr>
    <tr>
      <td><code>wakeMessage</code></td>
      <td>The message that triggers the screensaver to hide. It default's to <code>USER_PRESENCE</code> as provided by the MMM-PIR-Sensor module, but if you're using EXT-Pir for moption detection, set this to <code>EXT_SCREEN-WAKEUP</code>.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>USER_PRESENCE</code>.</td>
    </tr>
  </tbody>
</table>

## Example Configuration

```
{
  module: "MMM-MyWordClock",
  position: "fullscreen_above", //this is important!
  config: {
    showClockTimeOut: 5 * 60 * 1000, //5 minutes
    language: "EN",
    orientation: "tall"
  }
}
```

## Languages

The following languages are currently supported:

* `EN` English (default)
* `DA` Danish
* `DE` German
* `DE_CH` Swiss German
* `FR` French
* `JA` Japanese
* `KO` Korean
* `NL` Dutch
* `ZH` Simplified Chinese

Coming soon:

* `TL` Tagalog (Philipino)

Many thanks to pjkoeleman, clubbi, willfri, strawberry 3.141, Sean, kruemel, Lange and Atteraxol
for help with translations.

