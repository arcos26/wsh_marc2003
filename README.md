# wsh_marc2003

Get the official component here: https://code.google.com/p/foo-wsh-panel-mod/downloads/list

If you know what you're doing, you can use my modded version: https://github.com/19379/foo_uie_wsh_panel_mod/releases

After installing, make sure **Safe mode** is disabled. (File>Preferences>Tools>WSH Panel Mod)

Download the latest zip from here: https://github.com/19379/wsh_marc2003/releases

Extract the **wsh_marc2003** folder in to your foobar2000 profile folder, 
usually located at **%appdata%\foobar2000**. If using portable mode then the folder should go inside the main
foobar2000 folder.

Install the **Guifx v2 Transports.ttf** font that is inside the **wsh_marc2003** folder.

Add a WSH panel to your layout. Check your UI documentation for how to do this. Right click the panel>**Configure**
and replace the editor contents with the text of any sample you'd like to try from the **wsh_marc2003\samples** folder.

The **Last.fm Artist Info - User Charts - Recommended artists** script requires your own Last.fm API KEY which
you can acquire from this page: http://www.last.fm/api/accounts 

While the API KEY has to be set inside the script, all other script configuration options can be found
on the right click menu.

I'm not taking feature requests and I'm not restoring any scripts or features missing from previous packages. Genuine bugs can be reported here:

https://github.com/19379/wsh_marc2003/issues

##Updates

Unlike previous versions, updates must be downloaded manually. Just extract the whole **wsh_marc2003** folder and overwrite the old one. On the rare occurrence a script inside a panel needs updating, it will be mentioned on the releases page.

##Changes from previous versions

**Autoplaylists** now stores data in a different format not compatible with earlier versions. Also, most right click options have been removed in favour of using all the defaults.

**CD Jewel Case** is now merged with **Album art** in a single script where the CD case can be toggled on or off. (Default is off)

**Last.fm Similar Artists** and **Last.fm Charts** have been merged in to a single script. **User recommendations** have also been added and you'll need to set your Last.fm password because it requires authentication. If you find yourself not needing to enter a password, it's because you have an older version of **Playcount sync** which is already authenticated.

**Musicbrainz** now requires a [musicbrainz artist id](https://musicbrainz.org/doc/MusicBrainz_Identifier) tag in your files. It no longer performs artist lookups if it's missing. It can be filled in by using **Musicbrainz Picard** or **foo_musicbrainz**. Also, it no longer has filtering options but instead groups by release type which is much easier to read and it should show more than it did before.

**Properties** now splits multi-value tags so each one is clickable to create autoplaylists. Also, playback statistics and replaygain values are displayed.

New **Status Bar** script displays playlist length, track count and total size. Colours can be customised inside the script itself. Volume can be changed by scrolling your mouse wheel over it and double clicking will jump to the currently playing track if it's not already selected.

**Thumbs** does not have any ability to download images. It only displays them from a custom folder.

**Playcount sync** is not included.


