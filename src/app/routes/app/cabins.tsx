import { useEffect } from 'react';

import { Heading } from '@/components/ui/heading';
import { Row } from '@/components/ui/row';
import { getCabins } from '@/services/api-cabins';

export const Cabins = () => {
  useEffect(function () {
    getCabins().then(data => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading type="h1" title="All cabins" />
      <p>TEST</p>
      <img
        alt="cabin-1"
        src="https://suhwxfapnihtjdetmffz.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg"
      />
    </Row>
  );
};
