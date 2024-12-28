```javascript
import * as Linking from 'expo-linking';

async function openCustomURL(url) {
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    await Linking.openURL(url);
  } else {
    console.error(`Could not open URL: ${url}`);
    // Handle the error appropriately, e.g., display a message to the user.
  }
}

// Example usage:
const customURL = 'myapp://some-data';
openCustomURL(customURL);
```