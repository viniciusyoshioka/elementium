import { CellRendererProps, FlatList, FlatListProps, ListRenderItemInfo } from "react-native"
import Reanimated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"

import { measureExecutionTime } from "@services/performance"
import { RenderItemWrapper } from "./RenderItemWrapper"
import { Position, Size, SortableListPositions } from "./types"


export interface SortableListProps<T> extends FlatListProps<T> {
    data: T[]
    idExtractor: (item: T) => string
    isSortingEnabled: boolean
    cellSize: number
}


export function SortableList<T>(props: SortableListProps<T>) {


    const AnimatedList = Reanimated.createAnimatedComponent(FlatList<T>)
    const listRef = useAnimatedRef<InstanceType<typeof AnimatedList>>()

    const isSortingEnabled = props.isSortingEnabled ?? false
    const numColumns = props.numColumns ?? 1

    const positions = useSharedValue<SortableListPositions>(getInitialPositions())
    const scroll = useSharedValue<Position>({ x: 0, y: 0 })
    const listSize = useSharedValue<Size>({ width: 0, height: 0 })
    const listContentSize = useSharedValue<Size>({ width: 0, height: 0 })


    function getInitialPositions() {
        const e = () => Object.assign({},
            ...props.data.map((item, index) => ({ [props.idExtractor(item)]: index }))
        )

        return measureExecutionTime<SortableListPositions>(e, "getInitialPositions")
    }

    function renderItem({ item, index, separators }: ListRenderItemInfo<T>) {
        if (!props.renderItem) return null

        return (
            <RenderItemWrapper
                isSorting={isSortingEnabled}
                cellSize={props.cellSize}
                itemIndex={index}
                lastIndex={props.data.length - 1}
                positions={positions}
                id={props.idExtractor(item)}
                scroll={scroll}
                listSize={listSize}
                listContentSize={listContentSize}
                scrollViewRef={listRef}

                numColumns={numColumns}
                itemCount={props.data?.length ?? 0}
                itemSize={props.cellSize}
                scrollPosition={scroll.value}
            >
                {props.renderItem({ item, index, separators })}
            </RenderItemWrapper>
        )
    }

    function CellRendererComponent({ children, ...rest }: CellRendererProps<T>) {
        const CellRendererComponentFromProps = props.CellRendererComponent

        if (!CellRendererComponentFromProps) {
            return children
        }

        return (
            <CellRendererComponentFromProps {...rest}>
                {children}
            </CellRendererComponentFromProps>
        )
    }

    const onScroll = useAnimatedScrollHandler({
        onScroll: e => {
            scroll.value = e.contentOffset
            if (listSize.value.width === 0 && listSize.value.height === 0) {
                listSize.value = e.layoutMeasurement
            }
            if (listContentSize.value.width === 0 && listContentSize.value.height === 0) {
                listContentSize.value = e.contentSize
            }
        },
    })


    console.log("Render SortableList")


    return (
        <AnimatedList
            ref={listRef}
            {...props}
            renderItem={renderItem}
            CellRendererComponent={CellRendererComponent}
            onScroll={onScroll}
            removeClippedSubviews={false}

            // scrollEventThrottle={8}
            scrollEventThrottle={16}
            // scrollEventThrottle={32}
        />
    )
}
