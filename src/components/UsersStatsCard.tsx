import '../styles/components/UsersStatsCard.scss';

type NameType =
  | 'Users'
  | 'Active Users'
  | 'Users With Savings'
  | 'Users With Loans';

interface Props {
  name: NameType;
  icon: string;
  stat: number | undefined;
}

const UsersStatsCard = ({ name, icon, stat }: Props) => {
  const formattedStat = stat ? new Intl.NumberFormat().format(stat) : '0';

  return (
    <div className="statsCard" data-testid="users-stats-card">
      <div className="statsCard__inner">
        <img src={icon} alt="" className="statsCard__inner__icon" />
        <p className="statsCard__inner__name">{name}</p>
        <p className="statsCard__inner__digit">{formattedStat}</p>
      </div>
    </div>
  );
};

export default UsersStatsCard;
