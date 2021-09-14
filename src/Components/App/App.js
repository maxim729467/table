import React, { useEffect, useState } from "react";
import Container from "Components/Container";
import Title from "Components/Title";
import Table from "Components/Table";
import Loading from "Components/Loader";
import { fetchCurrencies } from "api-service/currency-service";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCurrencies = async () => {
      setIsLoading(true);

      const currencies = await fetchCurrencies();
      setCurrencies(currencies);
      setIsLoading(false);
    };

    getCurrencies();
  }, []);

  return (
    <Container>
      {currencies && (
        <>
          <Title
            title="US dollar exchange rates table"
            timestamp={currencies.timestamp}
          />
          <Table currencies={currencies} />
        </>
      )}
      <Loading isLoading={isLoading} />
    </Container>
  );
}

export default App;
