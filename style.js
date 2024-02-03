fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
            var content = data.content;
            var author = data.author;
            document.querySelector(".quote").innerHTML = content;
            document.querySelector(".author").innerHTML = "-" + author;
    });
