import {createPubSub} from '@graphql-yoga/subscription'
import {Cv} from "./data/fakeDatabase";

export type PubSubChannels = {
    CvCreated: [{ CvCreated: Cv }]
    CvUpdated: [{ CvUpdated: Cv }]
    DeletedCv: [{ CvDeleted: Cv }]
}

export const pubSub = createPubSub<PubSubChannels>()

