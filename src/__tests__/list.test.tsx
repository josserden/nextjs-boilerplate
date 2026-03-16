import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { List } from '@/shared/components/utilities/list';

const items = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
];

describe('List', () => {
  it('renders all items', () => {
    render(<List data={items} renderItem={item => <span>{item.label}</span>} keyExtractor={item => item.id} />);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('renders empty list without errors', () => {
    const { container } = render(
      <List data={[]} renderItem={item => <span>{item}</span>} keyExtractor={(_, i) => i} />,
    );

    expect(container.querySelectorAll('li')).toHaveLength(0);
  });

  it('applies className to ul', () => {
    const { container } = render(
      <List
        data={items}
        renderItem={item => <span>{item.label}</span>}
        keyExtractor={item => item.id}
        className='custom-class'
      />,
    );

    expect(container.querySelector('ul')).toHaveClass('custom-class');
  });

  it('applies itemClassName to each li', () => {
    const { container } = render(
      <List
        data={items}
        renderItem={item => <span>{item.label}</span>}
        keyExtractor={item => item.id}
        itemClassName='item-class'
      />,
    );

    container.querySelectorAll('li').forEach(li => {
      expect(li).toHaveClass('item-class');
    });
  });
});
