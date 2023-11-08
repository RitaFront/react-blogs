import React from 'react';
import styles from './pagination.module.scss';
import ReactPaginate from 'react-paginate';

interface IPagination {
  currentPage: number;
  totalPages: number;
  onClickPage: (page: number) => void;
}

export const PaginationBlock: React.FC<IPagination> = ({
  currentPage,
  onClickPage,
  totalPages,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onClickPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
