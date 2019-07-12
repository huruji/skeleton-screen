# skeleton-screen

Another react skeleton screen component

## example

![](./example.gif)

see [Example](./example/README.md)


## props

```ts
interface SkeletonProps {
	count?: number
	width?: number | string
	height?: number | string
	type?: 'circle' | 'rect'
	duration?: number
	baseColor?: string
	highlightColor?: string
	className?: string
}
```