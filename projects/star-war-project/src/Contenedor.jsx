import React, { useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Buscador from "./Buscador";
import Cartas from "./Cartas";

const Contenedor = () => {
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [typeSearch, setTypeSearch] = useState(1);
  const [searchParams, setSearchParams] = useState({
    tipo: "",
    dato: "",
  });

  const handleChange = (event, value) => {
    setPage(parseInt(value, 10));
    setLoading(true);
  };

  return (
    <Container>
      <Buscador
        setTypeSearch={setTypeSearch}
        setSearchParams={setSearchParams}
        setCountPage={setCountPage}
        handleChange={handleChange}
      />

      <Box display="flex" mt={2} justifyContent="center" width="100%">
        <Stack spacing={2}>
          <Pagination
            page={page}
            count={countPage}
            onChange={handleChange}
            size="large"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>

      <Cartas
        pagina={page}
        loading={loading}
        error={false}
        setLoading={setLoading}
        typeSearch={typeSearch}
        searchParams={searchParams}
      />
    </Container>
  );
};

export default Contenedor;
