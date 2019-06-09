/* 主体内容生成函数 */
function generateNav(nav_config_path, nav_name) {


    /* 生成导航栏 */
    var nav_content = "<a class=\"nav-link\" href=\"#" + nav_name + "\">" + nav_name + "</a>";
    $("#nav").append(nav_content);
    $("#fly-item").append(nav_content);


    /* 读取一个 json 文件，读取成功后并执行函数。生成一个个大的板块。 */
    $.getJSON(nav_config_path, function (json) {

        // 生成板块的容器。里面放 board-title 和 board-content。
        var board_container = "<div id=\"" + nav_name + "\" class=\"board d-flex flex-column p-3\"></div>";
        $("#body-right-container").append(board_container);

        // 生成 board-title 和 board-content（里面放 item）。
        var board = "<div class=\"board-title\"><a name=\"" + nav_name + "\">🌻 " + nav_name + "</a></div> \
                     <div class=\"board-content d-flex flex-row flex-wrap\">";
        $("#" + nav_name).append(board);

        // 遍历一个 json 文件内容。(将一个数组 block_item 中的每个成员（一个小盒子）放进 board-content)。
        // 使用 API 获取网站图标 https://ico.kucat.cn/get.php?url= ，加载不出来显示默认图标。
        $.each(json.block_item, function (i, item) {
            var title_temp = item.title;
            var web_temp = item.web;
            var description_temp = item.description;
            var item_box = "<a class=\"item d-flex flex-column\" href=\"" + web_temp + "\" target=\"_blank\"> \
                                <div class=\"intro d-flex flex-row\"> \
                                    <img src=\"https://ico.kucat.cn/get.php?url=" + web_temp + "\" onerror=\"{this.src=\'img/icon_error.png\'}\"> \
                                    <p>" + title_temp + "</p> \
                                </div> \
                                <p class=\"des\">“ " + description_temp + " ”</p> \
                            </a>";
            $("#" + nav_name + " .board-content").append(item_box);
        })

    });


}


/* 补充：每个大的板块的 HTML 原始结构。由 generateNav(nav_config_path, nav_name) 函数生成的 HTML 代码。 */
/*
<!--第 n 个大的版面。在其中放一个个 item-->

<div id="nav_name" class="board d-flex flex-column p-3">
    <div class="board-title"><a name="nav_name">🌻 nav_name</a></div>
    <div class="board-content d-flex flex-row flex-wrap">

        <!--每个 item-->
        <a class="item d-flex flex-column" href="web_temp" target="_blank">
            <div class="intro d-flex flex-row">
                <img src="https://ico.kucat.cn/get.php?url=web_temp" onerror="{this.src='img/error.jpg'}">
                <p>title_temp</p>
            </div>
            <p class="des">“ description_temp ”</p>
        </a>
        <!--item 结束-->

    </div>
</div>

<!--第 n 个大的版面结束-->
*/