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

<p align="center">
🚧 This page is currently under construction 🚧
</p>

# Quality control: checking the quality of audio and video files

<span style="font-variant:small-caps;">Last updated: 27 October 2021</span>

## MediaArea tools for QC (quality checking/quality control)

Open source tools available from [MediaArea](https://mediaarea.net/){:target="_blank"}

### MediaInfo

[MediaInfo](https://mediaarea.net/en/MediaInfo){:target="_blank"} - working out easy ways to extract metadata from multiple files at one time, outputting targeted metadata highlights to extract to csv

Bulk output media reoprts using MediaInfo GUI on Windows

Using MediaInfo GUI v21.09, open MediaInfo, then press icon *Select a folder to examine*, located on left pannel of window, or go to the MediaInfo menu and select *File>Open>Folder...*. It is best if you have only the media you want to examine in that folder, avoiding nested folders.


If you are not able to install MediaInfo onto your computer, there is a web version of MediaInfo where you can create and download reports of your video files via the web browser. Your media stays safe, as nothing is actually uploaded to their servers. [MediaInfoOnline](https://mediaarea.net/MediaInfoOnline){:target="_blank"}

### Media Conch

[Media Conch](https://mediaarea.net/MediaConch){:target="_blank"} - checks videos to determine if the metadata fits our needs: i.e. does the.MP4 have H.264 encoding or not; is the MXF lossless and conforms to our standards of YUV 4:2:0 or 4:2:2, bit depth of 8, etc. We can create a "policy" of items we would like to bulk check. This tool also allows you to view MediaInfo report within the Media Conch program. Also allows you to look at [Media Trace report](https://mediaarea.net/MediaTrace){:target="_blank"}, which I still need to explore.

### QC Tools

[QC Tools](https://mediaarea.net/QCTools){:target="_blank"} - lets you apply different filters to perform quality checking over video files. Still trying to see if this will show us all we need to determine if a MXF is well-formed. Will update.

### BWF MetaEdit

[BWF MetaEdit](https://mediaarea.net/BWFMetaEdit){:target="_blank"} - allows up to view and edit BEXT chunks in BWF audio files

## Using Switch player for visual QC

## Other tools