# Clips

## Set clip duration and offset

Offset is relative to the parent clip

Duration is by default the total video duration

```jsx
<Clip src='./video.mp4' duration={3} offset={4} />
```

## Select source video

You can use the start prop to select the start of the source video you want to mask

```jsx
<Clip src='./video.mp4' start={3} duration={1} />
```

## Sequence of clips

Clips are put by default one after the other

```jsx
<spine lane='0'>
    <Clip src='./video.mp4' duration={1} />
    <Clip src='./video.mp4' duration={1} />
    <Clip src='./video.mp4' duration={1} />
    <Clip src='./video.mp4' duration={1} />
</spine>
```

## Layer clips one above the other

To start come clips with same offset as another clip A, put the clips as children of A and layer them on `lanes`

```jsx
<Clip src='./video.mp4' duration={1}>
    <Clip lane='-1' src='./video.mp4' duration={1} offset={1} />
    <Clip lane='-2' src='./video.mp4' duration={1} offset={2} />
</Clip>
```

## Sequence of clips, children of clip

```jsx
<Clip src='./video.mp4' duration={1}>
    <Clip lane='-1' src='./video.mp4' duration={1} offset={1} />
    <spine lane='-2'>
        <Clip src='./audio.mp3' duration={1} />
        <Clip src='./audio.mp3' duration={1} />
        <Clip src='./audio.mp3' duration={1} />
    </spine>
</Clip>
```
