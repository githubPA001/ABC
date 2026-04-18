# CSS Layout Debugging Checklist

When a layout looks wrong, reduce the problem before adding more CSS.

## Fast checks

- Confirm which element owns the width or height.
- Inspect flex and grid parents before adjusting children.
- Check for inherited `overflow`, `min-width`, or `position` side effects.
- Temporarily add borders and background colors to reveal spacing.

## Handy snippet

```css
* {
  outline: 1px solid rgba(255, 0, 0, 0.2);
}
```

## Reminder

Debugging gets easier when the layout system is intentionally simple to begin with.
