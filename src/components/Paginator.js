import Link from "next/link";
import React from "react";

const Paginator = ({ baseUrl, current, last }) => {
  return (
    <div className="paginator">
      {current !== 1 && (
        <Link href={baseUrl + (current - 1)}>
          <div className="paginator__btn">prev</div>
        </Link>
      )}
      <Link href={baseUrl + current}>
        <div className="paginator__btn paginator__btn--active">{current}</div>
      </Link>
      {current !== last && (
        <Link href={baseUrl + (current + 1)}>
          <div className="paginator__btn">next</div>
        </Link>
      )}
    </div>
  );
};

export default Paginator;
