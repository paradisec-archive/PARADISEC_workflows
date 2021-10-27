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

Open source tools available from [MediaArea](https://mediaarea.net/)

[MediaInfo](https://mediaarea.net/en/MediaInfo) - working out easy ways to extract metadata from multiple files at one time, outputting targeted metadata highlights to extract to csv

Media Conch (https://mediaarea.net/MediaConch) - checks videos to determine if the metadata fits our needs: i.e. does the.MP4 have H.264 encoding or not; is the MXF lossless and conforms to our standards of YUV 4:2:0 or 4:2:2, bit depth of 8, etc. We can create a "policy" of items we would like to bulk check. This tool also allows you to view MediaInfo report within the Media Conch program. Also allows you to look at Media Trace report (https://mediaarea.net/MediaTrace), which I still need to explore.

QC Tools (https://mediaarea.net/QCTools) - lets you apply different filters to perform quality checking over video files. Still trying to see if this will show us all we need to determine if a MXF is well-formed. Will update.

BWF MetaEdit (https://mediaarea.net/BWFMetaEdit) - allows up to view and edit BEXT chunks in BWF audio files