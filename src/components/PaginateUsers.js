import ReactPaginate from 'react-paginate';
import '../css/paginateUsers.css';

export default function PaginateUsers({ changePage, pageCount, filteredUser }) {
  console.log(pageCount);
  return (
    <div>
      <ReactPaginate
        user={filteredUser}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={4}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
}
