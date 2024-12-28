# Expo Linking.openURL Silent Failure

This repository demonstrates a bug in Expo's `Linking.openURL` API where opening a URL with a custom scheme fails silently.  The issue is that no error is thrown, making debugging difficult.

The `bug.js` file contains the problematic code. The `bugSolution.js` provides a possible workaround.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app on a device or simulator.
4. Attempt to open the custom URL scheme. Observe that no error is reported, even though the URL doesn't open. 

## Possible Solution

The `bugSolution.js` file demonstrates a possible workaround that involves using `Linking.canOpenURL` to check if the URL can be opened before attempting to open it.  While not a perfect solution, it provides better error handling.
