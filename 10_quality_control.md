---
title: Quality control of audio and video files
layout: default
published: true
nav_order: 10
--- 

<details closed markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

<style>
H5{color:White !important;}
</style>

<style>
H6{color:White !important;}
</style>

# Quality control: checking the quality of audio and video files

<p align="center">
🚧 This page is currently under construction 🚧
</p>

<p align="center">
  <img width="250" src="images/QC-SHORT.gif">
</p>

<span style="font-variant:small-caps;">Last updated: 28 October 2021</span>

## MediaArea tools for QC (quality checking/quality control)

Open source tools available from [MediaArea](https://mediaarea.net/){:target="_blank"}

### MediaInfo

[MediaInfo](https://mediaarea.net/en/MediaInfo){:target="_blank"} - working out easy ways to extract metadata from multiple files at one time, outputting targeted metadata highlights to extract to csv
<br>
<br>

#### Bulk output media reoprts using MediaInfo GUI on Windows

Using MediaInfo GUI v21.09, open the program, then add media to explore. To do this press icon *Select a folder to examine*, located on left pannel of window, or go to the MediaInfo menu and select *File>Open>Folder...*. It is best if you have only the media you want to examine in that folder and avoid adding nested folders. The image below shows all of the videos I have added. To get this view, go to the menu and select View, then select *sheet*.

<p align="center">
  <img width="500" src="images/MediaInfo-03.jpg">
</p>

To choose what specifications you want to export to a csv, go to Options>Preferences, or just click on the wrench icon to the left. The preference window will open. Under *Customize* select *Sheet* and then *New...*. 

<p align="center">
  <img width="500" src="images/MediaInfo-06.jpg">
</p>

You will then be able to make your choices for the attributes you wish to export. You may need to experiment with this. I have selected the following 29 attributes to include in my report.

<p align="center">
  <img width="300" src="images/MediaInfo-02.jpg">
</p>

Once you have edited your target specifications to be output in your report, a new .csv is created with this information and is saved here: C:\Users\\"YourUserName"\AppData\Roaming\MediaInfo\Plugin\Sheet. If you want to share this customisation with your team, you need only send them the .csv and have them place it in the correct folder, so that they do not have to recreate the process. This is what the .csv plugin looks like:

<p align="center">
  <img width="300" src="images/MediaInfo-05.jpg">
</p>

When you have saved your Custom Sheet choices, you are ready to export. First, go to *Preferences* again to select your custom sheet from the dropdown menu:

<p align="center">
  <img width="500" src="images/MediaInfo-01.jpg">
</p>

The icon to the left with the arrow and the "i" is the export function. Alternatively, you can go to *Edit>Export* in the menu. This window will open, directing you to choose your export format.

<p align="center">
  <img width="400" src="images/MediaInfo-04.jpg">
</p>

Click on the *Sheet* tab, select the comma from the dropdown menu for the columns separator, then name your output file and select the location where you want to save it.
<br>
<br>

#### Bulk output media reports using MediaInfo App & Terminal on Mac

I have downloaded and installed the app from the Mac App Store, as suggested on the MediaInfo webpage. The Mac MediaInfo app differs from the Windows version in that you cannot view sheets, or export bulk reports using the GUI.

You first need to create a .txt file that lists the specifications you want to export, and name this file *"Options.txt"*. Again, as with the Windows specifications, you will need to experiment with how they are named. Here is some suggested content for *Options.txt* for video reporting:

```
General;%FileName%,%Format%,%Format_Profile%,%CodecID%,%FileSize%,%Duration%,%OverallBitRate%,%FileExtension%,
Video;%Format%,%CodecID%,%Width%,%Height%,%DisplayAspectRatio%,%FrameRate%,%ColorSpace%,%ChromaSubsampling%,%BitDepth%,%ScanType%,%Compression_Mode%,
Audio;%Channel(s)%,%ChannelLayout%,%SamplingRate%,
File_End;\r\n

```
Place the *Options.txt* in the same folder as the videos you wish to examine.

Open Terminal and navigate to the directory where your videos and the *Options.txt* is located.

Then type the following into the terminal:

    MediaInfo --Output=file://options.txt /Volumes/"YourDirectory" \*.* > output.csv

Unfortunately, this will output a .csv without headers for the columns. My fix for this: I have a separate .csv saved with just the headers to paste in each newly exported report.
<br>
<br>
If you are not able to install MediaInfo onto your computer, there is a web version of MediaInfo where you can create and download reports of your video files via the web browser. Your media stays safe, as nothing is actually uploaded to their servers. [MediaInfoOnline](https://mediaarea.net/MediaInfoOnline){:target="_blank"}

### Media Conch

[Media Conch](https://mediaarea.net/MediaConch){:target="_blank"} - checks videos to determine if the metadata fits our needs: i.e. does the.MP4 have H.264 encoding or not; is the MXF lossless and conforms to our standards of YUV 4:2:0 or 4:2:2, bit depth of 8, etc. We can create a "policy" of items we would like to bulk check. This tool also allows you to view MediaInfo report within the Media Conch program. Also allows you to look at [Media Trace report](https://mediaarea.net/MediaTrace){:target="_blank"}, which I still need to explore.

### QC Tools

[QC Tools](https://mediaarea.net/QCTools){:target="_blank"} - lets you apply different filters to perform quality checking over video files. Still trying to see if this will show us all we need to determine if a MXF is well-formed. Will update.

### BWF MetaEdit

[BWF MetaEdit](https://mediaarea.net/BWFMetaEdit){:target="_blank"} - allows up to view and edit BEXT chunks in BWF audio files

## Using Switch player for visual QC

## Other tools