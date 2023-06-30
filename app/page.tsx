import type { Link } from "@prisma/client";
import { gql } from "@apollo/client";
import AwesomeLink from "./components/AwesomeLinks";
import { getClient } from "@/lib/apollo-wrapper";
import {
  useQuery,
  useSuspenseQuery,
} from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query allLinksQuery($first: Int, $after: ID) {
    links(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          category
          description
          id
          imageUrl
          title
          url
        }
      }
    }
  }
`;

export default async function Home() {
  // const { data, loading, error, fetchMore } = useQuery(query);

  const client = getClient();
  const { data, loading, error } = await client.query({
    query,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { endCursor, hasNextPage } = data.links.pageInfo;

  return (
    <main>
      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map(({ node }: { node: Link }) => (
            <AwesomeLink
              key={node.id}
              title={node.title}
              category={node.category}
              url={node.url}
              id={node.id}
              description={node.description}
              imageUrl={node.imageUrl}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
