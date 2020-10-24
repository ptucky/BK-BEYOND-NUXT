import GhostContentAPI from "@tryghost/content-api";
/**
 * Doc how to use Content API Client Library
 * https://ghost.org/docs/api/v3/javascript/content/
 * https://ghost.org/docs/api/v3/content/#api-clients
*/

/** Create API instance with site credentials */
const api = new GhostContentAPI(
    {
        url: "http://localhost:2368",
        key: "32c976569d48accf8e39145530",
        version: "v3"
    }
)

/** Get Post */
export async function getPosts() 
{
    return await api.posts.browse({
        limit: "all",
        include: "tags,authors"
    })
    .catch(err => {
        console.error(err);
    });
}

/** Get Post Detail */
export async function getPostDetail(postSlug) 
{
    return await api.posts.read({
        slug: postSlug,
    })
    .catch(err => {
        console.error(err);
    });
}

/** Pages */
export async function getPage(pageSlug) 
{
    return await api.pages.read({
        slug: pageSlug,
    })
    .catch(err => {
        console.error(err);
    });
}


/** */
export async function getTags(tagName) 
{
    return await api.posts.browse(
        {
            limit: "all",
            filter: "tag:" + `${tagName}`
        }
    )
    .catch(err => {
        console.error(err);
    });
}

