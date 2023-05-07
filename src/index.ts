import {createYoga} from 'graphql-yoga'
import {createServer} from 'http'
import {makeExecutableSchema} from '@graphql-tools/schema'
import {typeDefinitions} from "./Schema/schema";
import {createContext} from './context'
import {Query} from "./resolvers/query";
import {Mutation} from "./resolvers/mutation";
import {Subscription} from "./resolvers/subscription";
import {createPubSub} from "@graphql-yoga/subscription";




function main() {

    const schema = makeExecutableSchema({
        resolvers: [{Query, Mutation,Subscription
            }],
        typeDefs: [typeDefinitions]
    })
    const yoga = createYoga({schema, context: createContext})
    const server = createServer(yoga)
    server.listen(4000, () => {
        console.info('Server is running on http://localhost:4000/graphql')
    })
}

main()