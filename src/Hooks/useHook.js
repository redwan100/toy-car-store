import { useEffect } from "react";

function useDynamicTitle(title) {
  useEffect(() => {
    document.title = `Turbo Toys - ${title}`;
  }, [title]);
}

export default useDynamicTitle;
