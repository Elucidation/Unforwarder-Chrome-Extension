![Icon](https://github.com/Elucidation/Unforwarder-Chrome-Extension/raw/master/icon4848.png)Unforwarder Chrome Extension
---
By Sam & Allan.


This is a chrome extension which replaces all the google search result forwarded-links with the original links on page. 


Install the extension
---

From a [Google Chrome](https://www.google.com/chrome) browser, click [Install Extension](https://github.com/downloads/Elucidation/Unforwarder-Chrome-Extension/unforwarder.crx).

That's it, it's working. To see the difference use chrome's inspection of html DoM or Firebug on the page with extension turned on and off.


See what it does
---
- (If installed) Disable extension
- Do a google search for something random "Inception Corgi".
- Rightclick the first search link and choose 'Inspect Element' (in Chrome)
You'll see something long and ugly like:

```
http://www.google.com/url?sa=t&rct=j&q=inception%20corgi&source=web&cd=1&ved=0CBoQtwIwAA&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJaNc0YsQcNE&ei=-zayTuaBI5S2twfn4oXGBg&usg=AFQjCNHEw_Lns2zhuUNpaJnUjYIU5bND-w&sig2=pOmjXsuOL0zJgC1Fn0tjlQ
```

- (Install) Enable extension from extensions page
- Reload page and inspect again
You should see something like: `http://www.youtube.com/watch?v=JaNc0YsQcNE`


Usage
---

You can right-click the button to hide (it'll keep working), and it can be brought back from the chrome extensions manager.

This is basically a port from a GreaseMonkey script.The replace_script.js is violently plagurized from [acdx](http://userscripts.org/scripts/show/95092)


Development
---
- Download the zip or tar.gz and unzip to a folder (On Github it's the little [ZIP] icon in the top left of window)
- Muck around.
- In Google Chrome click the top-right extensions icon -> Tools -> Extensions
- In the top right of inside window check Developer mode.
- Load unpacked extension, navigate and select unzipped folder
- Done.