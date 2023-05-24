import React, { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import ContentLoader from 'react-content-loader';

interface IProps {}

const Skeleton: FunctionComponent<IProps> = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const isSmallScreen = windowWidth < 600;

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      {isSmallScreen ? (
        <ContentLoader
          speed={2}
          width={'100%'}
          height={350}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}>
          <circle cx={'18%'} cy={'19%'} r={'18%'} />
          <rect x={'40%'} y="35" rx="9" ry="9" width={'100%'} height="60" />
          <rect x={'40%'} y="5" rx="9" ry="9" width={'100%'} height="20" />
          <rect x="0" y="160" rx="9" ry="9" width={'100%'} height="70" />
          <rect x="0" y="250" rx="9" ry="9" width={'100%'} height="25" />
        </ContentLoader>
      ) : (
        <ContentLoader
          speed={2}
          width={'100%'}
          height={662}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}>
          <circle cx={'52%'} cy={'20%'} r={'25%'} />
          <rect x="0" y="280" rx="9" ry="9" width={'100%'} height="25" />
          <rect x="0" y="310" rx="9" ry="9" width={'100%'} height="83" />
          <rect x="0" y="460" rx="9" ry="9" width={'100%'} height="60" />
          <rect x="0" y="560" rx="9" ry="9" width={'100%'} height="30" />
        </ContentLoader>
      )}
    </Grid>
  );
};

export default Skeleton;
