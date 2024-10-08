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

# Standard Formats for Data Collection and Archiving


<p align="center">
  <img height="300" src="images/rainbow-zoom.gif">
</p>

<span style="font-variant:small-caps;">Last updated: 05 March 2024</span>

## Standard formats for archiving with PARADISEC
The tables below contain the file formats we accept from depositors and the final formats that go into the archive. If you have a format other than those listed, please contact us so we can advise you on what can be done.


<br>

| Media  |  Media formats PARADISEC accepts   | 
| :---   | :---                                        | 
| Audio  |  .wav, .aiff, .m4a .mp3<span style="color:DarkBlue"><sup>1</sup></span> *(96khz, 24bit is our archival target; however 48khz, 24bit, or as close to the archival standard as possible will be accepted)* |
| Video  |  .mts (AVCHD), .avi, .mov, .m4v, .dv, .mpg<span style="color:DarkBlue"><sup>1</sup></span> |
| Images <span style="color:DarkBlue"><sup>2</sup></span>| .tif, .jpg, .png, .CR2                      |
| Text   | .txt, .xml, .html, .pdf, .rtf OpenOffice formats (odf, odt etc) *(.doc/.docx should be converted to .rtf/.pdf, .xls/.xlsx to .csv prior to submission)*|
| Annotations | .eaf, .cha, .xml, .txt, .srt, .trs, .TextGrid|
| Lexicons |  .xml, .txt , .pdf, .fwbackup<span style="color:DarkBlue"><sup>3</sup></span> *(containing no media files)*|

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

<span style="color:DarkBlue">
<sup>1</sup> *If you have files such as .mp3 (audio) or .mpg (video), we will certainly accept them; however, if you are collecting new recordings, please avoid these formats, as they tend to be lossy formats. Look at the [following section](https://paradisec-archive.github.io/PARADISEC_workflows/04_standard_formats.html#suggestions-for-audio-recorders-and-video-cameras){:target="_blank"} for capture suggestions*
</span>

<span style="color:DarkBlue">
<sup>2</sup> *If you choose to scan, rather than photograph your notes: Colour option: 300 dpi, scanning ratio: 100%, 8 bits per channel RGB, embedded ICC colour profile encouraged, OCR6 encouraged (PDF or PDF/A complies). Grayscale options: See the National Archives of Australia recommendations [here](https://www.naa.gov.au/about-us/our-organisation/accountability-and-reporting/archival-policy-and-planning/preservation-digitisation-standards#preservation-digitisation-standards){:target="_blank"}
For photographic negative or slide scans TIF, 600 dpi, 4000 pixels on the longest side, 48 bit colour RGB or 16 bit grayscale.*
</span>

<span style="color:DarkBlue">
<sup>3</sup> *Fieldworks (FLEx) files need to be exported to xml (one for the lexicon and one for the text). If you have bundled sound and image files into the FLEx project, they need to be separated as they are typically not in an archival format. We can archive a fwbackup file if it contains only text in xml format (its native format) , but not if it contains audio and images.*
</span>


<br>
<br>

#### Processing your own media
If you would like to save money (see PARADISEC's page on [Costing a deposit](https://www.paradisec.org.au/deposit/costing-a-deposit/){:target="_blank"} or speed up the archiving process, you may provide us with audio files that are already sampled to 96kHz/24bit or video files that are .mp4 (H.264 codec), you can refer to the following pages: [Audio processing](https://paradisec-archive.github.io/PARADISEC_workflows/07_audio_processing.html){:target="_blank"}, [Video processing using HandBrake](https://paradisec-archive.github.io/PARADISEC_workflows/08a_video_processing_HandBrake.html){:target="_blank"} and [Video processing using FFmpeg](https://paradisec-archive.github.io/PARADISEC_workflows/08_video_processing_FFmpeg.html){:target="_blank"}.

<br>

## Suggestions for audio recorders and video cameras

### Audio recorders: Suggested models and recording settings

| Audio recorders | Features             |
| :---              | :---              |
| Zoom H4N Pro <br> [Link](https://zoomcorp.com/en/jp/handy-recorders/handheld-recorders/h4n-pro/){:target="_blank"}       | 44.1/48/96kHz, 16/24bit WAV; internal X/Y stereo mic, 2 XLR external mic inputs *(with phantom power)*, powered by 2 AA batteries or USB, records to SD/SDHC cards |
| Zoom H2N <br> [Link](https://zoomcorp.com/en/jp/handy-recorders/handheld-recorders/h2n-handy-recorder/){:target="_blank"}      | 44.1/48/96kHz, 16/24bit WAV; 3.5mm external mic input plus internal X/Y stereo, 2-channel and 4-channel surround, powered by 2 AA batteries or USB, records to SD/SDHC cards| 

#### Suggested audio settings

><span style="color:DarkBlue">
> **NOTE**: *Avoid recording in compressed formats.*
></span>

* Select a high sampling rate to ensure good capture of speech. A minimal choice would be to capture 48kHz, 16bit. Our archival target is 96kHz, 24 bit, but this could create file sizes that are too unwieldy for use in remote field sites with limited storage and limited access to power for file transfer and processing on laptop.
* Try to collect audio tracks that are no longer than 1 hour each. This avoids having extremely large files. If your audio file becomes larger than 2GB after archival resampling has occurred (96kHz, 24bit, stereo), the archive may need to segment your files into smaller chunks. Keeping the recording to just under 1 hour will also allow you to make sure your tracks are getting successfully written to the SD card, thus avoiding the loss of a large recording. ***(Zoom recorders will not write the current track if the batteries die mid-recording. You will lose that data)***. Having recording sessions last no more than 1 hour will also introduce breaks for you and your consultants, avoiding task fatigue.
* Use high quality microphones and make sure if they need to draw power, that you have checked the batteries of the microphones, or if they do not have their own power sources, that you enable phantom power on the Zoom recorders.
<br>
<br>

### Video recorders: Suggested models and recording settings

| Video recorders      | Features            |
| :---                 | :---                |
| Canon XA50 <br> [Link](https://www.canon.com.au/cameras/xa50){:target="_blank"}     | records .mp4 & .mxf, (1) 3.5mm and (2) XLR mic inputs (using attached handle), infrared, image stabiliser, optical zoom 20x, records to (2) SD card slots, weighs 960g (or 1435g w/ handle), records 25 and 50fps with slow & fast motion settings, white balance |
| Canon Legria HF G50 <br> [Link](https://www.canon-europe.com/video-cameras/legria-hf-g50/){:target="_blank"} |  records .mp4, (1) 3.5mm mic input, has Night Scene filter, image stabiliser, optical zoom 20x, records to (2) SD card slots, weighs 735g, records 25 and 50fps, with slow & fast motion settings, white balance |

#### Suggested video settings

><span style="color:DarkBlue">
> **NOTE**: *Avoid recording in compressed formats.*
></span>

* If you can, select the .mp4 (H.264) recording format with Advanced Audio Coding (AAC). This is a standard format and is well supported.
* Record progressive formatted video (p), rather than interlaced (i)
* A good resolution setting is the **full HD** setting of **1080p**: WIDTH 1920 pixels x HEIGHT 1080 pixels. This gives you the aspect ratio of 16:9. Other settings include: a **mid-range** definition of **720p**: 1280x720 with a 16:9 aspect ratio.  A **standard** definition resolution of **480p**: 640x480 with the aspect ratio of 4:3. 
* Avoid using 50 or 60 frames per second (fps) unless you are intentionally wanting to create a slow-motion effect. A good setting would be 25 or 30 fps for something that looks like broadcast TV, 24 fps for a more cinematic look. 50 or 60 fps will look hyper-realistic (the soap opera effect). You could also have difficulty syncing audio from external audio recorders if you use 50 or 60 fps.
* Use external microphones for increased quality. Wireless lapel mics or hyper-directional "shotgun" video mics can get you "closer" to the sound and you can add wind protection to those
* Avoid surround-sound audio settings for the camera. This will add unecessary audio tracks and will introduce problems for later processing.
* Try to avoid recording a video that is longer than 1 hour. Keeping your video recording track to 1 hour or less will keep the file size more manageable. Also, when transcoding to archival formats, your file may become too large to archive without segmenting into smaller chunks. Having recording sessions last no more than 1 hour will also allow you to have breaks for you and your consultants, avoiding task fatigue.
<br>
<br>
<hr style="border:1px solid grey">

## Additional Resources

Seyfeddinipur, M. & Rau, F. (2020). **Keeping it real: Video data in language documentation and language archiving**. Language Documentation & Conservation, vol. 14. [http://hdl.handle.net/10125/24965](http://hdl.handle.net/10125/24965){:target="_blank"}.

Federal Agencies Digitization Guidelines Initiative (FADGI). (2014). **Creating and Archiving Born Digital Video, Part III: High Level Recommended Practices**. The FADGI Audio-Visual Working Group, v1.1, 2 December 2014. [http://www.digitizationguidelines.gov/guidelines/FADGI_BDV_p3_20141202.pdf](http://www.digitizationguidelines.gov/guidelines/FADGI_BDV_p3_20141202.pdf){:target="_blank"}. 

⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work was created by Julia Colleen Miller and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.
