(function () {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
            {
                // Internet Explorer 11
                string: navigator.userAgent,
                subString: "Trident",
                identity: "Explorer11"
            },
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS: [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };

    BrowserDetect.init();

    function isSupportedBrowser() {
        if (BrowserDetect.browser === 'Chrome') {
            return true;
        }

        if (BrowserDetect.browser === 'Explorer11') {
            return false;
        }

        if (BrowserDetect.browser === 'Safari') {
            return false;
        }

        if (BrowserDetect.browser === 'Firefox' && BrowserDetect.version >= 17) {
            return true;
        }

        if (BrowserDetect.browser === 'Explorer' && BrowserDetect.version >= 10) {
            return false;
        }

        return false;
    }


    function onClickMe(evt) {
        document.querySelector('.checkBrowser')
            .setAttribute('style', 'display:none');
        document.querySelector('.fade')
            .setAttribute('style', 'display:none');


    }

    function ensureTargetBrowser($errorMessageContainer) {
        if (!isSupportedBrowser()) {
            const errorMessage = document.createElement('span');
            errorMessage.innerHTML = 'This application was designed to be used in Google Chrome.\nRunning ...' +
                'the application in other browsers might result in performance issues or other misbehavior.';

            const clickMe = document.createElement('span');
            clickMe.classList.add('clickMe');
            clickMe.addEventListener('click', onClickMe);
            $errorMessageContainer.appendChild(errorMessage);
            $errorMessageContainer.appendChild(clickMe);
            const icon = document.createElement('i')
            icon.classList.add('fa')
            icon.classList.add('fa-arrow-circle-right')
            icon.classList.add('fa-3x')
            clickMe.appendChild(icon)
            clickMe.setAttribute('title', 'Click Here to Continue')
            document.querySelector('.fade')
                .setAttribute('style', 'display:block');

            return false;
        }
        return true;
    }

    function getQueryStringParameter(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function explodeTreeItems(itemsToExplodeDict, allTreeItems) {
        var selection = [];

        _.each(allTreeItems, function (item) { // For each tree item of current level

            var itemIsSelected = itemsToExplodeDict === null || itemsToExplodeDict[item.id];	// item is selected if its own ID is included or a parent is selected

            if (item.items !== undefined && item.items !== null && item.items.length > 0) { // Check if item has child nodes
                // If item is selected, pass null to child nodes to indicate that parent was selected
                selection = _.union(selection, explodeTreeItems((itemIsSelected ? null : itemsToExplodeDict), item.items));
            } else if (itemIsSelected) {
                selection.push(item.id);
            }
        });

        return selection;
    }

    window.DemoUtils = {
        isSupported: isSupportedBrowser,
        ensureTargetBrowser: ensureTargetBrowser,
        getQueryStringParameter: getQueryStringParameter,
        explodeTreeItems: explodeTreeItems
    };

})();
