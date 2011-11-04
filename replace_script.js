var linkPatterns =
[
    /^(?:http(?:s)?:\/\/(?:\w+\.)*google\.\w{2,3})?\/url\?(?:.+&)?url=([^&]*)(?:&|$)/,
    /^(?:http(?:s)?:\/\/(?:\w+\.)*google\.\w{2,3})?\/url\?(?:.+&)?q=([^&]*)(?:&|$)/
];
var strippedEvents = [ "onclick", "onmousedown", "onmouseup", "onkeypress", "onkeydown", "onkeyup" ];

function processNode(node)
{
    if (node.nodeType != 1 || node.hasAttribute("linkChecked"))
        return;

    if (node.tagName.toLowerCase() == "a")
        processLink(node);

    for (i=0;i<node.getElementsByTagName("a").length;i++) {
    	processLink(node.getElementsByTagName("a")[i]);
    }

    node.setAttribute("linkChecked", "yes");
}

function processLink(node)
{
    var url = node.href, cleanUrl = null;

    var matches;
    for (var i in linkPatterns)
        if (matches = linkPatterns[i].exec(url))
            break;

    if (matches)
    {
        cleanUrl = decodeURIComponent(matches[1]);
        node.href = cleanUrl;
    }
    else if (!/\s(rwt|clk)\s*\(/.test(node.onmousedown))
        return;

    for (var i in strippedEvents)
        node[strippedEvents[i]] = null;
}

function deploy()
{
    document.addEventListener("DOMNodeInserted", function(e)
    {
        processNode(e.target);
    }, false);

    processNode(document.body);
}

deploy();