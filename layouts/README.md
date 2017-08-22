# Adding new layouts

Adding new layouts is fairly easy.  A layout in it's basic form is made up as follows:

```
var layout_LANG = {
  name: "layoutName",
  classes: "class1 class2",
  nextHourAt: 35,
  config: [
    // lines -- see below
  ]
};
```

'var layout_LANG' is important.  You need to name this variable for this layout's
language.  For example, the French layout's variable name is `layout_FR.`  This
needs to match exactly the language parameter a user would use to configure the
clock.

What you specify for `name` is not really that important, as it's not currently used for anything.
So it's really just for identification purposes at the moment. 

`nextHourAt` is the 5-minute segment after which the clock tells time relative to the next hour.
For example, at half past the hour, the English layout says "It's half past six." At 6:35, however,
we say "It's twenty-five minutes to seven.""  So we would specify `35`. But in other languages one
might say "It's half seven," in which case we would specify `30`.

For `classes` here is where you would specify any CSS classes that you want to use.  The language
will automatically be added as a class name.  There are a couple of default classes that make
good starting points for your layout: `tall` and `wide`.  These are 9x16 and 16x9 layouts respectively, 
and it will save you some work if you start with one of these.

`tall` is based on the English layout for 9x16 screens (i.e.: HDTV in portrait orientation), with 8
lines of text.  If you are doing a straight translation of the English version, then this will get you
about 90% of the way there.

Similarly, `wide` is based on the English layout for 16x9 screens (i.e.: HDTV in its normal wide
orientation), with 5 lines of text.

Save the layout file with the name of the layout as you wish it to be specified in the config.
For example, for the `EN_9x16` layout, the file name is `EN_9x16.js`, and it is saved in the
`MMM-MyWordClock/layouts/` directory.

## Configuring your layout

the `config` portion of the `layout` object is an array of arrays.  Within each array you specify
the word as it will apear in the grid, and either the minute segment(s) for which it will appear 
highlighted, or the hour(s) for which it will appear hilighted.

Example:

The clock displays the time in 5 minutes segments.  The values below in the `minutes` array represent
the start of the 5 minute segment (e.g.: 0 means the word will be highlighted during minutes 0 through 
4 of each hour).  In the example below, we're essentially configuring the word `It's` to always be
highlighted.
```
{
  word: "It's",
  minutes: [0,5,10,15,20,25,30,35,40,45,50,55]
}
```

In the next example, we'll configure the word `eleven` to be highlighted during hours `11` and `23`
(the clock works in 24 hour time -- useful if you want to indicate AM, PM, in the afternoon, etc.).
This time we'll use the `hours` array:
```
{
  word: "eleven",
  hours: [11,23]
}
```

optionally, you can specify an array of variations for the word for when it is highlighted. For
example, in German we say "Es ist ein Uhr" at 1:00, but "Es ist fünf nacht eins" at 1:05 (notice the "s" on the end of "eins"?).  It would look like so:
```
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
```
Both the hour and minutes must match the current time slot for the variation to be displayed.  In the above example, for the variation "ein" to be displayed, it must be minute 0 AND EITHER hour 1 OR 13.


One array of `word` objects make up one line in the grid.  For example, the tall English grid looks
like this:

```
It's   half   ten
quarter    twenty
five  minutes  to
past   two  three
one   four   five
six  seven  eight
nine  ten  eleven
twelve    o'clock
```

The words `It's`, `half`, and `ten` make up the first line.  Its complete set in the layout looks
like this:

```
  config: [
    [
      {
        word : "It's",
        minutes : [0,5,10,15,20,25,30,35,40,45,50,55]
      },
      {
        word : "half",
        minutes : [30] //for "half past" the hour
      },
      {
        word : "ten",
        minutes : [10,50] //for "ten minutes past" the hour and "ten minutes to" the hour
      }
    ],
    [
      //next line defined here
    ]
  ]
```

Take a look at `EN_9x16.js` for the fully defined tall layout in English


## Styling

It's common to create styles in pixel sizes, but since we'll be dealing unknown actual dimensions, we
can assume a few aspect ratios and create scalable layouts for those specific aspect ratios.  This
technique depends on two relatively newer additions to CSS.  They are 'vh' and 'vw' units.

`vh` stands for Viewport Height, and is represented as a number from 0 to 100, 0 being the topmost
edge of the screen, and 100 being the bottommost edge.

Likewise, `vw` stands for Viewport Width.  It is also represented as a number from 0 to 100, 0
being the left edge, 100 being the right.

An easy way to use them is to first create a layout at a known resolution using pixels for all your
units, say 1080x1920 (i.e.: 1080p in portrait orientation).  Also in your layout definition, say 
you've specified `classes: "tall your-custom-class"`.

Let's say your doing a direct translation of the English layout.  You have 8 lines of text, and you
want each line to be 1/8 of the screen's height.  We'll use 240px for our line-height (1920 / 8 = 240).
Then, say, through trial and error you discovered that your optimal font-size is 130px.  Your CSS might
look like this:

```
.MMM-MyWordClock .clock-grid.LANG.tall.your-custom-class {  
  font-size: 130px
  line-height: 240px;
}
```

Converting this in terms of `vh` and `vw` is just a matter of simple math.  Lets' start with `line-height`.
From the example above, we arrived at 240px by dividing the screen height (i.e.: 1920px) by our number of
lines (8).  Since we already know that `100vh` is the full screen height at any resolution, if we instead
divide 100vh by 8, and we arrive at `12.5vh` (or more to the point, 12.5% of the screen height, whatever
it might be).

Similarly, we can express the font size of 130px in terms of vh. First let's divide the pixel size of the
font by the pixel size of the screen:

`130 / 1920 = 0.06770833`

Then we multiple this by 100:

`0.06770833 * 100 = 6.770833`

For our purposes, rounding to three decimal places is going to be more than precice enough, so we can just
use `6.771`.

Let's replace our pixel values in the CSS with our calculated `vh` units:

```
.MMM-MyWordClock .clock-grid.LANG.tall.your-custom-class {  
  font-size: 6.771vh;
  line-height: 12.5vh;
}
```

By specifying the `font-size` and `line-height` in terms of `vh`, we are now expressing them as a fraction
of the overall screen height.  Since the aspect ratio never changes, these numbers will work for any 9x16
screen: 1080x1920 (i.e.: 1080p), 720x1280 (i.e.: 720p), 2160x3480 (i.e. 4k).  What's even better is that
the defintion here will likely also work for aspect ratios that are close to 9x16.  For example, many
monitors come in a 10x16 aspect ratio.  In portrait orientation, or 10x16, the ratio is close enough were
it will work just fine.  The only difference will be a little more horizontal spacing between words.

It should be noted that the layout will scale outwards from the center of the screen. So if you want a bit of
padding on the top and bottom of your grid, just specify a smaller line height.  The `EN_9x16` layout uses a
line height of `12vh` instead of `12.5vh` which results in a little bit of extra space, evenly distributed
at the top and bottom of the screen.

Similarly the default CSS will take care of evenly distibuting and justifying all of the words on one line of
text.  The first word will always be aligned with the left edge of the grid, and the last word will always
be aligned with the right.  The rest of the words will auto-space evenly.  If you would like to add extra
padding to the left and right edges of your grid, you can write CSS like so:

```
.MMM-MyWordClock .clock-grid.tall.your-custom-class div {
  padding-left: 2vw;
  padding-right: 2vw;
}
```

## HTML Markup

To aid in your styling, the HTML markup of the module looks like this.  Use it as a reference

```
<div class="module MMM-MyWordClock">
  <div class="module-content">
    <div class="clock-grid EN tall"> <!-- the language name and any classes you specify in the layout object are applied here -->
      <div> <!-- first line of text -->
        <span class="highlighted">It's</span> <!-- example of a highlighted word -->
        <span>half</span> <!-- unhighlited word -->
        <span>ten</span>
      </div>
      <div> <!-- second line of text -->
        <span>quarter</span>
        <span>twenty</span>
      </div>
      ... more divs for each additional line of text
    </div>
  </div>
</div>
```

