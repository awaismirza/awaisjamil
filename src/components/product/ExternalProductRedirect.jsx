import { useEffect } from 'react'

export function ExternalProductRedirect({ destination }) {
  useEffect(() => {
    window.location.replace(destination)
  }, [destination])
  return <p className="section-shell py-16">WordsCut has moved. <a className="focus-ring text-teal underline" href={destination}>Continue to wordscut.com</a></p>
}
