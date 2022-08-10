/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Divider, Heading, Image, Link, OrderedList, Text, UnorderedList } from '@chakra-ui/react';

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
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
        hr: ({ node, ...props }) => <Divider {...props} w="100%" />,
        img: ({ node, ...props }) => <Image {...props} mx="auto" />
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
