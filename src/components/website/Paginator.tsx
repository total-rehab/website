import React, { FC } from 'react';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { PaginatorLink } from './PaginatorLink';

type PaginatorProps = {
  className?: string;
  page: number;
  totalPages: number;
};

const CHEVRON_ICON_SIZE = 20;

export const Paginator: FC<PaginatorProps> = ({
  className,
  page,
  totalPages,
}: PaginatorProps) => {
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <nav aria-label="Pagination" className={className}>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <PaginatorLink
            className="rounded-l-lg"
            page={prevPage}
            disabled={prevPage < 1}>
            <span className="sr-only">Previous</span>
            <ChevronLeft style={{ fontSize: CHEVRON_ICON_SIZE }} />
          </PaginatorLink>
        </li>

        {Array(Math.min(totalPages, 5))
          .fill(null)
          .map((_, i) => {
            const currentPage = i + 1;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>
                <PaginatorLink
                  page={currentPage}
                  isActive={page === currentPage}>
                  {currentPage}
                </PaginatorLink>
              </li>
            );
          })}

        <li>
          <PaginatorLink
            className="rounded-r-lg"
            page={nextPage}
            disabled={nextPage > totalPages}>
            <span className="sr-only">Next</span>
            <ChevronRight style={{ fontSize: CHEVRON_ICON_SIZE }} />
          </PaginatorLink>
        </li>
      </ul>
    </nav>
  );
};
