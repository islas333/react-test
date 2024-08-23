import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

// TODO Eliminar codogp legacy

const Paginador = ({ page, totalPages, onPageChange }) => {
  return (
    <Stack spacing={2} sx={{ marginTop: 4, alignItems: "center" }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default Paginador;
