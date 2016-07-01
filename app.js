
<script src="jQuery-sidebar.min.js"></script>
...
<div class="sidebar left">Hello World</div>
<div class="sidebar right">I am on right!</div>
<div class="sidebar top">I am on top!</div>
<div class="sidebar bottom">I am on bottom!</div>
...
<script>
    // Sidebar on left (default)
    $(".sidebar.left").sidebar().trigger("sidebar:open");

    // Sidebar on right side
    $(".sidebar.right").sidebar({side: "right"});

    // Sidebar on top side
    $(".sidebar.top").sidebar({side: "top"});

    // Sidebar on bottom side
    $(".sidebar.bottom").sidebar({side: "bottom"});
</script>