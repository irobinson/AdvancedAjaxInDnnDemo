Number.prototype.formatMoney = function (c, d, t) {
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

$(document).ready(function () {

    $('#helloButton').click(function () {
        var helloText = $('#helloText').val();
        var proxy = new ServiceProxy("/DesktopModules/AdvancedAjaxInDnnDemo/WebService1.asmx/");
        proxy.invoke("Hello", { to: helloText }, function (result) { alert(result); });
    });

    $('#helloButtonWCF').click(function () {
        var helloText = $('#helloTextWCF').val();
        var proxy = new ServiceProxy("/DesktopModules/AdvancedAjaxInDnnDemo/Service1.svc/");
        proxy.invoke("Hello", { to: helloText }, function (result) { alert(result); });
    });

    $('#income-add-button').click(function () {
        var category = $('#IncomeCategoryList :selected').text();
        var categoryId = $('#IncomeCategoryList :selected').val();
        var amount = parseFloat($('#income-amount').val());
        $('#income-list').append('<li>' + category + ': ' + '$' + amount.formatMoney() + '<a href=\'#\' class=\'income-remove remove-item\'>x</a>' + '</li>').show();
        $('#income-list li:last').data('amount', amount).data('categoryId', categoryId);

        var $total = $('#income-total');
        var currentTotal = parseFloat($total.text().replace(',', ''));
        var newTotal = (currentTotal ? currentTotal : 0) + amount;
        $total.text(parseFloat(newTotal).formatMoney());
        $total.data('total', newTotal);
    });

    $('.income-remove').live('click', function (event) {
        event.preventDefault();
        var $parent = $(this).parent();
        var amount = $parent.data('amount');
        var $total = $('#income-total');
        var currentTotal = parseFloat($total.data('total'));
        var newTotal = (currentTotal ? currentTotal : 0) - amount;
        $total.text(parseFloat(newTotal).formatMoney());
        $total.data('total', newTotal);
        $parent.remove();
    });

    $('#submit-items').click(function (e) {
        e.preventDefault();
        if ($('#Form').validate().form()) {
            var items = new Array();
            $('#income-list li').each(function (intIndex) {
                var $item = $(this);
                var incomeItem = {
                    CategoryId: $item.data('categoryId'),
                    Amount: $item.data('amount')
                }
                items.push(incomeItem);
            });

            var proxy = new ServiceProxy("/DesktopModules/AdvancedAjaxInDnnDemo/WebService1.asmx/");
            proxy.invoke("Save", { userId: DemoViewContext.UserId, incomeItems: items }, function (result) { alert(result); });
        }
    });
});