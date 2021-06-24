import React from 'react';
import './styles.scss';
import Card from '../../components/ItemCard';
import Header from '../../components/Header';
import Detail from '../../components/Detail';

const Back: React.FC = ({}) => {
  const [data, setData] = React.useState<IProductList>();
  const [contentStatus, setContentStatus] = React.useState<number>(0);
  const [info, setInfo] = React.useState<IResult[]>();

  React.useEffect(() => {
    console.log(data);
    console.log(contentStatus);
    if (data?.results) {
      setInfo(data.results.slice(0, 4));
    }
  }, [data]);

  return (
    <>
      <Header setData={setData} setContentStatus={setContentStatus} />
      <div className="back">
        {info && (
          <div className="Categories">
            <a href="">32GB</a>
          </div>
        )}

        <div className="Content">
          {info && (
            <>
              {info.map((value, key) => (
                <Card data={value} key={key} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Back;
