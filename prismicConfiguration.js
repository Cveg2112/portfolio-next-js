const Prismic = require('@prismicio/client');

// -- Prismic Repo Name
export const repoName = 'conorportfolio'
// -- Prismic master ref
export const ref = 'YdOC1xIAAC4ApMbw';
// -- Prismic API endpoint
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

const options = {
  ref: ref
}

export const Client = Prismic.client(apiEndpoint, options)