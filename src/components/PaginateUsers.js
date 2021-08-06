import ReactPaginate from 'react-paginate';
import styles from '../css/paginateUsers.module.css';

export default function PaginateUsers({ changePage, pageCount, filteredUser }) {
  console.log('this is filter user value', filteredUser);

  return (
    <div>
      <ReactPaginate
        user={filteredUser}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
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
