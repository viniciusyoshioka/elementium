import { Component, ReactNode } from "react"
import { FlatListProps } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Reanimated, { AnimatedProps, AnimatedRef, SharedValue, scrollTo, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

import { Position, Size, SortableListPositions } from "./types"


export interface RenderItemWrapperProps {
    isSorting: boolean
    cellSize: number
    itemIndex: number
    lastIndex: number
    positions: SharedValue<SortableListPositions>
    id: string
    scroll: SharedValue<Position>
    listSize: SharedValue<Size>
    listContentSize: SharedValue<Size>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scrollViewRef: AnimatedRef<Component<AnimatedProps<FlatListProps<any>>, any, any>>

    numColumns: number
    itemCount: number
    itemSize: number
    scrollPosition: Position
    children?: ReactNode
}


export function RenderItemWrapper(props: RenderItemWrapperProps) {


    const {
        isSorting,
        cellSize,
        itemIndex,
        lastIndex,
        positions,
        id,
        scroll,
        listSize,
        listContentSize,
        scrollViewRef,

        numColumns,
        itemSize,
        scrollPosition,
    } = props

    const isDragging = useSharedValue(false)
    const translationX = useSharedValue(0)
    const translationY = useSharedValue(0)
    const posX = useSharedValue(0)
    const posY = useSharedValue(0)


    function getOrder(tx: number, ty: number, max: number) {
        "worklet"

        const x = Math.round(tx / cellSize) * cellSize
        const y = Math.round(ty / cellSize) * cellSize
        const row = Math.max(y, 0) / cellSize
        const col = Math.max(x, 0) / cellSize
        return Math.min(row * numColumns + col, max)
    }


    const panGesture = Gesture.Pan()
        .enabled(isSorting)
        .activateAfterLongPress(250)
        .onStart(e => {
            // console.log("Pan START")

            translationX.value = e.translationX
            translationY.value = e.translationY
            isDragging.value = true
        })
        // .onChange
        .onUpdate(e => {
            // console.log("Pan CHANGE")

            posX.value = translationX.value + e.translationX
            posY.value = translationY.value + e.translationY

            // 1- Calculate where the item should be
            const newOrder = getOrder(translationX.value, translationY.value, lastIndex)

            // 2- Swap positions
            const oldOlder = positions.value[id]
            if (newOrder !== oldOlder) {
                const idToSwap = Object.keys(positions.value).find(
                    key => positions.value[key] === newOrder
                )
                if (idToSwap) {
                    // Spread operator is not supported in worklets
                    // And Object.assign doesn't seem to be working on alpha.6
                    const newPositions = JSON.parse(JSON.stringify(positions.value))
                    newPositions[id] = newOrder
                    newPositions[idToSwap] = oldOlder
                    positions.value = newPositions
                }
            }

            // 3- Scroll up and down if necessary
            const initialPositionInList: Position = { x: 0, y: 0 }
            const initialColumn = (itemIndex % numColumns)
            const initialRow = Math.floor(itemIndex / numColumns)
            initialPositionInList.x = initialColumn * cellSize
            initialPositionInList.y = initialRow * cellSize

            const positionInList: Position = { x: 0, y: 0 }
            const columnsMoved = Math.round(posX.value / cellSize)
            const rowsMoved = Math.round(posY.value / cellSize)
            const currentColumn = initialColumn + columnsMoved
            const currentRow = initialRow + rowsMoved
            positionInList.x = currentColumn * cellSize
            positionInList.y = currentRow * cellSize

            const lowerBound = 0
            const upperBound = lowerBound + listSize.value.height - (cellSize / 2)
            const maxScroll = listContentSize.value.height - listSize.value.height
            const leftToScrollUp = scroll.value.y
            const leftToScrollDown = maxScroll - scroll.value.y

            const q = initialPositionInList.y - scroll.value.y + posY.value
            if (q < lowerBound) {
                console.log("CIMA")

                const diff = Math.min(lowerBound - q, leftToScrollUp)
                scroll.value.y -= diff
                scrollTo(scrollViewRef, 0, scroll.value.y, false)
                translationY.value -= diff
                // posY.value = translationY.value + e.translationY
                posY.value += diff
            }

            const r = initialPositionInList.y - scroll.value.y + (cellSize / 2) + posY.value
            if (r > upperBound) {
                console.log("BAIXO")

                const diff = Math.min(r - upperBound, leftToScrollDown)
                scroll.value.y += diff
                scrollTo(scrollViewRef, 0, scroll.value.y, false)
                translationY.value += diff
                // posY.value = translationY.value + e.translationY
                posY.value -= diff
            }
        })
        .onEnd(e => {
            // console.log("Pan END")

            posX.value = withTiming(0, { duration: 400 })
            posY.value = withTiming(0, { duration: 400 })
            isDragging.value = false
        })


    const animatedStyle = useAnimatedStyle(() => {
        const newScale = withTiming(isDragging.value ? 0.9 : 1, { duration: 200 })
        const zIndex = withTiming(isDragging.value ? 100 : 0, { duration: 400 })
        return {
            zIndex,
            transform: [
                { scale: newScale },
                { translateX: posX.value },
                { translateY: posY.value },
            ]
        }
    }, [isDragging.value, posX.value, posY.value])


    console.log(`Render RenderItemWrapper: ${id}`)


    return (
        <GestureDetector gesture={panGesture}>
            <Reanimated.View style={animatedStyle}>
                {props.children}
            </Reanimated.View>
        </GestureDetector>
    )
}
