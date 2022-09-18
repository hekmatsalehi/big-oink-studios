import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview = true, includeDrafts, excludeInvalid }:any) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  };

  const endpoint = preview
  ? `https://graphql.datocms.com/preview`
  : `https://graphql.datocms.com/`;
  
  if (includeDrafts) {
      //@ts-ignore
      headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
      //@ts-ignore
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient(endpoint, { headers });
  return client.request(query, variables);
}