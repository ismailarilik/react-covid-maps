import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="flex flex-col items-center justify-center gap-y-3 h-screen">
      <div className="text-4xl font-bold">Oops!</div>
      <div>Sorry, an unexpected error has occurred.</div>
      <div className="italic">{error.statusText || error.message}</div>
    </div>
  )
}

export default ErrorPage
