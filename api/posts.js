import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI(
    {
        url: "http://localhost:2368",
        key: "32c976569d48accf8e39145530",
        version: "v3"
    }
)

export async function getPosts() 
{
    return await api.posts
    .browse({
        limit: "all",
        include: "tags,authors"
    })
    .catch(err => {
        console.error(err);
    });
}

export async function getSinglePost(postSlug) 
{
    return await api.posts
    .read({
        slug: postSlug,
    })
    .catch(err => {
        console.error(err);
    });
}

export async function getPage(pageSlug) 
{
    return await api.pages
    .read({
        slug: pageSlug,
    })
    .catch(err => {
        console.error(err);
    });
}