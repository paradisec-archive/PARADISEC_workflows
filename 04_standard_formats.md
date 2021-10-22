---
title: Standard Formats for Data Collection and Archiving
layout: default
published: true
nav_order: 4
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

## Standard Formats for Data Collection and Archiving

<p align="center">
🚧 This page is currently under construction 🚧
</p>

<p align="center">
  <img width="300" src="images/rainbow-zoom.gif">
</p>

<span style="font-variant:small-caps;">Last updated: 22 October 2021</span>

### Standard formats for archiving with PARADISEC
The tables below contain the file formats we accept from depositors and the final formats that go into the archive. If you have a format other than those listed, please contact us so we can advise you on what can be done.


<br>

| Media  |  Media formats PARADISEC will accept   | 
| :---   | :---                                        | 
| Audio  |  .wav, .aiff, .m4a .mp3<sup>1</sup> *(96khz, 24bit is our archival target; however 48khz, 24bit, or as close to the archival as possible will be accepted)* |
| Video  |  .mts (AVCHD), .avi, .mov, .m4v, .dv, .mpg<sup>1</sup> |
| Images | .tif, .jpg, .png, .CR2                      |
| Text   | .txt, .xml, .html, .pdf, .rtf *(.doc/.docx should be converted to .rtf/.pdf, .xls/.xlsx to .csv prior to submission)*|
| Annotations | .eaf, .cha, .xml, .txt, .srt, .trs, .TextGrid|
| Lexicons |  .xml, .txt , .pdf, .fwbackup *(containing no media files)*|

<br>

| Media  |  Target formats PARADISEC creates and archives| 
| :---   | :---                                       | 
| Audio  |  *Archival copy:* .wav (96kHz, 26bit)    |
|        |  *Access copy:* .mp3 
| Video  |  *Archival copy:* .mxf (lossless JPEG2000)|
|        |  *Access copy:* .mp4 (H.264)             |
| Images |  *Archival copy:* .tif (400dpi)          |
|        |  *Access copy:* .jpg                     |
| Text   |  *Archival and access copies:* Same as original *(see accepted formats above)*|
| Annotations | *Archival and access copies:* Same as original *(see accepted formats above)*|
| Lexicons | *Archival and access copies:* Same as original *(see accepted formats above)*|

<sup>1</sup> *If you have files such as .mp3 (audio) or .mpg (video), we will certainly accept them; however, if you are collecting new recordings, please avoid these formats, as they are lossy, compressed formats. Look at the following section for capture suggestions*

#### Post-production processing of media
If you would like to save money (see PARADISEC's page on [Costing a deposit](https://www.paradisec.org.au/deposit/costing-a-deposit/)) or speed up the archiving process, you may provide us with audio files that are already sampled to 96kHz/24bit or video files that are .mp4 (H.264 codec), you can refer to the following pages: [Audio procesing](https://paradisec-archive.github.io/PARADISEC_workflows/07_audio_processing.html){:target="_blank"} and [Video Processing using FFmpeg](https://paradisec-archive.github.io/PARADISEC_workflows/08_video_processing_FFmpeg.html){:target="_blank"}.


### Suggestions for audio recorders and video cameras

#### Audio recorders: Suggested models and recording settings

| Audio recorders | Features             |
| :---              | :---              |
| Zoom H4 Pro       | 44.1/48/96kHz, 16/24bit WAV; internal X/Y stereo mic, 2 XLR external mic inputs *(with phantom power)*, powered by 2 AA batteries or USB, records to SD/SDHC cards |
| Zoom H2N       | 44.1/48/96kHz, 16/24bit WAV; 3.5mm external mic input plus internal X/Y stereo, 2-channel and 4-channel surround, powered by 2 AA batteries or USB, records to SD/SDHC cards| 

##### Suggested audio settings

> **NOTE**: *Avoid recording in compressed formats.*


<br>
<br>

#### Video recorders: Suggested models and recording settings
| Video recorders      | Features            |<br>
| :---                 | :---                |<br>
| Canon XA50           | records .mp4 & .mxf,  (1) 3.5mm and (2) XLR mic inputs (using attached handle), infrared, image stabiliser, optical zoom 20x, records to (2) SD card slots, weighs 960g (or 1435g w/ handle), records 25 and 50fps with slow & fast motion settings, white balance |<br>
| Canon Legria HF G50  |  records .mp4, (1) 3.5mm mic input, has Night Scene filter, image stabiliser, optical zoom 20x, records to (2) SD card slots, weighs 735g, records 25 and 50fps, with slow & fast motion settings, white balance |<br>


##### Suggested video settings

> **NOTE**: *Avoid recording in compressed formats.*

* If you can, select the .mp4 (H.264) recording format with Advanced Audio Coding (AAC). This is a standard format and is well supported.
* Record progressive formatted video (p), rather than interlaced (i)
* A good resolution setting is the **full HD** setting of **1080p**: WIDTH 1920 pixels x HEIGHT 1080 pixels. This gives you the aspect ratio of 16:9. Other settings include: a **mid-range** definition would be **720p**: 1280x720 and also a 16:9 aspect ratio.  A **standard** definition resolution setting would be **480p**: 640x480 with the aspect ratio of 4:3. 
* Avoid using 50 or 60 frames per second (fps) unless you are intentionally wanting to create a slow-motion effect; you could also have difficulty syncing audio from external audio recorders if you use 50 or 60 fps. A good setting would be 25 or 30 fps for something that looks like broadcast TV, 24 fps for a more cinematic look. 50 or 60 fps will look hyper-realistic (the soap opera effect).
* Use external microphones for increased quality. Wireless lapel mics or hyper-directional "shotgun" video mics can get you "closer" to the sound and you can add wind protection to those
* Avoid surround-sound audio settings for the camera. This will add unecessary audio tracks and will introduce problems for later processing.
<br>
<br>
<hr style="border:1px solid grey">

### Additional Resources

Seyfeddinipur, Mandana. & Rau, Felix. (2020). [Keeping it real: Video data in language documentation and language archiving](http://hdl.handle.net/10125/24965){:target="_blank"}. Language Documentation & Conservation, vol. 14.


⬆️ [Back to top](#)
