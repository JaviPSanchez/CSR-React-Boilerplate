import { Heading } from '@/components/ui/heading';
import { Row } from '@/components/ui/row';

export const Accounts = () => {
  return (
    <>
      <Heading type="h1">Update your account</Heading>
      <Row>
        <Heading type="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>
      <Row>
        <Heading type="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
};
