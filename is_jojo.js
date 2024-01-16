var regex = /^(jo\w+\sjo\w+)|(jo\w+\s\w+jo)|(gio\w+\sgio\w+)$/gi

function isJojo(name) {
  return regex.test(name);
}

// ^ - start of the line
// $ - end of the line
// | - to make "or"
// \w - any letter
// + - repeated 1 or more times
// \w+ - any letter that is repeated 1 or more times
// \s - space
// jo\w+\sjo\w+ - ("jo" or "Jo" or "jO") + (any letters) + (space) + ("jo" or "Jo" or "jO") + (any letters)
// jo\w+\s\w+jo - ("jo" or "Jo" or "jO") + (any letters) + (space) + (any letters) + ("jo" or "Jo" or "jO")
// gio\w+\sgio\w+ - ("gio" or "Gio" or ...) + (any letters) + (space) + ("gio" or "Gio" or ...) + (any letters)
// /gi - flags for global and case-independent search
