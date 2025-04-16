import { Typography } from '@alfalab/core-components/typography';
import heart from '../assets/heart.png';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={heart} width={280} height={280} className={thxSt.rocket} />
        <Typography.TitleResponsive style={{ margin: '24px 0 12px' }} font="system" tag="h1" view="medium" weight="semibold">
          Сервис ещё в работе
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы выбираем лучший подход, чтобы вам точно понравилось. С нетерпением ждём, когда всё заработает, чтобы вам
          показать.
        </Typography.Text>
      </div>
    </>
  );
};
