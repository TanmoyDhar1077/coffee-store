import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Espresso Emporium`;
  }, [title]);
};

export default useTitle;