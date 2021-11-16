import { Flex, Link, Text } from '@chakra-ui/layout';

const Header = () => {
  return (
    <Flex as="header" p={6} bg="teal.300" color="white">
      <Link to="/">
        <Text as="h1" fontSize="3xl">
          もぺブログ
        </Text>
      </Link>
    </Flex>
  );
};

export default Header;
