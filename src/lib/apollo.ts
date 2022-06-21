import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o85fz2162001xi2743fo0v/master',
    cache: new InMemoryCache()
})