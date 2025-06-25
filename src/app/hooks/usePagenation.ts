import { useState } from "react";

export function usePagenation() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 2;


  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return { totalPages, setTotalPages, page, limit, handlePrev, handleNext };
}