import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const usePagination = ({ query, params }, cb) => {
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const total = useRef();

  const fetchItems = async (p, initial) => {
    try {
      setLoading(true);

      const {
        data: { total: totalItems, data },
      } = await axios.get(query, {
        params: { page: p, ...params },
      });
      cb(data);
      if (initial) total.current = totalItems;
      page.current = p;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    page.current = 1;
    total.current = null;
    fetchItems(page.current, true);
  }, []);

  return {
    page: page.current,
    total: total.current,
    fetchItems,
    loading,
  };
};

export default usePagination;
