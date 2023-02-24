import { Grid } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        height={80}
        width={80}
        color="#b1a7d5"
        wrapperStyle={{ margin: 'auto' }}
        visible={loading}
        ariaLabel="grid-loading"
        secondaryColor="#b326a6"
      />
    </div>
  );
};

export default Loader;
