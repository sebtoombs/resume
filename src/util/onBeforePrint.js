import { useEffect } from "react"

const useOnBeforePrint = cb => {
  const onBeforePrintCallback = e => {
    const afterCb = cb.call(null, [e])
    if (typeof afterCb === "function") {
      const onAfterPrintCallback = e => {
        afterCb.call(null, [e])
        window.removeEventListener("afterprint", onAfterPrintCallback)
      }

      window.addEventListener("afterprint", onAfterPrintCallback)
    }
  }

  useEffect(() => {
    window.addEventListener("beforeprint", onBeforePrintCallback)
    return () => {
      window.removeEventListener("beforeprint", onBeforePrintCallback)
    }
  }, [])
}

export default useOnBeforePrint
