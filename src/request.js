/**
 * Send data as a JSON in a post request to the given URL.
 */
function postJSON(url, data, callback)
{
    return jQuery.ajax({
        'type': 'POST',
        'url': url,
        'contentType': 'application/json',
        'data': JSON.stringify(data),
        'dataType': 'json',
        'success': callback
    });
};

