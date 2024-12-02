// useClientSide.js
import { useEffect } from "react";

export default function ClientSideComponent() {
  useEffect(() => {
    // Only runs on the client side
    if (typeof document !== "undefined") {
      document.title = "Marigona Musliu";
    }
  }, []);

  return null;
}
