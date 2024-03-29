import { Input, Form, Button } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="search" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
