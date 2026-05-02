function List({ data }) {
  return (
    <div>
      <h3>All Notifications</h3>
      {data.map((item, i) => {
        const isnew = i < 3;

        return (
          <div key={i} className="card">
            <p>{item.Message}</p>
            <p>{item.Type}</p>
            <p>{item.Timestamp}</p>
            {isnew && <span className="new">NEW</span>}
          </div>
        );
      })}
    </div>
  );
}

export default List;