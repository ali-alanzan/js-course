/**
 * var obj = {
 *  key_1: 'value',
 *  key_2: 'value'
 * }
 * 
 * json format
 * var obj = {
 *  "key_1": "value",
 *  "key_2": "value",
 *  "key_3": false,
 *  "key_4": null,
 *  "key_5": 123
 * }
 */

function addPosts(posts, start = 0, end = 3) {
    for( var i = start; i < end; i++ ) {
        var post = posts[i];
        
        var _elementPost = document.createElement('div');
        var _elementPostTitle = document.createElement('h4');
        var _elementPostImage = document.createElement('img');
        var _elementPostViews = document.createElement('small');
        var _elementPostDescription = document.createElement('p');

        _elementPostDescription.innerText = post.post_description;
        _elementPostViews.innerText = 'Views: ' + post.post_views;
        _elementPostImage.src = post.post_image;
        _elementPostTitle.innerText = post.post_title;


        _elementPost.append(_elementPostTitle);
        _elementPost.append(_elementPostImage);
        _elementPost.append(_elementPostViews);
        _elementPost.append(_elementPostDescription);

        document.getElementById('container').append(_elementPost);

    }
}