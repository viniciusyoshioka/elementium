# Icon

Its an extension of `react-native-vector-icons`. It joins, in one component, some icon packages that can be chosen through `group` prop.

## Properties

The Icon's props extends the `IconProps` from `"react-native-vector-icons/Icon"`

| Name | Required | Default value | Description |
|----------|----------|----------|----------|
`name` | Yes | None | Which icon to use
`group` | No | `"material-community"` | Which icon package to use. This prop abstracts the multiple icon components from `react-native-vector-icons`
`size` | No | 24 | Size of the icon

## Types

- `IconGroup`:
    | Value | Description |
    |-------|-------------|
    `material` | Google's material icon
    `material-outline` | Outline version of Google's material icon
    `material-community` | Material community icon package

## Example

```tsx
import { Icon } from "@elementium/native"


export function App() {
    return (
        <Icon
            name={"settings"}
            group={"material-outline"}
            size={32}
        />
    )
}
```
