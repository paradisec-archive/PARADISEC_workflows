---
title: Video Processing with HandBrake
layout: default
published: true
nav_order: 8.5
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

# Video Processing with HandBrake


<p align="center">
  <img width="200" src="images/HandBrake-icon.gif">
</p>


<p align="center">
🚧 This page is currently under construction 🚧
</p>

*This technical guide was created as part of the archiving workflow for PARADISEC. Some of the content may not be relevant for general users.* 

<span style="font-variant:small-caps;">Last updated: 26 May 2023</span>


HandBrake is a free, open source video transcoder that you can use on a Mac, Windows, and Linux. 


## Installation options

* [Installing HandBrake's GUI](https://handbrake.fr/downloads.php){:target="_blank"} 
* [Installing HandBrakeCLI](https://handbrake.fr/downloads2.php){:target="_blank"}

Instructions for downloading and installing HandBrake can be found [here](https://handbrake.fr/docs/en/1.6.0/get-handbrake/download-and-install.html){:target="_blank"}.

## Transcoding tasks
Below are possible scenarios and workflows for using HandBrake for transcoding your digital videos. You can transcode from the following formats: .MOV .AVI .MTS .M4V .MKV .WEBM .FLV .MPG .MPEG .MXF, etc

### To transcode a single video

Before you proceed, collect the important structural metadata about your video files; this will inform your workflow and if you can do batch processing or not. This Metadata query can be done using MediaInfo on individual files, or via a batch export outlined here: [MediaInfo metadata export](https://paradisec-archive.github.io/PARADISEC_workflows/10_quality_control.html#mediainfo){:target="_blank"}. 

Metadata you should collect: 
* **Size/dimension** (essentialy height and width measurements) - Ideally, the file's ***storage size*** should be the same as ***display size*** (I have only seen these numbers differ with an older .AVI file. I set the size to the same dimension and the transcoding worked fine)
* **Framerate (FPS)** - HandBrake *should* produce a file with the same FPS, even if the main workspace has a differnt framerate listed for your video
* **Encoding format profile** - (ex: High@L4.0)
* **BitRate** - If doing batch processes with a target constant Bitrate, you will need to group your videos by Bitrate value
* **Video scan type** - Progressive or interlaced 
* **Audio Bitrate** - You may have received a file with a very robust audio track, ex 256. HandBrake's default is 160

Open HandBrake; you are prompted to navigate to your video file. If HandBrake is already open, just drag and drop a video into the program window. You can only select or drag and drop one video at a time. You will then be presented a workspace similar to this one (*HandBrake version 1.6.1 for Mac*):

<p align="center">
  <img width="500" src="images/HandBrake-main_workspace.png" alt="Screenshot of HandBrake main workspace">
</p>




### To transcode multiple videos in a batch


















<br>
<hr style="border:1px solid grey">

## Additional resources

 **HandBrake Documentation:**<br>[https://handbrake.fr/docs/](https://handbrake.fr/docs/){:target="_blank"}
 
 Thomas. Alexander. (2023) **Video Encoding Tips** [https://www.dr-lex.be/info-stuff/videotips.html](https://www.dr-lex.be/info-stuff/videotips.html){:target="_blank"}.



⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work was created by Julia Colleen Miller and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.