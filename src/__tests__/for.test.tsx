import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { For } from '@/shared/components/utilities/for';

const inputItems = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
];

describe('For', () => {
  it('renders all items', () => {
    render(<For each={inputItems}>{item => <span key={item.id}>{item.label}</span>}</For>);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('renders fallback when data is empty', () => {
    render(
      <For each={inputItems.slice(0, 0)} fallback={<span>No items</span>}>
        {item => <span key={item.id}>{item.label}</span>}
      </For>,
    );

    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  it('renders fallback when data is undefined', () => {
    render(
      <For each={undefined} fallback={<span>No items</span>}>
        {(item: (typeof inputItems)[number]) => <span key={item.id}>{item.label}</span>}
      </For>,
    );

    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  it('renders nothing when data is empty and no fallback is given', () => {
    const { container } = render(
      <For each={inputItems.slice(0, 0)}>{item => <span key={item.id}>{item.label}</span>}</For>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
