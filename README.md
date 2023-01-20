# Tonie
[![Node.js CI](https://github.com/jorgeguberte/tonie/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/jorgeguberte/tonie/actions/workflows/node.js.yml)


This app interacts with the Wed MIDI API in a way that allows the user to input MIDI notes and get visual and aural feedback regarding the input. 
I.e: it identifies - via the tonaljs  library - the chord that is being played, and plays the corresponding tones using the tone.js library.

## Features Roadmap

### v0.0.1 (prototype)
- ~~MIDI Input~~
-  ~~Visual feedback (keyboard on screen)~~
- ~~Aural feedback (notes via AudioContextAPI or possibly via a third party library if that's easier)~~
- ~~Triad recognition~~
- ~~Tetrachord recognition~~
- ~~Input history~~
- Basic UI
  
  ### v0.0.2 
- Input without a MIDI device
- Key selection
  - Display accidental based on selected key
- Key suggestion
  - Suggest key based on current chord and/or input history