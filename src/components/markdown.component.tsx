/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Divider,
  Heading,
  Image,
  Link,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList
} from '@chakra-ui/react';

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <Heading {...props} w="100%" as="h1" size="2xl" borderBottomWidth="1px" pb="5" />,
        h2: ({ node, ...props }) => <Heading {...props} w="100%" as="h2" size="xl" />,
        h3: ({ node, ...props }) => <Heading {...props} w="100%" as="h3" size="lg" />,
        h4: ({ node, ...props }) => <Heading {...props} w="100%" as="h4" size="md" />,
        h5: ({ node, ...props }) => <Heading {...props} w="100%" as="h5" size="sm" />,
        h6: ({ node, ...props }) => <Heading {...props} w="100%" as="h6" size="xs" />,
        p: ({ node, ...props }) => <Text {...props} w="100%" />,
        a: ({ node, ...props }) => <Link {...props} w="100%" color="blue.500" />,
        ul: ({ node, ordered, ...props }) => <UnorderedList {...props} w="100%" pl="24px" />,
        ol: ({ node, ordered, ...props }) => <OrderedList {...props} w="100%" pl="24px" />,
        hr: ({ node, ...props }) => (
          <Divider
            {...props}
            w="100%"
            h="8px"
            borderRadius="full"
            boxShadow="-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF"
          />
        ),
        img: ({ node, ...props }) => <Image {...props} mx="auto" />,
        table: ({ node, ...props }) => (
          <TableContainer
            w="100%"
            whiteSpace={{ base: 'nowrap', md: 'break-spaces' }}
            p="8px"
            borderRadius="16px"
            boxShadow="-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF"
          >
            <Table {...props} w="100%" variant="striped" />
          </TableContainer>
        ),
        thead: ({ node, ...props }) => <Thead {...props} />,
        tbody: ({ node, ...props }) => <Tbody {...props} />,
        tr: ({ node, isHeader, ...props }) => <Tr {...props} />,
        td: ({ children, style }) => <Td style={style}>{children}</Td>,
        th: ({ children, style }) => <Th style={style}>{children}</Th>
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
