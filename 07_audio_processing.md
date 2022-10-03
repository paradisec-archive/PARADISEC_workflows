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
<p align="center">
🚧 This page is currently under construction 🚧
</p>

<br>
<p align="center">
  <img width="300" src="images/Revox_front.gif">
</p>
<br>

<span style="font-variant:small-caps;">Last updated: 02 October 2022</span>

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

## Low-cost Options
Post-production of digitised audio and processing of born-digital audio files can be achieved using the following free programs:

* [NCH Wavepad](https://www.nch.com.au/wavepad/index.html)

    <p align="center">
       <img width="500" src="images/wavepad.jpg">
     </p>


* [Ocenaudio](https://www.ocenaudio.com/en/startpage)

    <p align="center">
       <img width="500" src="images/ocenaudio.jpg">
     </p>

Both of these options allow you to export a stereo file at 96kHz/24bit, edit silences at the beginning or end of your audio files, boost the audio gain if the volume is too low or uneven across the two channels, or any other necessary interventions.

<br>
<hr style="border:1px solid grey">

## Additional resources

Prentice, W. and Gaustad, L. (eds.). (2017). **IASA-TC03: The Safeguarding of the Audio Heritage: Ethics, Principles and Preservation Strategy**, 4th edition (IASA Technical Publications IASA-TC03; Technical Committee Standards, Recommended Practices, and Strategies, p. 21). International Association of Sound Archives and Audiovisual Archives. [https://www.iasa-web.org/tc03/ethics-principles-preservation-strategy]( https://www.iasa-web.org/tc03/ethics-principles-preservation-strategy){:target="_blank"}.

Bradley, K. (ed.). (2009). **IASA-TC04: Guidelines on the production and preservation on digital audio objects: Standards, recommended practices and strategies**, 2nd edition (IASA Technical Publications IASA-TC04; Technical Committee Standards, Recommended Practices, and Strategies, p. 156).  International Association of Sound and Audiovisual. [https://www.iasa-web.org/tc04/audio-preservation](https://www.iasa-web.org/tc04/audio-preservation){:target="_blank"}

Schüller, D. and Häfner, A. (eds.). (2014). **IASA-TC05: Handling and Storage of Audio and Video Carriers**. First edition. [https://www.iasa-web.org/handling-storage-tc05](https://www.iasa-web.org/handling-storage-tc05) {:target="_blank"}.

⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.