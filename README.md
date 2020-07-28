# Clips

## Set clip duration and offset

Offset is relative to the parent clip

```jsx
<Clip ref={VIDEO_ID} start={3} offset={4} />
```

## Select source video

You can use the start prop to select the start of the source video you want to mask

```jsx
<Clip ref={VIDEO_ID} start={3} duration={1} />
```

## Sequence of clips

Clips are put by default one after the other

```jsx
<Clip ref={VIDEO_ID} duration={1} />
<Clip ref={VIDEO_ID} duration={1} />
<Clip ref={VIDEO_ID} duration={1} />
<Clip ref={VIDEO_ID} duration={1} />
```

## Layer clips one above the other

To start come clips with same offset as another clip A, put the clips as children of A and layer them on `lanes`

```jsx
<Clip ref={VIDEO_ID} duration={1}>
    <Clip lane='-1' ref={VIDEO_ID} duration={1} offset={1} />
    <Clip lane='-2' ref={VIDEO_ID} duration={1} offset={2} />
</Clip>
```
