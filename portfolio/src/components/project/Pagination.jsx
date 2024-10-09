/* eslint-disable react/prop-types */

const Pagination = ({ total, currentPage, onPageChange }) => {
  // Pagination logic goes here
  return (
    <div>
      {/* Render pagination controls */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {total}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
