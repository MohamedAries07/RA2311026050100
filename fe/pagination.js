function Pagination({ page, setpage }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setpage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span style={{ margin: "10px" }}>{page}</span>
      <button onClick={() => setpage(page + 1)}>Next</button>
    </div>
  );
}

export default Pagination;