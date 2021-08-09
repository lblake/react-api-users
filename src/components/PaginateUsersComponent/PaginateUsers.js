import ReactPaginate from 'react-paginate';
import styles from './paginateUsers.module.css';

export default function PaginateUsers({
  changePage,
  pageCount,
  filteredUser,
  pageNumber,
}) {
  return (
    // ReactPaginate component with values for displaying buttons at the bottom of the page
    <div>
      <ReactPaginate
        nextLabel={'Next'}
        previousLabel={'Previous'}
        user={filteredUser}
        pageCount={pageCount}
        forcePage={pageNumber}
        onPageChange={changePage}
        nextLinkClassName={styles.nextBtn}
        containerClassName={styles.paginationBtns}
        previousLinkClassName={styles.previousBtn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
}
