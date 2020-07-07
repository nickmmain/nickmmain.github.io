---
layout: post
title:  "Xming"
date:   2020-07-06 14:38:58 -0400
categories: jekyll update
---
**The no-monitor life**

For whatever reason you may not want to purchase a monitor and you work on your laptop. Maybe you can't afford the one you want right now, or maybe you don't have the space in your apartment/van. 

So maybe, like me, you've been launching Flask web app every time you wanted to view your picam video feed. Well I recently discovered Xming and it's a little less fuss. 

**Xming**

Xming uses an open SSH connection to relay the desktop feed from the Raspberry pi to your PC. All you need to do is: 

1. Have serverX installed on the device sharing it's desktop feed. On the Raspberry pi it should already be installed. try `startx` in a terminal on your pi to find out.
2. If you're on Windows, install Xming. 
3. Using Putty, open an SSH connection to the Pi's IP address, with X11 forwarding enabled to `localhost:0`

But what if you don't want to go through Putty every time ? After all we want to eliminate steps here.
The answer: Windows Subsystem for Linux (WSL). 

Follow the instructions here: https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once done, simply using terminal of your WSL:

`SSH -X pi@192.168.137.196`

Which allows you to skip the step of using Putty.

**ServerX, Xwindows, X11 forwarding, etc.**

This next part is the part for the nerds. Read on if curious.