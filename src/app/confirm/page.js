import { useRouter } from "next/navigation";
import React from "react";

const Confirmation = () => {
  // console.log(searchParams);
  const router = useRouter();
  const t = router.query?.t;

  return (
    <div className="confirm">
      <h2>Please pay {formatPrice(t)}</h2>
      <h1>You will recieve your order soon</h1>
    </div>
  );
};

export default Confirmation;
