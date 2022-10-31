import React, { useEffect, useState, useMemo } from "react";
import Table from "../components/table/Table";

function Employers() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:3000/employers").then((r) => {
      if (r.ok) {
        r.json().then((employer) => setEmployers(employer));
      }
    });
  }, []);
  console.log("employer", employers);
  const employersData = useMemo(() => [...employers], [employers]);
  console.log("employersData", employersData);
  const employersColumns = useMemo(
    () =>
      employers[0]
        ? Object.keys(employers[0])
            .filter((key) => key !== "user")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [employers]
  );
  console.log("employersColumns", employersColumns);
  return (
    <>
      <Table columns={employersColumns} data={employersData} />
    </>
  );
}
export default Employers;
