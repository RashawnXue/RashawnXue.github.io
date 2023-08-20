function obcboPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/wrack-girl.jpg',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/courses-recommend/computer-girl.jpg',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/New-Start/sand-star.jpg',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/power1.png',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/library-girl.png',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/elf-cat.png',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/cat-ear-girl.jpg',
            'https://rashawn-blog.oss-cn-shanghai.aliyuncs.com/blog/global/white-hair-girl1.png'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}