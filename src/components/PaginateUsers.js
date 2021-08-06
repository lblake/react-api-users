import ReactPaginate from 'react-paginate';
import styles from '../css/paginateUsers.module.css';

export default function PaginateUsers({
  changePage,
  pageCount,
  filteredUser,
  pageNumber,
}) {
  return (
    <div>
      <ReactPaginate
        user={filteredUser}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        forcePage={pageNumber}
        onPageChange={changePage}
        containerClassName={styles.paginationBtns}
        previousLinkClassName={styles.previousBtn}
        nextLinkClassName={styles.nextBtn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
}
