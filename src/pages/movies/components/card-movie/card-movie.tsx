import { Card, Group, Text } from "@mantine/core";
import Image from "next/image";

export const CardMovie = () => {
  return (
    <Card>
      <Card.Section>
        <Image src={""} alt="poster" />
        <Group>
          <Text>The Green Mile</Text>
          <Text>1999</Text>
          <Text>9.3 (2.9M)</Text>
          <Text>Drama, Crime, Fantasy</Text>
        </Group>
      </Card.Section>
      <Card.Section>star</Card.Section>
    </Card>
  );
};
