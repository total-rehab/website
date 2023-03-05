import { FC } from 'react';
import { CreateButton, FilterButton, TopToolbar } from 'react-admin';

type ListActionsProps = {
  hasFilters?: boolean;
};

export const ListActions: FC<ListActionsProps> = ({
  hasFilters,
}: ListActionsProps) => (
  <TopToolbar>
    {hasFilters && <FilterButton />}
    <CreateButton />
  </TopToolbar>
);
