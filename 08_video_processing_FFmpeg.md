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

<span style="font-variant:small-caps;">Last updated: 02 October 2022</span>


FFmpeg is an efficient and cost effective way to process video. It is done by using a command line interface (CLI), but once the workflow is set up, it is relatively simple.

## Using **FFmpeg** on a Mac

### Installation
If you are using a Mac, it is a bit more straight forward than the PC as Bash is a Unix shell (command language interpreter) and runs natively on Macs. To download FFmpeg, open a terminal window and first install Homebrew (command line package manager) with the following commands:

1\. Install [Homebrew](https://brew.sh/){:target="_blank"} 

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

><span style="color:DarkBlue">
>**NOTE:** Check here for any updates to the **Homebrew** installation process: [https://brew.sh/](https://brew.sh/)
></span>


2\. Run Brew Doctor. This is a self-diagnostic tool to determine if everything is installed correctly.<br>

    brew doctor

3\. Install [FFmpeg](https://ffmpeg.org/){:target="_blank"}

    brew install ffmpeg

><span style="color:DarkBlue">
>**NOTE:** Check here for any updates to the **ffmpeg** installation process: [https://formulae.brew.sh/formula/ffmpeg](https://formulae.brew.sh/formula/ffmpeg)
></span>


To test if you have installed FFmpeg correctly, just type ```ffmpeg``` and enter. Information about the version of FFmpeg as well as enabled libraries should appear in your terminal window as seen in the image below.

<p align="center">
  <img width="500" src="images/ffmpeg-installed.jpg" alt="Screenshot of terminal showing installed version of FFmpeg">
</p>
As suggested in that final line in the above image, to view the FFmpeg manual in the terminal window, type in:

    man ffmpeg

For further help using FFmpeg, take a look at the following sites:

**FFmpeg:** [https://ffmpeg.org/ffmpeg.html](https://ffmpeg.org/ffmpeg.html){:target="_blank"}

**ffmprovisor:** [https://amiaopensource.github.io/ffmprovisr/](https://amiaopensource.github.io/ffmprovisr/){:target="_blank"}


### Navigate via terminal to your working directory
It is a good idea to set up a working directory for your video transcoding work. To use FFmpeg for this task, you'll first need to direct it to the folder containing the videos you wish to work with.

Here is are a few sites that can get you started with bash so that you can navigate around your directories using the terminal: 
* [Linux Commands - Basic Bash Command Line Tips You Should Know](https://www.freecodecamp.org/news/basic-linux-commands-bash-tips-you-should-know/)
* [16 Must-Know Bash Commands for Data Scientists](https://towardsdatascience.com/16-must-know-bash-commands-for-data-scientists-d8263e990e0e)
* [An A-Z Index of the Linux command line: bash + utilities](https://ss64.com/bash/)





### Transcoding .MP4 to .MP4 with **ffmpeg**

## Using **FFmpeg** on a PC
Not all terminals are the same; Linux (what we use for FFmpeg Bash commands) does not run natively on PCs. We could run FFmpeg on the native PC terminal, but the transcoding commands would not be the same as those we use on the Mac. 



### Linux on Windows
Thankfully, Windows 10 has created a full subsystem that you can activate allowing us to use Linux on the PC without needing a virtual machine or container. If you need help determining if you have the latest Windows update, try this site: https://www.howtogeek.com/301795/how-to-get-windows-10s-creators-update-now/.

### Activating Linux on your PC
To get your computer set up to use Linux, go to Control Panel > Programs > Turn Windows Features
On Or Off. Tick the box for “Windows Subsystem for Linux” option, and then click “OK”. Next click
“Restart now” when prompted. This new feature won’t work until you reboot your machine.
### Installing Ubuntu

[Microsoft Ubuntu App](https://www.microsoft.com/en-au/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)

### Installing **ffmpeg** via Ubuntu

### Navigating to your working directory

## Anatomy of the **ffmpeg** transcode command

## Low-cost Options

<br>
<hr style="border:1px solid grey">

## Additional resources

 **ffmpeg** [https://ffmpeg.org/documentation.html](https://ffmpeg.org/documentation.html){:target="_blank"}
 
 **ffmprovisor** [https://amiaopensource.github.io/ffmprovisr/](https://amiaopensource.github.io/ffmprovisr/){:target="_blank"}

Blewer, A. (2020). **Pragmatic Audiovisual Preservation**, DPC Technology Watch Report, p. 45. Digital Preservation Coalition. [https://doi.org/10.7207/twr20-10](https://doi.org/10.7207/twr20-10){:target="_blank"}

Fleischhauer, C., & Bradley, K. (2019). **IASA-TC06: Guidelines for the Preservation of Video Recordings**, v2019 (IASA Technical Publications IASA-TC06; Technical Committee Standards, Recommended Practices, and Strategies, p. 336). International Association of Sound and Audiovisual Archives. [https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings](https://www.iasa-web.org/tc06/guidelines-preservation-video-recordings).{:target="_blank"}

⬆️ [Back to top](#)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>{:target="_blank"}.