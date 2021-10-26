---
title: Audio Processing
layout: default
published: true
nav_order: 7
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

# Audio processing
<br>

<br>
<p align="center">
  <img width="300" src="images/Revox_front.gif">
</p>
<br>
<p align="center">
🚧 This page is currently under construction 🚧
</p>

<span style="font-variant:small-caps;">Last updated: 15 September 2021</span>

## PARADISEC audio processing workflow for archiving
This workflow is targeted toward born-digital audio files; however, should the need arise to adjust audio files originating from various legacy formats, this workflow will help.  

## PARADISEC audio standards

## Other audio processing tasks

### Extracting audio from a video
If you want to extract the audio track from a video file. you can easily do this in two ways, both using software that is freely available:

### Using VLC

### Using FFmpeg
If you want to retain the same audio quality as the source video:
```
ffmpeg -i  <name_of_input_video.extension> <name_of_output_audio.extension>
```

Simply put:
```
ffmpeg -i  video.mp4 audio.wav
```

If the original video (.avi, .mts, .mp4, .mov, etc.) has only one audio channel, or has a sampling or bit rate you want to change, take a look at the previous section on audio processing with ffmpeg.

Resampling audio using Audacity	Manipulating audio with FFmpeg

⬆️ [Back to top](#)