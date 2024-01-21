import INITIAL_PAGE_NUMBER from 'constants/initialPageNumber';
import Pagination from 'react-bootstrap/Pagination';

interface Props {
  onPageClick: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}

export default function Paginator({
  onPageClick,
  currentPage,
  totalPages,
}: Props) {
  return (
    <Pagination>
      <Pagination.First
        onClick={() => onPageClick(INITIAL_PAGE_NUMBER)}
        disabled={currentPage === INITIAL_PAGE_NUMBER}
      />
      <Pagination.Prev
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === INITIAL_PAGE_NUMBER}
      />
      {Array.from({ length: totalPages }, (_, pageNumber) => (
        <Pagination.Item
          key={pageNumber + 1}
          active={pageNumber + 1 === currentPage}
          onClick={() => onPageClick(pageNumber + 1)}>
          {pageNumber + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => onPageClick(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}
