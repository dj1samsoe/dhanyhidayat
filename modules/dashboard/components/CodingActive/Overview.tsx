import { formatDate } from '@/common/helpers';

import OverviewItem from './OverviewItem';

interface OverviewProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}

const Overview = () => {
  return (
    <div className="mb-1 grid md:grid-cols-2 gap-3 py-2">
      <OverviewItem label="Start Date" value={'September 05, 2023'} />
      <OverviewItem label="End Date" value={'September 11, 2023'} />
      <OverviewItem label="Daily Coding Average" value={'3 hrs 54 mins'} />
      <OverviewItem label="This Week Coding Time" value={'27 hrs 21 mins'} />
      <OverviewItem label="Best Day Coding Time" value={'September 11, 2023 (6 hrs 17mins)'} />
      <OverviewItem label="All Time Since Today" value={'27 hrs 21 mins'} />
    </div>
  );
};

export default Overview;
