import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate() {
  return (
    <div className="h-full flex justify-center" sx={{ display: "flex" }}>
      <CircularProgress />
    </div>
  );
}
