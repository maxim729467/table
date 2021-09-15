import React, { useEffect, useState } from "react";
import Container from "Components/Container";
import Title from "Components/Title";
import Table from "Components/Table";
import Loading from "Components/Loader";
import ErrorNotice from "Components/ErrorNotice";
import { fetchCurrencies } from "api-service/currency-service";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrencies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const currencies = await fetchCurrencies();
        setCurrencies(currencies);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
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
      {error && <ErrorNotice />}
      <Loading isLoading={isLoading} />
    </Container>
  );
}

export default App;
