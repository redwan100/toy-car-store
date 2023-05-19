import { useEffect } from "react";

function useDynamicTitle(title) {
  useEffect(() => {
    document.title = `Gear up Toys - ${title}`
  }, [title]);
}

export default useDynamicTitle;
