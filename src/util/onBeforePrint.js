import { useEffect } from "react"

const useOnBeforePrint = cb => {
  useEffect(() => {
    window.addEventListener("beforeprint", cb)
    return () => {
      window.removeEventListener("beforeprint", cb)
    }
  }, [])
}

export default useOnBeforePrint
