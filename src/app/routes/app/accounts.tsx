import { Heading } from '@/components/ui/heading';
import { Row } from '@/components/ui/row';

export const Accounts = () => {
  return (
    <>
      <Heading type="h1" title="Update your account" />
      <Row>
        <Heading type="h3" title="Update user data" />
        <p>Update user data form</p>
      </Row>
      <Row>
        <Heading type="h3" title="Update password" />
        <p>Update user password form</p>
      </Row>
    </>
  );
};
