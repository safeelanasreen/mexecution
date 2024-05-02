import homeData from "./api/homepage"
import serviceData from "./api/servicepage"
import feasibilityData from "./api/feasibilitypage"
import StyleGuide from "../src/components/StyleGuide"

const StyleGuidePage = (props) => {
  return (
    <main>
      <StyleGuide datas={[homeData, serviceData, feasibilityData]} />
    </main>
  )
}

export default StyleGuidePage