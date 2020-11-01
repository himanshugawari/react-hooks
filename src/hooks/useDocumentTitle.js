import { useEffect } from 'react';

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
    return () => {};
  }, [count]);
};

export default useDocumentTitle;
