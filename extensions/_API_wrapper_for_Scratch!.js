(function (ext) {
    ext._shutdown = function () {};

    ext._getStatus = function () {
        return {
            status: 2,
            msg: 'Installed and Ready'
        };
    };

    var descriptor = {
        blocks: [

            ['', 'Display Scratch Alert %s', 'notify', 'Your message here!!!'],
            ['', 'Follow %s', 'follow', 'thisisntme'],
            ['', 'Love project with id %n', 'love', '57277422'],
            ['', 'favorite project id %n', 'favorite', '105743123/'],
            ['R', 'messages', 'messages', ''],
            ['', 'shutdown with message %s', 'shutdown', 'This project has been shut down.'],
            ['R', "%s 's followers (veryveryverybroken(notimplementedyet))", 'followers', 'thisisntme'],


        ]
    };

    ext.notify = function (text) {
        ScratchExtensions.notify(text);
    };
    ext.love = function (projectID) {
        $.ajax({
            type: "PUT",
            url: "https://scratch.mit.edu/site-api/users/lovers/" + projectID + "/add/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username,
            data: {
                usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username
            }
        })
    }
    ext.favorite = function (projectID) {
        $.ajax({
            type: "PUT",
            url: "https://scratch.mit.edu/site-api/users/favoriters/" + projectID + "/add/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username,
            data: {
                usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username
            }
        })
    }
    ext.follow = function (user) {
        $.ajax({
            type: "PUT",
            url: "https://scratch.mit.edu/site-api/users/followers/" + user + "/add/",
            data: {
                usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username
            }
        })

    }

    ext.messages = function (callback) {
        $.ajax({
            url: 'https://scratch.mit.edu/messages/ajax/get-message-count/',
            dataType: 'json',
            success: function (responseText) {
                messages = responseText['msg_count'];
                callback(messages);
            }
        })
    }

    ext.followers = function (inUser, callback) {

        var page = 1;
        $.get(location.protocol + "//scratch.mit.edu/users/" + inUser + "/followers/?page=1", loaded);
        $out = "test?"

        function loaded(data) {
            var $dom = $(data);
            var $users = $dom.find('span.title').children();
            for (var i = 0; i < $users.length; i++) {
                var user = $users[i].text.trim();
                $out = $out + user;
            }

            page++;
            $.get(location.protocol + "//scratch.mit.edu/users/" + inUser + "/followers/?page=" + page, loaded).fail(
                callback($users)

            );

        };

    }
    ext.shutdown = function (message) {
        document.write(message);
    }
    ScratchExtensions.register("API wrapper for Scratch", descriptor, ext);
})({});