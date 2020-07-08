---
layout: post
title:  "Xming"
date:   2020-07-06 14:38:58 -0400
categories: jekyll update
---
**The no-monitor life**

For whatever reason you may not want to purchase a monitor and you work on your laptop. Maybe you can't afford the one you want right now, or maybe you don't have the space in your apartment/van. 

So maybe, like me, you've been launching Flask web app every time you wanted to view your picam video feed. I recently took a little dive into the X Window System, and it's less fuss. 

**To get going**

1. Start as you usually do by opening an SSH connection to the pi. 
2. Have an Xclient installed on the remote device. On the Raspberry pi it should already be installed. Try `startx` in a terminal on your pi to find out.
2. If the PC with a display is running Windows, install Xming. 
3. Run Xming. If the icon shows up in your Task Bar (bottom right), it's running.  
3. Using Putty, open an SSH connection to the Pi's IP address, with X11 forwarding enabled to `localhost:0`

But what if you don't want to go through Putty every time ? After all we want to eliminate steps here.
The answer: Windows Subsystem for Linux (WSL). 

Follow the instructions here: https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once done, simply using terminal of your WSL:

`SSH -X pi@192.168.137.196`

Which allows you to skip the step of using Putty.

**Xserver, X11 forwarding, etc.**

What's with all the X's ? It all comes back to something called the X Window System. 
The X Window System is a framework on which "displays" can be built. I say "displays" because thats exactly how broad the X Window System was designed to be; it serves as the basis for window managers, as well as desktop environments and ??

1. you open a good old fashioned terminal and you can do a lot. Probably open a CLI calculator, there's a calendar, you can play music, etc.
2. you try to open firefox. 
3. but firefox doesn't have anything to display to ! 
4. introducing: Xserver. Xserver is an application that takes commands from firefox to draw boxes, widgets, and burning foxes. 
5. Xserver translates, and passes the translation to the Xclient which draws on the display. THE CLIENT INTERACTS WITH THE HARDWARE. 

This client-server setup is what allows me to get the display of the pi accross the network on my PC. 

When you go "startx" from a terminal on raspi, IT MAY APPEAR that you've got yourelf to the desktop, but no. 
You now have a window manager. 