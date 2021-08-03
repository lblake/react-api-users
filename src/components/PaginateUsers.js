import ReactPaginate from 'react-paginate';
import '../css/paginateUsers.css';

export default function PaginateUsers({
  users,
  changePage,
  pageCount,
}) {
  return (
    <div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
}
