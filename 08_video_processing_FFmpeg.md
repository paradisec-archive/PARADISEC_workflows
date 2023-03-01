---
title: Video Processing with FFmpeg
layout: default
published: true
nav_order: 8
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

# Video Processing with FFmpeg

<p align="center">
🚧 This page is currently under construction 🚧
</p>

*This technical guide was created as part of the archiving workflow for PARADISEC. Some of the content may not be relevant for general users.* 

<span style="font-variant:small-caps;">Last updated: 01 March 2023</span>


FFmpeg is an efficient and cost effective way to process video. It is done by using a command line interface (CLI), but once the workflow is set up, it is relatively simple.


## Installation options
If you are using a Mac, it is a bit more straight forward than the PC as Bash is a Unix shell (command language interpreter) and runs natively on Macs. To download FFmpeg, open a terminal window and first install Homebrew (command line package manager) with the following commands:

1\. Installation links fo Mac:
* Download source code: [FFmpeg](https://ffmpeg.org/download.html#build-mac){:target="_blank"} 
* Download using Homebrew: [Homebrew](https://formulae.brew.sh/formula/ffmpeg){:target="_blank"}

Because this can be a tricky process to install, here are some helpful sites: 
* [How to install FFmpeg](https://www.hostinger.com/tutorials/how-to-install-ffmpeg){:target="_blank"}
* [Installing ffmpeg and ffprobe on macOS manually](https://bbc.github.io/bbcat-orchestration-docs/installation-mac-manual/){:target="_blank"}

To test if you have installed FFmpeg correctly, just type ```ffmpeg``` in Terminal and enter. Information about the version of FFmpeg as well as enabled libraries should appear in your terminal window as seen in the image below.

<p align="center">
  <img width="500" src="images/ffmpeg-installed.jpg" alt="Screenshot of terminal showing installed version of FFmpeg">
</p>
As suggested in that final line in the above image, to view the FFmpeg manual in the terminal window, type in:

    man ffmpeg

2\. Installation on Windows
* Download executable file: [FFmpeg](https://ffmpeg.org/download.html#build-windows){:target="_blank"}

## Some helpful FFmpeg 'recipes' for using FFmpeg on a Mac

### To transcode .MOV to .MP4 (H.246)

If you have multiple .MOV files you want to transcode:

Place all .MOV files in one folder and navigate to that folder in Terminal. Then type (or copy) this code into the Terminal:

```
for i in *.MOV; do ffmpeg -i “$i” -c:v libx264 -pix_fmt yuv420p -preset veryslow -crf 18 -c:a aac “$(basename “$i” .MOV)”.mp4 ; done
```


If you have a single file:


Helpful sites for installation on Windows: 
* [How to install FFmpeg](https://www.hostinger.com/tutorials/how-to-install-ffmpeg){:target="_blank"}
* [How to install FFmpeg on Windows](https://www.geeksforgeeks.org/how-to-install-ffmpeg-on-windows/){:target="_blank"}



For further help using FFmpeg, take a look at the following sites:

**FFmpeg:** [https://ffmpeg.org/ffmpeg.html](https://ffmpeg.org/ffmpeg.html){:target="_blank"}

**ffmprovisor:** [https://amiaopensource.github.io/ffmprovisr/](https://amiaopensource.github.io/ffmprovisr/){:target="_blank"}




<br>
<hr style="border:1px solid grey">

## Additional resources

 **ffmpeg** [https://ffmpeg.org/documentation.html](https://ffmpeg.org/documentation.html){:target="_blank"}
 
 **ffmprovisor** [https://amiaopensource.github.io/ffmprovisr/](https://amiaopensource.github.io/ffmprovisr/){:target="_blank"}

Blewer, A. (2020). **Pragmatic Audiovisual Preservation**, DPC Technology Watch Report, p. 45. Digital Preservation Coalition. [https://doi.org/10.7207/twr20-10](https://doi.org/10.7207/twr20-10){:target="_blank"}.

Fleischhauer, C., & Bradley, K. (2019). **IASA-TC06: Guidelines for the Preservation of Video Recordings**, v2019 (IASA Technical Publications IASA-TC06; Technical Committee Standards, Recommended Practices, and Strategies, p. 336). International Association of Sound and Audiovisual Archives. [https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings](https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings){:target="_blank"}.

⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.