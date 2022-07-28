import { List, Paper } from "@mui/material";
import React from "react";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding:'1px 5px'
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
