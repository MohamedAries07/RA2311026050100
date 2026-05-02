import { useState, useEffect } from "react";
import List from "./components/list";
import Filter from "./components/filter";
import Priority from "./components/priority";
import Pagination from "./components/pagination";
import "./app.css";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  const [type, settype] = useState("");

  const fetchdata = async () => {
    try {
      setloading(true);
      seterror("");

      let url = `http://20.207.122.201/evaluation-service/notifications?page=${page}&limit=${limit}`;
      if (type !== "") {
        url += `&notification_type=${type}`;
      }

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("fail");
      }

      const json = await res.json();

      setdata(json.notifications || []);
      setloading(false);
    } catch (err) {
      seterror("error");
      setloading(false);

      setdata([
        {
          ID: "d146095a-d86c-4a34-9e69-390ea14576bc",
          Type: "Result",
          Message: "mid-sem",
          Timestamp: "2026-04-22 17:51:30"
        },
        {
          ID: "b283218f-ea5a-4b7c-93a9-1f2f240d64be",
          Type: "Placement",
          Message: "CSX Corporation hiring",
          Timestamp: "2026-04-22 17:51:18"
        },
        {
          ID: "81589ada-0ad3-4f77-9554-f52fb558e09d",
          Type: "Event",
          Message: "Farewell",
          Timestamp: "2026-04-22 17:51:06"
        },
        {
          ID: "0005513a-142b-4bbc-8678-eefec65e1ede",
          Type: "Result",
          Message: "mid-sem",
          Timestamp: "2026-04-22 17:50:54"
        },
        {
          ID: "ea836726-c25e-4f21-a72f-544a6af8a37f",
          Type: "Result",
          Message: "project-review",
          Timestamp: "2026-04-22 17:50:42"
        },
        {
          ID: "003cb427-8fc6-4f77-bb00-be228f6bed2c",
          Type: "Result",
          Message: "external",
          Timestamp: "2026-04-22 17:50:30"
        },
        {
          ID: "e5c4ff20-31bf-44d0-8f02-72fda59e8918",
          Type: "Result",
          Message: "project-review",
          Timestamp: "2026-04-22 17:50:18"
        },
        {
          ID: "1cfce5ee-ad37-4894-8946-d707627176a5",
          Type: "Event",
          Message: "tech-fest",
          Timestamp: "2026-04-22 17:50:06"
        },
        {
          ID: "cf28856a-45ac-4ba0-b548-6e9e9d4c52c8",
          Type: "Result",
          Message: "project-review",
          Timestamp: "2026-04-22 17:49:54"
        },
        {
          ID: "8a7412bd-6065-4d09-8501-a37f11cc848b",
          Type: "Placement",
          Message: "Advanced Micro Devices Inc. hiring",
          Timestamp: "2026-04-22 17:49:42"
        }
      ]);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [page, type]);

  return (
    <div className="container">
      <h2>Notifications</h2>

      <Filter settype={settype} />

      {loading && <p>Loading...</p>}
{error && <p>API access restricted. Showing sample data.</p>}
      {!loading && (
        <>
          <Priority data={data} />
          <List data={data} />
          <Pagination page={page} setpage={setpage} />
        </>
      )}
    </div>
  );
}

export default App;