'use client'

import dealsService from "@/actions/deals";
import { DealDatatable } from "@/types/entities/deals";
import { useEffect, useState } from "react";

const DealsPage = () => {
  const [deals, setDeals] = useState<DealDatatable[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    dealsService.getAll().then((data) => {
      setDeals(data);
    })
    setIsLoading(false);
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen  items-center p-8">
        <p>Deals</p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {deals.map((deal) => (
              <li key={deal.id}>id: {deal.id} {deal.code} - {deal.trade_date}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default DealsPage;