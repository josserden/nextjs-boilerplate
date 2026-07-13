'use client';

import { useQueryStates } from 'nuqs';

import { exampleSearchParamsParsers } from '@/features/example/search-params/example.search-params';
import { Button } from '@/shared/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/shared/components/ui/field';
import { Input } from '@/shared/components/ui/input';

export function SearchExample() {
  const [{ q, sort }, setSearchParams] = useQueryStates(exampleSearchParamsParsers);

  return (
    <div className='mx-auto max-w-xl'>
      <FieldGroup>
        <Field orientation='horizontal'>
          <FieldLabel htmlFor='q' className='sr-only'>
            Search
          </FieldLabel>

          <Input
            id='q'
            value={q}
            onChange={event => setSearchParams({ q: event.target.value })}
            placeholder='Type to update the URL...'
          />

          <Button
            type='button'
            variant='outline'
            onClick={() => setSearchParams({ sort: sort === 'asc' ? 'desc' : 'asc' })}
          >
            Sort: {sort}
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
