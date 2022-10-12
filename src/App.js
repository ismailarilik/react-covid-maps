import { useState } from 'react'
import { useNavigation } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import MapChart from './MapChart'

function App() {
  const [content, setContent] = useState('')
  const navigation = useNavigation()

  if (navigation.state === 'loading') {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    )
  }
}

export default App;
