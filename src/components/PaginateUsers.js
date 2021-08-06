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
