import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-04-20","projectId":"avd06zyn","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
