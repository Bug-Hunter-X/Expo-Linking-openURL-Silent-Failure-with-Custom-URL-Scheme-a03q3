This bug occurs when using the Expo `Linking` API to open a URL in a custom scheme.  The `Linking.openURL` function fails silently, providing no error message or indication of failure.  This makes debugging difficult, as there's no way to determine why the URL didn't open.