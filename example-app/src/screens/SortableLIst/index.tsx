import { Screen } from "@elementium/native"
import { useState } from "react"
import { Dimensions, ListRenderItemInfo, StyleSheet, View, ViewStyle } from "react-native"
import { FAB, Text } from "react-native-paper"

import { SortableList } from "@components"


const DATA_ARRAY = [
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ...[10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    ...[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    // ...[30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    // ...[40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    // ...[50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
]


function getItemSize(numColumns: number, isHorizontal: boolean): number {
    // const PADDING = 8
    const { width, height } = Dimensions.get("window")

    if (isHorizontal) {
        // return height - (2 * PADDING)
        return height
    }

    // const totalPadding = (numColumns + 1) * PADDING
    // return (width - totalPadding) / numColumns
    return width / numColumns
}


export function SortableListScreen() {


    const [data, setData] = useState(DATA_ARRAY)
    const [isSortingEnabled, setIsSortingEnabled] = useState(false)

    const itemSize = getItemSize(2, false)


    function renderItem({ item, index }: ListRenderItemInfo<number>) {
        const r = (Math.random() * 1000) % 255
        const g = (Math.random() * 1000) % 255
        const b = (Math.random() * 1000) % 255
        const itemContainer: ViewStyle = {
            ...styles.itemContainer,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: itemSize,
            aspectRatio: 1,
        }

        return (
            <View style={itemContainer}>
                <Text
                    variant={"titleLarge"}
                    style={styles.itemText}
                    children={item}
                />
            </View>
        )
    }


    console.log("Render SortableListScreen")


    return (
        <Screen>
            <SortableList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{
                    // padding: 8,
                    // gap: 8,
                }}
                columnWrapperStyle={{
                    // gap: 8,
                }}

                idExtractor={item => item.toString()}
                isSortingEnabled={isSortingEnabled}
                cellSize={itemSize}
            />

            <FAB
                icon={isSortingEnabled ? "sort-variant" : "sort-variant-off"}
                style={{ position: "absolute", bottom: 16, right: 16 }}
                onPress={() => setIsSortingEnabled(!isSortingEnabled)}
            />
        </Screen>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    itemText: {
        paddingHorizontal: 4,
        borderRadius: 4,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "yellow",
    },
})
