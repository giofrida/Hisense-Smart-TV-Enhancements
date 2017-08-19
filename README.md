# Hisense-enhancements: a collection of enhancements for Hisense Smart TVs

These modifications edits user-writable files on your TV. It should not cause any damage on your television. However, **I take no responsibility if anything goes wrong!**

**Make a backup of the original files you are going to replace!** The modified files are stored in a user-writable partition on the TV. Therefore, you can recover them at any moment if you did a backup of the original files first.

These modification *should* work on most 2016/2017 Hisense models:
* H43/49M3000     *(the 43" model is the one I own)*
* H40/50/55M3300  *(untested)*
* 40/50MEC3350    *(untested)*
* 40/50EC591      *(untested)*
* 65M5500         *(untested)*
* 55M6600         *(untested)*
* 55/65M7000      *(untested)*
* 55/65MEC7050    *(untested)*

As of 12 July, I only tested my modifications on the H43M3000 model. If you decide to give them a try on your TV, please let me know if it has worked or not.

## Enhancements ##
### File Browser ###
Before...

<img align="center" width="50%" src="https://s11.postimg.org/u50rtzsub/before.png">

...and after! 

<img align="center" width="50%" src="https://s11.postimg.org/3vb3xghj7/after.png">

#### Features: ####
* files organised in a vertical list for better browsing
* supports long names (both path and file name)
* 19 files per page instead of 15
* supports over-scrolling
* file randomizer (select a random file by pressing blue button ![](https://placehold.it/15/1589F0/000000?text=+))
* *text scrolling disabled*

### Video player ###

#### Features: ####
* fast seek mode (press a number to navigate fast in the video)
<img align="center" width="50%" src="https://s24.postimg.org/78da9m051/fast_seek.png">

* supports long file names

## Installation ##
First of all, you need access to the FTP interface of your television. It's quite easy to do using a UART to USB interface. I have written a small guide on xda-developers: [click here](https://forum.xda-developers.com/showpost.php?p=68737765&postcount=84)

Clone my repository. Then, connect to your Hisense TV via FTP and go to <code>/3rd_rw/UI/hisenseUI/</code>.
If you want the modded file browser replace these files:
* <code>css/fileBrowser.css</code>
* <code>modulePages/himedia/fileBrowser.js</code>

If you want the modded video player replace these files:
* <code>css/videoPlayer.css</code>
* <code>modulePages/himedia/videoPlayer.js</code>
