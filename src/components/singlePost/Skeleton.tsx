import react, { FC } from 'react'
import ContentLoader from 'react-content-loader'


const Skeleton: FC = () => {
    return (
        <ContentLoader viewBox="0 0 380 380">   
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100" />
        <rect x="40%" y="110" rx="4" ry="4" width="100" height="10" />
        <rect x="0" y="130" rx="4" ry="4" width="100%" height="10" />
        <rect x="0" y="145" rx="4" ry="4" width="100%" height="10" />
        <rect x="0" y="160" rx="4" ry="4" width="100%" height="10" />
        <rect x="0" y="175" rx="4" ry="4" width="100%" height="10" />
      </ContentLoader>

    )
}

export default Skeleton