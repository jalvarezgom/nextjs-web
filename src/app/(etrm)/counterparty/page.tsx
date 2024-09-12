'use client'

import counterpartiesService from "@/actions/counterparties";
import { CounterpartyBasic } from "@/types/entities/counterparties";
import { use, useEffect, useState } from "react";

const DealsPage = () => {
  const [counterparties, setCounterparties] = useState<CounterpartyBasic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    counterpartiesService.getAll().then((data) => {
      setCounterparties(data);
    })
    setIsLoading(false);
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-8">
        <p>Counterparties</p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {counterparties.map((counterparty) => (
              <li key={counterparty.id}>id: {counterparty.id} {counterparty.name} - {counterparty.type}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default DealsPage;