# Pressable

A `Pressable` component that process its style to allow the use of `borderRadius` without the ripple effect overflow through the corners.

It was created as a workaround when there was a bug in the `overflow: "hidden"` style prop of React Native's `Pressable`. It is an implementation of [this Stack Overflow comment](https://stackoverflow.com/questions/63048178/ripple-effect-leaking-at-corners-as-if-pressable-button-has-a-borderradius/63379735#63379735).

## Usage

Its usage is the same as the `Pressable` from React Native.
