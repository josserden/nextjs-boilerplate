import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Show } from '@/shared/components/utilities/show';

describe('Show', () => {
  it('renders children when condition is truthy', () => {
    render(
      <Show when='value'>
        <p>Visible</p>
      </Show>,
    );
    expect(screen.getByText('Visible')).toBeInTheDocument();
  });

  it('renders nothing when condition is falsy and no fallback', () => {
    const { container } = render(
      <Show when={null}>
        <p>Hidden</p>
      </Show>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders fallback when condition is falsy', () => {
    render(
      <Show when={null} fallback={<p>Fallback</p>}>
        <p>Hidden</p>
      </Show>,
    );
    expect(screen.getByText('Fallback')).toBeInTheDocument();
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });

  it('passes narrowed value to render function', () => {
    render(<Show when='hello'>{value => <p>{value}</p>}</Show>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('does not call render function when condition is falsy', () => {
    // Arrange
    const mockRender = vi.fn((value: string) => <p>{value}</p>);

    // Act
    render(<Show when={null}>{mockRender}</Show>);

    // Assert
    expect(mockRender).not.toHaveBeenCalled();
  });
});
