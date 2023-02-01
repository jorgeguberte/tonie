# Tonie
[![Node.js CI](https://github.com/jorgeguberte/tonie/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/jorgeguberte/tonie/actions/workflows/node.js.yml)


This app interacts with the Wed MIDI API in a way that allows the user to input MIDI notes and get visual and aural feedback regarding the input. 
I.e: it identifies - via the tonaljs  library - the chord that is being played, and plays the corresponding tones using the tone.js library.

## Release History

### v0.0.1-prototype
- ~~MIDI Input~~
-  ~~Visual feedback (keyboard on screen)~~
- ~~Aural feedback (notes via AudioContextAPI or possibly via a third party library if that's easier)~~
- ~~Triad recognition~~
- ~~Tetrachord recognition~~
- ~~Basic UI~~

## Features Roadmap
  
  ### v0.0.2-prototype
- ~~Input without a MIDI device (issue #1)~~
- Volume control (issue #2)
- Input history reflected on the UI (issue #3)
- Play chord / arpeggio (issue #6)


### future releases
- Key selection
  - Display accidental based on selected key
- Key suggestion
  - Suggest key based on current chord and/or input history