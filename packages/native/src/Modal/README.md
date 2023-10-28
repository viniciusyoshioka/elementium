# Modal

Contains the following components that composes a `Modal`: `Scrim`, `Container`, `Icon`, `Title`, `Description`, `Content` and `Actions`. There is also another `Modal`, which is a boilerplate component that already has the tree of a React Native `Modal`, `Scrim` and a `Container` built.

- [`Scrim` Component](#scrim)
- [`Container` Component](#container)
- [`Icon` Component](#icon)
- [`Title` Component](#title)
- [`Description` Component](#description)
- [`Content` Component](#content)
- [`Actions` Component](#actions)
- [`Modal` Component](#modal-1)
- [Example code](#examples)

## Scrim

The `Scrim` is the translucent black background that stays behind the `Container`.

### Properties

Extends `TouchableOpacityProps`.

## Container

The surface that holds the content of the modal.

### Properties

Extends `TouchableOpacityProps`, however it is not recommended to be used as a touchable surface, but as a regular `View`.

| Name | Required | Default value | Description |
|------|----------|---------------|-------------|
`hasTintColor` | No | `true` | Adds a translucent overlay, with the primary color, above the container surface.

## Icon

An icon that is shown in the top of the container.

### Properties

Extends `IconProps` from the `Icon` of this library.

## Title

The title of the modal. Its a short, but more emphasized text and center aligned when there is an icon above.

### Properties

Extends `TextProps` from `react-native-paper`.

| Name | Required | Default value | Description |
|------|----------|---------------|-------------|
`hasIconAbove` | No | `false` | Should be set to `true` when there an icon above the title |

## Description

The description of the modal. Its has less focus than the title and displays more detailed information.

### Properties

Extends `TextProps` from `react-native-paper`.

## Content

The container of the modal's main content. Its not needed if the modal only contains the text and action buttons.

Its usage is recommended when the modal contains a list in its body, which can be scrolled depending on its length or window's size.

### Properties

Extends `ScrollViewProps`.

| Name | Required | Default value | Description |
|------|----------|---------------|-------------|
`hasDivider` | No | `true` | Whether to show the divider line below and above the main content of the modal

## Actions

It's the container of the modal action buttons.

### Properties

Extends `ViewProps`.

## Modal

A pre built boilerplate component for a modal inside a screen. It uses React Native's `Modal` as its base component and has the `Scrim` and the `Container` in its component tree.

### Properties

Extends `ModalProps` from React Native.

| Name | Required | Default value | Description |
|------|----------|---------------|-------------|
`scrimStyle` | No | `undefined` | A style prop that is passed to `Modal.Scrim`
`containerStyle` | No | `undefined` | A style prop that is passed to `Modal.Container`
`hasTintColor` | No | The same as `hasTintColor` from `Modal.Container` | The `hasTintColor` prop that is passed to `Modal.Container`

## Examples

The example code for this component is also available in the Modal screen of [`example-app`](../../../../example-app/).

Simple modal example:

```tsx
import { Modal } from "@elementium/native"
import { Button } from "react-native-paper"


export function ExampleSimpleModal() {
    return (
        <Modal.Scrim>
            <Modal.Container>
                <Modal.Title>
                    Simple Modal Example
                </Modal.Title>

                <Modal.Description>
                    The description text of Simple Modal Example
                </Modal.Description>

                <Modal.Actions>
                    <Button
                        mode={"text"}
                        onPress={() => {}}
                        children={"Cancel"}
                    />

                    <Button
                        mode={"text"}
                        onPress={() => {}}
                        children={"Ok"}
                    />
                </Modal.Actions>
            </Modal.Container>
        </Modal.Scrim>
    )
}
```

Full modal example:

```tsx
import { Modal } from "@elementium/native"
import { Button } from "react-native-paper"


export function ExampleFullModal() {
    return (
        <Modal.Scrim>
            <Modal.Container>
                <Modal.Icon name={"cake-variant"} />

                <Modal.Title hasIconAbove={true}>
                    Full Modal Example
                </Modal.Title>

                <Modal.Description>
                    The description text of Full Modal Example
                </Modal.Description>

                <Modal.Content>
                    {/* ... large list */}
                </Modal.Content>

                <Modal.Actions>
                    <Button
                        mode={"text"}
                        onPress={() => {}}
                        children={"Cancel"}
                    />

                    <Button
                        mode={"text"}
                        onPress={() => {}}
                        children={"Ok"}
                    />
                </Modal.Actions>
            </Modal.Container>
        </Modal.Scrim>
    )
}
```