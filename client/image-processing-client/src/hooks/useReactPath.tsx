import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useReactPath = () => {
  const location = useLocation();
  const [page, setPage] = useState<string>(window.location.pathname.slice(1));

  useEffect(() => {
    setPage(window.location.pathname.slice(1));
    console.log(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return page;
};
