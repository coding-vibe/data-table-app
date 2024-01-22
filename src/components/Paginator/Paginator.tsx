import Pagination from 'react-bootstrap/Pagination';
import INITIAL_PAGE_NUMBER from 'constants/initialPageNumber';

interface Props {
  currentPage: number;
  onPageClick: (pageNumber: number) => void;
  totalPages: number;
}

export default function Paginator({
  currentPage,
  onPageClick,
  totalPages,
}: Props) {
  return (
    <Pagination>
      <Pagination.First
        disabled={currentPage === INITIAL_PAGE_NUMBER}
        onClick={() => onPageClick(INITIAL_PAGE_NUMBER)}
      />
      <Pagination.Prev
        disabled={currentPage === INITIAL_PAGE_NUMBER}
        onClick={() => onPageClick(currentPage - 1)}
      />
      {Array.from({ length: totalPages }, (_, pageNumber) => (
        <Pagination.Item
          active={pageNumber + 1 === currentPage}
          key={pageNumber + 1}
          onClick={() => onPageClick(pageNumber + 1)}>
          {pageNumber + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageClick(currentPage + 1)}
      />
      <Pagination.Last
        disabled={currentPage === totalPages}
        onClick={() => onPageClick(totalPages)}
      />
    </Pagination>
  );
}
