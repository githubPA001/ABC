# React State Patterns I Want to Remember

Good state design usually starts with a simple question: _who actually needs this data?_

## Practical rules

- Keep state as local as possible for easier reuse.
- Lift state only when two or more siblings need the same value.
- Prefer derived values instead of duplicating state.
- Reach for reducers when transitions matter more than raw values.

## Example

```tsx
type CounterProps = {
  initialCount?: number;
};

export function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <button onClick={() => setCount((current) => current + 1)}>
      Count: {count}
    </button>
  );
}
```

## Why it matters

Cleaner state ownership keeps components easier to test, reason about, and refactor later.
