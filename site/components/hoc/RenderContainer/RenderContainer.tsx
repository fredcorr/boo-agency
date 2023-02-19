import { StandardPage } from "_containers/StandardPage"
import { CMSPage } from "_types/cms"

const RenderContainer = (data: CMSPage) => {
  switch (data._type) {
    default:
      return <StandardPage {...data} key={data._id}/>
  }
}

export default RenderContainer
