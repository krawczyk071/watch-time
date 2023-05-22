"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Filter = ({ data }) => {
  // const navigate = useNavigate();
  // const [, setSearchParams] = useSearchParams();
  const router = useRouter();

  return (
    <div className="filter-bar">
      <div className="selector" key={data.queryName}>
        <div className="select">
          <select
            id="standard-select"
            // onChange={(e) => navigate(`?${data.queryName}=${e.target.value}`)}
            onChange={(e) =>
              // setSearchParams({ [data.queryName]: e.target.value })
              router.push({
                pathname: "/",
                query: { [data.queryName]: e.target.value },
              })
            }
            placeholder={data.placeholder}
          >
            {data?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
