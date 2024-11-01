import '../styles/components/UsersStatsCard.scss';

type NameType =
  | 'Users'
  | 'Active Users'
  | 'Users With Savings'
  | 'Users With Loans';

interface props {
  name: NameType;
  icon: string;
  stat: string;
}

const UsersStatsCard = ({ name, icon, stat }: props) => {
  return (
    <div className="statsCard">
      <div className="statsCard__inner">
        <img src={icon} alt="" className="statsCard__inner__icon" />
        <p className="statsCard__inner__name">{name}</p>
        <p className="statsCard__inner__digit">{stat}</p>
      </div>
    </div>
  );
};

export default UsersStatsCard;
