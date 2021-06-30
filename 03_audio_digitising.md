---
title: Audio Digitising
layout: default
published: true
nav_order: 3
--- 

<details closed markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>


# Audio Digitising Workflows for PARADISEC Archive
<p align="center">
           🚧 This page is currently under construction 🚧 <br>
           Last edited on 2021-06-16
</p>

<p align="center">
  <img width="300" src="images/rev-rev-vox.gif">
</p>

This page outlines the technical workflow for audio digitising for the PARADISEC unit based at the Australian National University. This worlflow can be modified to accommodate other organisations in their specific digitising goals.


### Equipment

#### Computer workstation

The ANU PARADISEC studio utilises a high-performance DELL OptiPlex 7080 Tower PC workstation with the following specifications:

| SPECIFICATION | DETAILS     |
| :-------------| : --------- |
|***Memory*** | 32GB (4x8GB) |
|***Processor*** | Intel Core i7-10700 (8-core, 16MB cache, 2.9GHz to 4.8GHz, 65W) |
|***Drive*** | M.2 512GB Class 35 Solid State Drive |
|***Drive*** | 2.5in 1TB 7200 Hard Disk Drive |
|***Drive*** | 8xDVD +/-RW 9.5mm Optical Disk Drive |
|***Full-size Tower*** | SSF (Small Form Factor) will not accomodate necessary soundcard |

#### Soundcard: [RME HDSPe AIO Pro](https://www.rme-audio.de/hdspe-aio-pro.html)
<p align="center">
  <img width="500" src="images/RME-Soundcard.jpg">
</p>

#### AD/DA Convertor: [RME ADI-2 PRO FS](https://www.rme-audio.de/adi-2-pro-fs.html)
<p align="center">
  <img width="500" src="images/RME.jpg">
</p>

#### Audio cassette player: [Tascam 122 mk II](https://tascam.com/downloads/tascam/324/122mkIII_TECHDOC.pdf)
<p align="center">
  <img width="500" src="images/tascam_112_MKII_1.jpg">
</p>

#### Reel-to-reel tape player: [Revox C270](https://www.reeltoreel.nl/studer/Public/Products/Revox/Revox_C270/Revox_C270_Op_E.pdf)
  <img width="500" src="images/xx.jpg">
</p>

### Software

### Digitising Cassette Tapes


1.	Turn on computer and login with your ANU UDS credentials

Recources you should find on your desktop:
Wavelab Pro 10.0 shortcut
Wavelab Pro 10.0 operations manual

2.	Turn on the RME ADI-2 PRO FS 
3.	Turn on and load a tape into the Tascam 122 mk II
4.	Open the Wavelab program.


You may need to select New Project if presented with a start-up window. 

<p align="center">
  <img width="300" src="images/Wavelab-StartUpMenu.JPG">
</p>

Otherwise, the main Wavelab window will open up

<p align="center">
  <img width="500" src="images/Wavelab-MainWindow.JPG">
</p>

Make sure the Workspace layout is the PARADISEC layout. Go to the banner menu at the top and select Workspace > Layout > PARADISEC

<p align="center">
  <img width="300" src="images/Wavelab-WorkspaceLayout.JPG">
</p>

5.	Once main window opens, go up to the banner menu again and select File > New.

<p align="center">
  <img width="300" src="images/Wavelab-MenuNewFile.jpg">
</p>

6.	Another window pops up asking you to select the template. Select PARADISEC.

<p align="center">
  <img width="300" src="images/Wavelab-FileTemplate.JPG">
</p>

7.	A new timeline will appear in the AUDIOEDITOR window located in the lower half of the main window. In this window, select the ANALYZE tab along the top.
  Make sure to tick the radio button next to Audio Input
  
<p align="center">
  <img width="500" src="images/Wavelab-AudioInput.JPG">
</p>

From the meter tabs in the upper right quadrant of the main window, grab the PHASESCOPE and drag it out to create a popped-out, larger window.

8.	look to the buttons on the bottom of the window
  
<p align="center">
  <img width="300" src="images/Wavelab-buttons.JPG">
</p>

Press the button with the dot on it, far right. This will open the following recording window and activate the PHASESCOPE:
  
<p align="center">
  <img width="500" src="images/Wavelab-Record-Phase.JPG">
</p>


9.	In Method tab under File to Create, select Named file from the drop down menu, then type in the file name you want to assign this file. Select the target location, E:\DigitisedFiles for the output files.

10.	Play the tape as a means to test the levels audio levels to recording. These can be seen in the Recording window. Play for a minute or so, making sure the signal stays below -12.00 dB. 
  
<p align="center">
  <img width="500" src="images/Wavelab-RecordingLevels.JPG">
</p>

11.	If the signal on the tape is too loud, you should adjust this on the TASCAM using the OUTPUT dial on the far right of the tape machine. The dial should be on 8 to begin with. Make adjustments from there.
  
<p align="center">
  <img width="300" src="images/TASCAM-Output.JPG">
</p>


12.	Once you adjust the volume, press the Reset button underneath the audio levels back in Wavelab so that you can confirm you have adjusted the audio adequately.
  
<p align="center">
  <img width="300" src="images/Wavelab-Monitor-Reset.JPG">
</p>

13.	As you are previewing the tape, you can see that the PHASESCOPE is also actively monitoring the audio. We will use this scope to help guide us in our Azimuth adjustment. 

    
14.	You can find the Azimuth screw on the TASCAM machine in the gap right above where the word STOP button. It is the screw to the left of the heads. Use the supplied tiny screwdriver.
  
<p align="center">
  <img width="300" src="images/TASCAM-AzimuthAdjustment.jpg"
</p>


15.	Look at the PHASESCOPE as you turn the screw to the left and to the right. Because you will be mostly digitising one-sided tapes, you want the line to be straight and along the Y-axis (vertical). If you were to digitise a reel-to-reel tape that is recorded on both sides, both sides are digitised simultaneously. As a result, there will be more of an X -shape of lines, representing each output of the tape.
  
<p align="center">
  <img width="300" src="images/Wavelab-PHASESCOPE-AtRest.JPG">
</p>
  
<p align="center">
  <img width="300" src="images/Wavelab-PHASESCOPE-PreAdjustment.JPG">
</p>
  
<p align="center">
  <img width="300" src="images/Wavelab-PHASESCOPE-PostAdjustment.JPG">
</p>

16.	Once you get the cleanest, most vertical line you can, rewind the tape, press ***Record*** in Wavelab, then press play on the TASCAM and begin digitising the tape. Remain nearby to monitor the progress of this task; keep in mind that something could go wrong as the tape is being played. If you remain nearby you can  

### Digitising Reel-to-reel Tapes

### Additional Resources
[Pragmatic Audiovisual Preservation](http://doi.org/10.7207/twr20-10) (2021) Ashley Blewer

[IASA Technical Committee, Guidelines on the Production and Preservation of Digital Audio Objects](https://www.iasa-web.org/tc04/audio-preservation) (2009, 2nd ed.) ed. by Kevin Bradley.

[Sound Directions: Best Practice for Audio Preservation](http://www.dlib.indiana.edu/projects/sounddirections/papersPresent/index.shtml) (2007) Mike Casey & Bruce Gordon

