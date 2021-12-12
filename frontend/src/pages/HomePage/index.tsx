import Title from 'antd/lib/typography/Title';
import PageLayout from 'src/components/PageLayout';
import { useChainList } from 'src/helpers/wallet';
import HomePageStyle from './style';

const HomePage: React.FC = () => {
  const chainList = useChainList();
  return (
    <HomePageStyle>
      <PageLayout>
        <Title style={{ color: 'white' }}>NIFTY BRIDGE</Title>
        <Title level={2} style={{ color: 'white' }}>
          Cross Chain NFT Bridge For EVM Compatible Chains
        </Title>
        <div className='image-container'>
          {chainList.map((chain) => (
            <img src={`/${chain.value}.svg`} />
          ))}
        </div>
        <span>
          <div className='wrappin'>
            <div className='wrappin-dat'></div>
            <div className='wrappin-dat'></div>
          </div>
        </span>
      </PageLayout>
    </HomePageStyle>
  );
};

export default HomePage;
