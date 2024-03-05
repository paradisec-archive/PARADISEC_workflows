---
title: Video Processing with Adobe Media Encoder
layout: default
published: true
nav_order: 9
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

# Using Adobe Media Encoder to create MXF and MP4 (H.264) videos

><span style="color:DarkBlue">
>**Note:** For detailed information of the *Media Encoder export settings* mentioned in this workflow look [HERE](https://helpx.adobe.com/au/media-encoder/using/export-settings-reference.html){:target="_blank"}.
></span>

## Creating archival (lossless) JPEG2000 MXF OP1a videos

*[PARADISEC](https://paradisec.org.au){:target="_blank"} adheres to the current best-practice standards for video archiving as set by the International Association of Sound and Audiovisual Archives [(IASA)](https://www.iasa-web.org/){:target="_blank"}.*

<span style="font-variant:small-caps;">Last updated: 06 March 2024</span>

This page outlines how to create lossless JPEG2000 .MXF videos using Adobe Media Encoder Adobe CC 2018 or later; since 2018, Media Encoder allows for **lossless** JPEG2000 compression. This workflow is for digital-to-digital transcoding. Contact PARADISEC if you have analogue material to digitise.


### Define Encoding Settings: Making an Encoding Preset for JPEG2000 MXF OP1a
The first step is to create a profile of encoding settings to save and use each time you need to create a lossless J2K .MXF video. To create this Encoding Preset, which can be used in both Premiere and Media Encoder, open Media Encoder and go to the top menu to "**Presets**" and then select “**Create Encoding Preset**”. A new Preset window will open up. Look at the image below to see the settings you should choose. Each will be explained below.


<p align="center">
  <img width="500" src="images/presets-video.jpg" alt="Screenshot of Adobe Media Encoder video presets window">
</p>

### Preset name and format
First you should give the preset a meaningful name, I have chosen **Lossless J2k (8-bit)**. The main reason for this particular name is to differentiate this preset from others you might use for different workflows, such as when you need to transcode videos with a bit depth of 10 (I will further discus **8-bit vs 10-bit** below). Most videos we receive are 8-bit.

For the format, select **JPEG 2000 MXF OP1a**. Once you select this format, you are then offered these choices for the *Based on Preset* field:

<p align="center">
  <img width="500" src="images/chroma_depth.png" alt="Chroma depth default options">
</p>

You can leave the default. This value will change once we make further refinements in our settings.

Leave the remaining settings in this section as their defaults (*Comments* field left blank, *Export Video* and *Export Audio* boxes ticked).


### Video settings
Edit only settings in the Video and Audio tabs. Settings in the other tabs (Effects, Captions, Publish) should be left untouched.

Because we selected the **JPEG 2000 MXF OP1a** format above, the video codec will automatically be set to **JPEG 2000** in this section. The basic video settings options will have changed to those appropriate for this format.

Make certain **Match Source** is selected, this will automatically tick all the boxes below (if they are not already), retaining the same settings as those of the original file for the following fields *Width*, *Height*, *Frame Rate*, *Field Order*, and *Aspect (ratio)*.

*Chroma* should be set to **YUV 4:2:2** with a *depth* of **8-bit**. In the rare case your original video has a colour depth of 10-bit, select the **10-bit** option. To determine the bit depth of a video, use [MediaInfo](https://mediaarea.net/en/MediaInfo){:target="_blank"}; the file’s bit depth is listed in the MediaInfo metadata output report.

><span style="color:DarkBlue">
>**Note:** If you are using **CC2018**: Set the Broadcast Profile to *Level 7, Max Bitrate Unspecified (Lossless)*. This determines the maximum sampling and bit rates for the output file. You can see all the drop down choices offered below:
></span>

<p align="center">
  <img width="500" src="images/broadcast_profile.png" alt="Broadcast profile settings from Adobe Media Encoder 2018">
</p>

><span style="color:DarkBlue">
>**Note:** If you are using **CC2020**: You need only tick the box for *Lossless Compression*; The Maximum Bitrate and Broadcast Profile automatically get set to *100,000 Mbps* and *Level 7 - 3200Mbps or Lossless*, respectively
></span>
<p align="center">
  <img width="500" src="images/broadcast_profile_CC2020.png" alt="Broadcast profile settings from Adobe Media Encoder 2020">
</p>


### Audio settings
There are not many adjustments that need to be made to the audio settings (see image below). The *Audio Codec* will already be set to **Uncompressed** with a *Sample Rate* of **48,000 Hz**. due to the choice of the video format of **JPEG 2000 MXF OP1a**.

<p align="center">
  <img width="500" src="images/presets-audio.jpg" alt="Audio preset tab">
</p>

Make certain the *Channels* field is set to **2**. If you are given a video that has been recorded with surround sound, there could be as many as 6 channels. Our standard is to have 2 channel stereo audio output for our .MXF files. 6 channel video files have caused problems for editing/playback in programs such as Adobe Premiere, etc. Then Set the *Sample Size* to **24 bit**.


### The remaining settings
The remaining settings located underneath the tab area should all be left with the default settings (see image below). This means that the following boxes should all be left unticked: *Use Maximum Render Quality*, *Use Previews*, *Set Start Timecode*, and *Render Alpha Channel Only*.

<p align="center">
  <img width="500" src="images/presets-extras.jpg" alt="Remaining miscellaneous settings">
</p>

Leave the *Time Interpolation* set to **Frame Sampling**. This settings handles motion smoothing if you change the output file’s frames per second.


### Using MediaInfo to check your output file metadata

MediaInfo is the best method to access all of the file specifications you need in order to understand the structure of your media files. You should know the underlying specifications of your original file before you do any transcoding. This ensures that you are able to set your output settings to match the relevant specs of the original. Below is a side-by-side comparison of the MediaInfo outputs, with added red asterisks to highlight some of the specs to be aware of:

<p align="center">
  <img width="800" src="images/MediaInfo-MTS_MXF.jpg" alt="Side-by-side comparison of MediaInfo screenshots for .MTS and .MXF video files">
</p>

I have pulled out some of those specs for comparison in the table below. You will be creating a video that has an increased **_file size_** from the original; this is because the **_bitrate_** will have increased substantially due to the transcoding process for lossless .MXF. The **_durations_** need to be similar (within +/- 500ms).  Unless you clear any changes in specifications with the depositor first, you will need to keep the following specs the same: **_aspect ratio_**, **_frame rate_**, **_color space_**, and **_bit depth_**.  The **_audio channels_** may change from the original; an original video with six audio channels (surround sound) is problematic in Adobe. If the depositor requires the six channels to remain, this workflow will not handle it. Another one will need to be configured. 

Finally, the **_compression mode_** for the .MXF **MUST** indicate it is **_lossless_**. If it is not lossless, you need to look at your settings and try again.

| SPECIFICATION | ORIGINAL .MTS | ARCHIVAL .MXF|
| :--------- | :--------- | :---------- |
| ***Name*** | 00050.mts | 0005.mxf |
| ***Format*** | BDAV | MXF |
| ***Format profile*** | Blu-Ray Video | OP-1a v1.2| 
| ***File size*** | 31.5 MiB  |  785 MiB  |
| ***Duration***  | 37 s 350 ms | 37 s 440 ms  |
| ***(Max.) Overall bitrate***  | 13.7 Mb/s  |  176 Mb/s  |
| ***Aspect ratio***  | 16:9  |  16:9  |
| ***Frame rate***  | 25 fps  |  25 fps  |
| ***Color space***  | YUV  |  YUV  |
| ***Chroma subsampling***  | 4:2:0  |  4:2:2  |
| ***Bit depth***  | 8 bits  |  8 bits  |
| ***Compression mode***  |  n/a  |  **LOSSLESS**  |
| ***Audio channels***  |  2  |  2  |
| ***Sampling rate***  | 48 kHz  |  48 kHz  |

Once you transcode the original file to an .MXF, you will need to take a look at the .MXF file metadata to determine whether or not you have created an appropriate match to the original. 

><span style="color:DarkBlue">
>**Note:** You can do this in batches, as MediaInfo allows you to open multiple files at one time. On a Mac, you get one MediaInfo window with a dropdown menu to select which file you want to see in the active report; on Windows, separate MediaInfo windows will open for each file selected.
></span>

### Using an MXF player to check the quality of your newly created file

Once you have checked the file metadata with MediaInfo, you will need to play through the entire video to see if there were any issues in your transcoding process. I have created a lossless .MXF that had playback issues, so this step in the quality checking process in very important. Unfortunately, there are not many players that can handle .MXF-formatted video. You need to find a player that lets you see if there is jumpy playback, dropped frames, or any other errors. 

><span style="color:DarkBlue">
>**Note:** VLC can open and play .MXF files, but the playback is always jumpy, so you cannot determine if it is the player or your transcoding that is the source of the jumpy playback. This is not acceptable for our workflow. 
></span>

I suggest using Telestream's [Switch player](http://www.telestream.net/switch/overview.htm){:target="_blank"}. You can get a free trial, but the price for the basic player is under AU$15. With the basic license, the viewer will show the Switch watermark in the upper right corner of the video during playback of .MXF files, but this has no bearing on its functionality for our task, playback. Switch is not to be used in any transcoding or editing capacity.

<p align="center">
  <img width="500" src="images/Switch-mxf.png" alt="Screenshot of Telestrea's Switch media player">
</p>

You can see in the upper left corner that there is some quality reporting. Pay special attention to the dropped frames. If there are any dropped frames, you will need to re-transcode the file. 

><span style="color:DarkBlue">
>**Note:** If you are running other memory hungry programs in the background when you are trying to preview your .MXF with Switch, you will very likely have a report of dropped frames. You should quit all other processes while you are doing your playback reviews.
></span>

---

### Explanation of the Specifications used to create lossless MXF
* **JPEG 2000 MXF OP1a** is the MXF (Material Exchage Format) Operational Pattern 1a (OP1a), with lossles JPEG 2000 in a generic container *(for more information see the Federal Agencies Digital Guidelines Initiative [FADGI](http://www.digitizationguidelines.gov/guidelines/MXF_app_spec.html){:target="_blank"})* 

* **YUV** is the *Colour-difference component* suggested by IASA for born-digital .MXF. **Y** (or often **Y′**) stands for the *luma*, or *brightness*, *component*; **U** and **V** are the two *colour components*. YUV colour encoding takes into consideration human perception thus creating an output that has masked any human-noticable distortions *(for more information see [YUV](https://en.wikipedia.org/wiki/YUV){:target="_blank"})*.

* **4:2:2** is the *Chroma subsamlping* and denotes the vertical and horizontal subsampling *(for more information read Charles Poynton's work on Chroma subsampling [HERE](https://poynton.ca/PDFs/Chroma_subsampling_notation.pdf){:target="_blank"})*.

* **8-bits** per channel is typically the *bit depth* for many of the original .MOV, .MTS, .AVI, .MP4, etc. video files we handle. Using a 10-bit depth would needlessly increase the file-size while adding no improved quality. 

><span style="color:DarkBlue">
>**Note:** If you do receive a video that has a bit depth of 10, you need to create transcoded versions with the same bit depth of 10, rather than 8.
></span>

* **Broadcast profile** determines the maximum sampling and bit rates of the output file. **Level 7 lossless (L7)** is 520 Msamples /s and and unspecified Max Bitrate.


## Creating MP4 (H.264) videos

The **H.264/MPEG-4 AVC** is a standard format that is widely accepted (easily transcoded and decoded) and is the target streaming/access video format we archive in PARADISEC. The video format of *MPEG-4, Part 14* is the container format, *Advanced Video Coding* (AVC), also known as *H.264*, is the video compression standard. The target audio coding standard within the .MP4 is *Advanced Audio Coding (AAC)*, and ***not*** Linear Pulse Code Modulation (LPCM).

### Define Encoding Settings: Making an Encoding Preset for MP4 (H.264)

The process for creating the .MP4s is simillar to that of the .MXF as discussed above, so this section will only provide the actual settings and not the full workflow. 

## Low-cost Options for video editing and transcoding

There are a few non-linear (timeline-based) video editing tools available that are free. These tools behave a bit like [Adobe Premiere Pro](https://www.adobe.com/au/products/premiere.html){:target="_blank"} or [Final Cut Pro](https://www.apple.com/au/final-cut-pro/){:target="_blank"}. You can add media, see a timeline as well as a video player. When you move your cursor through the timeline, the video scrubs through frame-by-frame. This allows you to make targeted cuts, extract clips, add still images, add audio tracks, increase volume for all of the video, or just parts. You can also add subtitles. The videos can then be exported to a variety of formats.


[Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve){:target="_blank"} is a professional video editing program that has a rather steep learning curve (it comes with a 4,100 page .pdf instuction manual). The free version is a full-capacity tool that offers robust options for editing, effects, colour correction, audio editing, and much more.

<p align="center">
  <img width="800" src="images/Davinci_Resolve.png" alt="Screenshot of Davinci Resolve">
</p>



[OpenShot](https://www.openshot.org/){:target="_blank"} is a very simple video editing tool that allow you to make edits, extract clips, adjust volume, add audio tracks, etc. You can also make cuts, or add markers and export the project as an .EDL file (Edit Decision Lists) or as an .XML for use wit Final Cut Pro. If you open the .EDL with a text editor, you can retreive a list of all edits made, including the start and end times for each cut you made, names of all files in project, etc.

<p align="center">
  <img width="800" src="images/Open_Shot.png" alt="Screenshot of Open Shot Video Editor">
</p>



<br>
<hr style="border:1px solid grey">

## Additional resources

Blewer, A. (2020). **Pragmatic Audiovisual Preservation**, DPC Technology Watch Report, p. 45. Digital Preservation Coalition. [https://doi.org/10.7207/twr20-10](https://doi.org/10.7207/twr20-10){:target="_blank"}.

Fleischhauer, C., & Bradley, K. (2019). **IASA-TC06: Guidelines for the Preservation of Video Recordings**, v2019 (IASA Technical Publications IASA-TC06; Technical Committee Standards, Recommended Practices, and Strategies, p. 336). International Association of Sound and Audiovisual Archives. [https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings](https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings){:target="_blank"}.

⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work was created by Julia Colleen Miller and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.