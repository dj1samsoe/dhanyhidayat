import Skeleton from 'react-loading-skeleton';

import Card from '../elements/Card';
import SkeletonLoader from '../elements/SkeletonLoader';

const BlogCardSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className="min-w-[326px]">
        <Skeleton height={398} containerClassName="flex" className="!rounded-xl" />
      </Card>
    </SkeletonLoader>
  );
};

export default BlogCardSkeleton;
