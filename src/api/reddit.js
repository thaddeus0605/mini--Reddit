export const API_URL = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_URL}/r/${subreddit}.json`)
    const json = await response.json();
    
    return json.data.children.map((post) => post.data)
    
};

export const getSubredddits = async () => {
    const response = await fetch(`${API_URL}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
}; 

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_URL}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
}