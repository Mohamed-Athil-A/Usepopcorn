import { useEffect } from "react";

const useKey = (key, action) => {
  useEffect(
    function () {
      function callback(e) {
        console.log(e.code);
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
};

export default useKey;
