import { useLoaderData, useNavigation } from 'react-router-dom'

const loader = async ({ params }) => {
  return fetch(
    `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${params.countryName}`,
    {
      headers: {
        'X-RapidAPI-Key': '8f3b1b76cdmsh607e8ff52ad274cp1d5602jsn1aff5feaf34a',
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
      }
    }
  ).then(data => data.json())
}

const CovidData = () => {
  const covidData = useLoaderData()
  const navigation = useNavigation()

  // Handle possible errors in the response
  if (covidData.error || covidData.statusCode !== 200) {
    throw new Error(covidData.message)
  }

  if (navigation.state === 'loading') {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <div>Recovered: {covidData.data.recovered}</div>
        <div>Deaths: {covidData.data.deaths}</div>
        <div>Confirmed: {covidData.data.confirmed}</div>
        <div>Last checked: {covidData.data.lastChecked}</div>
        <div>Last reported: {covidData.data.lastReported}</div>
        <div>Location: {covidData.data.location}</div>
      </div>
    )
  }
}

export default CovidData;
export { loader }
