function Filter({ settype }) {
  const handlechange = (e) => {
    settype(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <select onChange={handlechange}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>
    </div>
  );
}

export default Filter;