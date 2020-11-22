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
export async function getPosts(limit) 
{
    let limitPage = (limit && limit > 1)? limit : "all" 
    return await api.posts.browse({
        limit: limitPage,
        include: "tags,authors"
    })
    .catch(err => {
        console.error(err);
    });
}

/** Get Post Detail */
export async function getPostDetail(postSlug) 
{
    let includeAuthorTag = ['authors', 'tags']
    return await api.posts.read({
        slug: postSlug,
        include: includeAuthorTag,
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
export async function getTags(tagName, limit) 
{
    let limitPage = (limit && limit > 1)? limit : "all"
    let includeAuthor = (tagName == "people")? "authors" : "none"

    return await api.posts.browse(
        {
            //include: "tags,authors",
            limit: limitPage,
            include: includeAuthor,
            filter: `tag: ${tagName}`,
            order: "published_at DESC"
        }
    )
    .catch(err => {
        console.error(err);
    });
}

export async function getTagsMain(tagNameArr, limit) 
{
    let limitPage = (limit && limit > 1)? limit : "all"
    let includeAuthorTag = ['authors', 'tags']

    return await api.posts.browse(
        {
            //include: "tags,authors",
            limit: limitPage,
            include: includeAuthorTag,
            filter: `tag: [${tagNameArr}]`,
            order: "published_at DESC"
        }
    )
    // .then((posts) => {
    //     // Do any
    //     // posts.forEach((post) => {
    //     //     console.log(post.title);
    //     // });
    // })
    .catch(err => {
        console.error(err);
    });
}
