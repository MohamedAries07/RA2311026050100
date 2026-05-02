function Priority({ data }) {
  const sorted = [...data].sort(
    (a, b) => new Date(b.Timestamp) - new Date(a.Timestamp)
  );

  const top = sorted.slice(0, 5);

  return (
    <div>
      <h3>Priority Notifications</h3>
      {top.map((item, i) => (
        <div key={i} className="card priority">
          <p>{item.Message}</p>
          <p>{item.Type}</p>
        </div>
      ))}
    </div>
  );
}

export default Priority;