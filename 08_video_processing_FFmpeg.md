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

## FFmpeg

<p align="center">
🚧 This page is currently under construction 🚧
</p>



<span style="font-variant:small-caps;">Last updated: 30 July 2021</span>

>**Note:** Always check the links to the software webpages for any substantial changes to installation instructions.

*[PARADISEC](https://paradisec.org){:target="_blank"} adheres to the current best-practice standards for video archiving as set by the International Association of Sound and Audiovisual Archives [(IASA)](https://www.iasa-web.org/){:target="_blank"}.*

FFmpeg is an efficient and cost effective way to process video. It is done by using a command line interface (CLI), but once the workflow is set up, it is relatively simple.

### Using **FFmpeg** on a Mac

#### Installation
If you are using a Mac, it is a bit more straight forward than the PC as Bash is a Unix shell (command language interpreter) and runs natively on Macs. To download FFmpeg, open a terminal window and first install Homebrew (command line package manager) with the following commands:

1. Install [Homebrew](https://brew.sh/){:target="_blank"} 

```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```
<span style="color:red">
NOTE: Check here for any updates to this installation process:</span> [https://brew.sh/](https://brew.sh/)

2. Run Brew Doctor. This is a self-diagnostic tool to determine if everything is installed correctly.

```brew doctor```

3. Install [FFmpeg](https://ffmpeg.org/){:target="_blank"}

```brew install ffmpeg```

NOTE: Check here for any updates to this installation process: [https://formulae.brew.sh/formula/ffmpeg](https://formulae.brew.sh/formula/ffmpeg)

To test if you have installed FFmpeg correctly, just type ffmpeg and enter. Information about the version of FFmpeg as well as enabled libraries should appear in your terminal window as seen in the image to the right.

To view the FFmpeg manual in the terminal window, type in:

```man ffmpeg```

For further help using FFmpeg, take a look at the following sites:

[FFmpeg](https://ffmpeg.org/ffmpeg.html){:target="_blank"}

[ffmprovisor](https://amiaopensource.github.io/ffmprovisr/){:target="_blank"}


#### Navigate via terminal to your working directory

#### Transcoding .MP4 to .MP4 with **ffmpeg**

### Using **FFmpeg** on a PC

#### Linux on Windows

#### Activating Linux on your PC

#### Installing Ubuntu

#### Installing **ffmpeg** via Ubuntu

#### Navigating to your working directory

### Anatomy of the **ffmpeg** transcode command



[Back to top](#)