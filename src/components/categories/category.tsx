import { Box, Text } from "components/utils/thems";
import React from "react";
import { ICategory } from "types";

type CategoryProps = {
  category: ICategory;
};
const Category = ({ category }: CategoryProps) => {
  return (
    <Box bg="gray300" p="4" borderRadius="rounded-5xl">
      <Box flexDirection="row">
        <Text variant="textBase" fontWeight="600">
          {category.icon.symbol}
        </Text>
        <Text variant="textBase" fontWeight="600">
          {category.name}
        </Text>
      </Box>
    </Box>
  );
};

export default Category;
