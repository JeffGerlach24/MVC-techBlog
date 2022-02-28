<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MVC Tech Blog</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
    <div class="wrapper">
        <header>
            <h1>
                <a href="/">Home</a>
            </h1>
            <nav>
                {{#if loggedIn}}
                <a href="/dashboard">Dashboard</a>
                <button id="logout" class="btn-no-style logout">Logout</button>
                {{else}}
                <a href="/login">Login</a>
                {{/if}}
            </nav>
        </header>
        <main>
        {{{ body }}}
    </main>
    <footer>
        Thanks for stopping by this MVC TECH BLOG!
    </footer>
    </div>

    {{#if loggedIn}}
    <script src="/javascript/logout.js"></script>
    {{/if}}
</body>

</html>