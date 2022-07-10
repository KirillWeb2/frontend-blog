import react, { FC } from 'react'
import ContentLoader from 'react-content-loader'



const Skeleton: FC = () => {
    return (
        <ContentLoader viewBox="0 0 380 380">   
        <rect x="" y="0" rx="5" ry="5" width="30%" height="120" />
        <rect x="33%" y="0" rx="4" ry="4" width="30%" height="120" />
        <rect x="66%" y="0" rx="4" ry="4" width="30%" height="120" />

        <rect x="" y="135" rx="5" ry="5" width="30%" height="120" />
        <rect x="33%" y="135" rx="4" ry="4" width="30%" height="120" />
        <rect x="66%" y="135" rx="4" ry="4" width="30%" height="120" />
      </ContentLoader>

    )
}

export default Skeleton