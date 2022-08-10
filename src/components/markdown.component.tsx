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
        h1: ({ node, ...rest }) => <Heading as="h1" size="2xl" borderBottomWidth="1px" pb="5" {...rest} />,
        h2: ({ node, ...rest }) => <Heading as="h2" size="xl" {...rest} />,
        h3: ({ node, ...rest }) => <Heading as="h3" size="lg" {...rest} />,
        h4: ({ node, ...rest }) => <Heading as="h4" size="md" {...rest} />,
        h5: ({ node, ...rest }) => <Heading as="h5" size="sm" {...rest} />,
        h6: ({ node, ...rest }) => <Heading as="h6" size="xs" {...rest} />,
        p: ({ node, ...rest }) => <Text w="100%" {...rest} />,
        a: ({ node, ...rest }) => <Link color="blue.500" {...rest} />,
        ul: ({ node, ...rest }) => <UnorderedList {...rest} />,
        ol: ({ node, ...rest }) => <OrderedList {...rest} />,
        hr: ({ node, ...rest }) => <Divider {...rest} />,
        img: ({ node, ...rest }) => <Image mx="auto" {...rest} />
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
