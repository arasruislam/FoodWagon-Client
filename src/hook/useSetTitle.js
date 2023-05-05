import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -- Best Of FoodWagon`;
  }, [title]);
};

export default useSetTitle;
