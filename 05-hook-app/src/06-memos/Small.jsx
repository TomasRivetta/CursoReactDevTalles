import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me dibuje");

  return <small>{value}</small>;
});
