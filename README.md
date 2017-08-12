# MMM-MyWordClock

This a module for <strong>MagicMirror</strong><br>
https://magicmirror.builders/<br>
https://github.com/MichMich/MagicMirror

Inspired by the QLockTwo (http://qlocktwo.com/), this displays the
current time using words when MagicMirror is idle.  It works similar
to a screensaver.  After a timeout your configure, all of your modules are hidden, and the clock is displayed full screen.  Then, when motion is detected, it hides and once again shows all your regular modules.

![Screen Shot](/../screenshots/MMM-MyWordClock.png?raw=true "Screen Shot")


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
     version for tall 1080p resolution, another for 1080p wide, a third for DE_1080p tall, etc).
   * Layouts are not restricted to the same amount of lines or even the same
     amount of words per line as the english version.  This means that
     translations or even other layouts in the same language need to follow
     the same pattern.
   * Each layout name is added to the DOM wrapper as a class name so styling
     each layout specifically is possible while maitaining style inheritance
     from the defaults where applicable.
   * It's fun to learn new things!


## Configuration

*NOTE* for this module to work correctly, you need to place it in 
`position: "middle_center"` in your config.js.  Also, don't give
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
      <td>which clock layout to use.  Currently <code>EN_9x16</code> and <code>EN_16x9</code> are supported, but more layouts in multiple langauges are coming.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>EN_9x16</code> (i.e.: English layout for tv screen in vertical orientation)</td>
    </tr>
  </tbody>
</table>

## Example Configuration

```
{
  module: "MMM-MyWordClock",
  position: "middle_center", //this is important!
  disabled: true,
  config: {
    showClockTimeOut: 5 * 60 * 1000, //5 minutes
    layout: "EN_9x16"
  }
}
```
