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

##Changes from previous versions

There is no update option on the right click menu. Future updates will come as a whole zip where you should extract the contents AND update scripts inside each panel.

**Autoplaylists** now stores data in a different format not compatible with earlier versions. Also, most right click options have been removed in favour of using all the defaults.

**CD Jewel Case** is now merged with **Album art** in a single script where the CD case can be toggled on or off. (Default is off)

**Last.fm Similar Artists** and **Last.fm Charts** have been merged in to a single script. **User recommendations** have also been added and you'll need to set your Last.fm password because it requires authentication. If you find yourself not needing to enter a password, it's because you have an older version of **Playcount sync** which is already authenticated.

**Musicbrainz** now requires a [musicbrainz artist id](https://musicbrainz.org/doc/MusicBrainz_Identifier) tag in your files. It no longer performs artist lookups if it's missing. It can be filled in by using **Musicbrainz Picard** or **foo_musicbrainz**. Also, it no longer has filtering options but instead groups by release type which is much easier to read and it should show more than it did before.

**Playcount sync** and **Thumbs** are not included.


