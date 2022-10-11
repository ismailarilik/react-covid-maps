import { ZoomableGroup, ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps'

const geoUrl = '/geo.json'

const MapChart = ({ setTooltipContent }) => {
  return (
    <div data-tip="">
      <ComposableMap projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}>
        <ZoomableGroup>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) => geographies.map(geo => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(geo.properties.name)}
                  onMouseLeave={() => setTooltipContent('')}
                  onClick={() => console.log('Oldu')}
                  style={{
                    default: {
                      fill: '#888'
                    },
                    hover: {
                      fill: '#F00'
                    }
                  }}
                />
              )
            })}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default MapChart
